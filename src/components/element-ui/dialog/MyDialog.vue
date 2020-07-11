<template>
 <div>
  <div class="dialog" v-show="visible">
    <p ref="dialogText" >This is a Dialog...</p>
    <button @click="$emit('update:visible', false)">close</button>
  </div>
 </div>
</template>


<script>

export default {
 name: "App",
 components: {},
 props: ['visible'],
 data() {
  return {
   
  };
 },
 methods: {
 },
 created() {
   console.log('formVisible', this.formVisible)
 },
 mounted() {
   //console.log('this.$root, ', this.$root)
   //console.log('this.$parent.', this.$parent, this.$parent.visible)
   console.log('this.$refs.dialogText', this.$refs.dialogText)
 },
};
</script>

<style>
</style>
