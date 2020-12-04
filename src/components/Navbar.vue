<template>
  <nav class="navbar" :class="{ 'bg-white': scrollPosition > 50 || checkHome }">
    <button class="mobile-menu-toggle" @click.prevent="menuShow = !menuShow">
      <img src="@/assets/images/icon_bars.svg" alt="" />
    </button>
    <a href="" class="logo"><img src="@/assets/images/logo.svg" alt="" /></a>

    <div class="menu" :class="{ active: menuShow }">
      <button class="menu-close" @click.prevent="menuShow = false">
        <img src="@/assets/images/icon_close.svg" alt="" />
      </button>
      <ul class="menu__list">
        <li class="menu__item dropdown" ref="closeDropdown">
          <a
            href=""
            class="menu__link dropdown__btn"
            @click.prevent="toggleDropdown($event)"
            >購買水瓶 <i class="fas fa-chevron-down"></i
          ></a>
          <div
            class="dropdown__box navbar-dropdown"
            :class="{ active: dropdownShow }"
          >
            <a class="dropdown__item" href="">吸管水瓶</a>
            <a class="dropdown__item" href="">運動水瓶</a>
            <a class="dropdown__item" href="">兒童水瓶</a>
            <a class="dropdown__item" href="">不鏽鋼水瓶</a>
          </div>
        </li>
        <li class="menu__item"><a class="menu__link" href="">了解水瓶</a></li>
        <li class="menu__item">
          <router-link class="menu__link" to="/check-cart"
            >前往購物</router-link
          >
        </li>
      </ul>
    </div>

    <ul class="side-menu">
      <li>
        <router-link to="/admin"><i class="fas fa-user"></i></router-link>
      </li>
      <li class="dropdown" ref="closeCart">
        <a href="" @click.prevent="toggleCart($event)" class="dropdown__btn"
          ><i class="fas fa-shopping-cart"></i
        ></a>
        <div
          class="dropdown__box dropdown__box--right no-padding"
          :class="{ active: cartShow }"
        >
          <div class="cart">
            <div class="cart__head bag-row no-gutters">
              <div class="cart__item bag-6">產品</div>
              <div class="cart__item bag">數量</div>
              <div class="cart__item bag-3">價格</div>
              <div class="cart__item bag"></div>            
            </div>
            <div class="cart__list">
              <div class="cart__row bag-row no-gutters">
                <div class="cart__item bag-6 cart__title">
                  750ml eddy+ 多水吸管水瓶 骷髏黑
                </div>
                <div class="cart__item bag cart__num">
                  <span class="cart__num__content">12</span>
                </div>

                <div class="cart__item bag-3 cart__price">NT$5560</div>
                <div class="cart__item bag cart__delete">
                  <button class="btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <div class="cart__row bag-row no-gutters">
                <div class="cart__item bag-6 cart__title">
                  750ml eddy+ 多水吸管水瓶 骷髏黑
                </div>
                <div class="cart__item bag cart__num">
                  <span class="cart__num__content">12</span>
                </div>

                <div class="cart__item bag-3 cart__price">NT$5560</div>
                <div class="cart__item bag cart__delete">
                  <button class="btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
           
          </div>
          <div class="btn-wrapper">
            <a href="" class="btn btn-primary btn-full">前往結帳</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menuShow: false,
      dropdownShow: false,
      cartShow: false,
      // changeNavBg: false,
      scrollPosition: 0,
    };
  },
  watch:{
    '$route':function(){
      this.menuShow=false;
    },
  },
  computed: {
    checkHome() {
      return this.$route.name !== "Home";
    },
  },

  methods: {
    toggleDropdown(e) {
      // e.stopPropagation();
      this.dropdownShow = !this.dropdownShow;
      if (this.dropdownShow === true) {
        document.addEventListener("click", this.closeBlankDropdown);
      }
    },
    toggleCart(e) {
      // e.stopPropagation();
      this.cartShow = !this.cartShow;
      if (this.cartShow === true) {
        document.addEventListener("click", this.closeBlankCart);
      }
    },
    closeBlankDropdown(e) {
      console.log(this.$refs.closeDropdown);
      if (!this.$refs.closeDropdown.contains(e.target)) {
        this.dropdownShow = false;
        document.removeEventListener("click", this.closeBlankDropdown);
      }
    },
    closeBlankCart(e) {
      console.log(this.$refs.closeCart);
      if (!this.$refs.closeCart.contains(e.target)) {
        this.cartShow = false;
        document.removeEventListener("click", this.closeBlankCart);
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", () => {
      this.scrollPosition = window.pageYOffset;
      // console.log(this.scrollPosition>50);
      // console.log(document.documentElement.scrollTop,window.pageYOffset);
    });
  },
};
</script>
