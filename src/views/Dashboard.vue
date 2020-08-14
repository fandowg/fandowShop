<template>
  <div class="dashboard">
   
  <Navbar/>
<router-view/>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
  data() {
    return {
    
    };
  },
  components:{
    Navbar,
  }
};
</script>