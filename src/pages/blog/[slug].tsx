import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Layout from '@/components/Layout';
import { MDXComponents } from '@/components/MDXComponents';
import Comments from '@/components/Comments';
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
      <article className="min-h-screen pt-24 pb-20 bg-[var(--bg-primary)]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10"
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              博客
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {meta.tags.map((tag, index) => (
                <span key={index} className="apple-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-5 leading-tight tracking-tight">
              {meta.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-tertiary)]">
              <span>{meta.date}</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
              <span>{meta.readingTime}</span>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="prose"
          >
            <MDXRemote {...source} components={MDXComponents} />
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-20 pt-8 border-t border-[var(--border-color)]"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <p className="text-[var(--text-secondary)] text-sm">
                感谢阅读！如有问题欢迎交流讨论。
              </p>
              <Link
                href="/blog"
                className="apple-btn apple-btn-primary text-sm"
              >
                查看更多文章
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.footer>

          {/* Comments */}
          <Comments />
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
      remarkPlugins: [remarkGfm],
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
