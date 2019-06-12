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
            name: 'DestinationDetails',
            params: { location: destination.slug },
          }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>

        <figure>
          <router-link
            :to="{
              name: 'DestinationDetails',
              params: { location: destination.slug },
            }"
          >
            <img :src="require(`@/assets/${destination.image}.jpg`)" />
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
}
.all-destinations {
  display: flex;
  justify-content: center;
}
img {
  max-width: 200px;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
.router-link-active {
  color: dodgerblue;
}
</style>
