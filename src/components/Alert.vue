<template>
  <div class="alert">
    <div
      class="alert__item"
      :class="item.status"
      v-for="(item, key) in message"
      :key="key"
    >
      {{ item.message }}
      <button class="close-position button-none" @click="deleteMessage(key)">
        <img src="@/assets/images/icon_close.svg" alt="" />
      </button>
      <!-- <button @click="deleteMessage(key)">close</button> -->
    </div>
  </div>
</template>

<script>
// import {EventBus} from '@/bus'
export default {
  data () {
    return {
      message: []
    }
  },
  methods: {
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 1000)
      console.log('有觸發')
      this.message.push({
        message,
        status,
        timestamp
      })
      this.deleteMessageWithTiming(timestamp)
    },
    deleteMessage (key) {
      this.message.splice(key, 1)
    },
    deleteMessageWithTiming (timestamp) {
      setTimeout(() => {
        const key = this.message.findIndex((item) => {
          return item.timestamp === timestamp
        })
        this.message.splice(key, 1)
      }, 2000)
    }
  },
  created () {
    this.$bus.$on('message:push', (message, status = 'text-success') => {
      this.updateMessage(message, status)
      // console.log("發送訊息");
    })
  },
  beforeDestroy () {
    this.$bus.$off('message:push')
  }
}
</script>
