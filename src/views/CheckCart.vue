<template>
  <main class="page page--pt container-lg">
    <v-dialog />
    <h1 class="page__title">購物車清單</h1>
    <div v-if="cart.carts.length === 0">
      <p>您的購物車還沒有任何內容，趕快來挑選你喜歡的水瓶吧</p>
      <router-link class="btn btn-primary" to="/product-list">前往購物</router-link>
    </div>
    <div v-else>
      <div class="cart">
        <div class="cart__head bag-row no-gutters">
          <div class="cart__item">產品</div>
          <div class="cart__item">數量</div>
          <div class="cart__item">價格</div>
        </div>
        <div class="cart__list">
          <div
            class="cart__row bag-row no-gutters"
            v-for="item in cart.carts"
            :key="item.id"
          >
            <div class="cart__item bag-md-2 bag-3 cart__img">
              <img :src="item.product.imageUrl" :alt="item.product.title" />
            </div>
            <div class="bag-7 bag-md-8 bag-row no-gutters cart__group">
              <div class="cart__item cart__title bag-md-8">
                {{ item.product.title }}<br />
                <span class="text-success" v-if="item.coupon">已套用優惠券</span>
              </div>
              <div class="cart__item cart__num bag-md-4">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="addToCart(item.product_id, -1)"
                >
                  -
                </button>
                <span class="cart__num__content">{{ item.qty }}</span>
                <button
                  class="btn btn-outline-primary btn-sm"
                  :disabled="item.qty >= maxQty"
                  @click="addToCart(item.product_id, 1)"
                >
                  +
                </button>
              </div>
            </div>

            <div class="bag bag-row no-gutters cart__group">
              <div class="cart__item bag-md-9 cart__price">
                {{ item.final_total | currency }}
              </div>
              <div class="cart__item bag-md-3 cart__delete">
                <button class="button-none" @click="deleteCart(item.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="cart__bottom">
          <div class="coupon">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="請輸入優惠碼"
                v-model="coupon"
              />
              <button class="btn btn-outline-primary" @click="checkCoupon">套用</button>
            </div>
            <span class="text-danger-message" v-if="!couponSuccess">
              {{ errorMessage }}</span
            >
          </div>
          <div class="cart__total">
            <div class="cart__total__row" v-if="cart.total !== cart.final_total">
              <span class="cart__total__row__title">總額：</span>
              <span class="cart__total__row__content"> {{ cart.total | currency }}</span>
            </div>
            <div class="cart__total__row" v-if="cart.total !== cart.final_total">
              <span class="cart__total__row__title">折扣：</span>
              <span class="cart__total__row__content text-success">
                {{ (cart.total - cart.final_total) | currency }}
              </span>
            </div>
            <div class="cart__total__row">
              <span class="cart__total__row__title">應付：</span>
              <span class="cart__total__row__content text-danger">
                {{ cart.final_total | currency }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-wrapper-side delete-spacer">
        <router-link class="btn btn-outline-primary" to="/product-list"
          >繼續購物</router-link
        >

        <router-link to="/order/order-info" class="btn btn-primary">確認送出</router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      coupon: "",
      errorMessage: "",
      couponSuccess: true,
      maxQty: process.env.VUE_APP_MAX_QTY,
    };
  },
  computed: {
    ...mapGetters("cartModules", ["cart"]),
  },
  methods: {
    checkCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
      this.$store.commit("LOADING", true);
      this.$http.post(url, { data: { code: this.coupon } }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          this.couponSuccess = true;
          this.getCart();
        } else {
          this.couponSuccess = false;
          this.errorMessage = response.data.message;
        }
        this.$store.commit("LOADING", false);
      });
    },
    addToCart(id, qty) {
      this.$store.dispatch("cartModules/addToCart", { id, qty });
    },
    //  deleteCart(id) {
    //   this.$store.dispatch('deleteCart',id);

    // },
    ...mapActions("cartModules", ["getCart", "deleteCart"]),
  },
  created() {},
  beforeRouteLeave(to, from, next) {
    console.log(to, from, next);
    if (to.name !== "OrderInfo" && this.cart.carts.length !== 0) {
      this.$modal.show("dialog", {
        text: `購物車中還有${this.cart.carts.length}筆資料，確定要離開嗎？`,
        buttons: [
          {
            title: "取消",
            handler: () => {
              this.$modal.hide("dialog");
              next(false);
            },
          },
          {
            title: "確定",
            handler: () => {
              next();
            },
          },
        ],
      });
    } else {
      next();
    }
  },
};
</script>
