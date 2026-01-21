import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

// 技能数据
const skillCategories = [
  {
    title: '精通技能',
    color: 'from-green-500 to-emerald-400',
    skills: [
      { name: 'Unity3D', level: 95, icon: '🎮' },
      { name: 'C#', level: 92, icon: '💎' },
      { name: 'UGUI', level: 90, icon: '🖥️' },
      { name: 'Lua', level: 85, icon: '🌙' },
      { name: 'OOP设计模式', level: 88, icon: '🏗️' },
      { name: 'Editor工具开发', level: 90, icon: '🔧' },
    ],
  },
  {
    title: '熟练技能',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'ECS/JobSystem', level: 70, icon: '⚡' },
      { name: '网络同步', level: 72, icon: '🌐' },
      { name: '热更新', level: 78, icon: '🔄' },
      { name: 'AssetBundle', level: 80, icon: '📦' },
      { name: 'CI/CD (蓝盾/Jenkins)', level: 75, icon: '🚀' },
      { name: '性能分析 (Profiler)', level: 85, icon: '📊' },
    ],
  },
  {
    title: '了解技能',
    color: 'from-purple-500 to-pink-400',
    skills: [
      { name: 'TypeScript', level: 65, icon: '📘' },
      { name: 'React/Next.js', level: 60, icon: '⚛️' },
      { name: 'Shader基础', level: 55, icon: '🎨' },
      { name: 'Python', level: 60, icon: '🐍' },
      { name: 'SQL数据库', level: 58, icon: '🗄️' },
      { name: 'Docker', level: 50, icon: '🐳' },
    ],
  },
];

// 平台经验
const platforms = [
  { name: 'Android', icon: '🤖', years: '5.5年' },
  { name: 'iOS', icon: '🍎', years: '5.5年' },
  { name: 'Switch', icon: '🎮', years: '3年' },
  { name: 'Windows', icon: '🪟', years: '5.5年' },
];

// 工具经验
const tools = [
  'Visual Studio',
  'VS Code',
  'Git',
  'SVN',
  'Jira',
  'Confluence',
  'Unity Profiler',
  'Memory Profiler',
  'RenderDoc',
  'Xcode',
  'Android Studio',
  '蓝盾CI/CD',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const SkillBar = ({ name, level, icon }: { name: string; level: number; icon: string }) => (
  <motion.div variants={itemVariants} className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="flex items-center text-gray-700 dark:text-gray-300">
        <span className="mr-2">{icon}</span>
        {name}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </motion.div>
);

const SkillsPage = () => {
  return (
    <Layout title="技能展示 | 王浩的个人博客" description="我的技术技能和开发工具经验">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                技能展示
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              5.5年游戏开发经验，精通Unity3D和C#，擅长性能优化和跨平台开发。
            </p>
          </motion.div>

          {/* 技能分类 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
              >
                <h2 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} {...skill} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 平台经验 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              平台开发经验
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{platform.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{platform.years}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 开发工具 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              开发工具
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-teal-400/10 dark:from-blue-500/20 dark:to-teal-400/20 border border-blue-200 dark:border-blue-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsPage;