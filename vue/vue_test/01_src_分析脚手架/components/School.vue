<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>学校名称：{{SchoolName}}</h1>
        <h1>学校名称：{{SchoolAddress}}</h1>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等等）
    export default{
        name:'School',
        data(){    
            return{
                SchoolName:'尚硅谷',
                SchoolAddress:'北京'
                }
            },
        methods: {
        showName(){
            alert(this.SchoolName)
        }
    },
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>