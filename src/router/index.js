import Vue from 'vue'
import Router from 'vue-router'
import jamaica from '@/pages/jamaica'
import hawaii from '@/pages/hawaii'
import brazil from '@/pages/brazil'
import panama from '@/pages/panama'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/jamaica',
            name: 'jamaica',
            component: jamaica
        },
        {
            path: '/brazil',
            name: 'brazil',
            component: brazil
        },
        {
            path: '/hawaii',
            name: 'hawaii',
            component: hawaii
        },
        {
            path: '/panama',
            name: 'panama',
            component: panama
        }
    ]
})