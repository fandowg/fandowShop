<template>
  <div class="container-xl page-wrapper">
    <div class="buying-page">
      <h1>購物車清單</h1>
      
    <div class="stap">
      <ul>
        <li>1.填寫資料</li>
        <li>2.完成付款</li>
        <li>3.訂單完成</li>
      </ul>
    </div>
      <div class="cart">
        <div class="cart__head bag-row no-gutters">
          <div class="cart__item">產品</div>
          <div class="cart__item">數量</div>
          <div class="cart__item">價格</div>
        </div>
        <div class="cart__list">
          <div class="cart__row bag-row no-gutters">
            <div class="cart__item bag-3 cart__img">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/fandow%2F1602051639813.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gr8NrK5qG2VgsJI3Oe%2BfwiiCsI92hlxGyow%2BS8rFk7NhoGdxIByroXBjw%2FwJIXF2DL2l%2BR5uAyBqbPLCRS%2FOUjYE6beaXb5JVHNt5KWFhcVDMfeSJ19YlOB0Y6lB5b%2B7MFDJNiSOUDGV7xTFk1EJyKUwnnk%2FiBXNgxkfaIAj5vfWZplVL%2FZ0dn1iDnPzOwS54LA9wrtwnzJvv6ZaZVOqKzM9Bik1gSmelLZ9ddVlMur9YTHmoUxjwaDgzo91EKn1%2FIgroQF0XfOMNOnsdhLPljx%2BYwR8NDXWt8nbzpBYIkgmVxaTnvWsS1HTZgPueQg9xwESZLRohJDT09tMjpXjJw%3D%3D"
                alt=""
              />
            </div>
            <div class="bag-6 bag-row no-gutters cart__group">
              <div class="cart__item cart__title bag-md-9">
                750ml eddy+ 多水吸管水瓶 骷髏黑
              </div>
              <div class="cart__item cart__num bag-md-3">
                <button class="btn btn-outline-primary btn-sm">-</button>
                <span class="cart__num__content">2</span>
                <button class="btn btn-outline-primary btn-sm">+</button>
              </div>
            </div>

            <div class="bag-3 bag-row no-gutters cart__group">
              <div class="cart__item bag-md-6 cart__price">NT$560</div>
              <div class="cart__item bag-md-6 cart__delete">
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
        <a class="btn btn-primary">前往結帳</a>
      </div>
    </div>

    <!-- <form >
      <h2>訂購資料</h2>

      <div class="form-group">
        <label for="name"></label>
        <input type="text" id="name" placeholder="請輸入姓名" />
      </div>
      <div class="form-group">
        <label for="name"></label>
        <input type="text" id="name" placeholder="請輸入email" />
      </div>
    </form> -->

    <!-- <form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form> -->
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
