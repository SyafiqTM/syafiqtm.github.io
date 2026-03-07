<template>
  <nav :class="['nav-root', { 'is-scrolled': isScrolled }]">
    <div class="nav-inner">
      <router-link to="/" class="nav-logo"></router-link>
      <div class="nav-links">
        <router-link to="/" :class="linkClass('/')">ABOUT</router-link>
        <router-link to="/projects" :class="linkClass('/projects')">PROJECTS</router-link>
        <router-link to="/blog" :class="linkClass('/blog')">BLOG</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

const linkClass = (path) => [
  'nav-link',
  {
    'is-active': route.path === path,
  },
]

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background 0.3s, border-color 0.3s;
  background: transparent;
  border-bottom: 1px solid transparent;
}

.nav-root.is-scrolled {
  background: rgba(13, 17, 23, 0.92);
  backdrop-filter: blur(12px);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-weight: 700;
  font-size: 0.9375rem;
  letter-spacing: 0.2em;
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-logo:hover {
  color: #3fffc0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #fff;
}

.nav-link.is-active {
  color: #3fffc0;
}

.nav-link.is-active:hover {
  color: #22e5ab;
}

@media (max-width: 640px) {
  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.65rem;
  }
}
</style>
