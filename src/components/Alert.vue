<template>
  <div class="alert">
    <div class="one" :class="item.status"  v-for="(item , key) in message" :key="key">
        {{item.message}}
        <button @click="deleteMessage(key)">close</button>
    </div>
  </div>
</template>

<script>
import {EventBus} from '@/bus'
export default {
  data() {
    return {
      message: [
        
      ],
    };
  },
  methods: {
      updateMessage(message,status){
          const timestamp=Math.floor(new Date()/1000);
          console.log(123);
          this.message.push(
              {
              message,
              status,
              timestamp,
          });
          this.deleteMessageWithTiming(timestamp);
      },
      deleteMessage(key){
          this.message.splice(key,1);
      },
      deleteMessageWithTiming(timestamp){
          setTimeout(()=>{
            const key= this.message.findIndex((item)=>{
                  return item.timestamp===timestamp;
              });
            this.message.splice(key,1);

          },2000)
      },
  },
  created(){
      EventBus.$on('message:push',(message,status = 'success' )=>{
          this.updateMessage(message,status);
          console.log('發送訊息')
      })
  },
  beforeDestroy(){
       EventBus.$off('message:push');
  }
};
</script>