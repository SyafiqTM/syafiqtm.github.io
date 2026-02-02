import { ref, computed } from 'vue'
import blogService from '../services/blogService'

/**
 * Composable for fetching and managing blog list
 * @param {Object} initialFilters - Initial filter parameters
 * @returns {Object} Reactive state and methods
 */
export function useBlogList(initialFilters = {}) {
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)
  const totalPages = ref(0)
  const totalPosts = ref(0)
  const currentPage = ref(1)

  const fetchPosts = async (filters = {}) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await blogService.getBlogList({
        ...initialFilters,
        ...filters
      })
      
      // Handle response structure
      if (Array.isArray(response)) {
        posts.value = response
        totalPosts.value = response.length
      } else {
        posts.value = response.posts || response.data || []
        totalPages.value = response.totalPages || 1
        totalPosts.value = response.total || posts.value.length
        currentPage.value = response.currentPage || 1
      }
    } catch (e) {
      error.value = e.message
      posts.value = []
    } finally {
      loading.value = false
    }
  }

  const refresh = () => {
    return fetchPosts()
  }

  return {
    posts,
    loading,
    error,
    totalPages,
    totalPosts,
    currentPage,
    fetchPosts,
    refresh
  }
}

/**
 * Composable for fetching single blog post details
 * @param {string|number} id - Blog post ID
 * @returns {Object} Reactive state and methods
 */
export function useBlogDetail(id) {
  const post = ref(null)
  const content = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const fetchPost = async (postId = id) => {
    if (!postId) {
      error.value = 'No blog ID provided'
      return
    }

    loading.value = true
    error.value = null
    
    try {
      const response = await blogService.getBlogDetail(postId)
      
      // Handle API response structure
      // Response has blog data at root level and details.sections for content
      post.value = {
        id: response.id,
        title: response.title,
        excerpt: response.excerpt,
        date: response.date,
        category: response.category,
        readTime: response.read_time,
        topics: response.topics || []
      }
      
      // Content is nested in details.sections
      if (response.details && response.details.sections) {
        content.value = { sections: response.details.sections }
      } else {
        content.value = null
      }
    } catch (e) {
      error.value = e.message
      post.value = null
      content.value = null
    } finally {
      loading.value = false
    }
  }

  const refresh = () => {
    return fetchPost()
  }

  return {
    post,
    content,
    loading,
    error,
    fetchPost,
    refresh
  }
}

/**
 * Composable for fetching topics/tags
 * @returns {Object} Reactive state and methods
 */
export function useTopics() {
  const topics = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchTopics = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await blogService.getTopics()
      topics.value = Array.isArray(response) ? response : response.topics || []
    } catch (e) {
      error.value = e.message
      topics.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    topics,
    loading,
    error,
    fetchTopics
  }
}

/**
 * Composable for searching blogs
 * @returns {Object} Reactive state and methods
 */
export function useBlogSearch() {
  const results = ref([])
  const loading = ref(false)
  const error = ref(null)
  const query = ref('')

  const search = async (searchQuery) => {
    query.value = searchQuery
    
    if (!searchQuery || searchQuery.trim() === '') {
      results.value = []
      return
    }

    loading.value = true
    error.value = null
    
    try {
      const response = await blogService.searchBlogs(searchQuery)
      results.value = Array.isArray(response) ? response : response.results || []
    } catch (e) {
      error.value = e.message
      results.value = []
    } finally {
      loading.value = false
    }
  }

  const clear = () => {
    results.value = []
    query.value = ''
    error.value = null
  }

  return {
    results,
    loading,
    error,
    query,
    search,
    clear
  }
}
