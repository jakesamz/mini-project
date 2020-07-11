
<template>
  <div id="child">
    <p>Child1: {{num}}</p>
    <p>Msg: {{msg}} <button @click="msg = 'after'">Change Msg</button></p>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["num"],
  data() {
    return {
      msg: 'before'
    }
  },
  created() {
    console.log('created....')
  },
  methods: {
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
