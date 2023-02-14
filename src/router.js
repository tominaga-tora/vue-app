import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
