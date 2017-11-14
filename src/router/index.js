import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'

// 可以在这里调用已经被js处理过的routes
// import routes2 from './route.config';

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
//routes2的方式
/* export default newRouter({
  routes:routes2
}) */

