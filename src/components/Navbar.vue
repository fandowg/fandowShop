<template>
  <nav class="navbar" :class="{ 'bg-white': scrollPosition > 50 || checkHome }">
    <button
      class="desk-hide-md button-none"
      @click="menuShow = !menuShow"
    >
      <img src="@/assets/images/icon_bars.svg"  />
    </button>
    <router-link class="logo" to="/"
      ><img src="@/assets/images/logo.svg" alt="CAMELBAK"
    /></router-link>
    <div class="menu menu--left off-canvas" :class="{ active: menuShow }">
      <button
        class="close-position desk-hide-md button-none"
        @click="menuShow = false"
      >
        <img src="@/assets/images/icon_close.svg"  />
      </button>
      <ul class="menu__list">
        <li class="menu__item dropdown" ref="closeDropdown">
          <a
            class="menu__link dropdown__btn"
            @click.prevent="toggleDropdown"
            >購買水瓶 <i class="fas fa-chevron-down"></i
          ></a>
          <ul
            class="dropdown__box navbar-dropdown"
            :class="{ active: dropdownShow }"
          >
          <li class="dropdown__item">
            <router-link
              @click.native="closeMenu()"
              class="dropdown__link"
              to="/product-list/all"
              >所有水瓶</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link
              @click.native="closeMenu()"
              class="dropdown__link"
              to="/product-list/straw"
              >吸管水瓶</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link
              @click.native="closeMenu()"
              class="dropdown__link"
              to="/product-list/sport"
              >運動水瓶</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link
              @click.native="closeMenu()"
              class="dropdown__link"
              to="/product-list/kid"
              >兒童水瓶</router-link
            >
          </li>
          <li class="dropdown__item">
            <router-link
              @click.native="closeMenu()"
              class="dropdown__link"
              to="/product-list/stainless-steel"
              >不鏽鋼水瓶</router-link
            >
          </li>
          </ul>
        </li>
        <li class="menu__item">
          <router-link
            @click.native="closeMenu()"
            class="menu__link"
            to="/about"
            >深入了解CAMELBAK</router-link
          >
        </li>
      </ul>
    </div>
    <ul class="menu__list menu__list--mobile-top">
      <li class="menu__item">
        <router-link class="menu__link" to="/admin"
          ><i class="fas fa-user"></i
        ></router-link>
      </li>
      <li class="dropdown menu__item" ref="closeCart">
        <a  @click.prevent="toggleCart" class="menu__link dropdown__btn"
          ><i class="fas fa-shopping-cart"></i
          ><span class="cart-qty-icon" v-if="cartLength > 0">{{
            cartLength
          }}</span>
        </a>
        <div
          class="dropdown__box dropdown__box--right no-padding"
          :class="{ active: cartShow }"
        >
          <div v-if="cartLength > 0">
            <div class="cart">
              <div class="cart__head bag-row no-gutters">
                <div class="cart__item bag-7">產品</div>
                <div class="cart__item bag-2">數量</div>
                <div class="cart__item bag-2">價格</div>
                <div class="cart__item bag"></div>
              </div>
              <div class="cart__list">
                <div
                  class="cart__row bag-row no-gutters"
                  v-for="item in cart.carts"
                  :key="item.id"
                >
                  <div class="cart__item bag-7 cart__title">
                    {{ item.product.title }}
                  </div>
                  <div class="cart__item bag-2 cart__num">
                    <span class="cart__num__content no-padding"
                      >{{ item.qty }} {{ item.product.unit }}</span
                    >
                  </div>
                  <div class="cart__item bag-2 cart__price">
                    {{ item.final_total | currency }}
                  </div>
                  <div class="cart__item bag cart__delete">
                    <button class="button-none" @click="deleteCart(item.id)">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-wrapper-side delete-spacer">
              <router-link class="btn btn-primary btn-full" to="/check-cart"
                >前往結帳</router-link
              >
            </div>
          </div>
          <div class="box-default" v-else>
            <p>購物車是空的喔，趕快來選購吧</p>
            <router-link class="btn btn-primary" to="/product-list"
              >前往購物</router-link
            >
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      menuShow: false,
      dropdownShow: false,
      cartShow: false,
      scrollPosition: 0
    }
  },
  watch: {
    $route: function () {
      this.menuShow = false
      this.mobileOpenDropdown()
      this.cartShow = false
    },
    width () {
      this.mobileOpenDropdown()
    },
    menuShow (val) {
      if (val) {
        this.dropdownShow = true
      }
    }
  },
  computed: {
    checkHome () {
      return this.$route.name !== 'Home'
    },
    cartLength () {
      return this.cart.carts.length
    },
    ...mapGetters('cartModules', ['cart']),
    ...mapGetters(['width'])
  },
  methods: {
    toggleDropdown () {
      this.dropdownShow = !this.dropdownShow
      if (this.dropdownShow === true) {
        document.addEventListener('click', this.closeBlankDropdown)
      } else {
        document.removeEventListener('click', this.closeBlankDropdown)
      }
    },
    toggleCart () {
      this.cartShow = !this.cartShow
      if (this.cartShow === true) {
        document.addEventListener('click', this.closeBlankCart)
      } else {
        document.removeEventListener('click', this.closeBlankCart)
      }
    },
    closeBlankDropdown (e) {
      if (!this.$refs.closeDropdown.contains(e.target)) {
        this.dropdownShow = false
        document.removeEventListener('click', this.closeBlankDropdown)
      }
    },
    closeBlankCart (e) {
      if (!this.$refs.closeCart.contains(e.target)) {
        this.cartShow = false
        document.removeEventListener('click', this.closeBlankCart)
      }
    },
    ...mapActions('cartModules', ['getCart', 'deleteCart']),
    mobileOpenDropdown () {
      if (this.width < 768) {
        this.dropdownShow = true
      } else {
        this.dropdownShow = false
      }
    },
    closeMenu () {
      this.menuShow = false
      this.dropdownShow = false
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    this.mobileOpenDropdown()
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.pageYOffset
    })
  }
}
</script>
