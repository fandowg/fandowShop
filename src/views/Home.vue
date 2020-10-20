<template>
<div>


    <!-- <router-link to="/login">登入後台</router-link>
    <router-link to="/admin">進入後台</router-link>
    <router-link to="/shopping-list">買東西</router-link> -->

    <Navbar/>
    <main>
      <!-- <router-view></router-view> -->
      
    </main>

</div>

</template>

<script>
import Navbar from "@/components/Navbar.vue"
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
