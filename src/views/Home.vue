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
            <h2>挑戰各種不可能！</h2>
            <h3>2021 運動水瓶，全新上市</h3>
            <router-link class="btn btn-primary btn-lg" to="/product-list/sport"
              >了解更多</router-link
            >
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
            <h3>全產品不含環境賀爾蒙 BPA</h3>
            <router-link class="btn btn-primary btn-lg" to="/product-list/kid"
              >了解更多</router-link
            >
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev">
        <img src="@/assets/images/prev.svg"  />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img src="@/assets/images/next.svg"  />
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <section class="section container-xl">
      <h3 v-scrollanimate><span>CAMELBAK，</span><span>不只是水瓶</span></h3>
      <ul class="introduction bag-row">
        <li class="introduction__item bag-xl-4 bag-md-6">
          <h4 v-scrollanimate>
            是提醒你喝水的好朋友<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_2.jpg"

            />
          </h4>
          <p v-scrollanimate>
            專利吸管咬嘴，實驗證實較一般水瓶多出 15% ~
            24% 的飲水量，讓忙碌工作的你，多喝點水。
          </p>
        </li>
        <li class="introduction__item bag-xl-4 bag-md-6">
          <h4 v-scrollanimate>
            是你努力衝刺的好推手<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_1.jpg"

            />
          </h4>
          <p v-scrollanimate>
            獨家專利 "噴射咬嘴閥"，擠壓瓶身即可直接飲水，你不須停下腳步，就可以暢快得補充水分。
          </p>
        </li>
        <li class="introduction__item bag-xl-4 bag-md-6">
          <h4 v-scrollanimate>
            是永續發展的推行者<img
              class="introduction__icon"
              src="@/assets/images/h3_icon_3.jpg"

            />
          </h4>
          <p v-scrollanimate>
            我們的目標是 "幫助人們不再使用一次性的瓶裝水"，為環保和永續發展盡一份力。
          </p>
        </li>
      </ul>
      <div class="btn-wrapper-center" v-scrollanimate>
        <router-link to="/about" class="btn btn-primary"> 深入了解 CAMELBAK </router-link>
      </div>
    </section>
    <section class="section container-xl" ref="test">
      <ul class="feature bag-row">
        <li class="feature__item bag-lg-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_1.jpg" alt="吸管水瓶" />
          </div>
          <div class="category__content">
            <h4>吸管水瓶</h4>
            <p>
              專利吸管咬嘴設計，咬嘴可自動閉合，即使不小心打翻也不溢漏，幫助你補充一整天水分。
            </p>
            <router-link class="btn btn-outline-primary" to="/product-list/straw"
              >了解更多</router-link
            >
          </div>
        </li>
        <li class="feature__item bag-lg-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_2.jpg" alt="運動水瓶" />
          </div>
          <div class="feature__content">
            <h4>運動水瓶</h4>
            <p>
              專為跑步或單車等高強度運動設計，讓運動員可以在不需停止的狀況下持續補水。
            </p>
            <router-link class="btn btn-outline-primary" to="/product-list/sport"
              >了解更多</router-link
            >
          </div>
        </li>
        <li class="feature__item bag-lg-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_3.jpg" alt="兒童水瓶" />
          </div>
          <div class="feature__content">
            <h4>兒童水瓶</h4>
            <p>
              針對 1-8
              歲孩童所設計，有效訓練小朋友自己喝水的習慣，減少飲料的攝取，輕咬即飲直覺式飲水模式。
            </p>
            <router-link class="btn btn-outline-primary" to="/product-list/kid"
              >了解更多</router-link
            >
          </div>
        </li>
        <li class="feature__item bag-lg-3 bag-sm-6" v-scrollanimate>
          <div class="feature__img">
            <img src="@/assets/images/category_4.jpg" alt="不鏽鋼水瓶" />
          </div>
          <div class="feature__content">
            <h4>不鏽鋼水瓶</h4>
            <p>
              採用 18/8
              不鏽鋼製成，真空保冰保溫，瓶身不冒汗，保養清洗簡單容易，瓶蓋可放置於洗碗機做清洗。
            </p>
            <router-link class="btn btn-outline-primary" to="/product-list/stainless-steel"
              >了解更多</router-link
            >
          </div>
        </li>
      </ul>
    </section>
    <section class="section container-xl">
      <ul class="bag-row feature">
        <li class="bag-lg-6 feature__item" v-scrollanimate>
          <div class="bag-row">
            <div class="bag-xl-6 bag-sm-4 feature__img img-small-md">
              <img src="@/assets/images/feature.jpg" alt="領取折扣，一起加油" />
            </div>
            <div class="bag-lg-6 bag-sm-8 feature__content">
              <h4>領取折扣，一起加油</h4>
              <p>
                3/30 前輸入優惠碼 needwater，全品項 8 折優惠，CAMELBAK 支持你的每個挑戰，為你加油。
              </p>
              <router-link class="btn btn-outline-primary" to="/product-list/all"
                >了解更多</router-link
              >
            </div>
          </div>
        </li>
        <li class="bag-lg-6 feature__item" v-scrollanimate>
          <div class="bag-row">
            <div class="bag-xl-6 bag-sm-4 feature__img img-small-md">
              <img src="@/assets/images/feature_2.jpg" alt="全新品項，酷炫登場" />
            </div>
            <div class="bag-xl-6 bag-sm-8 feature__content">
              <h4>全新品項，酷炫登場</h4>
              <p>
                補水也要補能量，看看我們最新的噴射水瓶，瞬間暢快補水，隨時隨地，展現自我。
              </p>
              <router-link
                class="btn btn-outline-primary"
                to="/product-list/sport/-MJzui6Ec5e3qvPxRY-S"
                >了解更多</router-link
              >
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="section container-xl">
      <h3 v-scrollanimate>選一個最熱銷的水瓶吧！</h3>
      <ul class="product bag-row">
        <li
          @click="toProductItem(item.category, item.id)"
          v-for="item in hotProducts"
          :key="item.id"
          class="product__item bag-lg-3 bag-sm-4 bag-6"
          v-scrollanimate
        >
          <div class="product__img">
            <img :src="item.imageUrl" :alt="item.title" />
          </div>
          <div class="product__content">
            <h4 class="product__title">
              {{ item.title }}
            </h4>
            <div class="product__bottom">
              <div>
                <h5 class="product__origin_price">NT${{ item.origin_price }}</h5>
                <h5 class="product__price">NT${{ item.price }}</h5>
              </div>
              <button
                class="product__addToCart btn btn-sm btn-primary"
                @click.stop="addToCart(item.id, 1)"
              >
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="btn-wrapper-center">
        <router-link to="/product-list" class="btn btn-primary"> 看更多水瓶 </router-link>
      </div>
    </section>
  </main>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      device: '',
      bgImg: {
        desk: [
          require('@/assets/images/top_1.jpg'),
          require('@/assets/images/top_2.jpg')
        ],
        mobile: [
          require('@/assets/images/top_1_m.jpg'),
          require('@/assets/images/top_2_m.jpg')
        ]
      },
      swiperOptions: {
        loop: true,
        speed: 800,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  watch: {
    width () {
      this.changeDevice()
    }
  },
  computed: {
    hotProducts () {
      return this.productsAll.filter(function (item, index) {
        return item.hotProducts === 1
      })
    },
    ...mapGetters('productsModules', ['productsAll']),
    ...mapGetters(['width'])
  },
  methods: {
    addToCart (id, qty) {
      this.$store.dispatch('cartModules/addToCart', { id, qty })
    },
    toProductItem (category, id) {
      this.$router.push({
        name: 'ProductItem',
        params: {
          category,
          id
        }
      })
    },
    changeDevice () {
      if (this.width < 768) {
        this.device = 'mobile'
      } else {
        this.device = 'desk'
      }
    },
    ...mapActions('productsModules', ['getProductsAll']),
    getTop (e) {
      var offset = e.offsetTop
      if (e.offsetParent != null) {
        offset += this.getTop(e.offsetParent)
      }
      return offset
    }
  },
  created () {
    this.getProductsAll()
  },
  mounted () {
    this.changeDevice()
  }
}
</script>
