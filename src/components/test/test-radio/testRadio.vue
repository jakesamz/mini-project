<template>
  <div>
    <radio-group value="beijing" my-value="hahah" @bindchange="changeValue">
      <radio-item v-for="address in addresses" :key="address.value" :value="address.value">
        {{address.name}}
      </radio-item>
    </radio-group>
  </div>
</template>

<script>
import radioGroup from './radioGroup'
import radioItem from './radioItem'

export default {
  components: {
    radioGroup, radioItem
  },
  data() {
    return {
      addresses: [
        
      ]
    }
  },
  created() {
    console.log('test radio - created')
  },
  mounted() {
    console.log('test radio - mounted')
    setTimeout(() => {
      this.addresses = [
        {
          value: 'beijing',
          name: '北京'
        },
        {
          value: 'shanghai',
          name: '上海'
        },
        {
          value: 'guangzhou',
          name: '广州'
        },
      ]
    })
    
  },
  methods: {
    changeValue(v) {
      console.log('change value', v)
    }
  },
};
</script>

<style>
</style>
