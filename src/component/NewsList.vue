<template>
    <div class="mt50">
        <NavBar title="新闻列表"></NavBar>
        <ul class="mui-table-view">
            <li v-for="(item,index) in newsList" class="mui-table-view-cell mui-media" :key="index">
                <router-link :to="{name:'news.detail',query:{id:item.id}}">
                    <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
                    <div class="mui-media-body">
                        <!--<span>{{item.title}}</span>  和下面用v-text两种写法都可以-->
                        <span v-text="item.title">{{item.title}}</span>
                        <div class='news-desc'>
                            <p>点击数:{{item.click}}</p>
                            <p>发表时间：{{item.addTime |converDate}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.$axios.get('/getnewslist').then((res) => {
                this.newsList = res.data.result
            })
        }
    }
</script>

<style scoped>
    .mui-media-body p {
        color: #0bb0f5;
    }

    .news-desc p:nth-child(1) {
        float: left;
    }

    .news-desc p:nth-child(2) {
        float: right;
    }
</style>