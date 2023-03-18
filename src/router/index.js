import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import login from '@/views/login/login'
import regist from '@/views/regist/index'
import goodGoods from '../views/goodGoods/index'
import originality from '../views/originality/index'
import publishment from '../views/publishment/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/goodGoods',
      name: 'goodGoods',
      component: goodGoods,
      meta:{
        title:'西科好物'
      }
    },
    {
      path: '/originality',
      name: 'originality',
      component: originality,
      meta:{
        title:'西科创意'
      }
    },
    {
      path: '/publishment',
      name: 'publishment',
      component: publishment,
      meta:{
        title:'西科出版'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
      meta:{
        title:'用户注册'
      }
    },
  ]
})


