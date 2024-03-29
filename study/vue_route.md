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

### 路由动态参数
```
const routes = [
    {
        // 动态路径参数 以冒号开头
        path: '/demo/:id'
        component: () => import('../pages/demo)
    }
]
```
1. 路由传参方式
> params方式传递: params 相当于 post 请求，参数不在地址栏中显示
```
    this.$router.push({path:'/demo', params:{id: '123'}});

```
> query传递: uery 相当于 get 请求，页面跳转的时候可以在地址栏看到请求参数
```
   this.$router.push({path:'/demo', query:{id: '123'}});
```
> 一个路由中传递的参数通过 **this.$route.params** 访问

> this.$router 相当于一个全局的路由对象，包含路由相关的属性、对象 (如 history 对象) 和方法，在任何页面都可以通过 this.$router 调用其方法如 push() 、go() 、resolve() 等。

> this.$route 表示当前的路由对象。每一个路由都有一个 route 对象，它是一个局部的对象，可以获取当前路由对应的 name , params, path , query 等属性。

> 除了 $route.params 外，$route 对象还提供了其它有用的信息，
>>API参考： https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1, https://router.vuejs.org/zh/api/#routes

