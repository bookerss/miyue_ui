
/*
 *@des:这种一种制定全局组件的方式
 * 使用这种方式可以把通用组件直接安装而不用在每个组件中单独调用,当然 你想单独调用也是可以的
*/

import Alert from './src/main.vue';
// 这样可单独安装组件
// 在index.js中导出的是default { alert} 
// 当用户Vue.use(alert)的时候就会触发这个install
// 那么这个组件就被安装并且t变成了全局的Vue函数
Alert.install = function (Vue) {
       Vue.component(Alert.name,Alert);
       Vue.t=()=>{
         console.log('我是alert组件注册的全局函数Vue.t()')
       }
       
  }

export default Alert;