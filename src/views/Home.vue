<template>
  <main>
    <swiper class="top-banner" :options="swiperOptions">
      <swiper-slide>
        <div
          v-if="device"
          class="top-banner__item"
          :style="{ backgroundImage: `url(${bgImg[device][0]})` }"
        >
          <div class="top-banner__inner">
            <h2 class="animate__animated animate__fadeIn">挑戰各種不可能！</h2>
            <p>2021運動水瓶，全新上市</p>
            <a href="" class="btn btn-primary btn-lg">了解更多</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          v-if="device"
          class="top-banner__item"
          :style="{ backgroundImage: `url(${bgImg[device][1]})` }"
        >
          <div class="top-banner__inner">
            <h2>守護孩子的未來</h2>
            <p>全產品不含環境賀爾蒙BPA</p>
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
    <section class="section container-xl">
      <h2 v-scrollanimate><span>CAMELBAK，</span><span>不只是水瓶</span></h2>
      <div class="introduction bag-row">
        <div class="introduction__item bag-xl-4 bag-md-6">
          <h3 v-scrollanimate>
            是提醒你喝水的好朋友<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_2.jpg"
              alt=""
            />
          </h3>
          <p v-scrollanimate>
            專利吸管咬嘴，實驗證實較一般水瓶多出15% ~
            24%的飲水量，讓忙碌工作的你，多喝點水。
          </p>
        </div>
        <div class="introduction__item bag-xl-4 bag-md-6">
          <h3 v-scrollanimate>
            是你努力衝刺的好推手<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_1.jpg"
              alt=""
            />
          </h3>
          <p v-scrollanimate>
            獨家專利"
            噴射咬嘴閥"，擠壓瓶身即可直接飲水，你不須停下腳步，就可以暢快得補充水分。
          </p>
        </div>
        <div class="introduction__item bag-xl-4 bag-md-6">
          <h3 v-scrollanimate>
            是永續發展的推行者<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_3.jpg"
              alt=""
            />
          </h3>
          <p v-scrollanimate>
            我們的目標是"幫助人們不再使用一次性的瓶裝水"，為環保和永續發展盡一份力。
          </p>
        </div>
      </div>
      <div class="btn-wrapper-center" v-scrollanimate>
        <router-link to="/about" class="btn btn-primary"> 深入了解CAMELBAK </router-link>
      </div>
    </section>
    <section class="section container-xl" ref="test">
      <div class="feature bag-row">
        <div class="feature__item bag-xl-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_1.jpg" alt="" />
          </div>
          <div class="category__content">
            <h3>吸管水瓶</h3>
            <!-- <span class="sub-title"> EVERYDAY BOTTLE </span> -->
            <p>
              專利吸管咬嘴設計，咬嘴可自動閉合，即使不小心打翻也不溢漏，幫助你補充一整天水分。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="feature__item bag-xl-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_2.jpg" alt="" />
          </div>
          <div class="feature__content">
            <h3>運動水瓶</h3>
            <!-- <span class="sub-title"> SPORT BOTTLE </span> -->
            <p>
              專為跑步或單車等高強度運動設計，讓運動員可以在不需停止的狀況下持續補水。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="feature__item bag-xl-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_3.jpg" alt="" />
          </div>
          <div class="feature__content">
            <h3>兒童水瓶</h3>
            <!-- <span class="sub-title">EVERYDAY KIDS BOTTLE</span> -->
            <p>
              針對 1-8
              歲孩童所設計，有效訓練小朋友自己喝水的習慣，減少飲料的攝取，輕咬即飲直覺式飲水模式。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
        <div class="feature__item bag-xl-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_4.jpg" alt="" />
          </div>
          <div class="feature__content">
            <h3>不鏽鋼水瓶</h3>
            <!-- <span class="sub-title">EVERYDAY DRINKWARE</span> -->
            <p>
              採用18/8
              不鏽鋼製成，真空保冰保溫，瓶身不冒汗，保養清洗簡單容易，瓶蓋可放置於洗碗機做清洗。
            </p>
            <a href="" class="btn btn-primary">了解更多</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section container-xl">
      <div class="bag-row feature">
        <div class="bag-xl-6 feature__item">
          <div class="bag-row">
            <div class="bag-xl-6 bag-md-4 feature__img">
              <!-- <img src="@/assets/images/feature.jpg" alt="" /> -->
              <img src="@/assets/images/feature.jpg" alt="" />
            </div>
            <div class="bag-xl-6 bag-md-8 feature__content">
              <h3>領取折扣，一起加油</h3>
              <p>
                3/30前輸入優惠碼needwater，全品項8折優惠，CAMELBAK支持你的每個挑戰，為你加油。
              </p>
              <a href="" class="btn btn-primary">了解更多</a>
            </div>
          </div>
        </div>
        <div class="bag-xl-6 feature__item">
          <div class="bag-row">
            <div class="bag-xl-6 bag-md-4 feature__img">
              <img src="@/assets/images/feature_2.jpg" alt="" />
            </div>
            <div class="bag-xl-6 bag-md-8 feature__content">
              <h3>全新品項，酷炫登場</h3>
              <p>
                補水也要補能量，看看我們最新的噴射水瓶，瞬間暢快補水，隨時隨地，展現自我。
              </p>
              <a href="" class="btn btn-primary">了解更多</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section container-xl">
      <h2>選一個最熱銷的水瓶吧！</h2>
      <div class="product bag-row">
        <div
          v-for="item in hotProducts"
          :key="item.id"
          class="product__item bag-lg-3 bag-sm-4 bag-6"
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
                  <div class="product__origin_price">NT${{ item.origin_price }}</div>
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
        <router-link to="/product-list" class="btn btn-primary"> 看更多水瓶 </router-link>
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped></style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      products: [],
      pagination: {},
      device: "",
      bgImg: {
        desk: [
          require("@/assets/images/top_1.jpg"),
          require("@/assets/images/top_2.jpg"),
        ],
        mobile: [
          require("@/assets/images/top_1_m.jpg"),
          require("@/assets/images/top_2_m.jpg"),
        ],
      },
      // bgImgM: [
      //   require("@/assets/images/top_1_m.jpg"),
      //   require("@/assets/images/top_2_m.jpg"),
      // ],
      // width: 0,
      // Height: 0,
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
  watch: {
    width() {
      this.changeDevice();
    },
  },
  computed: {
    hotProducts() {
      return this.productsAll.filter(function (item, index) {
        return item.hotProducts === 1;
      });
    },
    ...mapGetters("productsModules", ["productsAll"]),
    ...mapGetters(["width"]),
  },
  methods: {
    changeDevice() {
      if (this.width < 768) {
        this.device = "mobile";
      } else {
        this.device = "desk";
      }
    },
    ...mapActions("productsModules", ["getProductsAll"]),

    getTop(e) {
      var offset = e.offsetTop;
      if (e.offsetParent != null) {
        offset += this.getTop(e.offsetParent);
      }
      return offset;
    },
  },
  created() {
    this.getProductsAll();
  },
  mounted() {
    // console.log(this);
    // this.width = window.innerWidth;
    // console.log(this.Width);

    // window.onresize = () => {
    //   this.Width = window.innerWidth;
    //   // this.Height = window.innerHeight;
    // };
    this.changeDevice();
    // window.addEventListener("scroll", () => {
    //   console.log(this.$refs.test.getBoundingClientRect().top);
    //   console.log(this.getTop(this.$refs.test));
    //   console.log(this.$refs.test.offsetTop);
    //   console.log(document.documentElement.scrollTop);
    //   console.log(window.pageYOffset);
    // });
    // console.log(this.bgImg[this.device][0]);

    // //不知為何mounted後的值少100多，除非有事件或者是資料讀完才正常
    //     console.log(this.getTop(this.$refs.test));
    // window.addEventListener("scroll", () => {
    //   console.log(this.getTop(this.$refs.test));
    //   console.log(this.$refs.test.offsetTop);
    //   console.log(this.$refs.test.scrollTop);

    //   // console.log(this.scrollPosition>50);
    //   // console.log(document.documentElement.scrollTop,window.pageYOffset);
    // });
  },
};
</script>
