<template>
  <div id="main-app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vue">Vue-app</router-link>
    </div>
    <!-- 这里是展示子系统的地方 -->
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
