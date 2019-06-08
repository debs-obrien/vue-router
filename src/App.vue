<template>
  <div id="app">
        <AllDestinations />

  </div>
</template>

<script>
import AllDestinations from './components/AllDestinations.vue'

export default {
  name: 'app',
  components: {
    AllDestinations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
