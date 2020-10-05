<template>
   <div class="products">

    
    <EditProduct @close="closeModal" @get-products="getProducts" :is-new="isNew" :temp-product="tempProduct" />
   
      <div class="top">
        <h1>產品列表</h1>
        <button class="newBtn" @click="openModal(true)">新增產品</button>
      </div>

      <div class="head">
        <div class="one">分類</div>
        <div class="one">產品名稱</div>
        <div class="one">原價</div>
        <div class="one">售價</div>
        <div class="one">啟用</div>
        <div class="one">編輯</div>
        <div class="one">刪除</div>
      </div>
      <div class="cont">
        <div class="one-line" v-for="item in products" :key="item.id">
          <div class="one">{{item.category}}</div>
          <div class="one">{{item.title}}</div>
          <div class="one">{{item.origin_price}}</div>
          <div class="one">{{item.price}}</div>
          <div class="one">
            <span v-if="item.is_enabled===1">啟用</span>
            <span v-else>未啟用</span>
          </div>
          <div class="one">
            <button @click="openModal(false,item)">編輯</button>
          </div>
          <div class="one">
            <button @click="deleteProduct(item.id)">刪除</button>
          </div>
        </div>
      </div>
      <Page :pagination="pagination" @get-pages="getProducts" />
    
    <button @click="$bus.$emit('message:push','哈哈','fail')">哇哈哈</button>
  </div>
</template>
<script>
import EditProduct from "../views/EditProduct.vue";
import Page from "../components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination:'',
      isNew: true,   
    };
  },
  methods: {
    getProducts(page = 1) {
       this.$bus.$emit('changeLoading',true); 
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      this.$http.get(url).then(response => {
        
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.$bus.$emit('changeLoading',false); 
        console.log(this.pagination);
      });
    },
    deleteProduct(id){
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`;
        this.$bus.$emit('changeLoading',true); 
       this.$http.delete(url).then(response => {
         this.$bus.$emit('message:push',response.data.message);  
         console.log(response.data);
         this.getProducts();     
        this.$bus.$emit('changeLoading',false); 
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
           is_enabled: 0,
          //  imageUrl:'',
        };
        this.isNew = isNew;
      } else {
        this.tempProduct = item;     
        this.isNew = isNew;
      }

      this.$modal.show("editProduct");
    },
    closeModal() {
      this.$modal.hide("editProduct");
    },
  
  },
  components: {
    EditProduct,
    Page
  },
  created() {
    this.getProducts(1);
  },
};
</script>