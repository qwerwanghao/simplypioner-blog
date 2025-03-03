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

Next.js是一个用于构建React应用程序的流行框架，它提供了许多开箱即用的功能，如服务器端渲染、静态站点生成、路由等。在本文中，我将向你展示如何使用Next.js和Tailwind CSS构建一个现代化的个人博客网站。

## 为什么选择Next.js？

Next.js提供了许多优势，使其成为构建博客的理想选择：

1. **服务器端渲染(SSR)和静态站点生成(SSG)** - 这些功能可以提高页面加载速度和SEO表现。
2. **基于文件的路由系统** - 简化了路由配置。
3. **内置图像优化** - 通过Next.js的Image组件自动优化图像。
4. **API路由** - 轻松创建API端点。

## 项目设置

首先，让我们创建一个新的Next.js项目：

\`\`\`bash
npx create-next-app my-blog
cd my-blog
\`\`\`

接下来，安装Tailwind CSS：

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

配置Tailwind CSS：

\`\`\`js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## 创建博客布局

接下来，我们需要创建一个基本的布局组件：

\`\`\`jsx
// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
\`\`\`

## 创建博客文章列表页面

现在，让我们创建一个博客文章列表页面：

\`\`\`jsx
// pages/blog/index.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Blog() {
  return (
    <Layout title="博客" description="我的博客文章列表">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">博客文章</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* 博客文章卡片 */}
        </div>
      </div>
    </Layout>
  );
}
\`\`\`

## 结论

通过使用Next.js和Tailwind CSS，我们可以轻松构建一个现代化、高性能的个人博客网站。Next.js提供的服务器端渲染和静态站点生成功能可以提高页面加载速度和SEO表现，而Tailwind CSS则使我们能够快速创建美观的用户界面。
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

React Hooks是React 16.8中引入的新特性，它允许你在不编写类组件的情况下使用状态和其他React特性。在本文中，我将深入探讨React Hooks的工作原理，以及如何在你的项目中有效地使用它们。

## 为什么使用Hooks？

在Hooks出现之前，如果你需要在组件中使用状态或生命周期方法，你必须使用类组件。Hooks允许你在函数组件中使用这些特性，这带来了几个好处：

1. **代码更简洁** - 函数组件通常比类组件更简洁、更易于理解。
2. **逻辑复用更容易** - 自定义Hooks使得在组件之间共享逻辑变得更加容易。
3. **关注点分离更清晰** - Hooks允许你根据相关性组织代码，而不是基于生命周期方法。

## 基本Hooks

### useState

\`useState\`是最基本的Hook，它允许你在函数组件中添加状态：

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect

\`useEffect\`允许你在函数组件中执行副作用操作，如数据获取、订阅或手动更改DOM：

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // 只在count改变时重新执行

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## 自定义Hooks

自定义Hooks是一种复用状态逻辑的机制，它不复用状态本身，而是复用状态逻辑。例如，我们可以创建一个自定义Hook来处理表单状态：

\`\`\`jsx
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

function Form() {
  const name = useFormInput('');
  const email = useFormInput('');

  return (
    <form>
      <input {...name} placeholder="Name" />
      <input {...email} placeholder="Email" />
    </form>
  );
}
\`\`\`

## 结论

React Hooks是一个强大的特性，它可以帮助你编写更简洁、更可维护的React代码。通过使用基本的Hooks如\`useState\`和\`useEffect\`，以及创建自定义Hooks，你可以有效地组织和复用你的代码逻辑。
    `
  },
  // 可以添加更多博客文章
];

interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    slug: string;
    coverImage: string;
    date: string;
    readingTime: string;
    tags: string[];
    content: string;
  };
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
            {post.tags.map((tag) => (
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const post = blogPosts.find((post) => post.slug === params?.slug);

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