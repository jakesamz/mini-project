<template>
 <div class="namedviews">
  <h2>This is Named Views...</h2>
  <p>Below is Named Views's router-view</p>
  <router-view></router-view>
  <router-view class="view two" name="a"></router-view>
  <router-view class="view three" name="b"></router-view>
 </div>
</template>

<script>
export default {
 name: "Foo"
};
</script>

<style scoped>
.namedviews {
  border: 1px solid red;
}
</style>