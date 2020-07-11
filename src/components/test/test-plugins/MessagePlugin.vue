<template>
 <div>
  <!-- <message-box text="message" :visible.sync="visible"></message-box> -->
  <button @click="showMsg">Show Message</button>
 </div>
</template>

<script>

export default {
 name: "App",
 data() {
  return {
   visible: false,
  }
 },
 methods: {
   showMsg() {
    //  this.visible = true;
     console.log('call...showMsg')
     this.msgBox = this.$message1('message');

   },
 },
 mounted() {
 },
};
</script>

<style>
</style>
