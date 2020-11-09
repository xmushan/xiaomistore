import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/Index'),
    redirect:'/home',
    children: [
      {
        path: '/home',
        component: ()=> import('../pages/Home')
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register')
  }
]

const router = new VueRouter({
  routes
})

export default router
