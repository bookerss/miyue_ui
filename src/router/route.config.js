// 导入路由配置文件
import navConfig from './nav.route.json';
// 懒加载调用函数
const LOAD = name => {
  return r => require.ensure([], () => r(require(`./pages/${name}.vue`)))
}
// 添加路由 
const addRoute = (page, index) => {
    const child = [{
      path: page.path,
      component: component.default || component,
      meta:{
        title:page.title || page.name
      },
    }, ]
    // 这里的index代表的是路由的第一层对象 将路由添加到第一层对象的子路由
    //route[index].children.push(child);
    // 直接添加
    route.push(child);
  };
  // 初始化路由
  const registerRoute = navConfig => {
    let route = [];
    // 获取路由配置信息中的对象属性
    Object.keys(navConfig).forEach((lang, index) => {
      let navs = navConfig[lang];
      // 

      // 遍历路由项目
      navs.forEach(nav => {
         if(nav.groups){
           nav.groups.forEach(group=>{
             nav.list.forEach(nav=>{
                 addRoute(nav,index)
             })
           })
         }else if(nav.children){
            // 如果有子路由的话
           




         }
      })

    })

    // 遍历

    return route;
  }

//  开始调用
// 下面这句 就直接返回nav.route.json文件中是要定义的路由
let route = registerRoute(navConfig);

export default route
