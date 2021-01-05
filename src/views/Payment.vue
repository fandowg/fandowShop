<template>
  <div>
    <v-dialog />
    <div class="alert-box" v-if="routeName === 'OrderDone'">
      <h1 class="page__title">
        <i class="far fa-check-circle"></i>感謝你的購買
      </h1>
      <p>
        親愛的顧客您好，您已付款成功，商品將於 2 日內送達，若喜歡我們的商品，歡迎關注我們的最新消息喔。
      </p>
    </div>
    <h2 class="page__title--sm">商品明細</h2>
    <div class="cart no-delete">
      <div class="cart__head bag-row no-gutters">
        <div class="cart__item">產品</div>
        <div class="cart__item">數量</div>
        <div class="cart__item">價格</div>
      </div>
      <div class="cart__list">
        <div
          class="cart__row bag-row no-gutters"
          v-for="(item, key) in order.products"
          :key="key"
        >
          <div class="cart__item bag-3 bag-md-2 cart__img">
            <img :src="item.product.imageUrl" alt="item.product.title" />
          </div>
          <div class="bag-7 bag-md-8 bag-row no-gutters cart__group">
            <div class="cart__item cart__title bag-md-8">
              {{ item.product.title }}
            </div>
            <div class="cart__item cart__num bag-md-4">
              <span class="cart__num__content no-padding"
                >{{ item.qty }}{{ item.product.unit }}</span
              >
            </div>
          </div>
          <div class="bag cart__item cart__price">
            {{ item.final_total | currency }}
          </div>
        </div>
      </div>
      <div class="cart__bottom">
        <div class="cart__total">
          <div class="cart__total__row">
            <span class="cart__total__row__title">總額：</span>
            <span class="cart__total__row__content text-danger">
              {{ order.total | currency }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="page__title--sm">訂購人資訊</h2>
    <div class="order-detail">
      <div class="order-detail__row">
        <div class="order-detail__title">姓名</div>
        <div class="order-detail__content">{{ order.user.name }}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">手機</div>
        <div class="order-detail__content">{{ order.user.tel }}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">email</div>
        <div class="order-detail__content">{{ order.user.email }}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">收件人地址</div>
        <div class="order-detail__content">
          {{ order.user.address }}
        </div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">備註</div>
        <div class="order-detail__content">{{ order.message }}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">付款狀態</div>
        <div class="order-detail__content">
          <span class="text-danger" v-if="!order.is_paid">未付款</span
          ><span class="text-success" v-else>已付款</span>
        </div>
      </div>
    </div>
    <div class="btn-wrapper-side">
      <button
        class="btn btn-primary"
        @click="payOrder"
        v-if="routeName === 'Payment'"
      >
        確認付款
      </button>
      <router-link
        class="btn btn-primary"
        to="/product-list"
        v-if="routeName === 'OrderDone'"
        >繼續逛逛</router-link
      >
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      order: {
        user: {}
      }
    }
  },
  computed: {
    orderId () {
      return this.$route.params.id
    },
    routeName () {
      return this.$route.name
    },
    ...mapGetters('cartModules', ['cart'])
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${this.orderId}`
      this.$store.commit('LOADING', true)
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.order = response.data.order
          if (response.data.order === null) {
            this.$bus.$emit('message:push', '訂單不存在', 'text-danger')
          }
        }
        this.$store.commit('LOADING', false)
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${this.orderId}`
      this.$store.commit('LOADING', true)
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          this.$bus.$emit('message:push', response.data.message)
          this.getOrder()
          this.$router.push({
            name: 'OrderDone',
            params: {
              id: this.orderId
            }
          })
        }
        this.$store.commit('LOADING', false)
      })
    },
    ...mapActions('cartModules', ['getCart'])
  },
  created () {
    this.getOrder()
  },
  beforeRouteLeave (to, from, next) {
    if (from.name === 'OrderDone' && to.name === 'Payment') {
      next({
        path: '/'
      })
    }
    if (
      to.name !== 'OrderDone' &&
      from.name !== 'OrderDone' &&
      !this.order.is_paid
    ) {
      this.$modal.show('dialog', {
        text: '您尚未付款，確定要離開嗎？',
        buttons: [
          {
            title: '取消',
            handler: () => {
              this.$modal.hide('dialog')
              next(false)
            }
          },
          {
            title: '確定',
            handler: () => {
              next()
            }
          }
        ]
      })
    } else {
      next()
    }
  }
}
</script>
