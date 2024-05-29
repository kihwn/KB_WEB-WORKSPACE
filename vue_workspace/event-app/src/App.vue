<script setup>
import SenderItem from "./components/SenderItem.vue";
import ReceiverItem from "./components/ReceiverItem.vue";
</script>

<template>
  <!--컴포넌트태그에 새로운 속성을 만들어서 그 속성에 함수를 전달한다.-->
  <SenderItem v-on:send-message="sendMessage"/>
  <hr/>
  <ReceiverItem v-bind:msg="msg" />
</template>

<script>
export default{
  methods:{
    "sendMessage":function(msg){
      alert(msg);
    }
  },data(){
    return{msg:""}
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
