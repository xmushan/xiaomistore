import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./assets/scss/base.scss";
import "./assets/scss/config.scss"
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import {Message} from 'element-ui'
Vue.prototype.$message = Message;
axios.defaults.baseURL = '/api'; // 配置默认域名
axios.defaults.timeout = 8000 // 超时时间
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response.data; //只返回请求的到的数据
}, function (error) {
  // 对响应错误做点什么
  console.warn(error);
  return Promise.reject(error);
});
Vue.filter('toFixNumber',function(value = 0){
  return value.toFixed(2)
})

Vue.use(VueAxios,axios)
Vue.config.productionTip = false //阻止启动生产消息
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
