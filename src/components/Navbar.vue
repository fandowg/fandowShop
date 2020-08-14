<template>
  <nav>
    <div class="top">
      <router-link to="/admin" class="logo">很硬的後台</router-link>
      <button @click="logOut" class="logOut">登出</button>
    </div>
    <div class="cont">
      <router-link to="/admin/products">產品頁面</router-link>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logOut() {
      const url = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http.post(url).then(response => {
        if (response.data.success) {
          console.log(response.data);
          this.$router.push("/");
        }
      });
    }
  }
};
</script>
