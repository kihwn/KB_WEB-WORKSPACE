<template>
    <div>
      <Header />
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  
  export default {
    name: 'NotFound',
    components: {
      Header,
    },
  };
  </script>
  
  <style scoped>
  p {
    font-size: 1.2em;
  }
  </style>
  