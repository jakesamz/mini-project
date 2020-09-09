<template>
 <div>
  <button @click="updateMsg">Show Message</button>
  {{msg}}
 </div>
</template>

<script>

export default {
 name: "BeforeUpdate1",
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
 beforeUpdate() {
  //this.msg = 'from updated...'
  console.log('before update hook:', this.msg);
  //  setTimeout(() => {
  //   this.msg = 'from updated...'
  //  }, 1000)
 },
 updated() {
   console.log('updated hook:', this.msg);
 },
};
</script>

<style>
</style>
