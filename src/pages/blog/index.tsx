import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStaticProps } from 'next';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { getAllPosts, getAllTags, PostMeta } from '@/lib/mdx';

interface BlogPageProps {
  posts: PostMeta[];
  tags: string[];
}

const BlogPage = ({ posts, tags }: BlogPageProps) => {
  const categories = ['全部', ...tags];
  const [activeCategory, setActiveCategory] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = activeCategory === '全部' || post.tags.includes(activeCategory);
    const searchMatch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  return (
    <Layout title="博客 | 王浩的个人博客" description="分享游戏开发、Unity技术和工具开发的经验与见解">
      <section className="min-h-screen pt-28 pb-20 bg-[var(--bg-primary)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="apple-title mb-4">博客</h1>
            <p className="apple-subtitle max-w-xl mx-auto">
              分享游戏开发、Unity技术和工具开发的经验与见解
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="max-w-lg mx-auto relative">
              <input
                type="text"
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 pl-12 bg-[var(--bg-secondary)] border-none rounded-xl text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] transition-shadow"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                    ? 'bg-[var(--accent-blue)] text-white'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  layout
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-5xl mb-6">🔍</div>
              <p className="text-[var(--text-secondary)] text-lg mb-4">没有找到匹配的文章</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('全部'); }}
                className="text-[var(--accent-blue)] hover:opacity-70 font-medium transition-opacity"
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

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const posts = getAllPosts();
  const tags = getAllTags();

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogPage;