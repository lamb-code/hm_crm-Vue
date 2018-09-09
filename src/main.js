import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';
import Axios from 'axios';
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL=' https://www.easy-mock.com/mock/5b94c60add236325f85bf79f/hm'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(Mint);
import 'mint-ui/lib/style.css';
//引入Mui 样式
import './static/vendor/mui/dist/css/mui.css';
import './static/css/global.css';
//导入组件
import Home from './component/Home.vue';
import Member from './component/Member.vue';
import ShopCart from './component/ShopCart.vue';
import Search from './component/Search.vue';
let router = new VueRouter({
    routes:[
        {path:'/',redirect:{name:'home'}},
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'member',component:Member},
        {name:'shopcart',path:'shopcart',component:ShopCart},
        {name:'search',path:'search',component:Search}
    ]
})
new Vue({
    el:"#app",
    router,
    render: c => c(App)
});
