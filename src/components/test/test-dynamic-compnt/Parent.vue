<template>
  <div id="app">
    <button @click="toggle('Child1')">Child1</button>
    <button @click="toggle('Child2')">Child2</button>
    <component :is="compnt"></component>
    <!-- <keep-alive>
      <component :is="compnt"></component>
    </keep-alive> -->
  </div>
</template>

<script>
import Child1 from "./Child1";
import Child2 from "./Child2";

export default {
  name: "App",
  components: {
    Child1, Child2
  },
  data() {
    return {
      compnt: 'Child1',
    };
  },
  methods: {
    toggle(compnt) {
      this.compnt = compnt;
      console.log(this.compnt)
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
