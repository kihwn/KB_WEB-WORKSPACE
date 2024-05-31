<template lang="">
    <div>
        <h1>{{members[0].name}}</h1>
    </div>
</template>
<script>
import members from '../../members.json';
export default {
    name:"MemberView",
    setup(){
        console.log(members);
        return {members};
    }
    
}
</script>
<style lang="">
    
</style>