<template>
  <div>
    <EditCoupons
      @close="closeModal"
      @get-coupons="getCoupons"
      :is-new="isNew"
      :temp-coupon="tempCoupon"
      :today="today"
    />
    <!-- <Confirm :text="text"></Confirm> -->
    <v-dialog />
    <!-- <modal>456456</modal> -->
    <div class="menu-block menu-block--inline">
      <h1 class="page__title">優惠券列表</h1>
      <button class="btn btn-primary" @click="openModal(true)">新增優惠券</button>
    </div>
    <div class="admin">
      <div class="admin__head bag-row no-gutters">
        <div class="admin__item admin__title bag-md-4">名稱</div>
        <div class="admin__item bag-md">折扣百分比</div>
        <div class="admin__item bag-md-2">到期日</div>
        <div class="admin__item bag-md text-right-max-md">是否啟用</div>
        <div class="admin__item bag-md text-right-min-md">編輯</div>
        <div class="admin__item bag-md text-right">刪除</div>
      </div>
      <div class="admin__list">
        <div class="admin__row bag-row no-gutters" v-for="item in coupons" :key="item.id">
          <div class="admin__item admin__title bag-md-4 bag-12">{{ item.title }}</div>
          <div class="admin__item bag-md bag-4">
            <span class="desk-hide-md">折扣 </span>{{ item.percent }}%
          </div>
          <div class="admin__item bag-md-2 bag-6">
            <span class="desk-hide-md">到期日</span> {{ item.due_date | date }}
          </div>
          <div class="admin__item bag-md bag-2 text-right-max-md">
            <span v-if="item.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </div>
          <div class="admin__item bag-md bag-6 text-right-min-md">
            <button class="btn btn-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
          </div>
          <div class="admin__item bag-md bag-6 text-right">
            <button class="btn btn-outline-primary btn-sm" @click="deleteCoupon(item.id)">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <PageApi :pagination="pagination" @get-pages="getCoupons" />
  </div>
</template>

<script>
import EditCoupons from "./EditCoupons";
import PageApi from "@/components/PaginationApi.vue";
// import Confirm from "../components/confirm.vue";
export default {
  data() {
    return {
      coupons: {},
      tempCoupon: {},
      today: "",
      pagination: "",
      isNew: false,
      text: "",
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.$store.commit("LOADING", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((response) => {
        this.$store.commit("LOADING", false);
        this.coupons = response.data.coupons;
        this.pagination = response.data.pagination;
      });
    },
    deleteCoupon(id) {
      this.$modal.show("dialog", {
        // title: "The standard Lorem Ipsum passage",
        text: "確定要刪除嗎？",
        buttons: [
          {
            title: "取消",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
          {
            title: "確定",
            handler: () => {
              this.$store.commit("LOADING", true);
              const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
              this.$http.delete(url).then((response) => {
                this.$modal.hide("dialog");
                this.$store.commit("LOADING", false);
                this.getCoupons();
                if (response.data.success) {
                  this.$bus.$emit("message:push", response.data.message);
                } else {
                  this.$bus.$emit("message:push", response.data.message, "text-danger");
                }
              });
            },
          },
        ],
      });
      // this.$modal.show(
      //   Confirm,
      //   { text: "確定要刪除嗎？" },
      //   // { height: "auto" },
      //   { "before-close": (event) => {} }
      // );
    },
    openModal(isNew, item) {
      this.$modal.show("editCoupons");

      if (isNew) {
        this.tempCoupon = {
          due_date: 0,
          is_enabled: 0,
        };
        this.isNew = isNew;
        this.today = new Date().toISOString().split("T")[0];
      } else {
        this.tempCoupon = item;
        this.isNew = isNew;
      }
      //  this.$refs.editCoupons.sendStatus();
    },
    closeModal() {
      this.$modal.hide("editCoupons");
    },
  },
  components: {
    EditCoupons,
    PageApi,
    // Confirm,
  },
  created() {
    this.getCoupons();
  },
};
</script>
