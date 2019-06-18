<template>
  <div>
    <section>
      <h3 class="title">{{ experience.title }}</h3>
      <div>
        <div class="experience-details">
          <img
            :src="require(`@/assets/${experience.image}.jpg`)"
            :alt="experience.title"
          />
          <p> {{ experience.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import store from '@/store.js'

export default {
  props: {
    dest: {
      type: String,
      required: true,
    },
    exp: {
      type: String,
      required: true,
    },
  },

  data: function() {
    return {
      destinations: store.destinations,
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.dest
      )
    },
    experience () {
      return this.destination.experiences.find(
        experience => experience.slug === this.exp
      )
    },
  },
}
</script>
<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.title {
  font-size: 30px;
}
</style>
