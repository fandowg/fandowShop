<template>
  <div id="app">
    <!-- <img src="@/assets/logo.svg" alt=""> -->
    <Alert></Alert>
    <loading :active.sync="isLoading" color="#006699" loader="bars" background-color="#fff">
      <template slot="before">讀取中</template>
    </loading>
     <Navbar v-if="isShow" />
    <router-view/>
    <Footer v-if="isShow" />
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
      // isLoading: false,
      scrollPosition:0,
      isShow:true,
      // toTop:false,
    }
    
  },
  watch: {
    $route: {
      immediate: true,
      handler (newVal, oldVal) {
        let regex = new RegExp('admin', 'gi')
        let value = newVal.path
        let result = value.match(regex)
        if (result !== null) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    }
  },
  computed:{
    isLoading(){
      return this.$store.state.isLoading;
    }
  },
  methods:{
    //  changeLoading(v) {
    //   this.isLoading = v;
     
    // },
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
