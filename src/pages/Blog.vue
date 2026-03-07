<template>
  <main class="blog-page">
    <!-- Hero -->
    <section class="blog-hero">
      <div class="blog-shell">
        <p class="hero-kicker">Dev Updates</p>
        <div class="hero-copy">
          <h1 class="hero-title">Writing from the trenches.</h1>
          <p class="hero-text">
            Latest thoughts on React, Cloud, and Infrastructure — straight from what I'm actually building.
          </p>
        </div>
      </div>
    </section>

    <!-- Controls -->
    <section class="blog-controls-section">
      <div class="blog-shell">
        <!-- Search -->
        <div class="search-wrap">
          <Search class="search-icon" :size="18" />
          <input
            type="text"
            placeholder="Search posts..."
            v-model="searchQuery"
            class="search-input"
          />
        </div>

        <!-- Topic Filter -->
        <div class="topic-filters">
          <button
            @click="selectedTopic = 'All'"
            :class="['topic-btn', selectedTopic === 'All' ? 'active' : '']"
          >
            All Topics
          </button>
          <button
            v-for="topic in allTopics"
            :key="topic"
            @click="selectedTopic = topic"
            :class="['topic-btn', selectedTopic === topic ? 'active' : '']"
          >
            {{ topic }}
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="blog-grid-section">
      <div class="blog-shell">

        <!-- Loading -->
        <div v-if="loading" class="state-center">
          <div class="spinner"></div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="error-card">
          <span class="error-icon">⚠️</span>
          <div>
            <p class="error-title">Error Loading Posts</p>
            <p class="error-msg">{{ error }}</p>
          </div>
          <button @click="refresh" class="retry-btn">Retry</button>
        </div>

        <!-- Posts -->
        <template v-else>
          <p class="results-count">
            Showing {{ posts.length }} {{ posts.length === 1 ? 'post' : 'posts' }}
            <span v-if="selectedTopic !== 'All'"> in {{ selectedTopic }}</span>
          </p>

          <div v-if="posts.length > 0" class="blog-grid">
            <article
              v-for="(post, index) in posts"
              :key="post.id"
              class="blog-card"
              @click="$router.push(`/blog/${post.id}`)"
            >
              <div class="blog-card-inner">
                <div class="card-meta">
                  <span class="post-category">{{ post.category }}</span>
                  <span class="post-date">
                    <Calendar :size="13" />
                    {{ formatDate(post.date) }}
                  </span>
                </div>

                <p class="post-index">0{{ index + 1 }}</p>
                <h2 class="post-title">{{ post.title }}</h2>
                <p class="post-excerpt">{{ post.excerpt }}</p>

                <div class="card-footer">
                  <div class="post-topics">
                    <span
                      v-for="(topic, idx) in post.topics.slice(0, 3)"
                      :key="idx"
                      class="topic-chip"
                    >
                      {{ topic }}
                    </span>
                  </div>
                  <span class="read-time">{{ post.readTime }}</span>
                </div>

                <div class="card-cta">Read Article ↗</div>
              </div>
            </article>
          </div>

          <div v-else class="state-center">
            <p class="empty-msg">No posts found matching your criteria.</p>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="pagination">
            <button
              @click="changePage(currentPage - 1)"
              :disabled="currentPage === 1"
              class="page-btn arrow"
            >
              <ChevronLeft :size="18" />
            </button>

            <button
              v-for="pageNum in totalPages"
              :key="pageNum"
              @click="changePage(pageNum)"
              :class="['page-btn', currentPage === pageNum ? 'active' : '']"
            >
              {{ pageNum }}
            </button>

            <button
              @click="changePage(currentPage + 1)"
              :disabled="currentPage === totalPages"
              class="page-btn arrow"
            >
              <ChevronRight :size="18" />
            </button>
          </div>
        </template>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Search, Calendar, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useBlogList, useTopics } from '../composables/useBlog'

// Use composables
const { posts, loading, error, totalPages, currentPage, fetchPosts, refresh } = useBlogList()
const { topics: allTopics, fetchTopics } = useTopics()

// Local state
const searchQuery = ref('')
const selectedTopic = ref('All')
const POSTS_PER_PAGE = 6
let searchTimeout = null

// Fetch initial data
onMounted(async () => {
  await Promise.all([
    loadPosts(),
    fetchTopics()
  ])
})

// Load posts with filters
const loadPosts = async () => {
  await fetchPosts({
    page: currentPage.value,
    limit: POSTS_PER_PAGE,
    search: searchQuery.value || undefined,
    topic: selectedTopic.value !== 'All' ? selectedTopic.value : undefined
  })
}

// Watch for search input with debounce
watch(searchQuery, () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    currentPage.value = 1
    loadPosts()
  }, 300)
})

// Watch for topic change
watch(selectedTopic, () => {
  currentPage.value = 1
  loadPosts()
})

// Change page
const changePage = async (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  await loadPosts()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Helpers
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  padding-top: 4rem;
  background:
    radial-gradient(circle at top left, rgba(63, 255, 192, 0.08), transparent 32%),
    radial-gradient(circle at top right, rgba(167, 139, 250, 0.12), transparent 28%),
    #0d1117;
}

.blog-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Hero ── */
.blog-hero {
  padding: 5rem 0 2.5rem;
}

.hero-kicker {
  margin: 0 0 1rem;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #72f5cd;
}

.hero-copy {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
  gap: 2rem;
  align-items: end;
}

.hero-title {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(3rem, 6vw, 5rem);
  line-height: 0.98;
  font-weight: 800;
  color: #f8fafc;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.hero-text {
  margin: 0;
  max-width: 38ch;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(226, 232, 240, 0.72);
}

/* ── Controls ── */
.blog-controls-section {
  padding: 0.5rem 0 2rem;
}

.search-wrap {
  position: relative;
  margin-bottom: 1.25rem;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(148, 163, 184, 0.6);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  color: #f8fafc;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.search-input::placeholder {
  color: rgba(148, 163, 184, 0.5);
}

.search-input:focus {
  border-color: rgba(63, 255, 192, 0.4);
}

.topic-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.topic-btn {
  padding: 0.45rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(226, 232, 240, 0.72);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.topic-btn:hover {
  background: rgba(63, 255, 192, 0.08);
  border-color: rgba(63, 255, 192, 0.22);
  color: #72f5cd;
}

.topic-btn.active {
  background: rgba(63, 255, 192, 0.12);
  border-color: rgba(63, 255, 192, 0.35);
  color: #72f5cd;
}

/* ── Grid ── */
.blog-grid-section {
  padding: 0 0 5rem;
}

.results-count {
  margin: 0 0 1.5rem;
  font-size: 0.85rem;
  color: rgba(148, 163, 184, 0.62);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

/* ── Card ── */
.blog-card {
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(17, 24, 39, 0.94), rgba(12, 18, 31, 0.94)),
    radial-gradient(circle at top, rgba(63, 255, 192, 0.08), transparent 34%);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  overflow: hidden;
}

.blog-card:hover {
  border-color: rgba(63, 255, 192, 0.28);
  transform: translateY(-4px);
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.32);
}

.blog-card-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  height: 100%;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.post-category {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(63, 255, 192, 0.08);
  border: 1px solid rgba(63, 255, 192, 0.18);
  color: #72f5cd;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.post-date {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: rgba(148, 163, 184, 0.62);
}

.post-index {
  margin: 0;
  font-size: 0.76rem;
  letter-spacing: 0.16em;
  color: rgba(148, 163, 184, 0.42);
}

.post-title {
  margin: 0;
  font-size: 1.3rem;
  line-height: 1.25;
  font-weight: 700;
  color: #f8fafc;
  transition: color 0.2s;
}

.blog-card:hover .post-title {
  color: #72f5cd;
}

.post-excerpt {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.75;
  color: rgba(226, 232, 240, 0.72);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
}

.post-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.topic-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(226, 232, 240, 0.72);
  font-size: 0.74rem;
}

.read-time {
  flex-shrink: 0;
  font-size: 0.78rem;
  color: rgba(148, 163, 184, 0.55);
}

.card-cta {
  margin-top: 0.25rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #72f5cd;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.2s, transform 0.2s;
}

.blog-card:hover .card-cta {
  opacity: 1;
  transform: translateY(0);
}

/* ── States ── */
.state-center {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
}

.spinner {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid rgba(63, 255, 192, 0.15);
  border-top-color: #3fffc0;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.empty-msg {
  color: rgba(148, 163, 184, 0.62);
  font-size: 1.05rem;
}

.error-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(239, 68, 68, 0.25);
  background: rgba(239, 68, 68, 0.06);
  margin-bottom: 2rem;
}

.error-icon {
  font-size: 1.4rem;
  line-height: 1;
}

.error-title {
  margin: 0 0 0.25rem;
  font-weight: 700;
  color: #f87171;
}

.error-msg {
  margin: 0;
  font-size: 0.9rem;
  color: rgba(248, 113, 113, 0.8);
}

.retry-btn {
  margin-left: auto;
  flex-shrink: 0;
  padding: 0.5rem 1.1rem;
  border-radius: 10px;
  background: rgba(239, 68, 68, 0.16);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}

.retry-btn:hover {
  background: rgba(239, 68, 68, 0.28);
}

/* ── Pagination ── */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.page-btn {
  min-width: 40px;
  height: 40px;
  padding: 0 0.75rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  color: rgba(226, 232, 240, 0.72);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.page-btn:hover:not(:disabled) {
  background: rgba(63, 255, 192, 0.08);
  border-color: rgba(63, 255, 192, 0.22);
  color: #72f5cd;
}

.page-btn.active {
  background: #3fffc0;
  border-color: #3fffc0;
  color: #0d1117;
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-copy {
    grid-template-columns: 1fr;
  }

  .hero-title {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .blog-shell {
    padding: 0 1.25rem;
  }

  .blog-hero {
    padding-top: 4rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
