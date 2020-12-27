<template>
  <div>
    <div class="menu-block menu-block--inline">
      <h1 class="page__title">訂單列表</h1>
    </div>

    <div class="admin">
      <div class="admin__head bag-row no-gutters">
        <div class="admin__item text-left bag-md">購買時間</div>
        <div class="admin__item bag-md-3">Email</div>
        <div class="admin__item bag-md-5">購買項目</div>
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
          <div class="admin__item bag-md-3 bag-6 text-right-max-md">
            {{ item.user.email }}
          </div>
          <div class="admin__item bag-md-5 bag-12">
            <ul class="admin__order-product">
              <li
                class="admin__order-product__item"
                v-for="product in item.products"
                :key="product.id"
              >
                {{ product.product.title }} 數量{{ product.qty
                }}{{ product.product.unit }}
              </li>
            </ul>
          </div>
          <div class="admin__item bag-md bag-6">
            <span class="desk-hide-md">總金額</span>
            <span class="price">{{ item.total }}</span>
          </div>
          <div class="admin__item bag-md bag-6 text-right">
            <span v-if="item.is_paid === true" class="text-success">已付款</span>
            <span v-else class="text-danger">尚未付款</span>
          </div>
          <!-- <div class="one">
          <button @click="openModal(false,item)">編輯</button>
        </div> -->
        </div>
      </div>
    </div>

    <PageApi :pagination="pagination" @get-pages="getOrderList" />
  </div>
</template>

<script>
import PageApi from '@/components/PaginationApi.vue'
export default {
  data () {
    return {
      pagination: {},
      orderlist: {}
    }
  },
  watch: {
    pagination () {
      this.toTop()
    }
  },
  methods: {
    getOrderList (page = 1) {
      this.$store.commit('LOADING', true)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          // console.log(response.data);
          this.orderlist = response.data.orders
          this.pagination = response.data.pagination
        }
        this.$store.commit('LOADING', false)
      })
    },
    toTop () {
      document.documentElement.scrollTop = 0
    }
  },
  components: {
    PageApi
  },
  created () {
    this.getOrderList(1)
  }
}
</script>
