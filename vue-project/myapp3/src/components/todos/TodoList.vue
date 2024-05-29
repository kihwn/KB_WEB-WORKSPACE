<template lang="">
    <div>
        <button type="button" v-on:click="loadData">데이터불러오기</button> 
        <br/>
        <ul>
            <li v-for="todo in todoList">
            {{todo.id}}
            {{todo.userId}}
            {{todo.title}}
            {{todo.completed}}
        </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    //이 부분이 감시되면서 지속적인 렌더링 작업이 벌어진다. 
    data(){
        return{
            todoList:[]
        }
    },
    //window.onload나 $(document).ready에 해당된다.
    //created를 통해 클릭을 하지 않아도 화면에 데이터를 바로 보일 수 있게 함.
    
    created:function(){
        this.loadData();

}
,
    
    methods:{
        loadData:function(){
            fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data =>{
                this.todoList = data;
            })

        }
    }
    
}
</script>
<style lang="">
    
</style>