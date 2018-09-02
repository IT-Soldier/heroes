<template>
  <div id="app">
    <!-- 此处为组件嵌套 -->
    <app-header></app-header>
    <app-siderbar></app-siderbar>
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
