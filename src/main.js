import Vue from 'vue'
import App from './App.vue'


// 使用bootstrap框架,导入全局的css样式
import 'bootstrap/dist/css/bootstrap.css'
// 引入自己的css样式
import './assets/css/index.css'

//webpack会报字体的错,因为webpack打包默认只能识别js,要是别的文件类型,
// 就需要配置相应的loader

//每次运行都去输入npm run dev很麻烦,写一个批处理文件start.bat将命令npm run dev封装进去

new Vue({
  el: '#app',
  render: h => h(App)
})
