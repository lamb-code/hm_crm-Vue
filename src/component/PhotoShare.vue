<template>
    <div class="mt50">
        <NavBar title="图文分享"></NavBar>
        <!--引入返回导航-->
        <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :key="category.id"><a href="javascript:;">{{category.title}}</a></li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "PhotoShare",
        data(){
            return{
                categorys:[]
            }
        },
        created(){
            this.$axios.get('/getimgcategory').then((res)=>{
                this.categorys=res.data.result
            })
        }
    }
</script>

<style scoped>
    .photo-header li {
        list-style: none;
        display: inline-block;
        margin-left: 10px;
        height: 30px;
    }

    .photo-header ul {
        /*强制不换行*/
        white-space: nowrap;
        overflow-x: auto;
        padding-left: 0px;
        margin: 5;
    }


    /*下面的图片*/

    .photo-list li {
        list-style: none;
        position: relative;
    }

    .photo-list li img {
        width: 100%;
        height: 230px;
        vertical-align: top;
    }

    .photo-list ul {
        padding-left: 0px;
        margin: 0;
    }

    .photo-list p {
        position: absolute;
        bottom: 0px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        margin-bottom: 0px;
    }

    .photo-list p span:nth-child(1) {
        font-weight: bold;
        font-size: 16px;
    }

    /*图片懒加载的样式*/
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>