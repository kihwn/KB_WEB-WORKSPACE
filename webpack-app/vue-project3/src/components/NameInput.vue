<template>
    <div>
      이름: <input type="text" v-model="name"><br/>
      <button type="button" v-on:click="submitName">이름입력전송</button>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        message: ''
      };
    },
    methods: {
      submitName() {
        this.message = `${this.name}님이 인기짱이야!`;
      }
    }
  };
  </script>
  
  <style scoped>
 
  </style>
  