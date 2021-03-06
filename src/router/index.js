import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test/Test'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  //滚动...
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Test,
    },
    {//测试嵌套路由....
      path: '/hahaha', //访问/user匹配不到 可以访问/user/a, /user/b
      component: () => import('@/components/test-router/test-nested-routes/User'),//User 对应 App 里边的 <router-view>
      redirect: '/user/:id',
      children: [
        {//Children 里的 component 对应 User 里边的<router-view>
          //使用默认的路由... /user/a <router-view></router-view>为profile
          path: '', component: () => import('@/components/test-router/test-nested-routes/UserProfile')
        },
        {
          path: '/profile', //user/a/profile
          component: () => import('@/components/test-router/test-nested-routes/UserProfile')
        },
        {
          path: '/posts', //user/a/profile
          component: () => import('@/components/test-router/test-nested-routes/UserPosts')
        }
      ]
    },
    // {
    //   path: '/',
    //   // name: 'namedviews',
    //   //component: () => import('@/components/test-router/test-named-views/NamedViews'),
    //   components:{
    //     default: () => import('@/components/test-router/test-named-views/NamedViews'),
    //     a: () => import('@/components/test-router/test-named-views/Bar'),
    //     b: () => import('@/components/test-router/test-named-views/Baz'),
    //   }
    // },
    {//命名路由
      path: '/named-views',
      // name: 'namedviews',
      component: () => import('@/components/test-router/test-named-views/NamedViews'),//NamedViews 对应 App 里边默认的 <router-view>
      children: [
        {
          path: '/nested-routes',
          components: {
            default: () => import('@/components/test-router/test-named-views/Foo'),
            a: () => import('@/components/test-router/test-named-views/Bar'),
            b: () => import('@/components/test-router/test-named-views/Baz'),
          }
        },
      ]
    },
    {//路由动画
      path: '/transition',
      // name: 'namedviews',
      component: () => import('@/components/test-router/test-transition/Transition'),//NamedViews 对应 App 里边默认的 <router-view>
      children: [
        {
          path: 'foo',
          component: () => import('@/components/test-router/test-transition/foo')
        },
        {
          path: 'bar',
          component: () => import('@/components/test-router/test-transition/Bar')
        },
      ]
    },
    {//获取数据
      path: '/datafetching/:id',
      name: 'datafetching/:id',
      component: () => import('@/components/test-router/test-data-fetching/DataFetch'),//NamedViews 对应 App 里边默认的 <router-view>
    },
    {//滚动
      path: '/scroll/:id',
      name: '/scroll',
      component: () => import('@/components/test-router/test-scroll/Scroll'),//NamedViews 对应 App 里边默认的 <router-view>
    },
    { path: '*', name: 'NoExist', component: () => import('../components/common/NotExist404') }
  ]
})
/*

{
  path: '/',
  name: 首页
  
  children: [
    {
      path: '/dashbord'
      children: [{
        name: ‘欢迎页’,
        path: '/dashbord/welcome'
      }]
    },
    {
      path: '/message/platform'
      name: '"消息管理-平台"'
      children: [
        {
          name: "产品消息列表",
          path: "/message/platform/product/index"
        },
        {
          name: "新闻/公告列表"
          path: "/message/platform/news/index"
        },
      ]
    },
    {
      path: "/platform"
      name: "系统管理"
      children: [
        {
          name: "账号管理",
          path: "/platform/account/index"
        },
        {
          name: "角色管理",
          path: "/platform/role/index"
        },
      ]
    },
  ]
}

*/