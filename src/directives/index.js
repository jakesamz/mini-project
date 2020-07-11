import Vue from 'vue'

Vue.directive('phono-no', {
  // 当被绑定的元素插入到 DOM 中时……
  bind: function (el, binding, vnode) {
    console.log('phono-no....')
    el.style.borderColor = 'red';
    //el.style.position = 'fixed'
    //el.style.top = binding.value + 'px'
  }
})