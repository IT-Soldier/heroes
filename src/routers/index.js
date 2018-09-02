import Vue from 'vue'
// Vue.use()会使用到Vue

import VueRouter from 'vue-router'

// 路由配置第3步,设置组件
import HeroesList from '../views/heroes/List.vue'
import EquipesList from '../views/equipes/List.vue'
import WeaponsList from '../views/weapons/List.vue' 
import HeroesAdd from '../views/heroes/Add.vue' 

// 注意:vue.use()要去注册VueRouter插件,否则不能使用
//现在在全局范围内的组件内均可以使用,router相关标签等
//至少AppSidebar中可以使用,判定use()只将其注册一次
Vue.use(VueRouter);

// 路由配置第4步,创建路由对象,设置路由规则
const router = new VueRouter({
  routes : [
    {path : '/', redirect:'/heroes'},
    {path : '/heroes', component:HeroesList},
    {path : '/equipes', component:EquipesList},
    {path : '/weapons', component:WeaponsList},
    {path : '/heroes/add', component:HeroesAdd},
  ],
  // 全局配置被匹配的时候应该激活的class,(只要包含路由名就算,非精确匹配),精确匹配应该再要添加Exact
  linkActiveClass:'active'
})

// 既然是模块就应该将接口暴露出去
export default router;