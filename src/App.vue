<template>
  <div id="app">
    <Alert />
    <Loading
      :active.sync="isLoading"
      color="#000"
      loader="spinner"
      background-color="#fff"
    />
    <Navbar v-if="isShow" />
    <router-view />
    <Footer v-if="isShow" />
    <a
      @click.prevent="toTop"
      class="to-top-btn"
      :class="{ show: scrollPosition > 100 }"
      ><img src="@/assets/images/totop.svg"
    /></a>
  </div>
</template>
<style lang="scss">
@import "@/assets/scss/main";
</style>
<script>
import Alert from './components/Alert.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      scrollPosition: 0,
      isShow: true
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (val) {
        const check = val.path.indexOf('admin')
        if (check !== -1) {
          this.isShow = false
        } else {
          this.isShow = true
        }
      }
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    toTop () {
      let top = document.documentElement.scrollTop
      const toTop = setInterval(() => {
        document.documentElement.scrollTop = top -= 50
        if (top <= 0) {
          clearInterval(toTop)
        }
      }, 10)
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollPosition = window.pageYOffset
    })
    this.$store.dispatch('watchResize')
  },
  components: {
    Navbar,
    Footer,
    Alert
  }
}
</script>
