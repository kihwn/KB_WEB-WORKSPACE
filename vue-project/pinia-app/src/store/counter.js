//스토어를 만든다. 
import {defineStore} from 'pinia';

//export는 모듈이 분리되어 있을 때 다른 파일에서 이 모듈에 접근하려면 반드시 export가 되어있는
//요소만 접근이 가능하다.
//defineStore("스토어이름",{}); {}키 값이 state, action, getters가 있다. 
//시스템 내부에 개체 만들고 주소 반환, useCounterStore 상수에 객체 주소가 저장된다. 
export const useCounterStore = defineStore('counter',{
    state:()=>({
        counter:0
    }), //화살표 함수에서 ({})는 공유메모리임. 

    //함수라기보다는 속성 ...> 약간 변수 느낌. 변수와 함수의 중간 느낌 ..?
    getter:{ //getter가 return을 해줌. 
        increaseCount : state => {return state.counter+1}, //아랫줄과 +1, -1만 다르고 내용은 같음.
        decreaseCount : state => state.counter-1, //코드의 차이. 
    },
    actions:{
        //화살표함수안에서는 this를 사용하지 못한다.
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
    }
});