// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import message from './plugins/message'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(message);
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

const store = new Vuex.Store({
  state: {
    mycount: 800
  },
  getters: {
    getcount: () => {
      return state.mycount;
    }
  },
  mutations: {
    increment(state) {
      state.mycount++;
    }
  }
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
  // console.log('全局前置守卫', to);
  // console.log('全局前置守卫', from);
  // console.log('全局前置守卫', next);
  next();
})

Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
})

/* eslint-disable no-new */
let vx = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});


  // beforeCreate(){
  //   console.group("%c%s","color:red",'beforeCreate--实例创建前状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // created() {
  //   console.group("%c%s","color:red",'created--实例创建完成状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // beforeMount() {
  //   console.group("%c%s","color:red",'beforeMount--挂载之前的状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  // },
  // mounted() {
  //   console.group("%c%s","color:red",'mounted--已经挂载的状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // beforeUpdate(){
  //   console.group("%c%s","color:red",'beforeUpdate--数据更新前的状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el.innerHTML)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  //   console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // //  console.log("%c%s","color:green","真实的 DOM 结构:"+document.getElementById('container').innerHTML)
  // },
  // updated() {
  //   console.group("%c%s","color:red",'updated--数据更新完成时状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el.innerHTML)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+JSON.stringify(this.$data))
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // //  console.log("%c%s","color:green","真实的 DOM 结构:"+document.getElementById('container').innerHTML)
  // },
  // activated() {
  //   console.group("%c%s","color:red",'activated-- keep-alive 组件激活时调用')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // deactivated(){
  //   console.group("%c%s","color:red",'deactivated-- keep-alive 停用时调用')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // beforeDestroy() {
  //   console.group("%c%s","color:red",'beforeDestroy-- vue实例销毁前的状态')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
  // destroyed() {
  //   console.group("%c%s","color:red",'destroyed-- vue实例销毁完成时调用')
  //   console.log("%c%s","color:blue","el  :"+this.$el)
  //   console.log(this.$el);
  //   console.log("%c%s","color:blue","data  :"+this.$data)
  //   console.log("%c%s","color:blue","message  :"+this.msg)
  // },
