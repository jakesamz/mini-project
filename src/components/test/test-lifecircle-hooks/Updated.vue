<template>
 <div>
  <button @click="updateMsg">Show Message</button>
  {{msg}}
 </div>
</template>

<script>

export default {
 name: "Updated",
 data() {
  return {
   msg: 'hello',
  }
 },
 methods: {
   updateMsg() {
     this.msg = 'hi...'
   },
 },
 updated() {
   console.log('updated...', this.msg);
   setTimeout(() => {
    this.msg = 'from updated...'
   }, 1000)
 },
};
</script>

<style>
</style>
