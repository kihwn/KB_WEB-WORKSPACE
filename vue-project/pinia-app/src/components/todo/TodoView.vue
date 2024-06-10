<template lang="">
    <div>
       아이디 : {{todoStore.todo.id}} <br/> 
       할일 : {{todoStore.todo.todo}} <br/>
       설명 :   {{todoStore.todo.desc}} <br/>
    </div>
</template>
<script>
import {useTodoStore} from '@/store/todo.js';
import{useRoute} from 'vue-router';

export default {
    setup(){
        const route = useRoute();
        const todoStore = useTodoStore();

        let id = route.params.id;

        todoStore.fetchItem(id);
        

        //    /todo/view/id ==> axios를 이용해서 백앤드서버에 데이터 요청을 한다
        return {todoStore}
    }
}
</script>
<style lang="">
    
</style>