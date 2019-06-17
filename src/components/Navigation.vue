<template>
  <nav class="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li><router-link class="links" to="/">Home</router-link></li>
      <li v-for="(destination, index) in destinations" :key="index"
        ><router-link
          class="links"
          :to="{
            name: 'Destination',
            params: { dest: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from '@/store.js'
export default {
  data: function() {
    return {
      destinations: store.destinations,
    }
  },
}
</script>
<style scoped>
.nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
.nav-links {
  display: flex;
}
.links {
  color: black;
  text-decoration: none;
  font-weight: 500;
  padding-right: 20px;
}
.links:hover {
  text-decoration: underline;
  color: teal;
}
</style>
