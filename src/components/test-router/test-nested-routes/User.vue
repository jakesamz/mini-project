<template>
  <div class="user">
    <h2>User id : {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default  { 
  name: 'Foo', 
}
</script>