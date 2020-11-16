import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartCount: 0
  },
  getters: {},
  mutations: {
    changeCartCount(state,params) {
      state.cartCount = params
    }
  },
  actions: {}
})
