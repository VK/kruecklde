import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import store from "@/store";
import device from "vue-device-detector"
import "@fontsource/roboto";


function create_UUID() {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

const queryString = window.location.search;
if (queryString !== null) {
  try {
    let url = window.atob(queryString.replace("?", ""));
    let cfg = JSON.parse(url);
    cfg["clientID"] = create_UUID()

    localStorage.setItem("mqttcfg", JSON.stringify(cfg));


  } catch { }
}

  
Vue.use(device)
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