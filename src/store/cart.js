import axios from 'axios'
import {EventBus} from '@/bus'
export default {
  strict: true,
  namespaced: true,
  state: {
    cart: {
      carts: [],
    },
  },
  actions: {
    getCart(context) {
      // console.log(Vue.$bus);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.get(url).then((response) => {
        context.commit('CART', response.data.data);
        // console.log(response.data.data);
        context.commit('LOADING', false, { root: true });
      });
    },
    deleteCart(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('getCart');
      });
    },
    mixCart(context, mixCartInfo) {
      let { id, cart } = mixCartInfo;
      const url_delete = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      const url_addCart = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url_delete).then((response) => {
        axios.post(url_addCart, { data: cart }).then((response) => {
          context.commit('LOADING', false, { root: true });
          context.dispatch('getCart');
        });
      });
    },
    addToCart(context, { id, qty }) {
      // console.log(context.state.cart.carts.length);
      if(context.state.cart.carts.length>=9){
        EventBus.$emit("message:push", '購物車已滿');
        return;
      };
      // console.log(456);
      let repeadItem = context.state.cart.carts.find((item) => {
        return item.product_id === id
      });
      if (repeadItem) {
        if (qty === -1 && repeadItem.qty === 1) {
          context.dispatch('deleteCart', repeadItem.id);
          return;
        }
        let newQty = repeadItem.qty + qty;
        const cart = {
          product_id: id,
          qty: newQty,
        };
        let mixCartInfo = {
          id: repeadItem.id,
          cart
        }
        //不知為何，在action裡面呼叫action傳值，物件的解構無效
        context.dispatch('mixCart', mixCartInfo);
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        const cart = {
          product_id: id,
          qty,
        };
        context.commit('LOADING', true, { root: true });
        axios.post(url, { data: cart }).then((response) => {
          context.commit('LOADING', false, { root: true });
          context.dispatch('getCart');
        });
      }
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    }
  },
}