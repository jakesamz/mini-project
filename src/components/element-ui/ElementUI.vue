<template>
 <div>
  <h2>ElementUI</h2>
  <el-button  type="primary" size="mini" @click="toggle('Dialog')">Dialog</el-button>
  <el-button  type="primary" size="mini" @click="toggle('Table')">Table</el-button>
  <keep-alive>
    <component :is="compnt"></component>
  </keep-alive>
  
 </div>
</template>

<script>
import Table  from './table/Table';
import Dialog from './dialog/UseDialog';

export default {
 name: "App",
 components: {Table, Dialog},
 data() {
  return {
   compnt: 'Dialog',
  }
 },
 methods: {
  toggle(compnt) {
   this.compnt = compnt;
  }
 },
};
</script>

<style>
</style>
