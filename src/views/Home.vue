<template>
  <!-- <router-link to="/login">登入後台</router-link>
    <router-link to="/admin">進入後台</router-link>
    <router-link to="/shopping-list">買東西</router-link> -->

  <main>
    <swiper class="top-banner" :options="swiperOptions">
      <swiper-slide>
        <div
          class="top-banner__item"
          :style="{ backgroundImage: 'url(' + bgImg.img_1 + ')' }"
        >
          <div class="top-banner__inner">
            <h2>2021最新運動水瓶</h2>
            <p>隨時隨地，暢快補水</p>
            <a href="" class="btn btn-primary btn-lg">了解更多</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="top-banner__item"
          :style="{ backgroundImage: 'url(' + bgImg.img_2 + ')' }"
        >
          <div class="top-banner__inner">
            <h2>享受親子時光</h2>
            <p>全家人一起開心喝水</p>
            <a href="" class="btn btn-primary btn-lg">了解更多</a>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev" slot="button-prev">
        <img src="@/assets/images/prev.svg" alt="" />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="@/assets/images/next.svg" alt="" />
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- <section class="section  container-xl">
      <h2>CAMELBAK，不只是水瓶</h2>

      <div class="section__block bag-row">
        <div class="section__item bag-xl-4 ">
          吸管喝水，多出20%
        </div>
        <div class="section__item bag-xl-4 ">
          環保材質，
        </div>
        <div class="section__item bag-xl-4 ">
        </div>
      </div>
    </section> -->
    <section class="section introduction container-xl">
      <h2>CAMELBAK，不只是水瓶</h2>
      <div class="section__block bag-row">
        <div class="section__item bag-xl-3 bag-md-6">
          <div class="section__item__img">
            <img src="@/assets/images/category_1.jpg" alt="" />
          </div>
          <div class="section__item__content">
            <h3>吸管水瓶</h3>
            <span class="sub-title"> EVERYDAY BOTTLE </span>
            <p>
              使用再生含量為50％的新型塑料材料，製成可重複性使用的水瓶，取代一次性使用的紙杯宇保特瓶。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="section__item bag-xl-3 bag-md-6">
          <div class="section__item__img">
            <img src="@/assets/images/category_2.jpg" alt="" />
          </div>
          <div class="section__item__content">
            <h3>運動水瓶</h3>
            <span class="sub-title"> SPORT BOTTLE </span>
            <p>
              使用再生含量為50％的新型塑料材料，製成可重複性使用的水瓶，取代一次性使用的紙杯宇保特瓶。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="section__item bag-xl-3 bag-md-6">
          <div class="section__item__img">
            <img src="@/assets/images/category_3.jpg" alt="" />
          </div>
          <div class="section__item__content">
            <h3>兒童水瓶</h3>
            <span class="sub-title">EVERYDAY KIDS BOTTLE</span>
            <p>
              使用再生含量為50％的新型塑料材料，製成可重複性使用的水瓶，取代一次性使用的紙杯宇保特瓶。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="section__item bag-xl-3 bag-md-6">
          <div class="section__item__img">
            <img src="@/assets/images/category_4.jpg" alt="" />
          </div>
          <div class="section__item__content">
            <h3>不鏽鋼水瓶</h3>
            <span class="sub-title">EVERYDAY DRINKWARE</span>
            <p>
              使用再生含量為50％的新型塑料材料，製成可重複性使用的水瓶，取代一次性使用的紙杯宇保特瓶。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section container-xl bag-row">
      <div class="bag-row bag-md-6">
        <div class="bag-md-6">
          <img src="@/assets/images/feature.jpg" alt="" />
        </div>
        <div class="bag-md-6">
          <h3>輸入優惠碼</h3>
          <p>
            12/31前輸入優惠碼needwater，全品項8折，cameback支持你的每一個活動
          </p>
          <a href="" class="btn btn-primary">了解更多</a>
        </div>
      </div>
      <div class="bag-row bag-md-6">
        <div class="bag-md-6">
          <img src="@/assets/images/feature_2.jpg" alt="" />
        </div>
        <div class="bag-md-6">
          <h3>輸入優惠碼</h3>
          <p>
            12/31前輸入優惠碼needwater，全品項8折，cameback支持你的每一個活動
          </p>
          <a href="" class="btn btn-primary">了解更多</a>
        </div>
      </div>
    </section>
    <section class="section container-xl" ref="test">
      <h2>選一個熱銷的水瓶吧</h2>
      <div class="product bag-row">
        <div
          v-for="item in hotProducts"
          :key="item.id"
          class="product__item bag-lg-3 bag-md-6 bag-6"
        >
          <router-link to="/product-list">
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
          </router-link>
        </div>
      </div>
      <div class="btn-wrapper-center">
        <router-link to="/product-list" class="btn btn-primary">
          看更多水瓶
        </router-link>
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
      products: [],
      pagination: {},
      bgImg: {
        img_1: require("@/assets/images/top_1.jpg"),
        img_2: require("@/assets/images/top_2.jpg"),
      },

      swiperOptions: {
        loop: true,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false,
        // },
        speed: 800,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    hotProducts() {
      return this.products.filter(function (item, index) {
        return item.hotProducts === 1;
      });
    },
  },
  methods: {
    getProducts() {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        this.$bus.$emit("changeLoading", false);
        //  console.log(this.getTop(this.$refs.test));
        console.log(this.products);
      });
    },
    // getTop(e) {
    //   var offset = e.offsetTop;
    //   if (e.offsetParent != null) {
    //     offset += this.getTop(e.offsetParent);
    //   }
    //   return offset;
    // },
  },
  created() {
    this.getProducts();
  },
  // mounted() {

  // //不知為何mounted後的值少100多，除非有事件或者是資料讀完才正常
  //     console.log(this.getTop(this.$refs.test));
  //   window.addEventListener("scroll", () => {
  //       console.log(this.getTop(this.$refs.test));
  //     // console.log(this.$refs.test.offsetTop);

  //     // console.log(this.scrollPosition>50);
  //     // console.log(document.documentElement.scrollTop,window.pageYOffset);
  //   });
  // },
};
</script>
