<template>

  <div id="app">
  <TheNav />

 <router-view/> 
  </div>
</template>

<script>
import TheNav from '@/components/TheNav.vue'

export default {
  name: 'App',
  components: {
    TheNav
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
li{
  list-style: none;
}
</style>
