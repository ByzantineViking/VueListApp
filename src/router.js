
import Vue from 'vue'
import Router from 'vue-router'
import Listing from './components/Listing.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'skills',
            component: Listing
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})