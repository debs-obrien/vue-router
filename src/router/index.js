import Vue from 'vue'
import Router from 'vue-router'
import DestinationDetails from '@/pages/DestinationDetails'

import AllDestinations from '@/components/AllDestinations'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: AllDestinations
        },
    
        { 
            path: '/DestinationDetails/:id', 
            name: 'DestinationDetails', 
            component: DestinationDetails
         }

    ]
})