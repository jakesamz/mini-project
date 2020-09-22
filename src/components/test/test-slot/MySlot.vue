<template>
 <div>
  <div class="container">
   <header>
    <slot name="header"></slot>
   </header>
   <main>
    <slot></slot>
   </main>
   <footer>
    <slot name="footer"></slot>
   </footer>
  </div>
 </div>
</template>

<script>
export default {
 name: "MySlot",
 data() {
  return {
   num: 1,
  };
 },
 methods: {},
};
</script>

<style>
</style>
