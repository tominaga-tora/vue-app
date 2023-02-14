import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import User from './components/User.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
