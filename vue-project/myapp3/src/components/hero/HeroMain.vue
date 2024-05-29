<script setup>
import HeroList from './HeroList.vue';
import HeroInput from'./HeroInput.vue';

</script>
<template lang="">
    <div>
        <!-- 부모컴포넌트 입장에서 자식컴포넌트에 값을 전달해줘야 한다 
            v-bind:속성 = "변수명"
            함수를 전달할 때는 v-on:속성 = "함수명"
        -->
        <HeroInput v-on:append="append"/> 
        <br/>
        <HeroList v-bind:hero-list = "heroList"/>            
    </div>
</template>
<script>

export default {
    data(){
        return{
            heroList:[
                {id:1, name:"강감찬", description:"귀주대첩"},
                {id:2, name:"윤관",   description:"강동6주"},
                {id:3, name:"을지문덕", description:"살수대첩"},
                {id:4, name:"이순신", description:"노량해전"},
                {id:5, name:"권율장군", description:"행주대첩"},
                {id:6, name:"세종대왕", description:"한글창제"}
            ]
        }
    }
    ,methods:{
        //자식으로부터 데이터를 받아서 목록에 추가
        append:function(hero){
            //참조 변수는 대입하는 순간 얕은 복사, 깊은복사
            //객체를 새로 만들어서 값을 대입해야 한다.
            let temp = {};
            let id = this.heroList[this.heroList.length-1].id+1;
            //젤 마지막 데이터의 id+1
            temp.id = id;
            temp.name = hero.name;
            temp.description = hero.description;
            this.heroList.push( temp );

        }
    }   
}
</script>
<style scoped>

</style>