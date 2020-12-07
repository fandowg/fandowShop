<template>
  <div class=" page-wrapper ">
    <div class="buying-page container-800">
      <h1>購物車清單</h1>
      <div class="cart">
        <div class="cart__head bag-row no-gutters">
          <div class="cart__item">產品</div>
          <div class="cart__item">數量</div>
          <div class="cart__item">價格</div>
        </div>
        <div class="cart__list">
          <div class="cart__row bag-row no-gutters">
            <div class="cart__item bag-md-2 bag cart__img">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/fandow%2F1602051639813.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gr8NrK5qG2VgsJI3Oe%2BfwiiCsI92hlxGyow%2BS8rFk7NhoGdxIByroXBjw%2FwJIXF2DL2l%2BR5uAyBqbPLCRS%2FOUjYE6beaXb5JVHNt5KWFhcVDMfeSJ19YlOB0Y6lB5b%2B7MFDJNiSOUDGV7xTFk1EJyKUwnnk%2FiBXNgxkfaIAj5vfWZplVL%2FZ0dn1iDnPzOwS54LA9wrtwnzJvv6ZaZVOqKzM9Bik1gSmelLZ9ddVlMur9YTHmoUxjwaDgzo91EKn1%2FIgroQF0XfOMNOnsdhLPljx%2BYwR8NDXWt8nbzpBYIkgmVxaTnvWsS1HTZgPueQg9xwESZLRohJDT09tMjpXjJw%3D%3D"
                alt=""
              />
            </div>
            <div class="bag-6 bag-md-7 bag-row no-gutters cart__group">
              <div class="cart__item cart__title bag-md-8">
                750ml eddy+ 多水吸管水瓶 骷髏黑
              </div>
              <div class="cart__item cart__num bag-md-4">
                <button class="btn btn-outline-primary btn-sm">-</button>
                <span class="cart__num__content">2</span>
                <button class="btn btn-outline-primary btn-sm">+</button>
              </div>
            </div>

            <div class="bag bag-row no-gutters cart__group">
              <div class="cart__item bag-md-9 cart__price">NT$5560</div>
              <div class="cart__item bag-md-3 cart__delete">
                <button class="btn">
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
      <div class="buying-btn">
        <a class="btn btn-outline-primary">繼續購物</a>
        <router-link to="/order-info" class="btn btn-primary">確認送出</router-link>
       
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
