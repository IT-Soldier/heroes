// 主接口文件,只应该起到主接口的作用,路由什么的全部都扔出去
import Vue from 'vue'
import App from './App.vue'
// 配置路由首先要引入,vue-router文件
import VueRouter from 'vue-router'

// 使用bootstrap框架,导入全局的css样式
import 'bootstrap/dist/css/bootstrap.css'
// 引入自己的css样式
import './assets/css/index.css'

//webpack会报字体的错,因为webpack打包默认只能识别js,要是别的文件类型,
// 就需要配置相应的loader
//每次运行都去输入npm run dev很麻烦,写一个批处理文件start.bat将命令npm run dev封装进去

import router from './routers'
// 因为Vue实例中用到了router,所以才引入了router模块
// 路由配置第5步,在vue实例中配置router
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
