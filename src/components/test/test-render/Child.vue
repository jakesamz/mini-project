<!--
<template>
  <div>
    <h1 v-if="childLevel === 1">
      <span class="color"><slot ></slot></span>
    </h1>
    <h2 v-else-if="childLevel === 2">
      <slot></slot>
    </h2>
  </div>
</template>
-->
<script>
let colorMap = {
  1: 'gold',
  2: 'green'
}
export default {
  name: "Child",
  props: ["childLevel"],
  methods: {
    getColor(level) {
    }
  },
  render(createElement) {
    return createElement(
      'h' + this.childLevel,   // 标签名称
      [createElement('span', {class: colorMap[this.childLevel]}, this.$slots.default)] // 子节点数组
    )
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gold {
  color: gold;
}
.green {
  color: green;
}
</style>
