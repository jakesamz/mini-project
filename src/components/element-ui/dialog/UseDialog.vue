<template>
 <div>
  <Dialog ref="mydialog" :visible.sync="visible"></Dialog>
 </div>
</template>


<script>
import Dialog from './MyDialog';
export default {
 name: "App",
 components: {Dialog},
 data() {
  return {
   visible: true
  };
 },
 methods: {
 },
 mounted() {
   console.log('this.$ref.mydialog', this.$refs.mydialog.$refs.dialogText);
 }
};
</script>

<style>
</style>
