<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*整个页面的背景色*/
body{
  background-color: #f5f5f5;
  min-width: 1000px;
}
/*一级容器定宽居中*/
body>.container{
  width: 1000px;
  min-width: 1000px;
  magin:0 auto;
}
</style>
