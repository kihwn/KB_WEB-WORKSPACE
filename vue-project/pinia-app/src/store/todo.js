//스토어를 만든다. 
import {defineStore} from 'pinia';
import axios from 'axios'; //npm install axios

//export는 모듈이 분리되어 있을 때 다른 파일에서 이 모듈에 접근하려면 반드시 export가 되어있는
//요소만 접근이 가능하다.
//defineStore("스토어이름",{}); {}키 값이 state, action, getters가 있다. 
//시스템 내부에 개체 만들고 주소 반환, useCounterStore 상수에 객체 주소가 저장된다. 
export const useTodoStore = defineStore('todo',{
    state:()=>({
        todos:{id:"",todo:"", desc:""},
        todoList:[]
    }), //화살표 함수에서 ({})는 공유메모리임. 

    //함수라기보다는 속성 ...> 약간 변수 느낌. 변수와 함수의 중간 느낌 ..?
    
    actions:{
        //화살표함수안에서는 this를 사용하지 못한다.
        async fetchAll(userid){
            let result = await axios.get(`http://localhost:8000/todolist/${userid}`)
            console.log(result);
            this.todoList = result.data;
            console.log(this.todoList);
        },
        async fetchItem(id){
            let result = await axios.get(`http://localhost:8000/todolist/gdhong/${id}`)
            this.todo = result.data;
        }
}});