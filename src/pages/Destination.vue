<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}.jpg`)" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section v-if="destination.experiences" id="experience">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="experiences">
        <div
          v-for="experience in destination.experiences"
          :key="experience.id"
          class="experience-card"
          ><router-link
            :to="{
              name: 'Experience',
              params: { exp: experience.slug },
              hash: '#experience',
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}.jpg`)"
              :alt="experience.title"
            />

            <span class="experience-card__text">
              {{ experience.title }}</span
            >
          </router-link>
        </div>
      </div>
    </section>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import GoBack from '@/components/GoBack'
import store from '@/store.js'

export default {
  components: { GoBack },
  props: ['dest'],

  computed: {
    destination () {
      return store.destinations.find(destination => destination.slug === this.dest)
    }
  }
}
</script>
<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination {
  padding-bottom: 40px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.experiences {
  display: flex;
  justify-content: space-between;
}
.experiences img {
  max-height: 200px;
}
.experience-card {
  padding: 0 20px;
  position: relative;
}
.experience-card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
