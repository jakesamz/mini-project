<template>
  <div style="height: 2000px;" class="border">
    <h2>This is Scroll</h2>
    <router-link to="/scroll/1">scroll 1</router-link>
    <router-link to="/scroll/2">scroll 1</router-link>
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if(this.$route.params.id == '1') {
          this.post = {title: 'post title1', body: 'my first post'}
        }
        if(this.$route.params.id == '2') {
          this.post = {title: 'post title2', body: 'my second post'}
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid red;
  transition: transform 0.3s ease-out;
}
</style>