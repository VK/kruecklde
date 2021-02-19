import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import store from "@/store";

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')


/**
 * change Vue theme depending on system settings
 */
if (window.matchMedia) {
  app.$vuetify.theme.dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * add listener, to change theme during runtime
 */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  app.$vuetify.theme.dark = e.matches;
});