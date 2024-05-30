<template lang="">
    <div>
         이름 :   <input type="text" v-model="name.nameData.name"> <br/>
         키   :   <input type="text"  v-model="info.info.height"> <br/>
         몸무게 :  <input type="text"  v-model="info.info.weight"> <br/>
        
         <button type="button" @click="info.changeHeight(400)">클릭</button>

         <h3>{{name.nameData.name}}</h3>
         <h3>{{info.info.height}}</h3>
         <h3>{{info.info.weight}}</h3>
         
    </div>
</template>

<script>
import {ref, reactive,computed,onMounted} from "vue";
const useName = (name="깜꼬") =>{
        //반드시 return이 있어야 함. setup에서 함수를 호출하여 return 값을 받아서 다시 return 시키게 됨.
        const nameData = reactive({name:name});
        const changeName = (name)=>{
            console.log(name);
            nameData.name = name.trim().length<2?"":name.trim();
            //문자열의 길이가 2보다 작으면 지워버린다. 아니면
            //공백 제거한다.
        }
        return {nameData, changeName}; //반드시 반환을 해줘야 한다. 

       

    }
const useCalc = (height=170,weight=60)=>{
        const info = reactive({height:h, weight:w});
        const changeHeight=(h)=>{info.height = h;}
        const changeWeight=(w)=>{info.weight = w;}
        return {info,changeWeight, changeHeight,changeHeight};
    }

    
    //setup 함수 안에 너무 많은 코드가 있을 경우 불편하다.
    //함수를 쪼개면 파일을 다른 곳으로 보낼 수도 있다.
    //람다함수를 만들고 그 주소를 저장한다.
    //(name=="깜꼬")는 함수의 매개변수에 기본값을 부여한다.
    

    
export default{
        setup(){
            const name=userName("몽모");
            const info = useCalc(40,1);

            return {name,info};
        }

    }
    

</script>
<style lang="">
    
</style>