<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="before">讀取中</template>
      <template slot="default">
        <i class="fas fa-spinner"></i>
      </template>
    </loading>
    <div class="products">
        <div class="head">
            <div class="one">分類</div>
            <div class="one">產品名稱</div>
            <div class="one">原價</div>
            <div class="one">售價</div>
            <div class="one">啟用</div>
            <div class="one">編輯</div>
            <div class="one">刪除</div>
        </div>
        <div class="cont" v-for="item in products" :key="item.id">
            <div class="one-line">
                <div class="one">{{item.category}}</div>
                <div class="one">{{item.title}}</div>
                <div class="one">{{item.origin_price}}</div>
                <div class="one">{{item.price}}</div>
                <div class="one"><span v-if="is_enabled=1">啟用</span><span v-else>未啟用</span></div>
                <div class="one"><button>編輯</button></div>
                <div class="one"><button>刪除</button></div>
            </div>
            

        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [

      ],
      isLoading: false
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading=true;
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
        this.$http.get(url).then((response)=>{
            this.products=response.data.products;
            this.isLoading=false;
        })
         
    }
  },
  created() {
    this.getProducts();
  }
};
</script>