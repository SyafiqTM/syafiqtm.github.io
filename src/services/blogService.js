import axios from 'axios'

// Environment configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
const APP_ENV = import.meta.env.VITE_APP_ENV || 'development'
const ENABLE_DEBUG = import.meta.env.VITE_ENABLE_DEBUG === 'true'

class BlogService {
  constructor() {
    this.environment = APP_ENV
    this.debugMode = ENABLE_DEBUG
    
    // Log environment info in debug mode
    if (this.debugMode) {
      console.log('🚀 BlogService initialized')
      console.log('📍 Environment:', this.environment)
      console.log('🔗 API Base URL:', API_BASE_URL)
    }
    
    // Configure axios instance
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // Add request interceptor for debugging
    this.api.interceptors.request.use(
      config => {
        if (this.debugMode) {
          console.log(`🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`, config.params)
        }
        return config
      },
      error => {
        if (this.debugMode) {
          console.error('❌ Request Error:', error)
        }
        return Promise.reject(error)
      }
    )

    // Add response interceptor for error handling
    this.api.interceptors.response.use(
      response => {
        if (this.debugMode) {
          console.log(`✅ API Response: ${response.config.url}`, response.data)
        }
        return response
      },
      error => {
        console.error('❌ API Error:', error)
        return Promise.reject(this.handleError(error))
      }
    )
  }

  /**
   * Get list of blog posts with optional filtering
   * @param {Object} params - Query parameters (page, limit, search, topic, category)
   * @returns {Promise<Object>} Blog posts with pagination metadata
   */
  async getBlogList(params = {}) {
    try {
      const { data } = await this.api.get('/blogs', { params })
      return data
    } catch (error) {
      console.error('Failed to fetch blog list:', error)
      throw error
    }
  }

  /**
   * Get detailed blog post by ID
   * @param {number|string} id - Blog post ID
   * @returns {Promise<Object>} Blog post with full content
   */
  async getBlogDetail(id) {
    try {
      const { data } = await this.api.get(`/blogs/${id}`)
      return data
    } catch (error) {
      console.error(`Failed to fetch blog ${id}:`, error)
      throw error
    }
  }

  /**
   * Get all unique topics/tags
   * @returns {Promise<Array>} List of topics
   */
  async getTopics() {
    try {
      const { data } = await this.api.get('/blogs/topics')
      return data
    } catch (error) {
      console.error('Failed to fetch topics:', error)
      throw error
    }
  }

  /**
   * Get all categories
   * @returns {Promise<Array>} List of categories
   */
  async getCategories() {
    try {
      const { data } = await this.api.get('/blogs/categories')
      return data
    } catch (error) {
      console.error('Failed to fetch categories:', error)
      throw error
    }
  }

  /**
   * Search blogs
   * @param {string} query - Search query
   * @returns {Promise<Array>} Matching blog posts
   */
  async searchBlogs(query) {
    try {
      const { data } = await this.api.get('/blogs/search', { params: { q: query } })
      return data
    } catch (error) {
      console.error('Failed to search blogs:', error)
      throw error
    }
  }

  // Error handling
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || error.response.statusText
      const status = error.response.status
      return new Error(`${status}: ${message}`)
    } else if (error.request) {
      // Request made but no response
      return new Error('Network error: No response from server')
    } else {
      // Something else happened
      return new Error(error.message || 'Unknown error occurred')
    }
  }
}

export default new BlogService()
