<template>
  <div class="coupons">
    
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
        <div class="one">{{ item.title }}</div>
        <div class="one">{{ item.percent }}</div>
        <div class="one">{{ item.due_date | date }}</div>
        <div class="one">
          <span v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
        </div>
        <div class="one">
          <button @click="openModal(false, item)">編輯</button>
        </div>
        <div class="one">
          <button @click="deleteCoupon(item.id)">刪除</button>
        </div>
      </div>
    </div>
    <Page :pagination="pagination" @get-pages="getCoupons" />
  </div>
</template>

<script>
import EditCoupons from "./EditCoupons";
import Page from "@/components/Pagination.vue";
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
      this.$bus.$emit("changeLoading", true);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((response) => {
        this.$bus.$emit("changeLoading", false);
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
              this.$bus.$emit("changeLoading", true);
              const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
              this.$http.delete(url).then((response) => {
                this.$modal.hide("dialog");
                this.$bus.$emit("changeLoading", false);
                this.getCoupons();
                if (response.data.success) {
                  this.$bus.$emit("message:push", response.data.message);
                } else {
                  this.$bus.$emit(
                    "message:push",
                    response.data.message,
                    "fail"
                  );
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
    Page,
    // Confirm,
  },
  created() {
    this.getCoupons();
  },
};
</script>