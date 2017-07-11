
/*
 *@des:这种一种制定全局组件的方式
 * 使用这种方式可以把通用组件直接安装而不用在每个组件中单独调用,当然 你想单独调用也是可以的
*/

import Alert from './src/main.vue';
Alert.install = function (Vue) {
    alert(1222)
    console.log('alert',Alert)
       Vue.component(Alert.name,Alert);
  }

export default Alert;