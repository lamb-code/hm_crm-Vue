import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';

import Axios from 'axios';

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5b94c60add236325f85bf79f/hm'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Mint);
import NavBar from './component/common/NavBar.vue';
Vue.component('NavBar',NavBar)
import Moment from 'moment';
//定义全局过滤器 转换时间格式
Vue.filter('converDate',function (value) {
    return Moment(value).format('YYYY-MM-DD');
})
import 'mint-ui/lib/style.css';
//引入Mui 样式
import './static/vendor/mui/dist/css/mui.css';
import './static/css/global.css';
//导入组件
import Home from './component/Home.vue';
import Member from './component/Member.vue';
import ShopCart from './component/ShopCart.vue';
import Search from './component/Search.vue';
import NewsList from './component/NewsList.vue';
import NewsDetail from './component/NewsDetail.vue';
import PhotoShare from './component/PhotoShare.vue'
/*inkActiveClass:mui-active, 配置点击链接激活时添加的样式 默认值是router-link-active现在更改成mui-active,
*原理是根据路由地址匹配
*/
let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        {path: '/', redirect: {name: 'home'}},
        {name: 'home', path: '/home', component: Home},
        {name: 'member', path: '/member', component: Member},
        {name: 'shopcart', path: '/shopcart', component: ShopCart},
        {name: 'search', path: '/search', component: Search},
        {name:'news.list',path:'/news/list',component:NewsList},
        {name:'news.detail',path:'/news/detail', component:NewsDetail},
        {name:'photo.share',path:'/photo/share',component:PhotoShare}
    ]
})
new Vue({
    el: "#app",
    router,
    render: c => c(App)
});
