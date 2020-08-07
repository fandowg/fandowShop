<template>
  
      <modal name="modalLogin">
       
    <form @submit.prevent="signIn">
    <input type="text" placeholder="帳號" />
    <input type="text" placeholder="密碼" />
    <button type="submit">登入</button>
      <button @click.prevent="$emit('close')">Close</button>
      </form>
</modal>
    
 
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
  methods:{
      signIn(){

      },
  }
};
</script>