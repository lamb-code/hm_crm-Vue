<template>
    <div class="mt50">
        <NavBar title="新闻详情"></NavBar>
        <div class="news-title">
            <p>{{newsDetail.title}}</p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{newsDetail.addTime | converDate}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content">

        </div>
    </div>

</template>

<script>
    export default {
        name: "NewsDetail",
        data(){
            return{
                newsDetail:{}
            }
        },
        created(){
           let id =  this.$route.query.id;
           this.$axios.get('/get/news/'+id).then((res)=>{
               this.newsDetail = res.data.result[0];
               console.log(this.newsDetail)
           })
        }
    }
</script>

<style scoped>

</style>