<template>
  <div id="app">
    <Child :num="num" @click.native="handleClick"></Child>
    <Child :num="num" @CustomEvent="handleClick"></Child>
  </div>
</template>

<script>
import Child from "./Child";

export default {
  name: "App",
  components: {
    Child
  },
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    handleClick() {
      console.log('handle click....')
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
