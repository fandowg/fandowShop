<template>
  <header>
    <nav class="nav" :class="{scroll:isScroll}">
      <button class="mobile-menu-toggle" @click.prevent="menuShow = !menuShow">
        <img src="@/assets/images/icon_bars.svg" alt="" />
      </button>
      <a href="" class="logo"><img src="@/assets/images/logo.svg" alt="" /></a>

      <ul class="menu-list" :class="{ active: menuShow }">
        <button class="menu-close" @click.prevent="menuShow = false">
          <img src="@/assets/images/icon_close.svg" alt="">
        </button>
        <li class="menu-list__item dropdown-wrapper">
          <a href="" class="menu-list__link dropdown-btn" @click.prevent="toggleDropdown">購買水瓶 <i class="fas fa-chevron-down"></i></a>
          <div class="dropdown-box" :class="{ active: dropdownShow }" ref="closeDropdown" >
            <a class="dropdown-box__item" href="">吸管水瓶</a>
            <a class="dropdown-box__item" href="">運動水瓶</a>
            <a class="dropdown-box__item" href="">兒童水瓶</a>
            <a class="dropdown-box__item" href="">不鏽鋼水瓶</a>          
          </div>
        </li>
        <li class="menu-list__item"><a class="menu-list__link" href="">了解水瓶</a></li>
        <li class="menu-list__item"><router-link class="menu-list__link" to="/order">前往購物</router-link></li>
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
      isScroll:false,
    };
  },
  watch: {
    dropdownShow(){
       if(this.dropdownShow===true){
        document.addEventListener('click',this.closeBlank);
      }else {     
         document.removeEventListener('click',this.closeBlank);
      }
    }
  },
  methods: {
    toggleDropdown(e){   
      e.stopPropagation();         
      this.dropdownShow=!this.dropdownShow;     
    },
    closeBlank(e){
      console.log(this.$refs.closeDropdown);      
      if (!this.$refs.closeDropdown.contains(e.target)){
        this.dropdownShow=false;
      }

    }
  },
};
</script>
