<template>
  <div class="container-800 page-wrapper">
    <div class="buying-page">
     
      
    <div class="step">
      <ul class="step__list">
        <li class="step__item "><span class="step__item__num"><i class="fas fa-angle-double-right"></i></span>填寫資料</li>
        <li class="step__item active"><span class="step__item__num"><i class="fas fa-angle-double-right"></i></span>完成付款</li>
        <li class="step__item"><span class="step__item__num"><i class="fas fa-angle-double-right"></i></span>訂單完成</li>
      </ul>
    </div>
    <h2>商品明細</h2> 
      <div class="cart no-delete">
        <div class="cart__head bag-row no-gutters">
          <div class="cart__item">產品</div>
          <div class="cart__item">數量</div>
          <div class="cart__item">價格</div>
        </div>
        <div class="cart__list">
          <div class="cart__row bag-row no-gutters">
            <div class="cart__item bag bag-md-2  cart__img">
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
               
                <span class="cart__num__content">2 個</span>
               
              </div>
            </div>
              <div class="bag cart__item  cart__price">NT$560</div>
          </div>
          
        </div>
        <div class="cart__bottom">
        
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
      <h2>訂購人資訊</h2> 

      <div class="order-detail">
        <div class="order-detail__row">
          <div class="order-detail__title">
            姓名
          </div>
          <div class="order-detail__content">
            范宇宏            
          </div>
        </div>
        <div class="order-detail__row">
          <div class="order-detail__title">
            手機
          </div>
          <div class="order-detail__content">
           0922222222           
          </div>
        </div>
        <div class="order-detail__row">
          <div class="order-detail__title">
            email
          </div>
          <div class="order-detail__content">
           fandow@msn.com         
          </div>
        </div>
        <div class="order-detail__row">
          <div class="order-detail__title">
            收件人地址
          </div>
          <div class="order-detail__content">
           234新北市永和區永元路17巷29號5樓         
          </div>
        </div>
        <div class="order-detail__row">
          <div class="order-detail__title">
            備註
          </div>
          <div class="order-detail__content">
                
          </div>
        </div>
         <div class="order-detail__row">
          <div class="order-detail__title">
            付款狀態
          </div>
          <div class="order-detail__content">
                未付款
          </div>
        </div>
      </div>

  

      <div class="buying-btn no-delete">
        <!-- <a class="btn btn-outline-primary">放棄訂單</a> -->
        <router-link to="/order-done" class="btn btn-primary">確認付款</router-link>
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