<template>
  <header>
    <nav class="nav">
      <button class="mobile-menu-toggle" @click.prevent="menuShow = !menuShow">
        <img src="@/assets/images/icon_bars.svg" alt="" />
      </button>
      <a href="" class="logo"><img src="@/assets/images/logo.svg" alt="" /></a>

      <ul class="menu-list" :class="{ active: menuShow }">
        <button class="menu-close" @click.prevent="menuShow = !menuShow">
          <img src="@/assets/images/icon_close.svg" alt="">
        </button>
        <li class="dropdown-wrapper">
          <a href="" class="dropdown-btn">購買水瓶</a>
          <div class="dropdown-box" :class="{ active: dropdownShow }">
            <a class="dropdown-box__item">吸管水瓶</a>
            <a class="dropdown-box__item">運動水瓶</a>
            <a class="dropdown-box__item">兒童水瓶</a>
            <a class="dropdown-box__item">不鏽鋼水瓶</a>
            <a class="dropdown-box__item">不鏽鋼杯</a>
          </div>
        </li>
        <li><a href="">了解水瓶</a></li>
      </ul>

      <ul class="side-menu">
        <li>
          <router-link to="/admin"><i class="fas fa-user"></i></router-link>
        </li>
        <li class="dropdown-wrapper">
          <a href="" class="dropdown-btn"
            ><i class="fas fa-shopping-cart"></i
          ></a>
          <div class="dropdown-box">購物車內容</div>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuShow: false,
      dropdownShow:false,
    };
  },
  methods: {},
};
</script>
