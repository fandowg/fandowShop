import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state:{
    isLoading: false,
    productsAll:[],
    categories:[],
    cart:{
      carts:[],
    },
  },
  actions:{
    updateLoading(context,payload){
      context.commit('LOADING',payload);
    },
    getProductsAll(context) {
      context.commit('LOADING',true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      axios.get(url).then((response) => {
        // this.productsAll = response.data.products;
        // this.productsAll.forEach((item) => {
        //   if (this.categories.indexOf(item.category) === -1)
        //     this.categories.push(item.category);
        // });
        console.log(response.data.products);
        context.commit('PRODUCTSALL',response.data.products);
        context.commit('CATEGORIES',response.data.products);
        context.commit('LOADING',false);   
      });
    },
    getCart(context) {
      context.commit('LOADING',true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        context.commit('CART',response.data.data);
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
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: cart }).then((response) => {
        context.commit('LOADING',false);  
        context.dispatch('getCart'); 
      });
    },
  },
  mutations:{
    LOADING(state,payload){
      state.isLoading=payload;
    },
    PRODUCTSALL(state,payload){
      state.productsAll=payload;
    },
    CATEGORIES(state,payload){
      payload.forEach((item) => {
        if (state.categories.indexOf(item.category) === -1)
        state.categories.push(item.category);
      });
    },
    CART(state,payload){
      state.cart=payload;
    }   
  },
  getters:{
    categories(state){
      return state.categories;
    },
    productsAll(){
      return state.productsAll;
    },
  }
});