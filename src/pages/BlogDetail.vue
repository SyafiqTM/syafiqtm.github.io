<template>
  <div class="min-h-screen bg-gray-50">
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
        <div v-if="postContent">
          <div v-for="(section, idx) in postContent.sections" :key="idx">
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

        <!-- Default Content for posts without detailed content -->
        <div v-else>
          <!-- Introduction Text -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <!-- Quote Block -->
          <div class="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <Quote :size="24" class="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p class="text-lg text-gray-800 italic mb-2">
                  "The best way to predict the future is to implement it yourself. Modern web development requires 
                  both technical excellence and creative problem-solving."
                </p>
                <p class="text-sm text-gray-600">— Software Engineering Principles</p>
              </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Visual Overview</h2>
            <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg aspect-video flex items-center justify-center mb-4">
              <div class="text-center">
                <ImageIcon :size="64" class="text-blue-400 mx-auto mb-2" />
                <p class="text-gray-600">Sample Image Placeholder</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 italic">Figure 1: Architecture diagram showing the component structure</p>
          </div>

          <!-- Code Block -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-2xl font-bold text-gray-900">Code Example</h2>
              <button 
                @click="copyCode"
                class="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
              >
                <Copy :size="16" />
                {{ copied ? 'Copied!' : 'Copy' }}
              </button>
            </div>
            <div class="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre class="text-sm text-gray-100 font-mono leading-relaxed"><code ref="codeRef">{{ codeExample }}</code></pre>
            </div>
          </div>

          <!-- Text Content with Subheadings -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Concepts</h2>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Component Architecture</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              Modern web applications are built using a component-based architecture. This approach allows developers to 
              create reusable, maintainable pieces of code that can be composed together to build complex user interfaces.
            </p>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">2. State Management</h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              Managing application state effectively is crucial for building scalable applications. Using reactive patterns 
              and proper data flow ensures that your UI stays in sync with your application data.
            </p>

            <h3 class="text-xl font-semibold text-gray-900 mb-3">3. Performance Optimization</h3>
            <p class="text-gray-700 leading-relaxed">
              Optimizing performance involves techniques like lazy loading, code splitting, and efficient rendering strategies. 
              These practices ensure that your application remains fast and responsive even as it grows in complexity.
            </p>
          </div>

          <!-- Inline Code Example -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Implementation Tips</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              When working with Vue 3, you can use the Composition API with <code class="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">ref()</code> and 
              <code class="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">computed()</code> to create reactive state. 
              This approach is more flexible than the Options API for complex components.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Don't forget to use <code class="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">onMounted()</code> and 
              <code class="px-2 py-1 bg-gray-100 text-red-600 rounded text-sm font-mono">onUnmounted()</code> lifecycle hooks 
              for proper component initialization and cleanup.
            </p>
          </div>

          <!-- Another Quote -->
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
            <div class="flex items-start gap-3">
              <Quote :size="24" class="text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <p class="text-lg text-gray-800 italic">
                  "Clean code is not written by following a set of rules. You don't become a software craftsman 
                  by learning a list of what to do and what not to do."
                </p>
              </div>
            </div>
          </div>

          <!-- Conclusion -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              By following these principles and best practices, you can build robust, maintainable applications that scale 
              with your needs. Remember that good software development is an iterative process that improves with experience.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Keep learning, experimenting, and refining your craft. The web development landscape is always evolving, 
              and staying curious is the key to long-term success.
            </p>
          </div>
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Calendar, ChevronLeft, Quote, Copy, ImageIcon } from 'lucide-vue-next'
import { BLOG_POSTS, BLOG_POST_CONTENT } from '../blogData.js'

const route = useRoute()
const router = useRouter()
const copied = ref(false)
const codeRef = ref(null)

// Get blog post data based on route ID
const post = computed(() => {
  const postId = parseInt(route.params.id)
  return BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0]
})

// Get detailed content for the post
const postContent = computed(() => {
  const postId = parseInt(route.params.id)
  return BLOG_POST_CONTENT[postId] || null
})

const codeExample = `import { useState, useEffect } from 'react'

function Dashboard() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [])

  if (loading) return <Spinner />

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <DataGrid data={data} />
    </div>
  )
}`

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

const copyCode = () => {
  navigator.clipboard.writeText(codeExample)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>
