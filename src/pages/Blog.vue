<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Dev Updates</h1>
        <p class="text-gray-600">Latest updates on React, Cloud, and Infrastructure</p>
      </div>

      <!-- Search and Filter Section -->
      <div class="mb-8 space-y-4">
        <!-- Search Bar -->
        <div class="relative">
          <Search class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" :size="20" />
          <input
            type="text"
            placeholder="Search posts..."
            v-model="searchQuery"
            class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <!-- Topic Filter -->
        <div class="flex flex-wrap gap-2">
          <button
            @click="selectedTopic = 'All'"
            :class="`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedTopic === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`"
          >
            All Topics
          </button>
          <button
            v-for="topic in allTopics"
            :key="topic"
            @click="selectedTopic = topic"
            :class="`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedTopic === topic
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`"
          >
            {{ topic }}
          </button>
        </div>
      </div>

      <!-- Results Count -->
      <div class="mb-6 text-gray-600">
        Showing {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'post' : 'posts' }}
        <span v-if="selectedTopic !== 'All'"> in {{ selectedTopic }}</span>
      </div>

      <!-- Blog Cards Grid -->
      <div v-if="paginatedPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          v-for="post in paginatedPosts"
          :key="post.id"
          class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 cursor-pointer"
          @click="$router.push(`/blog/${post.id}`)"
        >
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {{ post.category }}
              </span>
              <span class="text-gray-500 text-sm flex items-center gap-1">
                <Calendar :size="14" />
                {{ formatDate(post.date) }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer" @click="$router.push(`/blog/${post.id}`)">
              {{ post.title }}
            </h3>

            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ post.excerpt }}
            </p>

            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(topic, idx) in post.topics.slice(0, 3)"
                  :key="idx"
                  class="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                >
                  <Tag :size="12" />
                  {{ topic }}
                </span>
              </div>
              <span class="text-sm text-gray-500">{{ post.readTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-16">
        <p class="text-gray-500 text-lg">No posts found matching your criteria.</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2">
        <button
          @click="currentPage = Math.max(1, currentPage - 1)"
          :disabled="currentPage === 1"
          class="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft :size="20" />
        </button>

        <button
          v-for="pageNum in totalPages"
          :key="pageNum"
          @click="currentPage = pageNum"
          :class="`px-4 py-2 rounded-lg font-medium transition-colors ${
            currentPage === pageNum
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`"
        >
          {{ pageNum }}
        </button>

        <button
          @click="currentPage = Math.min(totalPages, currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight :size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Search, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { BLOG_POSTS } from '../blogData.js'

// State
const searchQuery = ref('')
const selectedTopic = ref('All')
const currentPage = ref(1)
const POSTS_PER_PAGE = 6

// Extract unique topics
const allTopics = computed(() => {
  const topics = new Set(BLOG_POSTS.flatMap(post => post.topics))
  return Array.from(topics).sort()
})

// Filter posts
const filteredPosts = computed(() => {
  return BLOG_POSTS.filter(post => {
    const matchesSearch = searchQuery.value === '' ||
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.topics.some(topic => topic.toLowerCase().includes(searchQuery.value.toLowerCase()))

    const matchesTopic = selectedTopic.value === 'All' || post.topics.includes(selectedTopic.value)

    return matchesSearch && matchesTopic
  })
})

// Pagination
const totalPages = computed(() => Math.ceil(filteredPosts.value.length / POSTS_PER_PAGE))
const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * POSTS_PER_PAGE
  return filteredPosts.value.slice(startIndex, startIndex + POSTS_PER_PAGE)
})

// Reset to page 1 when filters change
watch([searchQuery, selectedTopic], () => {
  currentPage.value = 1
})

// Helpers
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>
