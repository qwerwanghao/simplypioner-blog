import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/30 dark:bg-teal-600/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <motion.div
            className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* 头像占位 */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-5xl shadow-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              👨‍💻
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              你好，我是
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400">
                王浩
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Unity3D 高级开发工程师
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              5.5年游戏开发经验 / MOBA & ARPG 专家 / 性能优化 / 跨平台开发
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  查看项目
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-block px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  了解更多
                </Link>
              </motion.div>
            </motion.div>

            {/* 滚动提示 */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                技术专长
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                深耕游戏开发领域，专注于创造流畅的游戏体验
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "游戏开发",
                    description: "精通Unity3D开发，参与宝可梦大集结、真三国无双霸等千万级DAU项目",
                    icon: "🎮",
                    gradient: "from-blue-500 to-purple-500"
                  },
                  {
                    title: "多平台适配",
                    description: "丰富的Android、iOS、Switch多平台开发经验，确保跨端一致性",
                    icon: "📱",
                    gradient: "from-green-500 to-teal-500"
                  },
                  {
                    title: "性能优化",
                    description: "深入的游戏性能优化经验，低端机FPS提升20%，GC降低70%",
                    icon: "⚡",
                    gradient: "from-orange-500 to-red-500"
                  }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    {/* 渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className="text-5xl mb-6">{skill.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{skill.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                关键成就
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                用数据说话，用成果证明
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5.5+', label: '年开发经验', icon: '📅' },
                { number: '2', label: '款上线项目', icon: '🎯' },
                { number: '1000万+', label: '用户量级', icon: '👥' },
                { number: '200+', label: '节省人天', icon: '⏰' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-t from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">联系我</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <motion.a
                  href="mailto:qwerwanghao@gmail.com"
                  className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-700 dark:text-gray-300">qwerwanghao@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:18639861974"
                  className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-700 dark:text-gray-300">186-3986-1974</span>
                </motion.a>
              </div>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                >
                  查看更多联系方式
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
