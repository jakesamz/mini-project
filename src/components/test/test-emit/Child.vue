
<template>
  <div id="child">
    <p>Child: {{num}}</p>
    <button>handleClick</button>
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["num"],
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      this.$emit('CustomEvent')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#child {
  border: 1px solid lightgrey;
  padding: 20px 0px;
}
.gold {
  color: gold;
}
.green {
  color: green;
}
</style>
