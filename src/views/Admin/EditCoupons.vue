<template>
  <modal
    name="editCoupons"
    :adaptive="true"
    :shiftY="0.3"
    :maxWidth="800"
    width="95%"
    height="auto"
    :scrollable="true"
  >
    <div class="edit-page">
      <ValidationObserver v-slot="{ handleSubmit }">
        <button @click="$emit('close')" class="close-position button-none">
          <img src="@/assets/images/icon_close.svg" alt="" />
        </button>
        <h2 class="edit-page__title">
          <span v-if="isNew">新增</span>
          <span v-else>編輯</span>優惠券
        </h2>
        <div class="edit">
          <div class="edit__row form-row">
            <div class="edit__item bag-md-6 form-group">
              <ValidationProvider
                name="優惠名稱"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="title">優惠名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入優惠名稱"
                  v-model="editTemp.title"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="edit__item bag-md-6 form-group">
              <ValidationProvider
                name="優惠碼"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="code">優惠碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入優惠碼"
                  v-model="editTemp.code"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="edit__row form-row">
            <div class="edit__item bag-md-6 form-group">
              <ValidationProvider
                name="到期日"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="due_date">到期日</label>
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  placeholder="請輸入到期日"
                  v-model="due_date_model"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="edit__item bag-md-6 form-group">
              <ValidationProvider
                name="折扣(%)"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="percent">折扣</label>
                <input
                  type="number"
                  class="form-control"
                  id="percent"
                  placeholder="請輸入折扣數字(%)"
                  v-model="editTemp.percent"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>

          <div class="edit__item form-group">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="is_enabled"
                v-model="editTemp.is_enabled"
                :true-value="1"
                :false-value="0"
              />
              <label class="form-check-label" for="is_enabled">是否啟用</label>
            </div>
          </div>

          <!-- <button @click="updateProduct">送出</button> -->

          <div class="btn-wrapper-side">
            <button class="btn btn-outline-primary" @click="$emit('close')">取消</button>
            <button class="btn btn-primary" @click="handleSubmit(updateCoupon)">
              送出
            </button>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
//需要傳送三個東西  isNew  tempCoupon  today的 due_date_model ,執行端應該要在外層，內層純粹接受isNew  tempCoupon  today的 due_date_model的資料
export default {
  props: ["isNew", "tempCoupon", "today"],
  data() {
    return {
      due_date_model: "",
      editTemp: {},
    };
  },
  watch: {
    due_date_model() {
      //Math.floor(new Date(日期)) 把日期轉成timestamp，input date取得的時間格式為xxxx-xx-xx，要先轉成正式的格式才能轉成timestamp
      this.editTemp.due_date = Math.floor(new Date(this.due_date_model)) / 1000;
      console.log(this.editTemp.due_date);
      // console.log(new Date(this.due_date_model));
      //測試git
      //測試git2
      //測試git3
    },
    tempCoupon() {
      // let today = new Date().toISOString().split("T")[0];
      if (this.isNew) {
        this.editTemp = { ...this.tempCoupon };
        this.due_date_model = this.today;
        //若編輯時項目的到期日是今天，due_date_model不會watch，所以這邊強制再寫入一次
        this.editTemp.due_date = Math.floor(new Date(this.today)) / 1000;
      } else {
        this.editTemp = Object.assign({}, this.tempCoupon);
        // if (!this.tempCoupon.due_date) {
        //   this.due_date_model = today;
        //   return;
        // }
        this.due_date_model = new Date(this.editTemp.due_date * 1000)
          .toISOString()
          .split("T")[0];
      }
    },
  },
  methods: {
    // sendStatus(){
    //   console.log(123);
    //   let today = new Date().toISOString().split("T")[0];
    //   console.log(this.isNew);
    //   if (this.isNew) {

    //     this.editTemp = Object.assign({}, this.tempCoupon);

    //     this.due_date_model = today;
    //   } else {
    //     this.editTemp = Object.assign({}, this.tempCoupon);

    //     // if (!this.tempCoupon.due_date) {
    //     //   this.due_date_model = today;
    //     //   return;
    //     // }
    //     this.due_date_model = new Date(this.editTemp.due_date * 1000)
    //       .toISOString()
    //       .split("T")[0];
    //   }
    // },
    updateCoupon() {
      if (this.isNew) {
        this.$store.commit("LOADING", true);
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
        this.$http.post(url, { data: this.editTemp }).then((response) => {
          if (response.data.success) {
            this.$emit("get-coupons");
            this.$bus.$emit("message:push", response.data.message);
          }
          this.$store.commit("LOADING", false);
          this.$emit("close");
        });
      } else {
        if (JSON.stringify(this.editTemp) === JSON.stringify(this.tempCoupon)) {
          // this.$bus.$emit("message:push", "資料無變更");
          this.$emit("close");
          return;
        }
        this.$store.commit("LOADING", true);
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.editTemp.id}`;
        this.$http.put(url, { data: this.editTemp }).then((response) => {
          if (response.data.success) {
            this.$emit("get-coupons");
            this.$bus.$emit("message:push", response.data.message);
          }
          this.$store.commit("LOADING", false);
          this.$emit("close");
        });
      }
    },
  },
  created() {},
};
</script>
