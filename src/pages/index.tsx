import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Unity3D工程师
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              专注游戏开发 / MOBA & ARPG专家 / 性能优化
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="/projects"
                className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                查看项目
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                联系我
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">技术专长</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "游戏开发",
                    description: "精通Unity3D开发，擅长MOBA和ARPG类型游戏开发",
                    icon: "🎮"
                  },
                  {
                    title: "多平台适配",
                    description: "丰富的Android、iOS、Switch平台开发经验",
                    icon: "📱"
                  },
                  {
                    title: "性能优化",
                    description: "深入的游戏性能优化经验，确保流畅的游戏体验",
                    icon: "⚡"
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">联系方式</h2>
              <div className="inline-flex flex-col space-y-4">
                <a
                  href="mailto:qwerwanghao@gmail.com"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="text-xl">📧</span>
                  <span>qwerwanghao@gmail.com</span>
                </a>
                <a
                  href="tel:18639861974"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <span className="text-xl">📱</span>
                  <span>18639861974</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
