<template lang="">
    <div>
        <h1>Receiver</h1>
        <span>{{msg}}</span>
    </div>
</template>
<script>
export default {
    props:["msg"]
    //msg는 App.vue를 통해 넘겨받아온 변수임
}
</script>
<style lang="">
    
</style>