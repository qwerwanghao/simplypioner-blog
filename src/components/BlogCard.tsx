import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiCalendar, FiClock } from 'react-icons/fi';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  readingTime: string;
  tags: string[];
}

const BlogCard = ({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  readingTime,
  tags,
}: BlogCardProps) => {
  return (
    <article className="card group">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <FiCalendar className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <FiClock className="mr-1" />
              <span>{readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard; 