import Vue from 'vue'
import Vuex from 'vuex'

import productsModules from './products'
import cartModules from './cart'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    width: window.innerWidth,
    cart: {
      carts: []
    }
  },
  actions: {
    updateLoading (context, payload) {
      context.commit('LOADING', payload)
    },
    watchResize (context) {
      window.onresize = () => {
        context.commit('WIDTH', window.innerWidth)
      }
    }

  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    WIDTH (state, payload) {
      state.width = payload
    }
  },
  getters: {
    width (state) {
      return state.width
    }
  },
  modules: {
    productsModules,
    cartModules
  }
})
