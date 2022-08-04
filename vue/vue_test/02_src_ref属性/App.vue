<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>    
    //引入School组件
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
        data(){
            return{
                msg:'欢迎学习Vue!'
            }
            
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)
            }
        }    
    }
</script>
