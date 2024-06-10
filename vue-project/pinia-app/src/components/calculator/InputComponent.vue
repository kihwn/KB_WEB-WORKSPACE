<template lang="">
    <div>
        x: <input type="text" v-model="store.x"/> <br/>
        y: <input type="text" v-model="store.x"/> <br/>
    </div>
</template>
<script setup>
import {useCalculatorStore} from '@/store/calculator.js'
const store = useCalculatorStore();
</script>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>