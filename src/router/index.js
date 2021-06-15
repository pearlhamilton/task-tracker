import {createRouter, createWebHistory} from 'vue-router'

import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Hello from '../views/Hello.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Home 
    },
    {
    path: '/about',
    name: 'About',
    component: About
},
{
    path: '/hello',
    name: 'Hello',
    component: Hello
}
]

const router = createRouter({
    history: createWebHistory('/'),
    routes 
})

export default router