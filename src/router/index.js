import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Destination from '@/pages/Destination'
import Experience from '@/pages/Experience'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
    },

    {
      path: '/:dest',
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
    },

    {
      path: '404',
      Name: 'Not Found',
      component: NotFound,
    },
  ],
})
