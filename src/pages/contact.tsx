import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const ContactPage = () => {
  // Formspree integration
  const [state, handleSubmit] = useForm("mpqqykra");

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: '邮箱',
      value: 'qwerwanghao@gmail.com',
      href: 'mailto:qwerwanghao@gmail.com',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: '电话',
      value: '186-3986-1974',
      href: 'tel:18639861974',
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: '所在地',
      value: '中国·深圳',
      href: null,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/qwerwanghao',
      href: 'https://github.com/qwerwanghao',
      color: 'text-gray-900 dark:text-gray-100',
      bg: 'bg-gray-500/10'
    },
  ];

  if (state.succeeded) {
    return (
      <Layout title="联系我 | 王浩的个人博客">
        <div className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-primary)] px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="apple-card p-12 text-center max-w-lg w-full"
          >
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">消息已发送！</h2>
            <p className="text-[var(--text-secondary)] mb-8 text-lg">
              感谢您的留言，我会尽快查看并回复您的消息。
            </p>
            <Link
              href="/"
              className="apple-btn apple-btn-primary inline-flex items-center"
            >
              返回首页
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="联系我 | 王浩的个人博客" description="欢迎与我联系，讨论游戏开发、技术合作等话题">
      <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-20">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="apple-gradient-text">联系我</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              有任何问题或合作意向？欢迎随时与我联系！
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                联系方式
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="apple-card p-6 flex items-center gap-4 transition-transform hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${info.bg} ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-tertiary)] mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium text-[var(--text-primary)] hover:text-blue-500 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-[var(--text-primary)]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cooperation Card */}
              <motion.div
                className="apple-card p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 mt-6"
                variants={itemVariants}
              >
                <h3 className="font-bold text-lg mb-4 text-[var(--text-primary)]">期望合作方向</h3>
                <div className="space-y-3">
                  {[
                    '游戏客户端开发 (Unity3D)',
                    '游戏性能优化咨询',
                    '开发工具定制',
                    '技术分享交流'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--text-secondary)]">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-8">发送消息</h2>
              <div className="apple-card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">姓名</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                        placeholder="您的姓名"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">邮箱</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">主题</label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow appearance-none"
                    >
                      <option value="">请选择主题</option>
                      <option value="工作机会">工作机会</option>
                      <option value="技术合作">技术合作</option>
                      <option value="技术咨询">技术咨询</option>
                      <option value="其他">其他</option>
                    </select>
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">消息内容</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow resize-none"
                      placeholder="请输入您想说的内容..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full apple-btn apple-btn-primary disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {state.submitting ? '发送中...' : '发送消息'}
                      {!state.submitting && (
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactPage;