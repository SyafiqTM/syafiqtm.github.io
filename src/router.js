import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Blog from './pages/Blog.vue'
import BlogDetail from './pages/BlogDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'BlogDetail',
    component: BlogDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
