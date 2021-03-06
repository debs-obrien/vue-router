import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import store from '@/store.js'
const NotFound = () =>
  import(/* webpackChunkName: "NotFound" */ '@/pages/NotFound.vue')
const Destination = () =>
  import(/* webpackChunkName: "Destination" */ '@/pages/Destination.vue')
const Experience = () =>
  import(/* webpackChunkName: "Experience" */ '@/pages/Experience.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // savedPosition is only available for popstate navigations.
      return savedPosition
    } else {
      const position = {}

      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash

        // specify offset of the element
        if (to.hash === '#experience') {
          position.offset = { y: 80 }
        }

        if (document.querySelector(to.hash)) {
          return position
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false
      }
    }
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
          path: ':exp',
          name: 'Experience',
          component: Experience,
          props: true,
        },
      ],
      beforeEnter: (to, from, next) => {
        const slug = to.params.dest
        if (
          store.destinations.find((destination) => destination.slug === slug)
        ) {
          next()
        } else {
          next({ name: 'Not Found' })
        }
      },
    },
    {
      path: '/404',
      name: 'Not Found',
      component: NotFound,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
})
