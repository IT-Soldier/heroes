<template>
  <div id="app">
    <!-- 此处为组件嵌套 -->
    <!-- 头部 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-siderbar></app-siderbar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 路由占位 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//ben文件为父组件,需要引入AppHeader等子组件
import AppHeader from './components/AppHeader.vue'
import AppSiderbar from './components/AppSiderbar.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components : {
    AppHeader,
    AppSiderbar
  }
  
}
</script>

<style>

</style>


