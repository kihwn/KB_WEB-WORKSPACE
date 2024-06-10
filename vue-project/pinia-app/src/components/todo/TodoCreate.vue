<template lang="">
    <div>
        할일 : <input type="text" v-model="todo.todo" /><br/>
        설명 : <input type="text" v-model="todo.desc" /><br/>

        <button type="button" @click="append">추가</button>
        
    </div>
</template>
<script>
import axios from 'axios';
import {useRouter} from 'vue-router';
import { reactive } from 'vue';
export default {
    setup(){
        const router = useRouter(); //router 에 push를 해야 한다 
        const todo  = reactive({todo:"", desc:""})
        //통신 방식은  get하고 post밖에 없음 put, delete 는 추가된 메소드 
        const append=()=>{
            axios.post("http://localhost:8000/todolist/gdhong",
            todo)
            .then(res=>{
                console.log( res.data );
                if( res.data.status=="success")
                {
                    alert("등록성공");
                    //list 페이지로 이동해야 한다 
                    router.push( {path:"/todo/list"} );
                }
            })
            .catch(error=>{
                console.log(error);
            })
        }        

        return {todo, append}
    }
}
</script>
<style lang="">
    
</style>

