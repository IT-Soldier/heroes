import axios from 'axios'


const MyHttp = {};

//统一使用install方法,这是个规范,便于管理,检测
MyHttp.install = function (Vue) {

    axios.defaults.baseURL = 'http://localhost:3001/';

    Vue.prototype.$http = axios;

}

export default MyHttp;