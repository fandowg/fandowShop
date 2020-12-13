import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import productsModules from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state:{
    isLoading: false,
    cart:{
      carts:[],
    },
  },
  actions:{
    updateLoading(context,payload){
      context.commit('LOADING',payload);
    },
 
    getCart(context) {
      context.commit('LOADING',true);   
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        context.commit('CART',response.data.data);
        console.log(response.data.data);
        context.commit('LOADING',false);   
      });
    },

    deleteCart(context,id) {
      context.commit('LOADING',true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      axios.delete(url).then((response) => {     
        context.commit('LOADING',false);  
        context.dispatch('getCart'); 
    
      });      
    },
    addToCart(context,{id, qty}) {
      context.commit('LOADING',true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      let repeadItem = context.state.cart.carts.filter((item)=>{
        return item.product_id===id
      });
      console.log(repeadItem);
      // if(context.state.cart.carts){

      // };
      let newQty=context.state.cart.carts.qty+qty;     
      const cart = {
        product_id: id,
        newQty,
      };
      console.log(cart);
      axios.post(url, { data: cart }).then((response) => {
        context.commit('LOADING',false);
        console.log(response.data);  
        context.dispatch('getCart'); 
      });
    },
  },
  mutations:{
    LOADING(state,payload){
      state.isLoading=payload;
    },
  
    CART(state,payload){
      state.cart=payload;
    }   
  },
  getters:{
    cart(state){
      return state.cart;
    },
 
  },
  modules:{
    productsModules,
  }
});