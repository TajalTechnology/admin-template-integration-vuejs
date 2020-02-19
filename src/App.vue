<template>
  <div id="app">

    this is app
    <router-link :to="{ name: 'Login' }">
link
                </router-link>
<!--    <Login></Login>-->

  </div>
</template>

<script>

// import Login from "./components/Login";
// import Login from "./components/Login";
export default {

  name: 'App',
  components: {
    // Login


  }
}
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
</style>
