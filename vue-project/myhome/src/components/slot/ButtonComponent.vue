<template lang="">
    <div>
        <button type = "button" v-on:click ="callFunction">{{msg}}
        <slot></slot>
    </button>
    </div>
</template>
<script>
export default {
    props:["msg"],
    methods:{
        callFunction.function(){
            alert("press");
        }
    }
}
</script>
<style lang="">
    
</style>