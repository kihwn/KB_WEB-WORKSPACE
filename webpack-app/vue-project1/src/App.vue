<template>
  <div id="app">
    <div class="image-container">
      <img src="./assets/my_image.jpg" alt="My Image" />
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th>좋아하는 커피 종류</th>
          <th>좋아하는 쥬스 종류</th>
          <th>좋아하는 샐러드 종류</th>
        </tr>
        <tr>
          <td>아이스라떼</td>
          <td>블루베리 주스</td>
          <td>치킨 샐러드</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup>

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

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.image-container img {
  max-width: 30%;
  height: auto;
}

.table-container {
  display: flex;
  justify-content: center;
}

table {
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
