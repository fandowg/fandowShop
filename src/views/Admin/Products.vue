<template>
  <div>
    <EditProduct
      @close="closeModal"
      @get-products="getProducts"
      :is-new="isNew"
      :temp-product="tempProduct"
    />

    <div class="menu-block menu-block--inline">
      <h1 class="page__title">產品列表</h1>
      <button class="btn btn-primary" @click="openModal(true)">新增產品</button>
    </div>

    <div class="admin">
      <div class="admin__head bag-row no-gutters">
        <div class="admin__item bag-md text-center">圖片</div>
        <div class="admin__item admin__title bag-md-4">產品名稱</div>
        <div class="admin__item bag-md">分類</div>
        <div class="admin__item bag-md">原價</div>
        <div class="admin__item bag-md">售價</div>
        <div class="admin__item bag-md text-right-max-md">啟用</div>
        <div class="admin__item bag-md text-right-min-md">編輯</div>
        <div class="admin__item bag-md text-right">刪除</div>
      </div>
      <div class="admin__list">
        <div
          class="admin__row bag-row no-gutters"
          v-for="item in products[currentPage]"
          :key="item.id"
        >
          <div class="admin__item bag-md bag-2 text-center">
            <img :src="item.imageUrl" alt="" />
          </div>

          <div class="admin__item admin__title bag-md-4 bag-10">
            {{ item.title }}
            <!-- {{item.video}} -->
          </div>
          <div class="admin__item bag-md bag-3">
            {{ item.category | categoryChangeCn }}
          </div>
          <div class="admin__item bag-md bag-3 price">
            <span class="desk-hide-md">原價</span>{{ item.origin_price }}
          </div>
          <div class="admin__item bag-md bag-3 origin_price">
            <span class="desk-hide-md">特價</span>{{ item.price }}
          </div>
          <div class="admin__item bag-md bag-3 text-right-max-md">
            <span v-if="item.is_enabled === 1">啟用</span>
            <span v-else>未啟用</span>
          </div>
          <div class="admin__item bag-md bag-6 text-right-min-md">
            <button class="btn btn-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
          </div>
          <div class="admin__item bag-md bag-6 text-right">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="deleteProduct(item.id)"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <Page
      ref="page"
      :products="products"
      :current-page.sync="currentPage"
      @products-by-page="products = $event"
    />
    <!-- <Page :pagination="pagination" @get-pages="getProducts" /> -->
  </div>
</template>
<script>
import EditProduct from "./EditProduct.vue";
import Page from "@/components/Pagination.vue";
export default {
  data() {
    return {
      products: {},
      tempProduct: {},
      // pagination: "",
      isNew: true,
      currentPage: 0,
    };
  },
  watch: {
    currentPage() {
      this.toTop();
    },
  },
  methods: {
    getProducts(page = 1) {
      // const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      this.$store.commit("LOADING", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        // console.log({ ...this.products });
        // this.pagination = response.data.pagination;
        this.$refs.page.createPage(response.data.products);
        // this.createPage();
        this.$store.commit("LOADING", false);
        // console.log(this.pagination);
      });
    },
    deleteProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${id}`;
      this.$store.commit("LOADING", true);
      this.$http.delete(url).then((response) => {
        this.$bus.$emit("message:push", response.data.message);
        console.log(response.data);
        this.getProducts();
        this.$store.commit("LOADING", false);
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {
          is_enabled: 0,
          category: "default",
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
    toTop() {
      document.documentElement.scrollTop = 0;
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
