<template>
    <header class="mui-bar mui-bar-nav">
        <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="goBack"></a>
        <h1 class="mui-title">{{title}}</h1>
    </header>
</template>

<script>
    export default {
        name: "NavBar",
        props:['title'],
        data(){
            return{

            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .mui-bar.mui-bar-nav{
        /*解决覆盖标题的问题，绝对定位设置相对定位即可*/
        position: relative;
    }
</style>