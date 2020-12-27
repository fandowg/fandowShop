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
      console.log('有動作')
      window.onresize = () => {
        // console.log(window);
        // console.log(Vue.prototype);
        // this.width = window.innerWidth;
        context.commit('WIDTH', window.innerWidth)
        // this.Height = window.innerHeight;
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
