<template>
  <div id="app">
      <button style="color: red;" @click="changeLevel">change</button>
     <Child :childLevel="childLevel">color</Child>
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
      childLevel: 1
    };
  },
  methods: {
    changeLevel() {
      this.childLevel++;
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
