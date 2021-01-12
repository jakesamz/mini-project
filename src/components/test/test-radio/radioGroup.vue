<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "radioGroup",
  props: ['value', 'myValue'],
  created() {
    console.log('radio group - created', this.myValue)
  },
  mounted() {
    console.log('radio group - mounted')
  },
  methods: {
    bindchange(value) {
      console.log('radio group bind change', value)
      this.$emit('bindchange', value)
    }
  }
};
</script>

<style>
</style>
