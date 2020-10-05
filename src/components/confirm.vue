<template>
  <div>
    <h1>This is created inline</h1>
        <p>{{ text }}</p>
        <button @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
   props: ['text'],

};
</script>