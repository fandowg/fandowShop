<template>
  <div class="admin">
    <EditProduct
      @close="closeModal"
      @get-products="getProducts"
      :is-new="isNew"
      :temp-product="tempProduct"
    />

    <div class="menu-block menu-block--inline">
      <h1 class="admin__title">產品列表</h1>
      <button class="btn btn-primary" @click="openModal(true)">新增產品</button>
    </div>

    <div class="admin__table">
      <div class="admin__head bag-row no-gutters">
        <div class="admin__item bag-md bag-6">圖片</div>        
        <div class="admin__item admin__item--title  bag-md-4 bag-6">產品名稱</div>
        <div class="admin__item bag-md bag-6">分類</div>
        <div class="admin__item bag-md bag-6">原價</div>
        <div class="admin__item bag-md bag-6">售價</div>
        <div class="admin__item bag-md bag-6">啟用</div>
        <div class="admin__item bag-md bag-6">編輯</div>
        <div class="admin__item bag-md bag-6">刪除</div>
      </div>
      <div class="admin__content">
      <div class="admin__row bag-row no-gutters" v-for="item in products" :key="item.id">
        <div class="admin__item bag-md bag-2"><img :src="item.imageUrl" alt="" /></div>
        
        <div class="admin__item admin__item--title bag-md-4 bag-10">
          {{ item.title }}
          <!-- {{item.video}} -->
        </div>
        <div class="admin__item bag-md bag-3">{{ item.category }}</div>
        <div class="admin__item bag-md bag-3 price"><span class="desk-hide-md ">原價</span>{{ item.origin_price }}</div>
        <div class="admin__item bag-md bag-3 origin_price"><span class="desk-hide-md  ">特價</span>{{ item.price }}</div>
        <div class="admin__item bag-md bag-3">
          <span v-if="item.is_enabled === 1">啟用</span>
          <span v-else>未啟用</span>
        </div>
        <div class="admin__item bag-md bag-6">
          <button class="btn btn-primary btn-sm" @click="openModal(false, item)">編輯</button>
        </div>
        <div class="admin__item bag-md bag-6">
          <button class="btn btn-outline-primary btn-sm" @click="deleteProduct(item.id)">刪除</button>
        </div>
      </div>
    </div>
    </div>

    
    <Page :pagination="pagination" @get-pages="getProducts" />
  </div>
</template>
<script>
import EditProduct from "./EditProduct.vue";
import Page from "@/components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: "",
      isNew: true,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.$bus.$emit("changeLoading", false);
        console.log(this.pagination);
      });
    },
    deleteProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`;
      this.$bus.$emit("changeLoading", true);
      this.$http.delete(url).then((response) => {
        this.$bus.$emit("message:push", response.data.message);
        console.log(response.data);
        this.getProducts();
        this.$bus.$emit("changeLoading", false);
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
    Page,
  },
  created() {
    this.getProducts(1);
  },
};
</script>