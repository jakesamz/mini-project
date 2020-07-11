<script>
export default  { 
  name: 'Foo', 
  template: '<div>inside foo{{this.$route.params.username}}</div>',
  watch: {
    '$route' (to, from) {
      console.log('router change...', to, from)
    }
  }
  
}
</script>
