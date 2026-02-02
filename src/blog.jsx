import React, { useState, useMemo } from 'react';
import { Search, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample blog posts - replace with your actual data
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a React Dashboard with Hooks",
    excerpt: "Learn how to create a dynamic dashboard using React hooks and modern patterns.",
    date: "2024-01-15",
    category: "React",
    topics: ["React", "Hooks", "Frontend"],
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Infrastructure as Code with Terraform",
    excerpt: "A comprehensive guide to managing cloud infrastructure using Terraform best practices.",
    date: "2024-01-10",
    category: "DevOps",
    topics: ["Terraform", "Infrastructure", "DevOps"],
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Google Cloud Platform: Getting Started",
    excerpt: "Everything you need to know to start deploying applications on GCP.",
    date: "2024-01-05",
    category: "Cloud",
    topics: ["Google Cloud", "Cloud", "Deployment"],
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    excerpt: "Exploring compound components, render props, and custom hooks patterns.",
    date: "2023-12-20",
    category: "React",
    topics: ["React", "Design Patterns", "Frontend"],
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Terraform Modules: Best Practices",
    excerpt: "How to structure and organize your Terraform code for maximum reusability.",
    date: "2023-12-15",
    category: "DevOps",
    topics: ["Terraform", "Infrastructure", "Best Practices"],
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "GCP Cloud Functions Deep Dive",
    excerpt: "Understanding serverless architecture with Google Cloud Functions.",
    date: "2023-12-10",
    category: "Cloud",
    topics: ["Google Cloud", "Serverless", "Cloud Functions"],
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "React Server Components Explained",
    excerpt: "A detailed look at React Server Components and their benefits.",
    date: "2023-12-01",
    category: "React",
    topics: ["React", "Server Components", "Next.js"],
    readTime: "12 min read"
  },
  {
    id: 8,
    title: "Multi-Cloud Strategy with Terraform",
    excerpt: "Managing resources across AWS, Azure, and GCP with a unified approach.",
    date: "2023-11-25",
    category: "DevOps",
    topics: ["Terraform", "Multi-Cloud", "AWS", "Azure", "Google Cloud"],
    readTime: "15 min read"
  }
];

// Extract unique topics from all posts
const ALL_TOPICS = [...new Set(BLOG_POSTS.flatMap(post => post.topics))].sort();

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
          {post.category}
        </span>
        <span className="text-gray-500 text-sm flex items-center gap-1">
          <Calendar size={14} />
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.topics.slice(0, 3).map((topic, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              <Tag size={12} />
              {topic}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-500">{post.readTime}</span>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  // Filter posts based on search and topic
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTopic = selectedTopic === 'All' || post.topics.includes(selectedTopic);
      
      return matchesSearch && matchesTopic;
    });
  }, [searchQuery, selectedTopic]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTopic]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dev Updates</h1>
          <p className="text-gray-600">Latest updates on React, Cloud, and Infrastructure</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Topic Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic('All')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTopic === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Topics
            </button>
            {ALL_TOPICS.map(topic => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTopic === topic
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {selectedTopic !== 'All' && ` in ${selectedTopic}`}
        </div>

        {/* Blog Cards Grid */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === idx + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
