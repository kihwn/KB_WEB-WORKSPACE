<template lang="">
    <div>
        현재 카운트 : {{cnt}}
        <button type="button" @click="plus()">+</button>
    </div>
</template>
<script setup>
    //vue라이브러리로부터 ref, onMounted를 import한다.
    import{ref, onMounted} from 'vue';
    //변수를 기존에는 data(){return{변수}}로 했는데,
    // 이번에는 내부로 완전하게 감춘다.
    const cnt = ref(0); //컴퓨터 내부에 0을 저장할 공간을 만들고 그 주소를 반환한다.
                            //0을 저장할 공간이 객체 타입이다.
    const plus = () => {
        cnt.value ++;
    }
    //onMounted 함수 : 매개변수로 callback 함수를 가져간다.
    onMounted(()=>{
        cnt.value=10;   //변수에 초기값 들어가기
        console.log("onMounted");
    })
</script>
<style lang="">
</style>