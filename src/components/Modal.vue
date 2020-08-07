<template>
  <div class="example-modal-content">
 <Login/>
 <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  props: ['title','text'],
  components:{
    Login
  },
}
</script>
