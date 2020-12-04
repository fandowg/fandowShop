<template>
 <nav class="navbar bg-white">
    <button class="mobile-menu-toggle" @click.prevent="menuShow = !menuShow">
      <img src="@/assets/images/icon_bars.svg" alt="" />
    </button>
    <a href="" class="logo"><img src="@/assets/images/logo.svg" alt="" /></a>

    <div class="menu" :class="{ active: menuShow }">
      <button class="menu-close" @click.prevent="menuShow = false">
        <img src="@/assets/images/icon_close.svg" alt="" />
      </button>
      <ul class="menu__list">
       
       
        <li class="menu__item">
          <router-link class="menu__link" to="/admin/products"
            >產品頁面</router-link
          >
        </li>
         <li class="menu__item">
          <router-link class="menu__link" to="/admin/coupons"
            >優惠券頁面</router-link
          >
        </li>
         <li class="menu__item">
          <router-link class="menu__link" to="/admin/orderlist"
            >訂單列表</router-link
          >
        </li>
      </ul>
    </div>

    <ul class="side-menu">
      <router-link class="menu__link" to="/product-list"
            >進入商城</router-link
          >    
      <li>
        <button class="btn"  @click="logOut">登出</button >
      </li>
        
    </ul>
  </nav>

</template>
<script>
export default {
   data() {
    return {
      menuShow: false,
 
    };
  },
  methods: {
    logOut() {
      const url = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http.post(url).then(response => {
        if (response.data.success) {
          console.log(response.data);
          this.$bus.$emit('message:push',response.data.message);   
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
