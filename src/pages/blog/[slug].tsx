import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import Layout from '@/components/Layout';
import { MDXComponents } from '@/components/MDXComponents';
import { getPostBySlug, getAllSlugs, PostMeta } from '@/lib/mdx';

interface PostPageProps {
  meta: PostMeta;
  source: MDXRemoteSerializeResult;
}

const PostPage = ({ meta, source }: PostPageProps) => {
  return (
    <Layout
      title={`${meta.title} | 王浩的个人博客`}
      description={meta.excerpt}
    >
      <article className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 返回链接 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回博客列表
            </Link>
          </motion.div>

          {/* 文章头部 */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {meta.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 标题 */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              {meta.title}
            </h1>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {meta.date}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {meta.readingTime}
              </span>
            </div>
          </motion.header>

          {/* 文章内容 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <MDXRemote {...source} components={MDXComponents} />
          </motion.div>

          {/* 文章底部 */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-600 dark:text-gray-400">
                感谢阅读！如有问题欢迎交流讨论。
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:shadow-lg transition-shadow"
              >
                查看更多文章
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.footer>
        </div>
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true as const,
    };
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
      ],
    },
  });

  const { content, ...meta } = post;

  return {
    props: {
      meta,
      source: mdxSource,
    },
  };
};

export default PostPage;
