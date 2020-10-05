
<template>
  <div class="products">
    <div class="top">
      <h1>訂單列表</h1>
    </div>
    <div class="head">
        <div class="one">
購買時間</div>
        <div class="one">Email</div>
        <div class="one">購買款項</div>
        <div class="one">應付金額</div>
        <div class="one">是否付款</div>
        <div class="one">編輯</div>
      
      </div>
      <div class="cont">
        <div class="one-line" v-for="item in orderlist" :key="item.id">
          <div class="one">{{item.create_at | date}}</div>
          <div class="one">{{item.user.email}}</div>
          <div class="one">
            <ul>
                <li v-for="product in item.products" :key="product.id">
                  
                    {{product.product.title}} 數量 {{product.qty}}{{product.product.unit}}
                </li>
            </ul>
              </div>
          <div class="one">{{item.total}}</div>
          <div class="one">
            <span v-if="item.is_paid===true">已付款</span>
            <span v-else>尚未付款</span>
          </div>
          <div class="one">
            <!-- <button @click="openModal(false,item)">編輯</button> -->
          </div>
          
        </div>
      </div>
      <Page :pagination="pagination" @get-pages="getOrderList" />
  </div>
</template>

<script>
import Page from "../components/Pagination.vue";
export default {
    data(){
        return{
            pagination:'',
            orderlist:{},
        }
    },
    methods:{
        getOrderList(page = 1) {
       this.$bus.$emit('changeLoading',true); 
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((response) => {
          console.log(response.data);
        this.$bus.$emit('changeLoading',false); 
        this.orderlist = response.data.orders;
        this.pagination = response.data.pagination;
      });
    },
    },
    components: {
   
    Page
  },
    created(){
        this.getOrderList(1);
    }
};
</script>