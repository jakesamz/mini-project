<template>
 <div>
  <!-- <router-link to="/custom">Test v-model</router-link>
    <router-link to="/watch-immediate">Test watch-immediate</router-link>
    <router-link to="/emit">Test emit</router-link>
    <router-link to="/dynamic-compnt">Test Dynamic-component</router-link>
  <router-link to="/async-compnt">Test Async-component</router-link>-->
  <el-button type="primary" size="mini" @click="toggle('CustomDir')">自定义指令</el-button>
  <el-button type="primary" size="mini" @click="toggle('MessagePlugin')">消息插件</el-button>
  <!-- <el-button type="primary" size="mini" @click="toggle('Table')">Table</el-button> -->
  <keep-alive>
   <component :is="compnt"></component>
  </keep-alive>
 </div>
</template>

<script>
import CustomDir from './test-dir/CustomDir'
import MessagePlugin from './test-plugins/MessagePlugin';

export default {
 name: "App",
 components: {CustomDir, MessagePlugin},
 data() {
  return {
   compnt: 'MessagePlugin',
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
