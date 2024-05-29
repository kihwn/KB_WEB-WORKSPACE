<script setup>
import GradeView from './GradeView.vue';
</script>
<template lang="">
    <div>
        <table>
            <tr v-for="grade in gradeList"
            v-on:click="click(grade)">
            <td>{{grade.id}}</td>
            <td>{{grade.name}}</td>
            <td>{{grade.kor}}</td>
            <td>{{grade.mat}}</td>
            <td>{{grade.eng}}</td>
        </tr>
        </table>
        <br/>
        <GradeView :grade="grade"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            grade:{name:"",kor:"",mat:"",eng:"",id:-1}
        }
    },
    props:["gradeList"]
    
}
</script>
<style lang="">
    
</style>