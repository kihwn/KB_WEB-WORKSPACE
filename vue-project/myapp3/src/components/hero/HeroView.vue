<template lang="">
    <div v-if="hero.id!=-1">

        <h3>{{hero.id}}</h3>
        <h3>{{hero.name}}</h3>
        <h3>{{hero.description}}</h3>
        <!--<tr v-for="hero in heroList"
            v-on:click="click(hero)">
        <span>선택항목: {{hero.name}}</span>
        
    </tr>-->
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            hero:{name:"", description:"",id:-1}
        }
    },
    props:["hero"] //부모에게 받아올 것 지정하기
}
</script>
<style lang="">
    
</style>