<template lang="">
    <div>
        <h3>이름: <input type="text" v-model="score.name"></h3>
        <h3>국어: <input type="text" v-model="score.kor" ></h3>
        <h3>영어: <input type="text" v-model="score.eng"></h3>
        <h3>수학: <input type="text" v-model="score.mat"></h3>
        <h3 v-if="score.name!=''">
            {{score.name}}의 총점은 {{score.total}} 입니다.
        </h3>
        <button type="button" @click="confirm">확인</button>
    </div>
</template>
<script>
import {reactive} from "vue";
export default {
    setup(){
        //setup 안에 변수와 함수를 함께 묶음.
        const score = reactive({name:"", kor:0, eng:0, mat:0});
        const confirm = () =>{
            score.total = parseInt(score.kor)+parseInt(score.eng)+parseInt(score.mat)
        }
        return {score,confirm};

    }
    
}
</script>
<style lang="">
    
</style>