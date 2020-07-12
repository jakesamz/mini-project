<template>
 <div class="border">
  <h2>This is Transition</h2>
  <router-link to="/transition/foo">to foo</router-link>
  <router-link to="/transition/bar">to bar</router-link>
  <transition>
    <router-view></router-view>
  </transition>
 </div>
</template>

<script>
export default {
 name: "Foo"
};
</script>

<style scoped>
.border {
  border: 1px solid red;
  transition: transform 0.3s ease-out;
}
</style>