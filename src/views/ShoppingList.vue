<template>
  <div class="container-xl">

    <main>
      <div class="product-list one-wrapper">
        <div class="one-md-4" v-for="item in shoppingList" :key="item.id">
          <img :src="item.imageUrl" :alt="item.title">
          <div class="item-info">
             <h3>{{item.title}}</h3>

             <div class="bottom-info">
               <span v-if="!item.price">{{item.origin_price}}</span>
               <del v-if="item.price">{{item.origin_price}}</del>
               <span v-if="item.price">{{item.price}}</span>
             </div>
          </div>

        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shoppingList: []
    }
  },
  methods: {
    getShoppingList (page = 1) {
      this.$bus.$emit('changeLoading', true)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      this.$http.get(url).then(response => {
        this.shoppingList = response.data.products
        this.pagination = response.data.pagination
        this.$bus.$emit('changeLoading', false)
        console.log(this.shoppingList)
      })
    }
  },
  created () {
    this.getShoppingList(1)
  }
}
</script>
