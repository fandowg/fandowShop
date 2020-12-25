<template>
  <nav aria-label="Page navigation" v-if="products.length > 0">
    <ul class="pagination">
      <li class="pagination__item">
        <a
          class="pagination__link"
          @click.prevent="prev"
          :class="{
            disabled: currentPage === 0,
          }"
        >
          <img v-if="currentPage !== 0" src="@/assets/images/prev_page.svg" alt="" />
          <img v-else src="@/assets/images/prev_page_disabled.svg" alt="" />
        </a>
      </li>
      <li class="pagination__item" v-for="page in totalPage" :key="page">
        <a
          class="pagination__link"
          :class="{
            active: currentPage === page - 1,
            disabled: totalPage === 1,
          }"
          href=""
          @click.prevent="$emit('update:currentPage', page - 1)"
          >{{ page }}</a
        >
      </li>
      <li class="pagination__item">
        <a
          class="pagination__link"
          @click.prevent="next"
          :class="{
            disabled: currentPage === totalPage - 1,
          }"
          ><img
            v-if="currentPage !== totalPage - 1"
            src="@/assets/images/next_page.svg"
            alt="" />
          <img v-else src="@/assets/images/next_page_disabled.svg" alt=""
        /></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["products", "currentPage"],
  data() {
    return {
      pageItems: 12,
      totalPage: 0,
    };
  },
  // watch: {
  //   products() {
  //     console.log(this.products);
  //     this.createPage();
  //   },
  // },
  methods: {
    next() {
      if (this.currentPage !== this.totalPage - 1) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
    prev() {
      if (this.currentPage !== 0) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    createPage(products) {
      //父元件呼叫子元件，非同步事件必須傳參數
      console.log(products, this.currentPage, this.pageItems, this.totalPage);
      let newProducts = [];
      let pagArray = [];
      let obKey = Object.keys(products);
      console.log(obKey);
      obKey.forEach((item, index) => {
        pagArray.push(products[item]);
        if (index !== 0 && (index + 1) % this.pageItems === 0) {
          newProducts.push(pagArray);
          // console.log(pagArray);
          // console.log(index);
          pagArray = [];
        }
        if (index + 1 === obKey.length && obKey.length % this.pageItems !== 0) {
          newProducts.push(pagArray);
        }
      });
      this.totalPage = newProducts.length;
      // console.log(newProducts, this.totalPage);
      this.$emit("products-by-page", newProducts);
    },
  },
  created() {},
  mounted() {
    console.log(this);
  },
};
</script>
