<template>
  <main class="page page--pt container-lg">
    <div class="step">
      <ul class="step__list">
        <li class="step__item" :class="{ active: active === 'OrderInfo' }">
          <span class="step__item__num"><i class="fas fa-angle-double-right"></i></span
          >填寫資料
        </li>
        <li class="step__item" :class="{ active: active === 'Payment' }">
          <span class="step__item__num"><i class="fas fa-angle-double-right"></i></span
          >確認付款
        </li>
        <li class="step__item" :class="{ active: active === 'OrderDone' }">
          <span class="step__item__num"><i class="fas fa-angle-double-right"></i></span
          >訂單完成
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    active () {
      return this.$route.name
    }
  },
  methods: {},
  created () {}
}
</script>
