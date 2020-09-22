<template>
 <div>
  <MySlot>
   <template v-slot:header>
    <h1>Here might be a page title</h1>
   </template>

   <p>A paragraph for the main content.</p>
   <p>And another one.</p>

   <template v-slot:footer>
    <p>Here's some contact info</p>
   </template>
  </MySlot>
 </div>
</template>

<script>
import MySlot from "./MySlot";

export default {
 name: "UseSlot",
 components: { MySlot },
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
