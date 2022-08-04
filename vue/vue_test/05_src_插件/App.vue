<template>
    <div>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>    
    //引入School组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{Student,School},
    }
</script>
