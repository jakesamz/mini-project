<template>
  <div class="toast" v-if="visible" >
    <div ref="msgBox">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    text: String,
    visible: Boolean
  },
  methods: {
  },
  created(){
    //console.log('inside text', this.text, this.visible);
  },
  mounted(){
  },
  updated(){
    console.log('updated...', this.visible);
    // setTimeout(() => {
    //   console.log('calling...set timeout...')
    //   this.$emit('update:visible', false);
    // }, 2000)
  }
  
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 15vh;
  left: 28vw;
  min-width: 40vw;
  max-width: 100vw;
  font-size: 26px;
  text-align: center;
  padding: 10px 2vw;
  border-radius: 40px;
  background-color: lightblue;
  letter-spacing: 3px;
}
</style>