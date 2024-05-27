<template>
  <div id="app">
    <GroupSelection />
    <NameInput />
  </div>
</template>

<script>
import GroupSelection from './components/GroupSelection.vue';
import NameInput from './components/NameInput.vue';

export default {
  name: 'App',
  components: {
    GroupSelection,
    NameInput
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
