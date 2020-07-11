<script>
export default  { 
  name: 'UserProfile', 
  template: `
    <div>User Profile: User Name = {{this.$route.params.username}}</div>
  `,
  watch: {
    '$route' (to, from) {
      console.log('router change...', to, from)
    }
  }
  
}
</script>
