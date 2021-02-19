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
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

export default routes