<template>
  <div>
    <!-- <router-link to="/login">登入後台</router-link>
    <router-link to="/admin">進入後台</router-link>
    <router-link to="/shopping-list">買東西</router-link> -->

    <Navbar />
    <main>
      <!-- <router-view></router-view> -->
    </main>
    <div class="container-xl">
      <div class="bag-row no-gutters">
        <div class="bag-md-6">13123</div>
        <div class="bag-md-6">13123</div>
        <div class="bag-md">4589456</div>
      </div>
      <div class="bag-row ">
        <div class="bag-md-6">13123</div>
        <div class="bag-md-6">13123</div>
        <div class="bag-md">4589456</div>             
      </div>
      <div class="bag-row no-gutters">
        <div class="bag-md-auto">4589456</div>
        <div class="bag-auto">4589456</div>   
      </div>

      <div class="bag-row ">
        <div class="bag-66-md">4589456</div>
        <div class="bag-66">8955</div>
        <div class="bag-34">8955</div>
       
      </div>

      <div class="bag-row ">
        <div class="bag-auto">標題哇哈哈</div>
        <div class="bag">內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文</div>
      </div>


    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  },
};
</script>
