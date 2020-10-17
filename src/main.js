// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
Vue.config.productionTip = false

//引入公共js
import './common/js/common.js'

/* 引入mintUI */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/* 引入自定义公共样式 */
import './common/css/common.css'
import './common/css/booksdetail.css'
import './common/css/bookshelf.css'
import './common/css/read.css'
import './common/css/communication.css'

Vue.use(MintUI)
/* 设置baseURL，将axios挂载到Vue原型上 */
axios.defaults.baseURL='https://www.easy-mock.com/mock/5f3fc3a403f8a71d1e500f0f/test';
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if(to.meta.auth){
    if(localStorage.getItem('user')){
      next();
    }
    else{
      next('/login')
    }
  }else{
    next();
  }
})
