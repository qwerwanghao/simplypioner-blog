import React from 'react';
import Link from 'next/link';
import type { NavbarProps } from '../types/components';

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            王浩的博客
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              关于
            </Link>
            <Link href="/projects" className="hover:text-gray-300">
              项目
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              博客
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              联系
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
