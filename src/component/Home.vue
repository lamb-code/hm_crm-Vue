<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <img :src="img.img">
            </mt-swipe-item>
        </mt-swipe>
        <!--九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name:'news.list'}">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"></span>
                    <div class="mui-media-body">图文分享</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品展示</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索资讯</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-gear"></span>
                    <div class="mui-media-body">联系我们</div>
                </a></li>


            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                imgs: []
            }
        },
        created() {
            this.$axios.get('/gelunbo').then((res) => {
                this.imgs = res.data.result;
            })
        },
        methods: {}
    }
</script>

<style scoped>
    .mint-swipe-items-wrap > div {
        position: relative;
    }

    .mint-swipe {
        max-height: 187px;
    }

    .mint-swipe img {
        width: 100%;
        height: 100%;
    }

    .mui-table-view.mui-grid-view.mui-grid-9 {
        background-color: #ffffff;
        border: 0;
    }

    .mui-table-view.mui-grid-view.mui-grid-9 li {
        border: 0;
    }

    /*清楚九宫格字体图标*/
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-gear:before {
        content: '';
    }

    /*设置九宫格北京图片*/
    .mui-icon-home {
        background: url("../static/images/news.png");
        background-repeat: round;
    }

    .mui-icon-email {
        background: url("../static/images/callme.png");
        background-repeat: round;
    }

    .mui-icon-chatbubble {
        background: url("../static/images/feedback.png");
        background-repeat: round;
    }

    .mui-icon-location {
        background: url("../static/images/goodShow.png");
        background-repeat: round;
    }

    .mui-icon-search {
        background: url("../static/images/picShare.png");
        background-repeat: round;
    }

    .mui-icon-gear {
        background: url("../static/images/search.png");
        background-repeat: round;
    }

    .mui-icon {
        width: 60px;
        height: 60px;
    }
</style>