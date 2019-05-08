import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next()
})

axios.create({ 
	// 下面两个属性，用来设置，请求失败或者超时，自动重新请求的次数和间隙时间
	retry: 2, // 请求次数
	retryInterval: 1000 // 求期间隙
});

axios.interceptors.request.use(config => {
  return config
},
function(error) {
  return Promise.reject(error)
}
);
//请求后返回数据拦截
axios.interceptors.response.use(res => {
     return res
  },
  function axiosRetryInterceptor(res) {
      var config = res.config;
      //如果配置不存在或重试属性未设置，抛出promise错误
      if (!config || !config.retry) return Promise.reject(res);
      //设置一个变量记录重新请求的次数
      config.retryCount = config.retryCount || 0;
      // 检查重新请求的次数是否超过我们设定的请求次数
      if (config.retryCount >= config.retry) {
          return Promise.reject(res);
      }
      //重新请求的次数自增
      config.retryCount += 1;
      // 创建新的Promise来处理重新请求的间隙
      var back = new Promise(function(resolve) {
          console.log("接口"+config.url+"请求超时，重新请求")
          setTimeout(function() {
              resolve();
          }, config.retryInterval|| 1);
      });
      //返回axios的实体，重试请求
      return back.then(function() {
          return axios(config);
      });
  }
);


// axios.post('http://localhost:8088/basesearch/queryBaseCompApiTwo.api',
// {
//   compCode:'0'
// },{
//   headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//   }
// }).then(res =>{
//   console.log(res)
// })


axios({
  method: "POST",
  url: `http://localhost:8088/basesearch/queryBaseCompApi.api`,
  params: {
    compCode: '0'
  },
}).then(function (res) {
  console.log(res);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')