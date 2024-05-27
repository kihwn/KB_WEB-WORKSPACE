<template lang="">
    <div>
        <h1>계산기</h1>
        x: <input type="text" v-model="x"><br/>
        y: <input type="text" v-model="y"><br/>
        result: <input type="text" v-model="result"><br/>
        <button type="button" v-on:click="add">+</button>
        <button type="button" v-on:click="sub">-</button>
        <button type="button" v-on:click="mul">*</button>
        <button type="button" v-on:click="div">/</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            x:0,
            y:0,
            result:0
        }
    },
    methods:{
        add:function(){this.result = parseInt(this.x)+parseInt(this.y);},
        sub:function(){this.result = parseInt(this.x)-parseInt(this.y);},
        mul:function(){this.result = parseInt(this.x)*parseInt(this.y);},
        div:function(){this.result = parseInt(this.x)/parseInt(this.y);}
    }
}
</script>
<style lang="">
</style>