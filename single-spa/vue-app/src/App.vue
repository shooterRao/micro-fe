<template>
  <div id="vue-app">
    <section>
      <h2>我是vue-app</h2>
      <Button to="/vue/about">跳转到vue-app的子页面</Button>
      <router-view />
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 20px;
  padding-top: 0;
}
h2 {
  padding-bottom: 10px;
}
</style>
