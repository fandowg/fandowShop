<template>


  <main>
    <section class="section container-xl">
      <h2>產品列表</h2>
      <div class="product bag-row">      
        <div v-for="item in products" :key="item.id" class="product__item bag-md-3">
         
          <div class="product__img">
            <img :src="item.imageUrl" :alt="item.title">
          </div>
          <div class="product__content">
            <h3 class="product__title">
              {{item.title}}
            </h3>
            <div class="product__bottom">
            <div class="product__price ">NT${{item.price}}</div>
            <div class="product__origin_price ">NT${{item.origin_price}}</div>
            <button class="product__addToCart btn btn-sm btn-primary">
              <i class="fas fa-cart-plus"></i>
            </button>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  data() {
    return {
      products:[],
      pagination:{},
  

      
    };
  },
  computed:{
   
  },
  methods:{
    getProducts() {
       this.$bus.$emit('changeLoading',true); 
       const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
       this.$http.get(url).then(response => {
        this.products = response.data.products;
        this.$bus.$emit('changeLoading',false); 
        console.log(this.products);
      });
    },
  },
   created() {
    this.getProducts();
  },
};
</script>
