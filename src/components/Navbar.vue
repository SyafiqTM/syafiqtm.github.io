<template>
  <nav
    :class="`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-md border-b border-gray-200'
        : 'navbar-gradient backdrop-blur-md border-b border-white/30'
    }`"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Home Link -->
        <router-link
          to="/"
          :class="`flex items-center gap-2 font-bold text-xl transition-colors ${
            isScrolled ? 'text-blue-600 hover:text-blue-700' : 'text-white hover:text-blue-200'
          }`"
        >
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center gap-6">
          <router-link
            to="/"
            :class="`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-600 hover:text-blue-600'
                : 'text-white hover:text-blue-200'
            } ${
              route.path === '/' && isScrolled
                ? 'text-blue-600 border-b-2 border-blue-600'
                : route.path === '/' && !isScrolled
                ? 'text-blue-200 border-b-2 border-blue-200'
                : ''
            }`"
          >
            Portfolio
          </router-link>
          <router-link
            to="/blog"
            :class="`font-medium transition-colors ${
              isScrolled
                ? 'text-gray-600 hover:text-blue-600'
                : 'text-white hover:text-blue-200'
            } ${
              route.path === '/blog' && isScrolled
                ? 'text-blue-600 border-b-2 border-blue-600'
                : route.path === '/blog' && !isScrolled
                ? 'text-blue-200 border-b-2 border-blue-200'
                : ''
            }`"
          >
            Blog
          </router-link>
        </div>
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
  isScrolled.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-gradient {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%);
}
</style>
