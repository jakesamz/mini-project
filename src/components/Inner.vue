<template>
  <div class="hello">
    <h1>{{postTitle}}{{outerCount}}{{ msg }}</h1>
    <div><button @click="count++">{{count}}</button></div>
    <button @click="$emit('addproduct')">emit outter function</button>
  </div>
</template>

<script>
export default {
  name: 'Inner',
  props: {
    postTitle: {
      type: [String,Number],
      required: true
    },
    outerCount: {
      type: Number
    },
  },
  data()  {
      return {
        count: 0,
        msg: 'Counter Component....',
      }
    },
  beforeMount() {
    console.group("%c%s","color:red",'beforeMount--挂载之前的状态')
    console.log("%c%s","color:blue","el  :"+this.$el)
    console.log(this.$el);
    console.log("%c%s","color:blue","data  :"+this.$data)
    console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
