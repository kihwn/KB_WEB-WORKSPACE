<template lang="">

    <div class="container mt-3">
        <h2>Flex</h2>
        
        <div class="d-flex" v-for="todo in todoStore.todoList" >
            <span class="p-2 bg-light flex-fill">{{todo.id}}</span> &nbsp;
            <RouterLink :to='{name:"TodoView",params:{id:todo.id}}'
            <span class="p-2 bg-light flex-fill">{{todo.todo}}</span>&nbsp;&nbsp;
            </RouterLink> 
            <span class="p-2 bg-light flex-fill">{{todo.desc}}</span>
        </div>
        <div>
            <RouterLink to="/todo/create">글쓰기</RouterLink>
        </div>
    </div>
   
</template>
<script setup>
import {useTodoStore} from '@/store/todo.js';
import {onMounted} from 'vue';
const todoStore = useTodoStore(); 
//맨처음에 데이터를 불러와야 한다 => compute 나 watch나 watchEffect 또는 mount를 사용ㄹ할 수 잇ㄱ다 
onMounted(() => {
    //console.log("**");
    todoStore.fetchAll("gdhong");
})

</script>

<script>
export default {
    
}
</script>
<style lang="">
    
</style>