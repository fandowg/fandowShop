<template>
  <modal name="modalLogin" :shiftY="0.1">
    <form @submit.prevent="signIn" class="sighForm">
      <h1>請先登入</h1>
      <input type="email" placeholder="帳號" id="inputEmail" autofocus a v-model="user.username" >
      <input type="password" placeholder="密碼"  v-model="user.password">
    
      <button type="submit" class="signBtn">登入</button>
      <button @click.prevent="$emit('close')" class="close">Close</button>
    </form>
    
  </modal>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //input加上id，才會自動填入
    signIn() {
      const url = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      this.$http.post(url, this.user).then(response => {
        console.log(response.data);
        if (response.data.success) {
          this.$emit("close");
          this.$router.push("/admin");
        }
      });
    }
  }
};
</script>