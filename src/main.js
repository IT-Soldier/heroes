// 主接口文件,只应该起到主接口的作用,路由什么的全部都扔出去
import Vue from 'vue'
import App from './App.vue'
// 配置路由首先要引入,vue-router文件
// import VueRouter from 'vue-router'

// 使用bootstrap框架,导入全局的css样式
import 'bootstrap/dist/css/bootstrap.css'
// 引入自己的css样式
import './assets/css/index.css'

// import axios from 'axios'

//webpack会报字体的错,因为webpack打包默认只能识别js,要是别的文件类型,
// 就需要配置相应的loader
//每次运行都去输入npm run dev很麻烦,写一个批处理文件start.bat将命令npm run dev封装进去

import router from './routers'
// 因为Vue实例中用到了router,所以才引入了router模块
// 路由配置第5步,在vue实例中配置router

// 给Vue的原型添加方法以实现axios的共用,而不是每个页面都要引入axios文件
// $http是早期vue的resource中发请求的东西,借用其名称

// axios的默认属性,用的时候会和剩下的地址进行拼接
// 当项目上线以后,接口地址肯定不同,统一设置,避免了每个页面去修改地址


// 引入MyHttp模块,注册插件,便于全局使用
import MyHttp from './plugins/MyHttp.js';
//调用插件对象的install方法
Vue.use(MyHttp);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
