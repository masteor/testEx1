<template>
  <div id="app">
    <router-link to="/tab1">Перейти к Foo</router-link>
    <router-link to="/tab2">Перейти к Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/

export default {
  name: 'App',
  components: {

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
