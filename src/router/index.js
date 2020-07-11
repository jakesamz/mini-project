import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Test,
      },
    },
    //测试嵌套路由....
    { 
      path: '/user/:id', //访问/user匹配不到 可以访问/user/a, /user/b
      component: () => import('@/components/test-router/test-nested-routes/User'),
      children: [
        {
          //使用默认的路由... /user/a <router-view></router-view>为profile
          path: '', component: () => import('@/components/test-router/test-nested-routes/UserProfile')
        },
        {
          path: 'profile', //user/a/profile
          component: () => import('@/components/test-router/test-nested-routes/UserProfile')
        },
        {
          path: 'posts', //user/a/profile
          component: () => import('@/components/test-router/test-nested-routes/UserPosts')
        }
      ]},
    { path: '*', name: 'NoExist', component: () => import('../components/common/NotExist404') }
  ]
})
