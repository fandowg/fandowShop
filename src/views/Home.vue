<template>
  <div>

    <button @click="openModal">登入</button>
 <Login @close="closeModal"/>
    
  </div>
</template>

<script>
import Login from "../components/Login.vue";

export default {
  name: "Home",
  
  methods: {
    openModal () {
      this.$modal.show('modalLogin')
    },
    closeModal(){
      this.$modal.hide('modalLogin')
    }
    
  },
  components:{
    Login
  }
  
};
</script>
