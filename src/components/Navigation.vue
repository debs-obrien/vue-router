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
export default {
  data: function() {
    return {
      destinations: [
        {
          name: 'Brazil',
          image: 'brazil',
          slug: 'brazil',
          id: 1,
        },
        {
          name: 'Panama',
          image: 'panama',
          slug: 'panama',
          id: 2,
        },
        {
          name: 'Hawaii',
          image: 'hawaii',
          slug: 'hawaii',
          id: 3,
        },
        {
          name: 'Jamaica',
          image: 'jamaica',
          slug: 'jamaica',
          id: 4,
        },
      ],
    }
  },
}
</script>
<style scoped>
.nav {
  display: flex;
  align-items: center;
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
