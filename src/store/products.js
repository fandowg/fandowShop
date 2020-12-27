import Vue from 'vue'
// import '@/bus'
import axios from 'axios'
export default {
  strict: true,
  namespaced: true,
  state: {
    productsAll: [],
    categories: []
    // productReady: false,
  },
  actions: {

    getProductsAll (context) {
      context.commit('LOADING', true, { root: true })
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTSALL', response.data.products)
          context.commit('CATEGORIES', response.data.products)
          // context.commit('PRODUCTREADY', true);
        } else {
          Vue.prototype.$bus.$emit('message:push', '取得資料錯誤', 'text-danger')
        }
        context.commit('LOADING', false, { root: true })
      })
    }
  },
  mutations: {
    // PRODUCTREADY(state, payload) {
    //   state.productReady = payload;
    // },
    PRODUCTSALL (state, payload) {
      state.productsAll = payload
    },
    CATEGORIES (state, payload) {
      payload.forEach((item) => {
        if (state.categories.indexOf(item.category) === -1) { state.categories.push(item.category) }
      })
    }
  },
  getters: {
    // productReady(state) {
    //   return state.productReady;
    // },
    categories (state) {
      return state.categories
    },
    productsAll (state) {
      return state.productsAll
    }
  }
}
