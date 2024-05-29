<template lang="">
    <div>
        이름 : <input type="text" v-model="grade.name"><br/>
        국어 : <input type="text" v-model="grade.kor"><br/>
        수학 : <input type="text" v-model="grade.mat"><br/>
        영어 : <input type="text" v-model="grade.eng"><br/>
        <button type="button" v-on:click="append">등록</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            grade:{name:"",kor:"",mat:"",eng:""}
        }
    },
    methods:{
        append:function() {
            this.$emit("append",this.grade);
            this.grade={name:"",kor:"",mat:"",eng:""}
        
        }
    } 
}
</script>
<style lang="">
    
</style>