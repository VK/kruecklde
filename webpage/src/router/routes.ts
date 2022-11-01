import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/impressum',
    name: 'Impressum',
    component: () => import(/* webpackChunkName: "impressum" */ '../views/Impressum.vue')
  },
]

export default routes