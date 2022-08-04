<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h1>学生姓名：{{name}}</h1>
        <h1>学生年龄：{{age}}</h1>
    </div>
</template>

<script>
    //组件交互相关的代码（数据、方法等等）
    export default{
        name:'student',
        data(){    
            return{
                name:'张三',
                age:18
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