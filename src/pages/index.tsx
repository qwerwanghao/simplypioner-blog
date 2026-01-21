import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]" />

          {/* Subtle light orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Avatar */}
              <motion.div
                className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="apple-title mb-4"
                {...fadeInUp}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                你好，我是
                <span className="block mt-2 apple-gradient-text">
                  王浩
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="apple-subtitle mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Unity3D 高级开发工程师
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg text-[var(--text-tertiary)] mb-12 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                5.5年游戏开发经验 · MOBA & ARPG 专家 · 性能优化
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link href="/projects" className="apple-btn apple-btn-primary">
                  查看项目
                </Link>
                <Link href="/about" className="apple-btn apple-btn-secondary">
                  了解更多
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-[var(--text-tertiary)] flex items-start justify-center p-2"
              >
                <motion.div
                  className="w-1 h-2 rounded-full bg-[var(--text-tertiary)]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section - Apple Style */}
        <section className="py-32 bg-[var(--bg-primary)]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <h2 className="apple-title mb-4">技术专长</h2>
              <p className="apple-subtitle max-w-2xl mx-auto">
                深耕游戏开发领域，专注于创造流畅的游戏体验
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "游戏开发",
                  description: "精通Unity3D开发，参与宝可梦大集结、真三国无双霸等千万级DAU项目",
                  icon: "🎮"
                },
                {
                  title: "多平台适配",
                  description: "丰富的Android、iOS、Switch多平台开发经验，确保跨端一致性",
                  icon: "📱"
                },
                {
                  title: "性能优化",
                  description: "深入的游戏性能优化经验，低端机FPS提升20%，GC降低70%",
                  icon: "⚡"
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="apple-card p-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="text-5xl mb-6">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-[var(--bg-secondary)]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="apple-title mb-4">关键成就</h2>
              <p className="apple-subtitle">用数据说话，用成果证明</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '5.5+', label: '年开发经验' },
                { number: '2', label: '款上线项目' },
                { number: '1000万+', label: '用户量级' },
                { number: '200+', label: '节省人天' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl md:text-5xl font-semibold apple-gradient-text mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-[var(--bg-primary)]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="apple-title mb-6">联系我</h2>
              <p className="apple-subtitle mb-12">
                期待与您的合作
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="mailto:qwerwanghao@gmail.com"
                  className="inline-flex items-center gap-3 px-6 py-4 apple-card hover:scale-[1.02] transition-transform"
                >
                  <span className="text-2xl">📧</span>
                  <span className="text-[var(--text-primary)]">qwerwanghao@gmail.com</span>
                </a>
                <a
                  href="tel:18639861974"
                  className="inline-flex items-center gap-3 px-6 py-4 apple-card hover:scale-[1.02] transition-transform"
                >
                  <span className="text-2xl">📱</span>
                  <span className="text-[var(--text-primary)]">186-3986-1974</span>
                </a>
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[var(--accent-blue)] hover:opacity-70 transition-opacity font-medium"
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
