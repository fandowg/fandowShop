<template>
  <modal name="editCoupons" :shiftY="0.1" width="80%" height="auto" :scrollable="true">
    <div class="edit">
      <ValidationObserver v-slot="{ handleSubmit }">
        <button @click="$emit('close')" class="close">Close</button>
        <h2>
          <span v-if="isNew">新增</span>
          <span v-else>編輯</span>產品
        </h2>

        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="優惠名稱" rules="required" v-slot="{failed, errors }">
              <label for="title">優惠名稱</label>
              <input type="text" id="title" placeholder="請輸入優惠名稱" v-model="EditTemp.title" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
          <div class="one">
            <ValidationProvider name="優惠碼" rules="required" v-slot="{failed, errors }">
              <label for="code">優惠碼</label>
              <input type="text" id="code" placeholder="請輸入優惠碼" v-model="EditTemp.code" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="到期日" rules="required" v-slot="{failed, errors }">
              <label for="due_date">到期日</label>
              <input type="date" id="due_date" placeholder="請輸入到期日" v-model="due_date_model" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
          <div class="one">
            <ValidationProvider name="折扣(%)" rules="required" v-slot="{failed, errors }">
              <label for="percent">折扣</label>
              <input type="number" id="percent" placeholder="請輸入折扣數字(%)" v-model="EditTemp.percent" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>

        <div class="edit-row">
          <div class="one">
            <input
              type="checkbox"
              id="is_enabled"
              v-model="EditTemp.is_enabled"
              :true-value="1"
              :false-value="0"
            />
            <label for="is_enabled">是否啟用</label>
          </div>
        </div>
        <!-- <button @click="updateProduct">送出</button> -->
        <button @click="handleSubmit(updateProduct)">送出</button>

        <button @click="$emit('close')">取消</button>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
export default {
  props: ["isNew", "tempCoupon"],
  data() {
    return {
      due_date_model: "",
  
      EditTemp:this.tempCoupon,
    };
  },


  methods: {},
};
</script>