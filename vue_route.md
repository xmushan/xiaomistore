## 路由
```
// 配置路由规则
    const routes = [
        {
            path: '/',
            component: () => import('../pages/index')
            //重定向
            redirect: '/indexChildren'
            // 子路由
            children: [
                {
                    path: '/indexChildren',
                    component: () => import('../pages/indexChildren')
                }
            ]
        },
        {
            ...
        }
    ]
    // 创建vue实例
    const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
    })
    // 创建和挂载根实例。
    const app = new Vue({
    router
    }).$mount('#app')

    export default router
```
### 路由导航守卫
```
    router.beforeEach((to, from, next) => {
        //to : 即将要进入的目标 路由对象
        //from: 当前导航正要离开的路由
        //next: 调用该方法后，才能进入下一个钩子函数（afterEach）
    })
```
1. 例
```
    router.beforeEach((to, from, next) => {
        //我在这里模仿了一个获取用户信息的方法
    let isLogin = window.sessionStorage.getItem('userInfo');
        if (isLogin) {
            //如果用户信息存在则往下执行。
            next()
        } else {
            //如果用户token不存在则跳转到login页面
            if (to.path === '/login') {
                next()
            } else {
                next('/login')
            }
        }
    })
```


