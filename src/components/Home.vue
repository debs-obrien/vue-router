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
