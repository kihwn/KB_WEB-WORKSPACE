<template lang="">
    <div>
        <ButtonComponent>
            <span style="color:red">click me</span>
        </ButtonComponent>

        <ButtonComponent>
            <span style="color:blue">click me</span>
            <!-- 이 파트가 slot으로 넘어감. -->
        </ButtonComponent>
        
    </div>
</template>
<script>
import ButtonComponent from '@/components/slot/ButtonComponent.vue'
export default {
    components:
}
</script>
<style lang="">
    
</style>