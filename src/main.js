// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import miyue from 'miyue'

// import Alert from './packages/Alert/index';
import Miyue from './packages/index';
console.log(Miyue)
 Vue.use(Miyue);
//  
// import fuck from './packages/index';
// Vue.use(fuck.Alert);



// import b from './class/text'
 
//  var bb = new b();
//  bb.con()




// let bc = require('./model')
// bc()
// import b from './require'
// // 实时证明 不管是commonjs或是es6模块方式导入 都会执行模块文件外的代码






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
