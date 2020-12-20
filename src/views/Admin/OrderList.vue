
<template>
  <div >
    <div class="menu-block menu-block--inline">
      <h1 class="page__title">訂單列表</h1>
    </div>

    <div class="admin">
      <div class="admin__head bag-row no-gutters">
        <div class="admin__item text-left bag-md">購買時間</div>
        <div class="admin__item bag-md-3">Email</div>
        <div class="admin__item bag-md-4">購買款項</div>
        <div class="admin__item bag-md">應付金額</div>
        <div class="admin__item bag-md text-right">是否付款</div>
        
      </div>
      <div class="admin__list">
        <div
          class="admin__row bag-row no-gutters"
          v-for="item in orderlist"
          :key="item.id"
        >
          <div class="admin__item text-left bag-md bag-6">
            {{ item.create_at | date }}
          </div>
          <div class="admin__item  bag-md-3 bag-6 text-right-max-md">
            {{ item.user.email }}
          </div>
          <div class="admin__item bag-md-4 bag-12">
            <ul class="admin__order-product">
              <li class="admin__order-product__item" v-for="product in item.products" :key="product.id">
                {{ product.product.title }}數量{{ product.qty
                }}{{ product.product.unit }}
              </li>
            </ul>
          </div>
          <div class="admin__item bag-md bag-6"><span class="desk-hide-md ">總金額</span> <span class="price">{{ item.total }}</span></div>
          <div class="admin__item bag-md bag-6 text-right">
            <span v-if="item.is_paid === true">已付款</span>
            <span v-else>尚未付款</span>
          </div>
          <!-- <div class="one">
          <button @click="openModal(false,item)">編輯</button>
        </div> -->
        </div>
      </div>
    </div>

    <Page :pagination="pagination" @get-pages="getOrderList" />
  </div>
</template>

<script>
import Page from "@/components/Pagination.vue";
export default {
  data() {
    return {
      pagination: "",
      orderlist: {},
    };
  },
  methods: {
    getOrderList(page = 1) {
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      this.$http.get(url).then((response) => {
        console.log(response.data);
        this.$bus.$emit("changeLoading", false);
        this.orderlist = response.data.orders;
        this.pagination = response.data.pagination;
      });
    },
  },
  components: {
    Page,
  },
  created() {
    this.getOrderList(1);
  },
};
</script>