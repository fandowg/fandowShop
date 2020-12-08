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
              <a class="nav-menu__link active">所有水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">吸管水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">運動水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">兒童水瓶</a>
            </li>
            <li class="nav-menu__item">
              <a class="nav-menu__link">不鏽鋼水瓶</a>
            </li>
          </ul>
        </div>
        <div class="side-box">
          <select class="form-control" name="" id="">
            <option value="">價格高到低</option>
            <option value="">價格低到高</option>
            <option value="">新到舊</option>
            <option value="">舊到新</option>
          </select>

          <div class="search">
            <input
              type="text"
              id="search"
              class="form-control"
              placeholder="搜尋本分類"
            />
            <label for="search"><i class="fas fa-search"></i></label>
          </div>
        </div>
      </div>
      <div class="product bag-row">
        <div
          v-for="item in products"
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

              <button class="product__addToCart btn btn-sm btn-primary">
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  data() {
    return {
      products: [],
      categories: [],
      pagination: {},
    };
  },
  computed: {},
  methods: {
    getProducts() {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.products.forEach((item) => {
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
  },
  created() {
    this.getProducts();
  },
};
</script>
