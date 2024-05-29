<template lang="">
    <div v-if="grade.id!=-1">

        <h3>{{grade.id}}</h3>
        <h3>{{grade.name}}</h3>
        <h3>{{grade.kor}}</h3>
        <h3>{{grade.mat}}</h3>
        <h3>{{grade.eng}}</h3>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            grade:{name:"",kor:"",mat:"",eng:"",id:-1}
        }
    },
    props:["grade"]
    
}
</script>
<style lang="">
    
</style>