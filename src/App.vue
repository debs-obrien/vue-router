<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    TheFooter,
  },
  metaInfo: {
    // Children can override the title.
    title: 'Vue School Router Course',
    titleTemplate: '%s ← Vue Router',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Vue School Vue Router Course.' },
    ],
  },
}
</script>

<style>
body {
  margin: 0;
}
figure {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 20px;
}

li {
  list-style: none;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.router-link-exact-active {
  color: #a10bc7;
}
</style>
