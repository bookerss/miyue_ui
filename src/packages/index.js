// 全局导入所有需要全局使用的组件

// 导入组件
// 导入所有的的自定义的组件 然后直接use
import Alert from './Alert/index';
import Input from './Input/index';

//
const components = [Alert,Input];
// 注册组件
const install=function (Vue,opts = {}) {
    //  定义一个处理函数
//   判断插件是否已经安装 如果安装就不执行安装
// vue.use内部有个installed属性来判断是否安装了
  if(install.installed) return 
// 开始执行安装程序

//遍历组件
  components.map(component=>{
      Vue.component(component.name,component)
    //   将遍历的组件定义全局 在use时候会自动调用install方法
  })

// 注册实例方法
 Vue.prototype.$test = function(text){
   console.log('$test')
 }
 Vue.$fuck = function(text){
   console.log('$fuck',text)
 }
   



}

// 如果不是使用的模块方式 可以用这种方式来定义
// 比如是用的在index加入链接的方式
if(typeof window !== 'underfined' &&window.Vue){
     install(window.vue)
}else{
}



// vue.use(plugin)源码部分中式
/*
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    // 以上判断plugin中install方法是否是函数还是plugin本事就是函数
     结合实际 那么假如我们把我们定义好的组件中有个install那么vue就会
     主动的去执行这个函数
     那么我们就可以让我们的install函数中定义我们的组件注册就可以全局了




*/
// 导出给use是一个函数
//export default install
// 
export default {
    Alert,
    Input,
    install
}