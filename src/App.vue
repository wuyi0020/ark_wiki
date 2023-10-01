<template>
  <nav>
    <router-link to="/">首頁</router-link> |
    <router-link to="/character">角色圖鑑</router-link> |
    <router-link to="/about">關於</router-link>
  </nav>
  <router-view/>
</template>

<style>
@import url('@/assets/richtext.css'); 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
body{
  background-color: rgb(0, 0, 0);
}

nav {
  padding: 30px;
  font-size: 1.5rem;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
