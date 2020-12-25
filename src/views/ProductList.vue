<template>
  <main class="page">
    <div class="container-xl">
      <div class="product-top">
        <div class="bag-row no-gutters">
          <div class="bag-md-2 bag-4">
            <!-- <div class="mobile-hide-md">
              <img src="@/assets/images/product_top_sm.jpg" alt="" />
            </div> -->

            <img src="@/assets/images/feature.jpg" alt="" />
          </div>
          <div class="bag-md-10 bag-8 product-top__content">
            <h2 class="product-top__title">領取折扣，一起加油</h2>
            <p class="product-top__text">
              結帳輸入 <span class="product-top__text__sp">needwater</span> ,
              <br />
              全品項8折優惠<span class="mobile-hide-md">，CAMELBAK支持你的每個決定</span
              >。
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="desk-hide-md">
              <img src="@/assets/images/product_top.jpg" alt="" />
            </div> -->

      <!-- <div class="product-top">
         <div class="bag-md-7 product-top__content">
        <div class="product-top__content">
          <h2 class="product-top__title">領取折扣，一起加油</h2>
          <p class="product-top__text">
            結帳輸入 <span class="product-top__text__sp">needwater</span> , 全品項8折優惠
          </p>
        </div>
         </div>
      </div>
      <img src="@/assets/images/product_top_sm.jpg" alt="" /> -->
    </div>
    <!-- <div
      class="product-top"
      :style="{ backgroundImage: 'url(' + bgImg.img_1 + ')' }"
    >
      <div class="product-top__inner">
        <h2 class="product-top__title">領取折扣，一起加油</h2>
        <p class="product-top__text">結帳輸入 needwater</p>
        <img src="@/assets/images/product_top.jpg" alt="" />
      </div>
    </div> -->
    <!-- <h1>所有產品</h1> -->
    <div class="container-xl">
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
          <select class="form-control" name="" id="" v-model="sort">
            <option value="" disabled>價格排序</option>
            <option value="priceUp">價格高到低</option>
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
      <!-- <img src="@/assets/images/product_top_sm.jpg" alt="" /> -->
      <!-- <div class="product-top">
        <div class="bag-row no-gutters">
          <div class="bag-md-8 bag-8 product-top__content">
            <h2 class="product-top__title">所有水瓶</h2>
            <p class="product-top__text">看看有那些你中意的好水瓶，陪你過個好節。</p>
          </div>
          <div class="bag-md-4 bag-4">
          

            <img src="@/assets/images/product_top_sm.jpg" alt="" />
          </div>
        </div>
      </div> -->
      <div class="product bag-row">
        <div
          v-for="item in productsByPage[currentPage]"
          :key="item.id"
          @click="toProductItem(item.category, item.id)"
          class="product__item bag-lg-3 bag-sm-4 bag-6 animate__fadeIn"
          :class="{ animate__animated: isShow }"
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
                <div class="product__origin_price">NT${{ item.origin_price }}</div>
                <div class="product__price">NT${{ item.price }}</div>
              </div>

              <button
                class="product__addToCart btn btn-sm btn-primary"
                @click.stop="addToCart(item.id, 1)"
              >
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Page
        ref="page"
        :products="filterProducts"
        @products-by-page="getProductsByPage"
        :current-page.sync="currentPage"
      />
      <!-- <Page
        :pagination="pagination"
        @get-pages="getProducts"
        v-if="currentCategory === 'all'"
      /> -->
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
<script>
import Page from "@/components/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // products: [],
      // productsAll: [],
      // categories: [],
      scrollPosition: 0,
      currentCategory: "",
      // productsBySort: [],
      productsByPage: [],
      // pagination: {},
      currentPage: 0,
      search: "",
      sort: "",
      isShow: false,
      // cart: {},
    };
  },
  watch: {
    $route() {
      this.getCurrentCategory();
      // this.changeSort();
    },
    search() {
      this.currentPage = 0;
      // this.changeSort();
    },
    currentCategory() {
      // if (!this.sort) {
      //   this.productsBySort = this.filterProducts;
      // } else {
      //   this.changeSort();
      // }
      this.currentPage = 0;
      this.itemShow();
      //

      // this.$refs.page.createPage(this.filterProducts);
    },
    getPage() {
      console.log("取得頁面");
      // this.productsBySort = this.filterProducts;
      this.$refs.page.createPage(this.filterProducts);
    },
    filterProducts(val) {
      console.log(val);
      // if (!this.sort) {
      //   this.productsBySort = this.filterProducts;
      // }
      // this.productsBySort = val;
      // console.log(this.productsBySort);
      this.$refs.page.createPage(this.filterProducts);
      console.log("再取得頁面");
    },
    // sort() {

    // },
    // filterProducts() {
    //   console.log(123);
    //   this.$refs.page.createPage(this.filterProducts);
    // },
    currentPage() {
      this.toTop();
      this.itemShow();
    },
  },
  computed: {
    filterProducts() {
      // console.log(this.currentCategory);
      if (this.currentCategory === "all") {
        // console.log(this.search);
        if (this.search === "") {
          if (this.sort == "") {
            // console.log(this.productsAll);
            return this.productsAll;
          } else {
            // console.log(this.changeSort(this.productsAll));
            return this.changeSort(this.productsAll);
          }
        } else {
          let filter = this.filterSearch(this.productsAll);
          if (this.sort == "") {
            return filter;
          } else {
            return this.changeSort(filter);
          }
          // console.log(filter);
        }
      } else {
        let resault = this.productsAll.filter((item) => {
          return item.category === this.currentCategory;
        });
        if (this.search === "") {
          if (this.sort == "") {
            return resault;
          } else {
            return this.changeSort(resault);
          }
        } else {
          let filter = this.filterSearch(resault);
          if (this.sort == "") {
            return filter;
          } else {
            return this.changeSort(filter);
          }
        }
      }

      // set(val) {
      //   console.log(val);
      //   this.productsBySort = val;
      // },
    },
    ...mapGetters("productsModules", ["categories", "productsAll", "getPage"]),

    // cart() {
    //   return this.$store.state.cart;
    // },
  },
  methods: {
    itemShow() {
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 1000);
    },
    getProductsByPage(products) {
      this.productsByPage = products;
    },
    changeSort(products) {
      // console.log(456);
      this.currentPage = 0;
      let newSort = [];
      let newProducts = [...products];
      newSort = newProducts.sort((a, b) => {
        const aPrice = a.price ? a.price : a.origin_price;
        const bPrice = b.price ? b.price : b.origin_price;
        // console.log(aPrice,bPrice);
        switch (this.sort) {
          case "priceUp":
            return bPrice - aPrice;
          case "priceDown":
            return aPrice - bPrice;
        }
      });
      return newSort;
      // switch (this.sort) {
      //   case "priceUp":

      //     // console.log(newSort);
      //   // return newSort;
      //   // this.productsBySort = newSort;
      //   // this.$refs.page.createPage(this.productsBySort);
      //   // this.$refs.page.createPage(this.products);
      //   // break;
      //   case "priceDown":
      //     // if (newProducts.length) {
      //     //   newSort = newProducts.sort((a, b) => {
      //     //     const aPrice = a.price ? a.price : a.origin_price;
      //     //     const bPrice = b.price ? b.price : b.origin_price;
      //     //     // console.log(aPrice,bPrice);
      //     //     return aPrice - bPrice;
      //     //   });
      //     // }
      //     // return newSort;
      //     // console.log(newSort);
      //   // return newSort;
      //   // this.productsBySort = newSort;
      //   // this.$refs.page.createPage(this.productsBySort);
      //   // this.$refs.page.createPage(this.products);
      //   // break;
      // }
    },
    getCurrentCategory() {
      this.currentCategory = this.$route.params.category;
    },
    filterSearch(resault) {
      return resault.filter((item) => {
        return item.title.indexOf(this.search) != -1;
      });
    },
    // getProducts(page = 1) {
    //   this.$store.dispatch("updateLoading", true);
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`;
    //   this.$http.get(url).then((response) => {
    //     this.products = response.data.products;
    //     this.pagination = response.data.pagination;
    //     this.$store.dispatch("updateLoading", false);

    //     console.log(this.categories);
    //   });
    // },

    ...mapActions("productsModules", ["getProductsAll"]),
    toProductItem(category, id) {
      // console.log(this);
      this.$router.push({
        name: "ProductItem",
        params: {
          category,
          id,
        },
      });
    },
    addToCart(id, qty) {
      this.$store.dispatch("cartModules/addToCart", { id, qty });
    },
    // getCart() {
    //   this.$store.dispatch('getCart');

    // },

    // deleteCart(id) {
    //   this.$store.dispatch('deleteCart', id);

    // },
    toTop() {
      document.documentElement.scrollTop = 0;
    },
  },
  components: {
    Page,
  },
  created() {
    console.log(process.env.VUE_APP_MAX_QTY);
    this.getCurrentCategory();
    // this.getProducts();
    this.getProductsAll();
  },
  // mounted() {
  //   window.addEventListener("scroll", () => {
  //     this.scrollPosition = window.pageYOffset;
  //   });
  //   console.log(this);
  // },
};
</script>
