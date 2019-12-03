import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import ClassCenter from '../views/ClassCenter.vue'
import PracticeCenter from '../views/PracticeCenter.vue'
import NewsCenter from '../views/NewsCenter.vue'
import LiveCenter from '../views/LiveCenter.vue'
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
        path: '/classCenter',
        name: 'ClassCenter',
        component: ClassCenter
      },
      {
        path: '/practiceCenter',
        name: 'PracticeCenter',
        component: PracticeCenter
      },
      {
        path: '/newsCenter',
        name: 'NewsCenter',
        component: NewsCenter
      },
      {
        path: '/liveCenter',
        name: 'LiveCenter',
        component: LiveCenter
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
      }
    ]
  },
  // 下面以后登录页面用 登录页面路由必须放在外面
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
