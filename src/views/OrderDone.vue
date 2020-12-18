<template>

     
      <div>
    
    <div class="alert-box">
      <h1 class="buying-page__title"><i class="far fa-check-circle"></i>感謝你的購買</h1>
      <p>親愛的顧客您好，您已付款成功，商品將於2日內送達，若喜歡我們的商品，歡迎關注我們的最新消息喔。</p>
    </div>
    <h2 class="buying-page__title--sm">商品明細</h2> 
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
          <!-- <div class="cart__total__row" v-if="cart.total !== cart.final_total">
            <span class="cart__total__row__title">總額：</span>
            <span class="cart__total__row__content">
              {{ cart.total | currency }}</span
            >
          </div>
          <div class="cart__total__row" v-if="cart.total !== cart.final_total">
            <span class="cart__total__row__title">折扣：</span>
            <span class="cart__total__row__content text-success">
              {{ (cart.total - cart.final_total) | currency }}
            </span>
          </div> -->
          <div class="cart__total__row">
            <span class="cart__total__row__title">總額：</span>
            <span class="cart__total__row__content text-danger">
              {{ order.total | currency }}
            </span>
          </div>
        </div>
      </div>
    </div>
      <h2 class="buying-page__title--sm">訂購人資訊</h2> 

      <div class="order-detail">
      <div class="order-detail__row">
        <div class="order-detail__title">姓名</div>
        <div class="order-detail__content">{{order.user.name}}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">手機</div>
        <div class="order-detail__content">{{order.user.tel}}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">email</div>
        <div class="order-detail__content">{{order.user.email}}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">收件人地址</div>
        <div class="order-detail__content">
          {{order.user.address}}
        </div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">備註</div>
        <div class="order-detail__content"> {{order.message}}</div>
      </div>
      <div class="order-detail__row">
        <div class="order-detail__title">付款狀態</div>
        <div class="order-detail__content">未付款</div>
      </div>
    </div>

  

      <div class="btn-wrapper-side">
        <!-- <a class="btn btn-outline-primary">放棄訂單</a> -->
        <a class="btn btn-primary">繼續逛逛</a>
      </div>
    </div>


 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      order: {
        user:{
          // name:'',
          // email:'',
          // tel:'',
          // address:'',
        },
        // message:'',
      },
    };
  },
  computed: {
    ...mapGetters("cartModules", ["cart"]),
  },
  methods: {
    getOrder() {
      const order_id = this.$route.params.id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${order_id}`;
      this.$http.get(url, order_id).then((response) => {
        this.order = response.data.order;
        console.log(response.data);
      });
    },
    PayOrder(){

    },
    ...mapActions("cartModules", ["getCart"]),
  },
  created() {
    this.getOrder();
  },
};
</script>
