import Vue from 'vue'
// import '@/bus'
import axios from 'axios'

// import {EventBus} from '@/bus'
export default {
  strict: true,
  namespaced: true,
  state: {
    cart: {
      carts: []
    }
  },
  actions: {
    getCart (context) {
      // console.log(Vue.$bus);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('CART', response.data.data)
          // console.log(response.data.data);
        } else {
          Vue.prototype.$bus.$emit('message:push', '取得資料錯誤', 'text-danger')
        }
        context.commit('LOADING', false, { root: true })
      })
    },
    deleteCart (context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true, { root: true })
      axios.delete(url).then((response) => {
        if (response.data.success) {
          Vue.prototype.$bus.$emit('message:push', response.data.message)
          context.dispatch('getCart')
        } else {
          Vue.prototype.$bus.$emit('message:push', '刪除失敗', 'text-danger')
        }
        context.commit('LOADING', false, { root: true })
      })
    },
    mixCart (context, mixCartInfo) {
      const { id, cart } = mixCartInfo
      const urlDelete = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const urlAddCart = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true, { root: true })
      axios.delete(urlDelete).then((response) => {
        axios.post(urlAddCart, { data: cart }).then((response) => {
          if (response.data.success) {
            Vue.prototype.$bus.$emit('message:push', response.data.message)
            context.dispatch('getCart')
          } else {
            Vue.prototype.$bus.$emit('message:push', '新增失敗', 'text-danger')
          }
          context.commit('LOADING', false, { root: true })
        })
      })
    },
    addToCart (context, { id, qty }) {
      // console.log(context.state.cart.carts.length);
      if (context.state.cart.carts.length >= 9) {
        Vue.prototype.$bus.$emit('message:push', '購物車已滿', 'text-danger')
        // Vue.prototype.$emit("message:push", '購物車已滿');
        return
      }
      // console.log(456);
      const repeatItem = context.state.cart.carts.find((item) => {
        return item.product_id === id
      })
      if (repeatItem) {
        if (repeatItem.qty === process.env.VUE_APP_MAX_QTY || repeatItem.qty + qty > process.env.VUE_APP_MAX_QTY) {
          Vue.prototype.$bus.$emit('message:push', '產品已達購買上限', 'text-danger')
          return
        }
        if (qty === -1 && repeatItem.qty === 1) {
          context.dispatch('deleteCart', repeatItem.id)
          return
        }
        const newQty = repeatItem.qty + qty
        const cart = {
          product_id: id,
          qty: newQty
        }
        const mixCartInfo = {
          id: repeatItem.id,
          cart
        }
        // 不知為何，在action裡面呼叫action傳值，物件的解構無效
        context.dispatch('mixCart', mixCartInfo)
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
        const cart = {
          product_id: id,
          qty
        }
        context.commit('LOADING', true, { root: true })
        axios.post(url, { data: cart }).then((response) => {
          // console.log(Vue.prototype);
          if (response.data.success) {
            Vue.prototype.$bus.$emit('message:push', response.data.message)
            context.dispatch('getCart')
          } else {
            Vue.prototype.$bus.$emit('message:push', '新增失敗', 'text-danger')
          }
          context.commit('LOADING', false, { root: true })
        })
      }
    }
  },
  mutations: {
    CART (state, payload) {
      state.cart = payload
    }
  },
  getters: {
    cart (state) {
      return state.cart
    }
  }
}
