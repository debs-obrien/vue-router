import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'

Vue.config.productionTip = false
new Vue({
  router,
  Meta,

  render: (h) => h(App),
}).$mount('#app')
