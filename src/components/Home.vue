<template>
  <div class="wrapper">
    <h1>All Destinations</h1>
    <div class="all-destinations">
      <div
        v-for="destination in destinations"
        :key="destination.slug"
        class="destinations"
      >
        <router-link
          :to="{
            name: 'Destination',
            params: { dest: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>

        <figure>
          <router-link
            :to="{
              name: 'Destination',
              params: { dest: destination.slug },
            }"
            :aria-label="destination.name"
          >
            <img
              :src="require(`@/assets/${destination.image}.jpg`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store.js'
export default {
  data () {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}
.all-destinations {
  display: flex;
  justify-content: space-between;
}
img {
  width: auto;
  max-width: 250px;
  height: auto;
  width: 100%;
}
a {
  color: #107b75;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
.router-link-active {
  color: #08312f;
}
</style>
