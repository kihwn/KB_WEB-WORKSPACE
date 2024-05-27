<template>
    <div>
      <h2>관심있는 그룹을 선택하고, 이름을 입력</h2>
      <div v-for="group in groups" :key="group">
        <label>
          <input type="checkbox" :value="group" v-model="selectedGroups" />
          {{ group }}
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroupSelection',
    data() {
      return {
        groups: ['BTS', 'Black Pink', 'EXO', 'ITZY'],
        selectedGroups: []
      };
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  