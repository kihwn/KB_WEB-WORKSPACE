
   <template>
    <div>
      <Header />
      <h2>Create New Post</h2>
      <form @submit.prevent="createPost">
        <div>
          <label for="first_name">First Name:</label>
          <input type="text" v-model="first_name" required />
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input type="text" v-model="last_name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <select v-model="gender" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        <button type="submit" >Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue';
  import axios from 'axios';
  
  export default {
    name: 'Board_create',
    components: {
      Header,
    },
    data() {
      return {
        first_name: '',
        last_name: '',
        email: '',
        gender: 'Unknown',
      };
    },
    methods: {
      createPost() {
        axios.get('http://localhost:3001/address')
          .then(response => {
            const lastPost = response.data[response.data.length - 1];
            const newId = parseInt(lastPost.id) + 1;
            const newPost = {
              id: newId,
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email,
              gender: this.gender,
            };
  
            axios.post('http://localhost:3001/address', newPost)
              .then(() => {
                this.$router.push('/');
              })
              .catch(error => {
                console.error('Error creating post:', error);
              });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    max-width: 600px;
    margin: 0 auto;
  }
  div {
    margin-bottom: 10px;
  }
  label {
    display: block;
  }
  button {
    margin-top: 10px;
  }
  </style>
  

