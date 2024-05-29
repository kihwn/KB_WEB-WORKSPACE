<script setup>
import HeroView from './HeroView.vue';
</script>
<template lang="">
    <div>
        <table>
            <tr v-for="hero in heroList"
                v-on:click="click(hero)">
                <td>{{hero.id}}</td>
                <td>{{hero.name}}</td>
                <td>{{hero.description}}</td>
            </tr>
        </table>
        <hr/>
        <HeroView :hero="hero"/>
        <!--<span>선택항목: {{hero.name}}</span>   이 부분 컴포넌트 분리-->
    </div>
</template>
<script>
export default {
    //자동 바인딩은 data() 안에서만 선언해야 한다. 그래야 인식이 가능하다.
    data(){
        return{
            hero:{name:"", description:"",id:-1}
        }
    },
    props:["heroList"]
    
}
</script>
<style lang="">
</style>