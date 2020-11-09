import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/Index')
  },
  {
    path: '/home',
    name: 'home',
    compoent: () => import('../pages/Home')
  }
]

const router = new VueRouter({
  routes
})

export default router
