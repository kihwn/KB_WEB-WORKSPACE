<script setup>
import GradeList from './GradeList.vue';
import GradeInput from './GradeInput.vue';
</script>
<template lang="">
    <div>
        <GradeInput v-on:append="append"/>
        <br/>
        <GradeList v-bind:grade-list = "gradeList"/>
    
    </div>
</template>
<script>
export default {
    data(){
        return{
            gradeList:[
                {id:1, name:"깜꼬", kor:"92",mat:"70",eng:"88"},
                {id:2, name:"이도", kor:"67",mat:"92",eng:"91"},
                {id:3, name:"류아", kor:"66",mat:"88",eng:"72"},
                {id:4, name:"단아", kor:"88",mat:"100",eng:"94"}

            ]
        }
    },
    methods:{
        append:function(grade){
            let temp = {};
            let id = this.gradeList[this.gradeList.length-1].id+1;
            temp.id = id;
            temp.name = grade.name;
            temp.kor = grade.kor;
            temp.mat = grade.mat;
            temp.eng = grade.eng;
            this.gradeList.push(temp);
        }
    }
    
}
</script>
<style scoped>
    
</style>