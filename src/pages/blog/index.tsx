import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';

// 博客分类
const categories = ['全部', 'Unity', '游戏开发', 'Web开发', '工具开发', '技术思考'];

// 博客文章数据
const blogPosts = [
  {
    title: 'Unity性能优化实战：从Profiler到实际优化',
    excerpt: '分享在宝可梦大集结项目中的性能优化经验，包括如何使用Unity Profiler定位性能瓶颈，优化GC、DrawCall和内存使用。',
    slug: 'unity-performance-optimization',
    coverImage: '/images/blog/unity-performance.jpg',
    date: '2024-01-15',
    readingTime: '12 分钟',
    tags: ['Unity', '游戏开发', '性能优化'],
  },
  {
    title: 'UGUI优化技巧：让UI丝滑如画',
    excerpt: '深入探讨UGUI的优化策略，包括Canvas分层、RaycastTarget优化、对象池使用等，显著提升UI渲染性能。',
    slug: 'ugui-optimization-tips',
    coverImage: '/images/blog/ugui-tips.jpg',
    date: '2024-01-05',
    readingTime: '10 分钟',
    tags: ['Unity', 'UGUI', '游戏开发'],
  },
  {
    title: '游戏活动系统架构设计',
    excerpt: '分享如何设计可配置化的运营活动系统，实现活动与客户端代码解耦，让策划可以自主配置活动内容。',
    slug: 'game-activity-system-design',
    coverImage: '/images/blog/activity-system.jpg',
    date: '2023-12-20',
    readingTime: '15 分钟',
    tags: ['Unity', '游戏开发', '架构设计'],
  },
  {
    title: 'SVN多分支合并自动化工具开发',
    excerpt: '介绍如何开发自动化的SVN多分支合并工具，降低人工合并出错率，提高多分支并行开发效率。',
    slug: 'svn-merge-automation',
    coverImage: '/images/blog/svn-tool.jpg',
    date: '2023-11-15',
    readingTime: '8 分钟',
    tags: ['工具开发', 'DevOps', 'Python'],
  },
  {
    title: '如何使用Next.js构建个人博客',
    excerpt: '本文将介绍如何使用Next.js和TailwindCSS构建一个现代化的个人博客网站，包括页面路由、样式设置和部署等方面。',
    slug: 'how-to-build-blog-with-nextjs',
    coverImage: '/images/blog/nextjs-blog.jpg',
    date: '2023-10-15',
    readingTime: '5 分钟',
    tags: ['Web开发', 'Next.js', 'React'],
  },
  {
    title: 'Unity Editor工具开发入门',
    excerpt: '从零开始学习Unity Editor扩展开发，创建自定义Inspector、EditorWindow和工具菜单，提升团队开发效率。',
    slug: 'unity-editor-tools-guide',
    coverImage: '/images/blog/unity-editor.jpg',
    date: '2023-09-28',
    readingTime: '10 分钟',
    tags: ['Unity', '工具开发', 'C#'],
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
    <Layout title="博客 | 王浩的个人博客" description="分享游戏开发、Unity技术和工具开发的经验与见解">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                博客文章
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              分享游戏开发、Unity技术和工具开发的经验与见解。
            </p>
          </motion.div>

          {/* 搜索框 */}
          <div className="mb-8">
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* 分类过滤器 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* 博客文章网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>

          {/* 如果没有匹配的文章 */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 dark:text-gray-400 text-lg">没有找到匹配的文章</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('全部'); }}
                className="mt-4 text-blue-500 hover:text-blue-600 font-medium"
              >
                清除筛选条件
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;