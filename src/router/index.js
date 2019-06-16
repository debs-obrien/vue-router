import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/pages/NotFound'
const Destination = () =>
  import(/* webpackChunkName: "Destination" */ '@/pages/Destination.vue')
const Experience = () =>
  import(/* webpackChunkName: "Experience" */ '@/pages/Experience.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
    },
    {
      path: '/destination/:dest',
      name: 'Destination',
      component: Destination,
      props: true,
      children: [
        {
          path: '/:exp',
          name: 'Experience',
          component: Experience,
          props: true,
        },
      ],
    },

    {
      path: '*',
      Name: 'Not Found',
      component: NotFound,
    },
  ],
})
