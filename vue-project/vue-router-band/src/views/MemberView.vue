<template>
    <div class="member-view">
      <h1>몽모 밴드 멤버</h1>
      <div v-for="member in members" :key="member.id" class="member">
        <img :src="member.image" :alt="member.name" class="member-image" />
        <p>{{ member.name }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const members = [
    { id: 1, name: '보컬 : 뇽따', image: new URL('@/assets/보컬.jpeg', import.meta.url).href },
    { id: 2, name: '기타 : 몽모', image: new URL('@/assets/기타.jpeg', import.meta.url).href },
    { id: 3, name: '건반 : 포실', image: new URL('@/assets/건반.jpeg', import.meta.url).href },
  ];
  </script>
  
  <style scoped>
  .member-view {
    text-align: center;
  }
  .member {
    display: inline-block;
    margin: 20px;
    text-align: center;
  }
  .member-image {
    width: 150px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  