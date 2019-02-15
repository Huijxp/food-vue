// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
//mint-ui css文件
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
//: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//1:引入mint-ui组件库
//1:引入指定组件 Header
import {Header,Swipe,SwipeItem,Button} from 'mint-ui';
//2:注册指定组件(注册一个组件)
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);

//引入axios库 main.js 
import axios from 'axios'
//修改配置信息
axios.defaults.withCredentials = true

//6:注册组件
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
