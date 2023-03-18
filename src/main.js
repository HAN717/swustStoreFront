import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';             //全局引入element
import './theme/element/index.css'              //自定义主题
// import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
