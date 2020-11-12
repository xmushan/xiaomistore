import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index'),
    redirect:'/home',
    children: [
      {
        path: '/home',
        component: ()=> import('../pages/home')
      }
    ]
  },
  {
    path: '/login',
    naem: 'login',
    component: () => import('../pages/user/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/user/register')
  }
]

const router = new VueRouter({
  routes
})

export default router
