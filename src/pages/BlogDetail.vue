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
          <button
            v-for="topic in post.topics"
            :key="topic"
            @click="goToTopic(topic)"
            class="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
          >
            {{ topic }}
          </button>
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

        <!-- Share Button + Dropdown -->
        <div class="relative" ref="shareMenuRef">
          <button
            @click.stop="showShareMenu = !showShareMenu"
            class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Share2 :size="18" />
            Share Article
          </button>

          <!-- Share Dropdown -->
          <Transition
            enter-active-class="transition duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="showShareMenu"
              class="absolute bottom-14 right-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 w-52 z-50 origin-bottom-right"
            >
              <!-- Instagram Story -->
              <button
                @click="shareToInstagram"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <span class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
                  </svg>
                </span>
                <span class="text-sm text-gray-700 font-medium">Instagram Story</span>
              </button>

              <!-- WhatsApp -->
              <button
                @click="shareToWhatsApp"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <span class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </span>
                <span class="text-sm text-gray-700 font-medium">WhatsApp</span>
              </button>

              <!-- Threads -->
              <button
                @click="shareToThreads"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <span class="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="16" viewBox="0 0 192 192" fill="white">
                    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.206 17.11 97.015 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 9.988 15.93 12.737 26.488l16.159-4.319c-3.399-12.613-8.888-23.583-16.43-32.709C147.977 10.675 126.507 1.255 97.101 1.04L96.965 1h-.149C67.4 1.255 46.066 10.708 32.182 28.103 19.816 43.666 13.366 65.537 13.148 96.009v.083c.218 30.473 6.668 52.344 19.034 67.907C46.066 181.292 67.4 190.745 96.816 191H96.965c26.107-.194 44.553-7.006 59.612-22.063 19.744-19.741 19.136-44.508 12.637-59.7-4.646-10.826-13.608-19.579-27.677-24.25zm-44.47 29.16c-10.427.588-21.258-4.098-21.81-14.135-.402-7.51 5.336-15.905 22.586-16.918 1.976-.114 3.918-.169 5.828-.169 5.937 0 11.489.571 16.511 1.673-1.881 23.477-12.985 28.924-23.115 29.55z"/>
                  </svg>
                </span>
                <span class="text-sm text-gray-700 font-medium">Threads</span>
              </button>
            </div>
          </Transition>
        </div>
      </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, ChevronLeft, Share2 } from 'lucide-vue-next'
import { useBlogDetail } from '../composables/useBlog'

const route = useRoute()
const router = useRouter()
const showShareMenu = ref(false)
const shareMenuRef = ref(null)

// Use composable - pass initial ID
const { post, content, loading, error, fetchPost } = useBlogDetail(route.params.id)

// Navigate to blog page filtered by topic
const goToTopic = (topic) => {
  router.push({ name: 'Blog', query: { topic } })
}

// Share functions
const shareToWhatsApp = () => {
  const url = window.location.href
  const text = `${post.value?.title}\n${url}`
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  showShareMenu.value = false
}

const shareToThreads = () => {
  const url = window.location.href
  const text = `${post.value?.title}\n${url}`
  window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`, '_blank')
  showShareMenu.value = false
}

const shareToInstagram = async () => {
  // Instagram Story sharing requires the mobile app; use Web Share API or copy link
  const url = window.location.href
  if (navigator.share) {
    try {
      await navigator.share({ title: post.value?.title, url })
    } catch {}
  } else {
    await navigator.clipboard.writeText(url)
    alert('Link copied! Open Instagram and paste it into your Story.')
  }
  showShareMenu.value = false
}

// Close dropdown when clicking outside
const handleOutsideClick = (e) => {
  if (shareMenuRef.value && !shareMenuRef.value.contains(e.target)) {
    showShareMenu.value = false
  }
}

// Fetch post on mount and when route changes
onMounted(async () => {
  await fetchPost(route.params.id)
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
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