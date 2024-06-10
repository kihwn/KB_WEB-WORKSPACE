<template>
    <div>
      <h2>Board List</h2>
      <ul>
        <li v-for="(entry, index) in entries" :key="index">
          {{ entry.firstName }} {{ entry.lastName }} - <a :href="'mailto:' + entry.email">{{ entry.email }}</a> - {{ entry.gender }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'BoardReadList',
    data() {
      return {
        entries: []
      };
    },
    created() {
      axios.get('http://localhost:3001/address')
        .then(response => {
          this.entries = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
  </script>
  