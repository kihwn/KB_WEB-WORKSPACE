<template lang="">
    <div>
        
        <p>{{person.name}} {{person.age}}</p>
        <p>{{person2.name}} {{person2.age}}</p>
        <button @click="changeValue">값 변경하기</button>
    </div>
</template>
<script>
import {ref, reactive} from 'vue';
export default {
    //<script setup> 이렇게 하거나 setup함수 안에 작업을 하거나
    //단 주의사항 : 함수던 변수던 반드시 리턴을 해야 렌더링을 해준다.
    setup(){
        //변수선언을 직접한다. => 시스템이 감시할 수 없다.
        //ref나 reactive 모듈을 써서 변수나 객체를 만들면 이 공간은
        //시스템이 관리한다. 값이 바뀌면 렌더링도 해주고 관리를 한다.
        const person = ref({name:"깜꼬", age:5});
        //시스템의 어딘가에 Object 객체 만들고 그 객체에 대한 주소값만 던진다.
        //시스템의 어딘가에 Object 객체 만들고 그 객체에 대한 주소값만 던진자
        //reactive - 는 반드시 개체만 가능, 값타입 변수 안됨.
        const person2=reactive({name:"토심", age:12});

        const changeValue=()=>{
            person.value.name="만두";
            person.value.age=12;

            person2.name = "이도";
            person2.age = 33;
        }
        //변수뿐만 아니라 함수도 반환해야 외부에서 인식한다.
        return {person,person2,changeValue}
    }
}
</script>
<style lang="">
</style>
