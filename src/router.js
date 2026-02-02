import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
