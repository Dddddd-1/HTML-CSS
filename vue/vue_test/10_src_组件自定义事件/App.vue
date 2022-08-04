<template>
    <div class="app">
        <h1>{{msg}},学生姓名是：{{studentName}}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName="getSchoolName"></School>

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
        <!-- <Student v-on:atguigu="getStudentName" @demo="m1"></Student> -->

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用ref)  -->
        <Student ref="student" @click.native="show"></Student>
    </div>
</template>

<script>    
    //引入School组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{Student,School},
        data(){
            return{
                msg:'你好啊',
                studentName:'',
            }
        },
        methods:{
            getSchoolName(name){
                console.log('App收到了学校名:',name)
            },
            //...params：将除name以外的元素整合到params数组中
            getStudentName(name,...params){
                console.log('App收到了学生名',name,params)
                this.studentName = name
            },
            m1(){
                console.log('demo事件被触发了')
            },
            show(){
                alert('123')
                },
        },
        mounted(){
            this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
            /* this.$refs.student.$on('atguigu',(name,...params) => {
                console.log('App收到了学生名:',name,params)
                this.studentName = name
            }) */
            // setTimeout(()=>{this.$refs.student.$once('atguigu',this.getStudentName)},3000)//绑定自定义事件(一次性)
        }
    }
</script>

<style>
    .app{
        background-color:gray;
        padding: 5px;
    }
</style>
