<template>
  <div>
    <div v-for="destination in destinations" :key="destination.id">
      <div v-if="dest == destination.slug">
        <div v-for="experience in destination.experiences" :key="experience.id">
          <section v-if="exp == experience.slug">
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
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store.js'

export default {
  props: ['dest', 'exp'],

  data: function() {
    return {
      destinations: store.destinations,
    }
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
