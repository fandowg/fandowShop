<template>
  <main>
    <div class="page-wrapper">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb__item"><a href="#">首頁</a></li>
          <li class="breadcrumb__item"><a href="#">購買水瓶</a></li>
          <li class="breadcrumb__item"><a href="#">吸管水瓶</a></li>
          <li class="breadcrumb__item active" aria-current="page">
            750ml eddy+ 多水吸管水瓶 骷髏黑
          </li>
        </ol>
      </nav>
      <div class="container-xl">
        <div class="detail">
          <div class="detail__top bag-row">
            <div class="bag-md-6 detail__img">
              <img :src="product.imageUrl" :alt="product.title" />
            </div>
            <div class="bag-md-6 detail__info">
              <span class="detail__category">{{ product.category }}</span>
              <h1 class="detail__title">{{ product.title }}</h1>
              <h2 class="detail__title__sm">產品特色</h2>
              <p>{{ product.description }}</p>
              <span class="product__price">NT${{ product.price }}</span>
              <span class="product__origin_price">
                NT${{ product.origin_price }}
              </span>

              <div class="input-group detail__qty">
                <select name="" id="" class="form-control">
                  <option v-for="num in 5" :value="num" :key="num">
                    {{ num }}
                  </option>
                </select>
                <button class="btn btn-primary">加到購物車</button>
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
      id: "",
      product: {},
    };
  },
  computed: {},
  methods: {
    getProduct() {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${this.id}`;
      this.$http.get(url).then((response) => {
        this.product = response.data.product;
        console.log(this.product);
        this.$bus.$emit("changeLoading", false);
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
