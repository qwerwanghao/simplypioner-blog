import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';

// 博客分类
const categories = ['全部', '编程', 'Web开发', '游戏开发', '技术思考', '生活随笔'];

// 博客文章数据
const blogPosts = [
  {
    title: '如何使用Next.js构建个人博客',
    excerpt: '本文将介绍如何使用Next.js和TailwindCSS构建一个现代化的个人博客网站，包括页面路由、样式设置和部署等方面。',
    slug: 'how-to-build-blog-with-nextjs',
    coverImage: '/images/blog/nextjs-blog.jpg',
    date: '2023-10-15',
    readingTime: '5 分钟',
    tags: ['Next.js', 'React', 'Web开发'],
  },
  {
    title: 'TypeScript高级技巧分享',
    excerpt: '深入探讨TypeScript的高级特性和使用技巧，提升代码质量和开发效率，包括类型推断、泛型和装饰器等内容。',
    slug: 'typescript-advanced-tips',
    coverImage: '/images/blog/typescript.jpg',
    date: '2023-09-28',
    readingTime: '8 分钟',
    tags: ['TypeScript', '编程', '前端'],
  },
  {
    title: 'React性能优化实践',
    excerpt: '分享在大型React应用中提升性能的实用技巧，包括组件优化、状态管理和渲染策略等方面的最佳实践。',
    slug: 'react-performance-optimization',
    coverImage: '/images/blog/react-performance.jpg',
    date: '2023-09-10',
    readingTime: '6 分钟',
    tags: ['React', '性能优化', 'Web开发'],
  },
  {
    title: 'Unity游戏开发入门指南',
    excerpt: '为初学者提供的Unity游戏开发入门指南，涵盖基础概念、工作流程和常用组件，帮助你快速上手游戏开发。',
    slug: 'unity-game-development-guide',
    coverImage: '/images/blog/unity-game.jpg',
    date: '2023-08-22',
    readingTime: '10 分钟',
    tags: ['Unity', 'C#', '游戏开发'],
  },
  {
    title: '我的数字游牧生活',
    excerpt: '分享我作为数字游牧者的经历和感悟，包括远程工作的挑战与机遇，以及如何平衡工作和旅行的生活方式。',
    slug: 'my-digital-nomad-life',
    coverImage: '/images/blog/digital-nomad.jpg',
    date: '2023-08-05',
    readingTime: '7 分钟',
    tags: ['数字游牧', '生活随笔', '远程工作'],
  },
  {
    title: '前端架构设计思考',
    excerpt: '探讨现代前端架构设计的原则和方法，包括模块化、组件设计和状态管理等方面，帮助构建可维护的大型应用。',
    slug: 'frontend-architecture-thoughts',
    coverImage: '/images/blog/frontend-architecture.jpg',
    date: '2023-07-18',
    readingTime: '9 分钟',
    tags: ['前端', '架构设计', '技术思考'],
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  // 根据分类和搜索过滤博客文章
  const filteredPosts = blogPosts.filter((post) => {
    // 分类过滤
    const categoryMatch = activeCategory === '全部' || post.tags.includes(activeCategory);
    
    // 搜索过滤
    const searchMatch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoryMatch && searchMatch;
  });

  return (
    <Layout title="博客 | 个人博客" description="我的技术博客，分享编程经验和生活故事">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">博客文章</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              这里是我的技术博客，分享我在编程和技术领域的经验、见解和学习心得。
            </p>
          </motion.div>

          {/* 搜索框 */}
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* 分类过滤器 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 博客文章网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </motion.div>

          {/* 如果没有匹配的文章 */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">没有找到匹配的文章。</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage; 