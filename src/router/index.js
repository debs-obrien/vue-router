import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Location from '@/pages/Location'
import Experiences from '@/pages/Experiences'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/:location',
      name: 'Location',
      component: Location,
    },
    {
      path: '/:location/:experience',
      name: 'Experiences',
      component: Experiences,
    },

    {
      path: '*',
      Name: 'Not Found',
      component: NotFound,
    },
  ],
})
