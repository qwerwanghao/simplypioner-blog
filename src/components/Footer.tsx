import React from 'react';
import type { FooterProps } from '../types/components';

const Footer = ({}: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} 王浩. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="mailto:qwerwanghao@gmail.com"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <span>|</span>
            <a
              href="tel:18639861974"
              className="hover:text-gray-300"
            >
              电话
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
