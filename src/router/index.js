import Vue from 'vue'
import Router from 'vue-router'
// 前台
import home from '@/views/home/index'
import login from '@/views/login/login'
import regist from '@/views/regist/index'
import details from '../views/details/index'
import goodGoods from '../views/goodGoods/index'
import userCenter from '../views/userCenter/index'
import notFound from '../components/notFound/index'
import originality from '../views/originality/index'
import publishment from '../views/publishment/index'
// 后台
import adminLogin from '../views/backStage/adminLogin/index'
import userManage from '../views/backStage/userManage/index'
import typeManage from '../views/backStage/typeManage/index'
import goodsManage from '../views/backStage/goodsManage/index'
import backstageFrame from '../views/backStage/backstageFrame/index'
import materialManage from '../views/backStage/materialManage/index'
import originalityManage from '../views/backStage/originalityManage/index'
import publishmentManage from '../views/backStage/publishmentManage/index'
// 其他组件
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
        title: '西科好物',
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
        title: '欢迎登录'
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
    {
      path: "/details/:id",
      name: 'details',
      component: details,
      meta: {
        title: '好物详情'
      }
    },
    {
      path: "/userCenter",
      name: 'userCenter',
      component: userCenter,
      meta: {
        title: '用户中心'
      }
    },
    // 后台
    {
      path: "/admin/login",
      name: 'adminLogin',
      component: adminLogin,
      meta: {
        title: '后台登录'
      }
    },
    {
      // 后台框架
      path: "/admin",
      name: 'backstageFrame',
      component: backstageFrame,
      // 路由守卫(登录)
      meta: { requireAuth: true },
      // 子路由
      children:[
        {
          path: "userManage",
          name: 'userManage',
          component: userManage,
          meta: {
            title: '用户管理',
            meta: { requireAuth: true },
          }
        },
        {
          path: "goodsManage",
          name: 'goodsManage',
          component: goodsManage,
          meta: {
            title: '好物管理',
            meta: { requireAuth: true },
          }
        },
        {
          path: "originalityManage",
          name: 'originalityManage',
          component: originalityManage,
          meta: {
            title: '创意管理',
            meta: { requireAuth: true },
          }
        },
        {
          path: "publishmentManage",
          name: 'publishmentManage',
          component: publishmentManage,
          meta: {
            title: '出版管理',
            meta: { requireAuth: true },
          }
        },
        {
          path: "metarilManage",
          name: 'materialManage',
          component: materialManage,
          meta: {
            title: '材质管理',
            meta: { requireAuth: true },
          }
        },
        {
          path: "typeManage",
          name: 'typeManage',
          component: typeManage,
          meta: {
            title: '类别管理',
            meta: { requireAuth: true },
          }
        },
      ]
    },
    // 404页
    {
      path: "*",
      name: "NotFound",
      component: notFound,
      meta: {
        title: '404'
      }
    }
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