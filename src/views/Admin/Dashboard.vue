<template>
  <div>
    <NavbarAdmin />
    <main class="container-xl page page--pt">
      <router-view />
    </main>
  </div>
</template>
<script>
import NavbarAdmin from '@/components/Admin/NavbarAdmin.vue'
export default {
  data () {
    return {}
  },
  components: {
    NavbarAdmin
  }
}
</script>
