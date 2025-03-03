import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import type { LayoutProps } from '../types/components';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children, title = '王浩的个人博客', description = '王浩的个人博客 - Unity3D开发工程师' }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      </Head>

      <Navbar />

      <AnimatePresence mode='wait'>
        <motion.main 
          className="flex-grow pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* Gradient Orbs - Apple-style background effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-50%] left-[-50%] w-full h-full rounded-full bg-blue-200/20 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute top-[-20%] right-[-30%] w-3/4 h-3/4 rounded-full bg-purple-200/20 dark:bg-purple-900/20 blur-3xl" />
        <div className="absolute bottom-[-40%] right-[-10%] w-2/3 h-2/3 rounded-full bg-teal-200/20 dark:bg-teal-900/20 blur-3xl" />
      </div>

      {/* Subtle grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.015]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Layout;
