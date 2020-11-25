<template>
  <div id="app">
    <!-- <img src="@/assets/logo.svg" alt=""> -->
    <Alert></Alert>
    <loading :active.sync="isLoading" color="#006699" loader="bars" background-color="#fff">
      <template slot="before">讀取中</template>
    </loading>
     <Navbar />
    <router-view/>
    <Footer/>
    <a href="" @click.prevent="toTop" class="to-top-btn" :class="{'show':scrollPosition > 100}"><img src="@/assets/images/totop.svg" alt=""></a>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/all";

</style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  data(){
    return{
      isLoading: false,
      scrollPosition:0,
      // toTop:false,
    }
    
  },
  methods:{
     changeLoading(v) {
      this.isLoading = v;
     
    },
    toTop(){
      document.documentElement.scrollTop = 0;
    }
  },
  created(){
    this.$bus.$on('changeLoading',(v)=>{
      this. changeLoading(v);
    });
    
  },
  mounted() {
     window.addEventListener('scroll',()=>{
    this.scrollPosition = window.pageYOffset;
 
    });
  },
  beforeDestroy(){
    this.$bus.$off('changeLoading');
  },
   components: {
    Navbar,
    Footer
  },
};
</script>
