import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import login from '@/views/login/login'
import regist from '@/views/regist/index'
import goodGoods from '../views/goodGoods/index'
import originality from '../views/originality/index'
import publishment from '../views/publishment/index'
import getPageTitle from './getPageTitle'
import NProgress from 'nprogress'
Vue.use(Router)

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
Vue.use(NProgress);
// export default new Router({
const router = new Router({
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
      meta: {
        title: '西科好物'
      }
    },
    {
      path: '/originality',
      name: 'originality',
      component: originality,
      meta: {
        title: '西科创意'
      }
    },
    {
      path: '/publishment',
      name: 'publishment',
      component: publishment,
      meta: {
        title: '西科出版'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist,
      meta: {
        title: '用户注册'
      }
    },
  ]
})
export default router;
// 动态修改页面title
router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.meta.title);
  NProgress.start();  // 每次切换页面时，调用进度条
  next();
});
router.afterEach(() => {  
  NProgress.done() // 在即将进入新的页面组件前，关闭掉进度条
})