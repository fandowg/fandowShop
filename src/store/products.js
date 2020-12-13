import axios from 'axios'
export default{
  strict:true,
  namespaced:true,
  state:{   
    productsAll:[],
    categories:[],  
  },
  actions:{
   
    getProductsAll(context) {
      context.commit('LOADING',true,{root:true});
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
        context.commit('LOADING',false,{root:true});   
      });
    },
 

   
   
  },
  mutations:{
   
    PRODUCTSALL(state,payload){
      state.productsAll=payload;
    },
    CATEGORIES(state,payload){
      payload.forEach((item) => {
        if (state.categories.indexOf(item.category) === -1)
        state.categories.push(item.category);
      });
    },

  },
  getters:{
    categories(state){
      return state.categories;
    },
    productsAll(state){
      return state.productsAll;
    },
  }
}