import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  date: string;
  readingTime: string;
  tags: string[];
}

const BlogCard = ({ title, excerpt, slug, date, readingTime, tags }: BlogCardProps) => {
  return (
    <motion.article
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      {/* 封面图区域 */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
            📝
          </span>
        </div>
        {/* 装饰元素 */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
          {readingTime}
        </div>
      </div>

      <div className="p-6">
        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 标题 */}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
        </Link>

        {/* 摘要 */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
          {excerpt}
        </p>

        {/* 底部信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center text-blue-500 hover:text-blue-600 font-medium"
          >
            阅读更多
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;