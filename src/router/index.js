import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import List from '../views/List.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/list',
        name: 'List',
        component: List
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
