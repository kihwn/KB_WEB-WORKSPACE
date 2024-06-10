

   <template>
    <div>
      <Header />
      <h2>Board List</h2>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Board List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/create">Create New Post</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in entries" :key="entry.id">
            <td>{{ entry.id }}</td>
            <td>{{ entry.first_name }}</td>
            <td>{{ entry.last_name }}</td>
            <td><a :href="'mailto:' + entry.email">{{ entry.email }}</a></td>
            <td>{{ entry.gender }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import axios from 'axios';
  
  export default {
    name: 'BoardReadList',
    components: {
      Header,
    },
    data() {
      return {
        entries: [],
      };
    },
    created() {
      axios.get('http://localhost:3001/address')
        .then(response => {
          this.entries = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>
  