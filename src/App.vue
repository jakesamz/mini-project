<template>
  <div id="app">
    <h1>This is App...</h1>
    <p>Below is App's router-view</p>
    <router-view></router-view>
    <!-- <router-view class="view one" name="a"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '...', isButtonDisabled: true, id: 'mybutton', key: 'name',
      //list: ['Jake','Tom','Ross']
      list: [{id: 1, name: 'Jake'},{id: 2, name: 'Tome'},{id: 3, name: 'Ross'}]
    }
  },
  methods: {
    showMsg() {
      this.$message('xxxxx');
    },
    changeList() {
      this.list.splice(0, 1);
      console.log(this.list)
    }
  },
  watch: {
    message: {
      handler: function(newValue, oldValue) {
        //console.log('calling...watch', newValue, oldValue)
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    mycount () {
      return this.$store.state.mycount
    },
    username() {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  border: 1px solid lightgrey;
}

</style>
