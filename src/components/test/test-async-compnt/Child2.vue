
<template>
  <div class="child">
    <p>Child2</p>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
    }
  },
  created() {
    console.log('Child2 created....')
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
.child {
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
