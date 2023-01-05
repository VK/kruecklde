import { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import MQTT from '../views/MQTT.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      title: 'krueckl.de',
      metaTags: [
        {
          property: '???',
          content: '???'
        }
      ]
    }
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home control',
      metaTags: [
        {
          property: 'home',
        }
      ]
    }
  },

  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
  },
]

export default routes