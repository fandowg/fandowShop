<template>
  <nav class="navbar bg-white">
    <button
      class="desk-hide-md button-none"
      @click.prevent="menuShow = !menuShow"
    >
      <img src="@/assets/images/icon_bars.svg" alt="" />
    </button>
    <a href="" class="logo"><img src="@/assets/images/logo.svg" alt="" /></a>
    <div class="menu menu--left off-canvas" :class="{ active: menuShow }">
      <button
        class="close-position desk-hide-md button-none"
        @click.prevent="menuShow = false"
      >
        <img src="@/assets/images/icon_close.svg" alt="" />
      </button>
      <ul class="menu__list">
        <li class="menu__item">
          <router-link class="menu__link" to="/admin/products"
            >產品管理</router-link
          >
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/admin/coupons"
            >優惠券管理</router-link
          >
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/admin/orderlist"
            >訂單列表</router-link
          >
        </li>
        <li class="menu__item">
          <router-link class="menu__link" to="/product-list"
            >進入商城</router-link
          >
        </li>
      </ul>
    </div>
    <ul class="menu__list menu__list--mobile-top">
      <li class="menu__item">
        <button class="menu__link" @click="logOut">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      menuShow: false
    }
  },
  watch: {
    $route: function () {
      this.menuShow = false
    }
  },
  methods: {
    logOut () {
      const url = `${process.env.VUE_APP_APIPATH}/logout`
      this.$store.commit('LOADING', true)
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          this.$bus.$emit('message:push', response.data.message)
          this.$router.push('/')
        }
        this.$store.commit('LOADING', false)
      })
    }
  }
}
</script>
