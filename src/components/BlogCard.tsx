import React from 'react';
import Link from 'next/link';

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
    <Link href={`/blog/${slug}`}>
      <article className="group apple-card h-full flex flex-col">
        {/* Cover Image Area */}
        <div className="h-44 bg-gradient-to-br from-blue-500/80 via-purple-500/80 to-pink-500/80 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-40 group-hover:scale-105 transition-transform duration-500">
              📝
            </span>
          </div>
          {/* Reading Time Badge */}
          <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-xs font-medium">
            {readingTime}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="apple-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 line-clamp-2 tracking-tight group-hover:text-[var(--accent-blue)] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 flex-1 leading-relaxed">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)]">
            <span>{date}</span>
            <span className="flex items-center text-[var(--accent-blue)] font-medium group-hover:gap-2 transition-all">
              阅读
              <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;