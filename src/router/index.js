import Vue from 'vue'
import Router from 'vue-router'
import DestinationDetails from '@/pages/DestinationDetails'
import AllDestinations from '@/components/AllDestinations'
import Experiences from '@/pages/Experiences'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllDestinations,
    },

    {
      path: '/DestinationDetails/:location',
      name: 'DestinationDetails',
      component: DestinationDetails,
    },
    {
      path: '/DestinationDetails/:location/:experience',
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
