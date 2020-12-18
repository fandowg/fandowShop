import Vue from 'vue'
import Vuex from 'vuex'


import productsModules from './products'
import cartModules from './cart'
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
 

  },
  mutations:{
    LOADING(state,payload){
      state.isLoading=payload;
    },
  
   
  }, 
  modules:{
    productsModules,
    cartModules
  }
});