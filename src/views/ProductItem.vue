<template>
  <main class="page">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <router-link to="/"><i class="fas fa-home"></i></router-link>
        </li>

        <li class="breadcrumb__item">
          <router-link to="/product-list">購買水瓶</router-link>
        </li>
        <li class="breadcrumb__item">
          <router-link :to="{ name: 'ProductListCategory', params: { category } }">{{
            category | categoryChangeCn
          }}</router-link>
        </li>
        <li class="breadcrumb__item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="detail container-xl" v-scrollanimate>
      <div class="detail__top bag-row">
        <div class="bag-md-5 detail__img">
          <img :src="product.imageUrl" :alt="product.title" />
        </div>
        <div class="bag-md-7 detail__info">
          <span class="detail__category">{{ product.category | categoryChangeCn }}</span>
          <h1 class="detail__title">{{ product.title }}</h1>
          <h2 class="detail__title__sm">產品特色</h2>
          <p>{{ product.description }}</p>
          <span class="product__origin_price"> NT${{ product.origin_price }} </span>
          <span class="product__price">NT${{ product.price }}</span>

          <div class="input-group detail__qty">
            <select name="" id="" class="form-control" v-model="qty">
              <option v-for="num in 5" :value="num" :key="num">
                {{ num }}
              </option>
            </select>
            <button class="btn btn-primary" @click="addToCart(product_id, qty)">
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <div class="detail__content">
        <h2 class="detail__title__sm">產品介紹</h2>
        <div class="detail__text">
          <span v-html="product.content"></span>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  data() {
    return {
      // id: "",
      product: {},
      qty: 1,
    };
  },
  watch: {
    product_id() {
      this.getProductItem();
    },
  },
  computed: {
    product_id() {
      return this.$route.params.id;
    },
    category() {
      return this.$route.params.category;
    },
  },
  methods: {
    getProductItem() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${this.product_id}`;
      this.$store.commit("LOADING", true);
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
        } else {
          this.$bus.$emit("message:push", response.data.message, "text-danger");
        }
        this.$store.commit("LOADING", false);
      });
    },
    addToCart(id, qty) {
      this.$store.dispatch("cartModules/addToCart", { id, qty });
    },
  },
  created() {
    // this.id = this.$route.params.id;
    this.getProductItem();
  },
};
</script>
