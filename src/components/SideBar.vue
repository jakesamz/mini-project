<template>
  <div>
     <p>Side Bar Router View</p>
     <router-link to="/emails">email</router-link>
  </div>
</template>

<script>
export default  { 
  name: 'Foo', 
  data () {
    return {
      loading: false,
      post: null,
      error: null,
      value: 0
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      // setTimeout(()=>{
      //   this.loading = false
      // }, 3000);
      let progress = setInterval(() => {
        this.value = this.value + 100/3;
        if(this.value >= 100) {
          clearInterval(progress);
          this.loading = false;
          this.value = 0;
        }
      }, 1000);
    }
  }
}
</script>
<style scoped>
/* router-fade */
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
