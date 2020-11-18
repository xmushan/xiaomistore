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
        name: 'name',
        component: ()=> import('../pages/home')
      },
      {
        path: '/productDetail/:productId',
        name: 'productDetail',
        component: () => import('../pages/productDetail')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/user/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/user/register')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/user/cart')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name == 'cart' && !window.sessionStorage.getItem('userInfo')){
    return next('/login')
  } else {
    next();
  }
})
export default router
