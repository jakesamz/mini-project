<template>
  <div id="app">
     <div>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
      <li v-for="(item, i) in list">
        <input type="checkbox"> {{item.name}}
        <input type="text"/>
      </li>
    </ul>
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
      list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '吕不韦' },
          { id: 3, name: '嬴政' }
        ]
    };
  },
  methods: {
    add() {
      //注意这里是unshift
      this.list.unshift({ id: ++this.newId, name: this.name })
      this.name = ''
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
