<template lang="">
    <div>
        <!--/person/Tom 이라고 하면 Tom 이 반환됨. -->
        <h1>{{curRoute.params.name}}</h1>
        <h1>{{curRoute.path}}</h1>
        
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
export default {
    setup(){
        //name을 export해도 되지만 여기선 route 자체를 내보냄. 
        const curRoute = useRoute();
        return {curRoute};
    }
}
</script>
<style lang="">
    
</style>