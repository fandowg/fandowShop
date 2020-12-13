<template>
  <div class=" page-wrapper ">
    <div class="buying-page container-800">
      <h1 class="buying-page__title">購物車清單</h1>
      <div class="cart">
        <div class="cart__head bag-row no-gutters">
          <div class="cart__item">產品</div>
          <div class="cart__item">數量</div>
          <div class="cart__item">價格</div>
        </div>
        <div class="cart__list">
          <div class="cart__row bag-row no-gutters" v-for="item in cart.carts" :key="item.id">
            <div class="cart__item bag-md-2 bag-3 cart__img">
              <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
              />
            </div>
            <div class="bag-7 bag-md-8 bag-row no-gutters cart__group">
              <div class="cart__item cart__title bag-md-8">
             {{item.product.title}}
              </div>
              <div class="cart__item cart__num bag-md-4">
                <button class="btn btn-outline-primary btn-sm" @click="addToCart(item.id, 1)">-</button>
                <span class="cart__num__content">{{item.qty}}</span>
                <button class="btn btn-outline-primary btn-sm" @click="addToCart(item.id, -1)">+</button>
              </div>
            </div>

            <div class="bag bag-row no-gutters cart__group">
              <div class="cart__item bag-md-9 cart__price">{{item.final_total}}元</div>
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
              />
              <button class="btn btn-outline-primary">套用</button>
            </div>
          </div>
          <div class="cart__total">
            <div class="cart__total__row">
              <span class="cart__total__row__title">總額：</span>
              <span class="cart__total__row__content">NT$560</span>
            </div>
             <div class="cart__total__row">
              <span class="cart__total__row__title">折扣:</span>
              <span class="cart__total__row__content">12</span>
            </div>
            <div class="cart__total__row">
              <span class="cart__total__row__title">應付 : </span>
              <span class="cart__total__row__content">NT$560</span>
            </div>

            
          </div>
        </div>
      </div>
      <div class="btn-wrapper-side delete-spacer">
        <a class="btn btn-outline-primary">繼續購物</a>
        <router-link to="/order/order-info" class="btn btn-primary">確認送出</router-link>
       
      </div>
    </div>

    
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  data() {
    return {

    };
  },
  computed:{
    ...mapGetters(['cart']),
  },
  methods: {
     addToCart(id, qty) {
      this.$store.dispatch('addToCart',{id, qty});     
    },
    //  deleteCart(id) {
    //   this.$store.dispatch('deleteCart',id);
        
    // },
     ...mapActions(['getCart','deleteCart']),
  },
  created() {
    
  },
};
</script>
