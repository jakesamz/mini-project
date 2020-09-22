<template>
 <div id="test">
  <!-- <router-link to="/custom">Test v-model</router-link>
    <router-link to="/watch-immediate">Test watch-immediate</router-link>
    <router-link to="/emit">Test emit</router-link>
    <router-link to="/dynamic-compnt">Test Dynamic-component</router-link>
  <router-link to="/async-compnt">Test Async-component</router-link>-->
  <el-button type="primary" size="mini" @click="toggle('CustomDir')">自定义指令</el-button>
  <el-button type="primary" size="mini" @click="toggle('MessagePlugin')">消息插件</el-button>
  <el-button type="primary" size="mini" @click="toggle('BeforeUpdate')">声明周期 hook - BeforeUpdate</el-button>
  <el-button type="primary" size="mini" @click="toggle('Updated')">生命周期 hook - Updated</el-button>
  <el-button type="primary" size="mini" @click="toggle('UseSlot')">插槽-slot</el-button>

  <div class="comp">
    <keep-alive>
      <component :is="compnt"></component>
    </keep-alive>
  </div>
 </div>
</template>

<script>
import CustomDir from './test-dir/CustomDir'
import MessagePlugin from './test-plugins/MessagePlugin';
import Updated from './test-lifecircle-hooks/Updated';
import BeforeUpdate from './test-lifecircle-hooks/BeforeUpdate';
import UseSlot from './test-slot/UseSlot';

export default {
 name: "App",
 components: {CustomDir, MessagePlugin, Updated, BeforeUpdate, UseSlot},
 data() {
  return {
   compnt: 'UseSlot',
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
  #test {
    border: 1px solid lightgrey;
  }

  .comp {

    border: 1px solid orange;
    height: 500px;
    padding-top: 100px;
  }
</style>
