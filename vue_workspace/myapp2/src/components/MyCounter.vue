<template lang="">
    <div>
        <h1>{{msg}}:{{count}}</h1>
        <button type="button" v-on:click="increase">+</button>
        <button type="button" v-on:click="decrease">-</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:"MyCounter",
            count:0
        }
    },
    methods:{
        increase:function(){this.count++},
        decrease:function(){this.count--}
    }
}
</script>
<style lang="">
</style>