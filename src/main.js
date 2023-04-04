import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'              //全局引入element
import VueCookies from 'vue-cookies'            //全局引入cookies
import 'element-ui/lib/theme-chalk/index.css'   //全局引入element的样式
import 'nprogress/nprogress.css'                //全局引入nprogress的样式
Vue.use(ElementUI);
Vue.use(VueCookies);
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'        //关键代码
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (VueCookies.isKey("adminToken")) { next(); } // 若登录则进入后台
    else {
      next({
        path: '/adminLogin', // 若未登录则跳转至login页面
        redirect:  '/admin'  // 登录成功后进入后台
      });
    }
  } else {
    next();
  }
})
