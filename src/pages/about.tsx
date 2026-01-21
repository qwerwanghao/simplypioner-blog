import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

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

const AboutPage = () => {
  return (
    <Layout title="关于我 | 王浩的个人博客">
      <div className="min-h-screen bg-[var(--bg-primary)] pt-24 pb-20">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              你好，我是 <span className="apple-gradient-text">王浩</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl mx-auto">
              Unity 高级客户端工程师，致力于打造极致的 3D 交互体验。
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {/* Professional Summary - Large Card */}
            <motion.div variants={itemVariants} className="apple-card p-8 md:col-span-2 md:row-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold">职业概述</h2>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                5.5 年移动与主机平台游戏开发经验。精通 Unity3D、C# 及活动系统、UI 框架等核心模块。
                具备丰富的跨端适配与性能优化实战经验。注重代码质量与团队协作，善于自研工具提升效率。
              </p>
            </motion.div>

            {/* Experience Stats */}
            <motion.div variants={itemVariants} className="apple-card p-6 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold apple-gradient-text mb-2 block">5.5+</span>
              <span className="text-[var(--text-secondary)] font-medium">年开发经验</span>
            </motion.div>

            {/* Location Stats */}
            <motion.div variants={itemVariants} className="apple-card p-6 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold">深圳, 中国</span>
            </motion.div>

            {/* Key Achievements - Wide Card */}
            <motion.div variants={itemVariants} className="apple-card p-8 md:col-span-4">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-amber-500">★</span> 关键成就
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">千万级 DAU</h3>
                  <p className="text-sm text-[var(--text-tertiary)]">2 款大型项目成功上线，服务海量用户</p>
                </div>
                <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">200+ 人天</h3>
                  <p className="text-sm text-[var(--text-tertiary)]">自研多款工具，累计节省大量开发时间</p>
                </div>
                <div className="bg-[var(--bg-tertiary)] p-4 rounded-xl">
                  <h3 className="font-bold text-lg mb-1">性能提升 20%</h3>
                  <p className="text-sm text-[var(--text-tertiary)]">深度优化低端机性能，显著降低内存占用</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">技术栈</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Master */}
              <div className="apple-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-green-600 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  精通
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Unity3D', 'C#', 'UGUI', 'Lua', 'OOP', '活动系统架构', 'Editor工具开发', '代码重构', 'AI辅助工具'].map(skill => (
                    <span key={skill} className="apple-tag">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Familiar */}
              <div className="apple-card p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-600 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  熟悉
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['ECS/JobSystem', '网络同步', '热更新', 'AssetBundle', 'CI/CD (Jenkins)', '性能优化', 'Shader', 'RenderDoc'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] text-sm border border-[var(--border-color)]">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-10 text-center">工作经历</h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-color)] before:to-transparent">

              {/* Tencent */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 apple-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-[var(--text-primary)]">腾讯天美 · 宝可梦大集结</h3>
                    <span className="text-sm font-medium text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">2020.07 – 至今</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 text-sm">Unity 游戏客户端开发</p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc pl-4">
                    <li><strong>系统组</strong>: 负责活动系统架构、UI组件库构建、NullRef 修复 (100+)。</li>
                    <li><strong>战场组</strong>: 重构 GM 工具，优化小地图实时渲染与技能编辑器。</li>
                    <li><strong>基础体验组</strong>: 搭建 Jenkins 构建流水线，自动化构建流程。</li>
                  </ul>
                </div>
              </div>

              {/* Yifan */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-primary)] bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white z-10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 apple-card">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-[var(--text-primary)]">易帆互动 · 真三国无双霸</h3>
                    <span className="text-sm font-medium text-indigo-500 bg-indigo-500/10 px-2 py-0.5 rounded">2019.04 – 2020.06</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4 text-sm">Unity 客户端工程师</p>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc pl-4">
                    <li>负责战令、运营活动等系统开发。</li>
                    <li>使用 Profiler 优化低端机性能，FPS 提升 20%。</li>
                    <li>重构战斗飘字，高强场景下 GC Alloc 降低 70%。</li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-10">教育背景</h2>
            <div className="apple-card p-8 inline-block text-left w-full max-w-2xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">郑州科技学院</h3>
                  <p className="text-[var(--text-secondary)]">建筑环境与能源应用工程 · 本科</p>
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-[var(--bg-tertiary)] rounded-full text-sm text-[var(--text-tertiary)]">
                  2016.09 - 2020.06
                </span>
              </div>
              <p className="text-sm text-[var(--text-tertiary)]">成绩排名：5%-20%</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </Layout>
  );
};

export default AboutPage;
