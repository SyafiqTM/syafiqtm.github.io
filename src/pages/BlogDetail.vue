<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center min-h-screen">
      <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="min-h-screen flex items-center justify-center px-4">
      <div class="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md w-full">
        <div class="flex items-center gap-2 mb-4">
          <span class="text-red-600 text-2xl">⚠️</span>
          <h3 class="text-red-800 font-bold text-xl">Error Loading Post</h3>
        </div>
        <p class="text-red-700 mb-6">{{ error }}</p>
        <div class="flex gap-4">
          <button 
            @click="fetchPost(route.params.id)"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
          <router-link 
            to="/blog"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to Blog
          </router-link>
        </div>
      </div>
    </div>

    <!-- Content -->
    <template v-else-if="post">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex items-center gap-2 mb-4 text-blue-100">
          <router-link to="/blog" class="hover:text-white transition-colors flex items-center gap-1">
            <ChevronLeft :size="20" />
            Back to Blog
          </router-link>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <span class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            {{ post.category }}
          </span>
          <span class="text-blue-100 text-sm flex items-center gap-1">
            <Calendar :size="16" />
            {{ formatDate(post.date) }}
          </span>
          <span class="text-blue-100 text-sm">{{ post.readTime }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ post.title }}</h1>
        <p class="text-xl text-blue-100">{{ post.excerpt }}</p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-12">
      <article class="prose prose-lg max-w-none">
        <!-- Dynamic Content Rendering for Redis Blog Post -->
        <div v-if="content && content.sections">
          <div v-for="(section, idx) in content.sections" :key="idx">
            <!-- Introduction Section -->
            <div v-if="section.type === 'introduction'" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ section.title }}</h2>
              <p v-for="(paragraph, pIdx) in section.content" :key="pIdx" class="text-gray-700 leading-relaxed mb-4" v-html="paragraph"></p>
            </div>

            <!-- Regular Section with Subsections -->
            <div v-else-if="section.type === 'section'" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ section.title }}</h2>
              
              <!-- Simple content (no subsections) -->
              <div v-if="section.content">
                <p v-for="(paragraph, pIdx) in section.content" :key="pIdx" class="text-gray-700 leading-relaxed mb-4" v-html="paragraph"></p>
              </div>

              <!-- Subsections -->
              <div v-if="section.subsections">
                <div v-for="(subsection, subIdx) in section.subsections" :key="subIdx" class="mb-8 last:mb-0">
                  <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ subsection.title }}</h3>
                  <p class="text-gray-700 leading-relaxed mb-4" v-html="subsection.content"></p>
                  
                  <!-- Code Block -->
                  <div v-if="subsection.code" class="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                    <pre class="text-sm text-gray-100 font-mono leading-relaxed"><code>{{ subsection.code.code }}</code></pre>
                  </div>

                  <!-- Details List -->
                  <ul v-if="subsection.details" class="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li v-for="(detail, dIdx) in subsection.details" :key="dIdx" v-html="detail"></li>
                  </ul>

                  <!-- Additional Code Block -->
                  <div v-if="subsection.additionalCode" class="bg-gray-900 rounded-lg p-6 overflow-x-auto mb-4">
                    <pre class="text-sm text-gray-100 font-mono leading-relaxed"><code>{{ subsection.additionalCode.code }}</code></pre>
                  </div>

                  <!-- Note -->
                  <div v-if="subsection.note" class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p class="text-sm text-gray-700" v-html="subsection.note"></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Conclusion Section -->
            <div v-if="section.type === 'conclusion'" class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ section.title }}</h2>
              <p v-for="(paragraph, pIdx) in section.content" :key="pIdx" class="text-gray-700 leading-relaxed mb-4" v-html="paragraph"></p>
            </div>
          </div>
        </div>

        <!-- No detailed content available -->
        <div v-else class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <p class="text-gray-600">Detailed content for this post is not yet available.</p>
        </div>
      </article>

      <!-- Tags -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Topics</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="topic in post.topics"
            :key="topic"
            class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {{ topic }}
          </span>
        </div>
      </div>

      <!-- Navigation -->
      <div class="mt-12 flex justify-between items-center">
        <router-link 
          to="/blog"
          class="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft :size="20" />
          Back to All Posts
        </router-link>
        <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Share Article
        </button>
      </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, ChevronLeft, Quote, Copy, ImageIcon } from 'lucide-vue-next'
import { useBlogDetail } from '../composables/useBlog'

const route = useRoute()
const router = useRouter()
const copied = ref(false)
const codeRef = ref(null)

// Use composable - pass initial ID
const { post, content, loading, error, fetchPost } = useBlogDetail(route.params.id)

// Fetch post on mount and when route changes
onMounted(async () => {
  await fetchPost(route.params.id)
})

// Watch for route param changes (when navigating between different blog posts)
watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await fetchPost(newId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
)

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>