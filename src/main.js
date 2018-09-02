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

// 路由配置第3步,设置组件
import HeroesList from './views/heroes/List.vue'
import EquipesList from './views/equipes/List.vue'
import WeaponsList from './views/weapons/List.vue' 

// 注意:vue.use()要去注册VueRouter插件,否则不能使用
//现在在全局范围内的组件内均可以使用,router相关标签等
//至少AppSidebar中可以使用
Vue.use(VueRouter);

// 路由配置第4步,创建路由对象,设置路由规则
const router = new VueRouter({
  routes : [
    {path : '/', redirect:'/heroes'},
    {path : '/heroes', component:HeroesList},
    {path : '/equipes', component:EquipesList},
    {path : '/weapons', component:WeaponsList}
  ],
  // 全局配置被匹配的时候应该激活的class,(只要包含路由名就算,非精确匹配),精确匹配应该再要添加Exact
  linkActiveClass:'active'
})


// 路由配置第5步,在vue实例中配置router
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
