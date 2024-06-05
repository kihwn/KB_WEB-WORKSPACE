<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
   <header>
  <nav style="margin-left:30px;" class="navbar navbar-expand-sm bg-yellow navbar-dark">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
        <RouterLink class="nav-link" to="/slot">Slot</RouterLink>
        <RouterLink class="nav-link" to="/board/list/1">게시판</RouterLink>
        <RouterLink class="nav-link" to='{name:"BoardList",params:{page:1}}'>게시판2</RouterLink>
        <!-- RouterLink에 to ="경로명"
        Router 지정시 /board/list/:page 이런식으로, 그리고 name속성 지정으로
      또는 :to={name:경로명이름, params:파라미터값}-->
      </nav>
      <div class="container">

      </div>
    </header>
 

  <!-- 컴포넌트들이 대체 되는 곳-->
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
