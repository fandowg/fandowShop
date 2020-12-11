<template>
  <div>
    <h2 class="buying-page__title--sm">商品明細</h2>
    <div class="cart no-delete">
      <div class="cart__head bag-row no-gutters">
        <div class="cart__item">產品</div>
        <div class="cart__item">數量</div>
        <div class="cart__item">價格</div>
      </div>
      <div class="cart__list">
        <div class="cart__row bag-row no-gutters">
          <div class="cart__item bag bag-md-2 cart__img">
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
              <span class="cart__num__content no-padding">2 個</span>
            </div>
          </div>
          <div class="bag cart__item cart__price">NT$560</div>
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
    <h2 class="buying-page__title--sm">填寫資料</h2>
    <div class="form order">
      <div class="form-row">
        <div class="bag-md-6 form-group">
          <label for="name">姓名</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="請輸入姓名"
          />
        </div>
        <div class="bag-md-6 form-group">
          <label for="phone">手機</label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="請輸入手機號碼"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="email">email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="請輸入mail"
        />
      </div>

      <div class="form-group-wrapper">
        <label for="address">收件人地址</label>
        <div class="form-row">
          <div class="bag-md-3 bag-6 form-group">
            <select class="form-control" name="" id="">
              <option value="">請選擇縣市</option>
            </select>
          </div>
          <div class="bag-md-3 bag-6 form-group">
            <select class="form-control" name="" id="">
              <option value="">請選擇鄉政市區</option>
            </select>
          </div>
          <div class="bag-md-6 form-group">
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="請輸入收件人地址"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="comment">備註</label>
        <textarea
          class="form-control"
          name=""
          id="comment"
          rows="4"
          placeholder=""
        ></textarea>
      </div>
    </div>

    <div class="btn-wrapper-side">
      <a class="btn btn-outline-primary">回購物車</a>
      <router-link to="/order/payment" class="btn btn-primary">建立訂單</router-link>
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
