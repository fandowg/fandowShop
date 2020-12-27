<template>
  <div class="page">
    <div class="container-500 only-box-top">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(signIn)" class="only-box">
          <h1 class="only-box-top__title">請先登入</h1>

          <div class="form-group">
            <ValidationProvider
              name="email"
              rules="required|email"
              v-slot="{ failed, passed, errors }"
            >
              <label for="email">請輸入email帳號</label>
              <input
                class="form-control"
                :class="{ 'is-invalid': failed, 'is-valid': passed }"
                type="email"
                placeholder="帳號"
                id="email"
                v-model="user.username"
                autofocus
              />
              <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <ValidationProvider
              name="密碼"
              rules="required"
              v-slot="{ failed, passed, errors }"
            >
              <label for="email">請輸入密碼</label>
              <input
                class="form-control"
                :class="{ 'is-invalid': failed, 'is-valid': passed }"
                type="password"
                id="password"
                placeholder="密碼"
                v-model="user.password"
              />
              <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <button type="submit" class="btn btn-primary btn-full">登入</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "@/bus";
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // input加上id，才會自動填入
    signIn () {
      // console.log(EventBus);
      const url = `${process.env.VUE_APP_APIPATH}/admin/signin`
      this.$store.commit('LOADING', true)
      this.$http.post(url, this.user).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          this.$bus.$emit('message:push', response.data.message)
          // this.$emit("close");
          this.$router.push('/admin')
        } else {
          this.$bus.$emit('message:push', response.data.message, 'text-danger')
        }
        this.$store.commit('LOADING', false)
      })
    }
  }
}
</script>
