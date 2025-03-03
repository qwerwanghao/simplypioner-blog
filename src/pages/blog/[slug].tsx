import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';

// 博客文章数据
const blogPosts = [
  {
    title: '如何使用Next.js构建个人博客',
    slug: 'how-to-build-blog-with-nextjs',
    excerpt: '本文将介绍如何使用Next.js和Tailwind CSS构建一个现代化的个人博客网站。',
    coverImage: '/images/blog/nextjs-blog.jpg',
    date: '2023-06-15',
    readingTime: '10分钟',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    content: `
      # 如何使用Next.js构建个人博客
      [Content remains the same...]
    `
  },
  {
    title: 'React Hooks完全指南',
    slug: 'complete-guide-to-react-hooks',
    excerpt: '深入了解React Hooks的工作原理，以及如何在你的项目中有效地使用它们。',
    coverImage: '/images/blog/react-hooks.jpg',
    date: '2023-05-20',
    readingTime: '15分钟',
    tags: ['React', 'Hooks', 'JavaScript'],
    content: `
      # React Hooks完全指南
      [Content remains the same...]
    `
  }
];

interface BlogPostType {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

type BlogPostProps = {
  post: BlogPostType;
}

const BlogPostPage = ({ post }: BlogPostProps) => {
  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <Layout 
      title={`${post.title} | 个人博客`} 
      description={post.excerpt}
    >
      <article className="section">
        <div className="container max-w-4xl">
          {/* 返回按钮 */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回博客列表
            </Link>
          </div>

          {/* 文章头部 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-gray-400 mb-6">
              <span className="mr-4">{post.date}</span>
              <span className="mr-4">·</span>
              <span className="mr-4">{post.readingTime}</span>
            </div>
            <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
              <img
                src={post.coverImage}
                alt={post.title}
                className="absolute w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 文章标签 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 文章内容 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = blogPosts.map((post: BlogPostType) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { params } = context;
  
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const post = blogPosts.find((post: BlogPostType) => post.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default BlogPostPage;
