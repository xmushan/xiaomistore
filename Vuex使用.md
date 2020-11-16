### Vuex
1. **state**
> State就像一个全局的数据仓，里面存放着数据源
```
// Vuex store
export default new Vuex.Store({
  state: {
    cartCount: '这是购物车数量'
  }
})
```
> state是一个数据存储的仓库，所有的数据源都会存放在这里，就类似组件中的data。

> 可以在任意组件中通过this.$store.state访问到

2. **getter**
> Getter 用来在获取数据源的时候，对数据源进行一定的加工后再返回。

```
export default new Vuex.Store({
  state: {
    cartCount: '这是购物车数量'
  },
  getter: {
      getCartCount(state) {
        return '这是加工过的数量' + state.cartCount  //模拟加工数据，并将加工后的数据返回
      }
  }
})
```
> getter主要用于在获取数据时，对数据进行加工后返回

> 可以在Store中对数据做统一加工处理，利于日后的项目维护。

> 可以在任意组件中通过this.$store.getter. 访问 （**getter中的不是方法 不需要加（）**）

3. **mutations**
> 对数据仓中的数据，进行修改。Mutation只支持同步方法
```
export default new Vuex.Store({
  state: {
    cartCount: '这是购物车数量'
  },
  getter: {
      getCartCount(state) {
        return '这是加工过的数量' + state.cartCount  //模拟加工数据，并将加工后的数据返回
      }
  },
  mutations: {
    changeCartCount(state,params) {
      state.cartCount = params
    }
  },
})
```
> 在StateVie.js中，我们通过this.store.commit()方法去调用mutations中的方法，它接收两个参数：
>> 1、第一个参数传递mutations中对应的方法名 2、第二个参数传递 params，即要传递的数据

>通过Mutation我们可以对数据仓中的数据进行修改，我们可以在组建中通过调用 **this.$store.commit()** 方法去调用对应的Mutation去修改数据。

>Mutation中只能执行同步的方法，如果需要执行异步方法，我们要使用接下来即将登场的Action。

4. **action**
> Action和Mutation类似，他们之处在于：1、Action 提交的是 mutation，而不是直接变更状态。2、Action 可以包含任意异步操作
```
export default new Vuex.Store({
  state: {
    cartCount: '这是购物车数量'
  },
  getter: {
      getCartCount(state) {
        return '这是加工过的数量' + state.cartCount  //模拟加工数据，并将加工后的数据返回
      }
  },
  mutations: {
    changeCartCount(state,params) {
      state.cartCount = params
    }
  },
  action: {
    AsyncCartCount(content,params){
      setTimeout( () => {
        context.commit('changeCartCount','action改变的值') // aciont提交的是 mutations 中的方法changeCartCount
      },2000)
    }
  }
})
```
> 与mutations不用的是 通过this.$store.dispatch()函数去调用action，
>> 该函数接收两个参数： 1、Store中Action对应的方法名 2、要传递的数据

> Action和Mutation类似，它只是能够处理异步的情况，最终通过commit()函数调用Mutation去修改数据

> 通过this.$store.dispatch()去调用Action的方法。
