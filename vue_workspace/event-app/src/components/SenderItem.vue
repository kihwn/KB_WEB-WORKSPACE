<template lang="">
    <div>
        <h1>Sender</h1>
        <button type="button" v-on:click="$emit('send-message','Hello')">이벤트 발신</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>