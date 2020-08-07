<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="before">讀取中</template>
      <template slot="default">
        <i class="fas fa-spinner"></i>
      </template>
    </loading>
    <button>測試</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>