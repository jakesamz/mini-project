
<template>
  <div class="child">
    <p>Child1</p>
    <p>Msg: {{msg}} <button @click="msg = 'after'">Change Msg</button></p>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      msg: 'before'
    }
  },
  created() {
    console.log('Child1 created....')
  },
  methods: {
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
