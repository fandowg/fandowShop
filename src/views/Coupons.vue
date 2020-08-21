<template>
  <div class="coupons">
    <loading :active.sync="isLoading" color="#006699" loader="bars" background-color="#fff">
      <template slot="before">讀取中</template>
    </loading>
    <EditCoupons
      @close="closeModal"
      @get-coupons="getCoupons"
      @is-loading="changeLoading"
      :is-new="isNew"   
      :temp-coupon="tempCoupon"
     
    />

    <div class="top">
      <h1>優惠券列表</h1>
      <button class="newBtn" @click="openModal(true)">新增優惠券</button>
    </div>
    <div class="head">
      <div class="one">名稱</div>
      <div class="one">折扣百分比</div>
      <div class="one">到期日</div>
      <div class="one">是否啟用</div>
      <div class="one">編輯</div>
      <div class="one">刪除</div>
    </div>
    <div class="cont">
      <div class="one-line" v-for="item in coupons" :key="item.id">
        <div class="one">{{item.title}}</div>
        <div class="one">{{item.percent}}</div>
        <div class="one">{{ new Date(item.due_date*1000).toLocaleDateString()}}</div>
        <div class="one">
          <span v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </div>
        <div class="one">
          <button @click="openModal(false,item)">編輯</button>
        </div>
        <div class="one">
          <button @click="deleteCoupon(item.id)">刪除</button>
        </div>
      </div>
    </div>
    <Page :pagination="pagination" @get-coupons="getCoupons" />
  </div>
</template>

<script>
import EditCoupons from "../views/EditCoupons.vue";
import Page from "../components/Pagination.vue";
export default {
  data() {
    return {
      isLoading: false,
      coupons: {},
      tempCoupon: {},
      pagination: "",     
      isNew: false,
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading=true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((response) => {
        this.isLoading=false;
        this.coupons = response.data.coupons;
        this.pagination = response.data.pagination;
      });
    },
    deleteCoupon(id){
       this.isLoading=true;
      const url=`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
      this.$http.delete(url).then(response=>{
        this.isLoading=false;
        this.getCoupons();
        if(response.data.success){
           this.$bus.$emit('message:push',response.data.message); 
        }else{
         this.$bus.$emit('message:push',response.data.message,'fail'); 
        }        
      });      
    },
    openModal(isNew, item) {
      this.$modal.show("editCoupons");

      if (isNew) {
        this.tempCoupon = {
          due_date:0,
        };       
        this.isNew=isNew;    
      } else {
        this.tempCoupon = item;  
         this.isNew=isNew;          
      }
    },
    closeModal() {
      this.$modal.hide("editCoupons");
    },
    changeLoading(v) {
      this.isLoading = v;
    },
  },
  components: {
    EditCoupons,
    Page,
  },
  created() {
    this.getCoupons();
  },
};
</script>