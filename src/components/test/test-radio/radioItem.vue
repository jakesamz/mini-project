<template>
  <div>
    <input type="radio" name="test-radio" @change="change(value)" :checked="this.$parent.value===this.value" value="value"/>
    <slot></slot> 
  </div>
</template>

<script>
export default {
  props: ['value',],
  created() {
    console.log('radio item - created')
  },
  mounted() {
    console.log('radio item - mounted')
  },
  methods: {
    change() {
      console.log('clicked radio item', this.value, )
      this.$parent.bindchange(this.value)
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
