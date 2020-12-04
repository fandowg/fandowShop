<template>
  <div class="dashboard">

  <NavbarAdmin/>
  <div class="container-xl page-wrapper">
<router-view/>
  </div>
  </div>
</template>
<script>
import NavbarAdmin from "@/components/Admin/NavbarAdmin.vue"
export default {
  data() {
    return {
    
    };
  },
  components:{
    NavbarAdmin,
  }
};
</script>