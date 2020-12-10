<template>
  <main>
    <div class="page-wrapper container-xl">
      <!-- <h1>所有產品</h1> -->
      <div class="menu-block">
        <div class="nav-menu">
          <ul class="nav-menu__box">
            <!-- <li class="nav-menu__item" v-for="item in categories" :key="item">
            <a class="nav-menu__link">{{item}}</a>
          </li>  -->
            <li class="nav-menu__item">
              <router-link
                class="nav-menu__link"
                :class="{ active: currentCategory === 'all' }"
                :to="{
                  name: 'ProductListCategory',
                  params: { category: 'all', page: 1 },
                }"
                >所有水瓶</router-link
              >
            </li>
            <li class="nav-menu__item" v-for="item in categories" :key="item">
              <router-link
                class="nav-menu__link"
                :class="{ active: currentCategory === item }"
                :to="{
                  name: 'ProductListCategory',
                  params: { category: item },
                }"
                >{{ item | categoryChangeCn }}</router-link
              >
            </li>
            <!-- <li class="nav-menu__item">
              <a class="nav-menu__link">運動水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">兒童水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">不鏽鋼水瓶</a>
            </li> -->
          </ul>
        </div>
        <div class="side-box">
          <select
            class="form-control"
            name=""
            id=""
            v-model="sort"
            @change="changeSort"
          >
          <option value="" disabled>價格排序</option>
            <option value="priceUp" >價格高到低</option>
            <option value="priceDown">價格低到高</option>           
          </select>

          <div class="search">
            <input
              type="text"
              id="search"
              class="form-control"
              placeholder="搜尋本分類"
              v-model="search"
            />
            <label for="search"><i class="fas fa-search"></i></label>
          </div>
        </div>
      </div>
      <div class="product bag-row">
        <div
          v-for="item in filterProducts"
          :key="item.id"
          @click="toProductItem(item.category, item.id)"
          class="product__item bag-lg-3 bag-md-6 bag-6"
        >
          <div class="product__img">
            <img :src="item.imageUrl" :alt="item.title" />
          </div>
          <div class="product__content">
            <h3 class="product__title">
              {{ item.title }}
            </h3>
            <div class="product__bottom">
              <div>
                <div class="product__origin_price">
                  NT${{ item.origin_price }}
                </div>
                <div class="product__price">NT${{ item.price }}</div>
              </div>

              <button class="product__addToCart btn btn-sm btn-primary" @click="addToCart(item,1)">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Page
        :pagination="pagination"
        @get-pages="getProducts"
        v-if="currentCategory === 'all'"
      />
    </div>
  </main>
</template>
<style lang="scss" scoped>
</style>
<script>
import Page from "@/components/Pagination.vue";
export default {
  data() {
    return {
      products: [],
      productsAll: [],
      categories: [],
      currentCategory: "",
      pagination: {},
      search: "",
      sort: "",
    };
  },
  watch: {
    $route: function () {
      this.getCurrentCategory();
      this.changeSort();
    },
    search() {
      this.changeSort();
    },
  },
  computed: {
    filterProducts() {
      if (this.currentCategory === "all") {
        if (this.search === "") {
          return this.products;
        }
        let filter = this.filterSearch(this.products);
        return filter;
      } else {
        let resault = this.productsAll.filter((item) => {
          return item.category === this.currentCategory;
        });
        if (this.search === "") {
          return resault;
        }
        let filter = this.filterSearch(resault);
        return filter;
      }
    },
  },
  methods: {
    changeSort() {
      switch (this.sort) {
        case "priceUp":
          let newSort = [];
          if (this.filterProducts.length) {
            newSort = this.filterProducts.sort((a, b) => {
              const aPrice = a.price ? a.price : a.origin_price;
              const bPrice = b.price ? b.price : b.origin_price;
              // console.log(aPrice,bPrice);
              return bPrice - aPrice;
            });
          }
          console.log(newSort);
          return newSort;
          this.filterProducts = newSort;
          break;
        case "priceDown":        
          if (this.filterProducts.length) {
            newSort = this.filterProducts.sort((a, b) => {
              const aPrice = a.price ? a.price : a.origin_price;
              const bPrice = b.price ? b.price : b.origin_price;
              // console.log(aPrice,bPrice);
              return aPrice - bPrice;
            });
          }
          console.log(newSort);
          return newSort;
          this.filterProducts = newSort;
          break;
      }
    },
    getCurrentCategory() {
      this.currentCategory = this.$route.params.category;
    },
    filterSearch(resault) {
      return resault.filter((item) => {
        return item.title.indexOf(this.search) != -1;
      });
    },
    getProducts(page = 1) {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.$bus.$emit("changeLoading", false);
        console.log(this.categories);
      });
    },
    getProductsAll() {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.productsAll = response.data.products;
        this.productsAll.forEach((item) => {
          if (this.categories.indexOf(item.category) === -1)
            this.categories.push(item.category);
        });
        this.$bus.$emit("changeLoading", false);
        console.log(this.categories);
      });
    },
    toProductItem(category, id) {
      this.$router.push({
        name: "ProductItem",
        params: {
          category,
          id,
        },
      });
    },
    addToCart(){

    }
  },
  components: {
    Page,
  },
  created() {
    this.getCurrentCategory();
    this.getProducts();
    this.getProductsAll();
    // this.sort = this.couponList[0].id
    // if(this.$route.params.category==='all'){

    // }else{

    // }
  },
};
</script>
