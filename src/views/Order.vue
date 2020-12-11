<template>
  <div class="page-wrapper">
    <div class="buying-page container-800">
      <div class="step">
        <ul class="step__list">
          <li class="step__item active">
            <span class="step__item__num"
              ><i class="fas fa-angle-double-right"></i></span
            >填寫資料
          </li>
          <li class="step__item">
            <span class="step__item__num"
              ><i class="fas fa-angle-double-right"></i></span
            >完成付款
          </li>
          <li class="step__item">
            <span class="step__item__num"
              ><i class="fas fa-angle-double-right"></i></span
            >訂單完成
          </li>
        </ul>
      </div>
      <router-view></router-view>   
    </div>   
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
