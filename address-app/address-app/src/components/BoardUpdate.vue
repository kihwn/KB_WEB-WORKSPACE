<template>
    <div class="container mt-4">
      <h2>Update Address</h2>
      <form @submit.prevent="updatePost">
        <div class="mb-3">
          <label for="first_name" class="form-label">First Name</label>
          <input type="text" id="first_name" v-model="firstName" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="last_name" class="form-label">Last Name</label>
          <input type="text" id="last_name" v-model="lastName" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <input type="text" id="gender" v-model="gender" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        gender: ''
      };
    },
    created() {
      this.fetchAddress();
    },
    methods: {
      async fetchAddress() {
        try {
          const response = await axios.get(`http://localhost:3001/addresses/${this.$route.params.id}`);
          const address = response.data;
          this.firstName = address.first_name;
          this.lastName = address.last_name;
          this.email = address.email;
          this.gender = address.gender;
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      },
      async updatePost() {
        try {
          const updatedPost = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            gender: this.gender
          };
          await axios.put(`http://localhost:3001/addresses/${this.$route.params.id}`, updatedPost);
          this.$router.push(`/read/${this.$route.params.id}`);
        } catch (error) {
          console.error('Error updating post:', error);
        }
      }
    }
  };
  </script>
  