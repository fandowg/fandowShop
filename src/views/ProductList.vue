<template>
  <main class="page">
    <div class="container-xl">
      <div class="product-top">
        <div class="bag-row no-gutters">
          <div class="bag-md-2 bag-4">
            <img src="@/assets/images/feature.jpg" alt="領取折扣，一起加油" />
          </div>
          <div class="bag-md-10 bag-8 product-top__content">
            <h2 class="product-top__title">領取折扣，一起加油</h2>
            <p class="product-top__text">
              結帳輸入 <span class="product-top__text__sp">needwater</span>，<br />全品項 8 折優惠<span class="mobile-hide-md"
                >，CAMELBAK 支持你的每個決定</span
              >。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xl">
      <div class="menu-block">
        <div class="nav-menu" ref="navMenu">
          <ul class="nav-menu__box">
            <li class="nav-menu__item">
              <router-link
                class="nav-menu__link"
                :class="{ active: currentCategory === 'all' }"
                :to="{
                  name: 'ProductListCategory',
                  params: { category: 'all', page: 1 },
                }"
                >所有水瓶</router-link
              >
            </li>
            <li class="nav-menu__item" v-for="item in categories" :key="item">
              <router-link
                class="nav-menu__link"
                :class="{ active: currentCategory === item }"
                :to="{
                  name: 'ProductListCategory',
                  params: { category: item },
                }"
                >{{ item | categoryChangeCn }}</router-link
              >
            </li>
          </ul>
        </div>
        <div class="side-box">
          <select class="form-control" name="sort" id="sort" v-model="sort">
            <option value="" disabled>價格排序</option>
            <option value="priceUp">價格高到低</option>
            <option value="priceDown">價格低到高</option>
          </select>
          <div class="search">
            <input
              type="text"
              id="search"
              class="form-control"
              placeholder="搜尋本分類"
              v-model="search"
            />
            <label for="search"><i class="fas fa-search"></i></label>
          </div>
        </div>
      </div>
      <ul class="product bag-row">
        <li
          v-for="item in productsByPage[currentPage]"
          :key="item.id"
          @click="toProductItem(item.category, item.id)"
          class="product__item bag-lg-3 bag-sm-4 bag-6 animate__fadeIn"
          :class="{ animate__animated: isShow }"
        >
          <div class="product__img">
            <img :src="item.imageUrl" :alt="item.title" />
          </div>
          <div class="product__content">
            <h3 class="product__title">
              {{ item.title }}
            </h3>
            <div class="product__bottom">
              <div>
                <h5 class="product__origin_price">
                  NT${{ item.origin_price }}
                </h5>
                <h5 class="product__price">NT${{ item.price }}</h5>
              </div>
              <button
                class="product__addToCart btn btn-sm btn-primary"
                @click.stop="addToCart(item.id, 1)"
              >
                <i class="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <Page
        ref="page"
        :products="filterProducts"
        @products-by-page="getProductsByPage"
        :current-page.sync="currentPage"
      />
    </div>
  </main>
</template>
<style lang="scss" scoped></style>
<script>
import Page from '@/components/Pagination.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      scrollPosition: 0,
      productsByPage: [],
      currentPage: 0,
      search: '',
      sort: '',
      isShow: false
    }
  },
  watch: {
    $route () {
      this.scrollToRight()
    },
    search () {
      this.currentPage = 0
    },
    currentCategory () {
      this.currentPage = 0
      this.itemShow()
    },
    filterProducts (val) {
      this.$refs.page.createPage(this.filterProducts)
    },
    currentPage () {
      this.toTop()
      this.itemShow()
    },
    productsAll () {
      setTimeout(this.scrollToRight, 0)
    }
  },
  computed: {
    currentCategory () {
      return this.$route.params.category
    },
    filterProducts () {
      if (this.currentCategory === 'all') {
        if (this.search === '') {
          if (this.sort === '') {
            return this.productsAll
          } else {
            return this.changeSort(this.productsAll)
          }
        } else {
          const filter = this.filterSearch(this.productsAll)
          if (this.sort === '') {
            return filter
          } else {
            return this.changeSort(filter)
          }
        }
      } else {
        const resault = this.productsAll.filter((item) => {
          return item.category === this.currentCategory
        })
        if (this.search === '') {
          if (this.sort === '') {
            return resault
          } else {
            return this.changeSort(resault)
          }
        } else {
          const filter = this.filterSearch(resault)
          if (this.sort === '') {
            return filter
          } else {
            return this.changeSort(filter)
          }
        }
      }
    },
    ...mapGetters('productsModules', ['categories', 'productsAll']),
    ...mapGetters(['width'])
  },
  methods: {
    itemShow () {
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 1000)
    },
    getProductsByPage (products) {
      this.productsByPage = products
    },
    changeSort (products) {
      this.currentPage = 0
      let newSort = []
      const newProducts = [...products]
      newSort = newProducts.sort((a, b) => {
        const aPrice = a.price ? a.price : a.origin_price
        const bPrice = b.price ? b.price : b.origin_price
        switch (this.sort) {
          case 'priceUp':
            return bPrice - aPrice
          case 'priceDown':
            return aPrice - bPrice
        }
      })
      return newSort
    },
    filterSearch (resault) {
      return resault.filter((item) => {
        return item.title.indexOf(this.search) !== -1
      })
    },
    ...mapActions('productsModules', ['getProductsAll']),
    toProductItem (category, id) {
      this.$router.push({
        name: 'ProductItem',
        params: {
          category,
          id
        }
      })
    },
    addToCart (id, qty) {
      this.$store.dispatch('cartModules/addToCart', { id, qty })
    },
    toTop () {
      document.documentElement.scrollTop = 0
    },
    scrollToRight () {
      if (this.width < 576) {
        if (
          this.currentCategory === 'kid' ||
          this.currentCategory === 'stainless-steel'
        ) {
          this.$refs.navMenu.scrollLeft = this.$refs.navMenu.offsetWidth
        } else {
          this.$refs.navMenu.scrollLeft = 0
        }
      }
    }
  },
  components: {
    Page
  },
  created () {
    this.getProductsAll()
  }
}
</script>
