<template lang="">
    <div>
        이름 : <input type="text" v-model="hero.name"> <br/>
        업적: <input type="text" v-model = "hero.description"><br/>
        <button type="button" v-on:click="append">등록</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hero:{name:"", description:""}
        }
    },
    methods:{
        append:function(){
            //alert(this.hero.name);
            this.$emit("append",this.hero);
            this.hero={name:"",description:""} //화면삭제하기

        }
    }
    
}
</script>
<style lang="">
    
</style>