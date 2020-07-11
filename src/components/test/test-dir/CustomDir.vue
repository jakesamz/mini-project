<template>
  <div>
    <div v-uppercase="text"></div>
    <button @click="change">change</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      text: "hi"
    };
  },
  methods: {
    change() {
      console.log('calling change...')
      this.text = 'abc...'
    }
  },
  directives: {
    uppercase: {
      bind(el, binding, vnode) {
        console.log('.....calling..bind')
        el.textContent = binding.value.toUpperCase();
      },
      componentUpdated(el, binding, vnode) {
        console.log('.....calling..componentUpdated',  el.textContent)
        el.textContent = binding.value.toUpperCase();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
