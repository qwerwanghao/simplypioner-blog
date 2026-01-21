import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '宝可梦大集结 (Pokémon UNITE)',
    description: '腾讯天美工作室群与宝可梦公司联合开发的MOBA类宝可梦对战游戏。在系统组和战场组期间，负责登录系统、运营活动、对战回放、GM工具等核心功能开发。',
    image: '/images/projects/pokemon-unite.jpg',
    tags: ['Unity3D', 'C#', 'Lua', 'MOBA', 'Switch', 'iOS', 'Android'],
    highlights: [
      '设计并实现对战录像回放框架（快进、暂停）',
      '开发二维码加好友功能，集成第三方扫描SDK',
      '构建系统级UI组件库，统一动画与事件封装',
      '修复线上Bug 100+，显著降低版本差评',
    ],
    link: 'https://unite.pokemon.com/',
  },
  {
    title: '真三国无双霸 (Dynasty Warriors: Overlords)',
    description: '光荣特库摩正版授权的ARPG手游。负责局外系统开发与优化，包括战令系统、运营活动、商店系统、公会系统等模块。',
    image: '/images/projects/dynasty-warriors.jpg',
    tags: ['Unity3D', 'C#', 'ARPG', 'iOS', 'Android'],
    highlights: [
      '使用 Unity Profiler 优化界面，低端机FPS提升约20%',
      '重构战斗飘字：对象池+顶点合批，GC Alloc降低70%',
      '完成 12+ 机型分辨率适配',
      '通过热更新修复线上Bug 80+',
    ],
    link: '#',
  },
  {
    title: 'SVN 多分支合线机器人',
    description: '自研的自动化SVN多分支合并工具，支持冲突自动处理和日志记录，大幅提高多分支并行开发效率。',
    image: '/images/projects/svn-robot.jpg',
    tags: ['Python', 'SVN', 'Automation', 'DevOps'],
    highlights: [
      '自动检测分支差异并智能合并',
      '冲突自动标记和处理建议',
      '合并历史完整记录',
      '显著降低人工合并出错率',
    ],
    link: '#',
  },
  {
    title: '动画检查工具',
    description: 'Unity Editor扩展工具，自动检测Animator/Playable资产缺失、AnimatorController冗余状态参数、动画Event错误等问题。',
    image: '/images/projects/animation-tool.jpg',
    tags: ['Unity Editor', 'C#', 'Tools'],
    highlights: [
      '批量扫描项目中所有Prefab',
      '生成详细的错误报告',
      '一键修复常见问题',
      '减少美术资源错误率',
    ],
    link: '#',
  },
  {
    title: '个人博客 (本站)',
    description: '基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化个人博客网站，支持深色模式、响应式设计和SEO优化。',
    image: '/images/projects/personal-blog.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    highlights: [
      'Next.js 14 Pages Router',
      'Framer Motion 流畅动画',
      'SEO优化和站点地图',
      '深色/浅色模式切换',
    ],
    link: '/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ProjectsPage = () => {
  return (
    <Layout title="项目展示 | 王浩的个人博客" description="我参与开发的游戏项目和开发工具">
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                项目展示
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              这里展示了我参与开发的游戏项目和自研工具，涵盖MOBA、ARPG等多种游戏类型。
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* 项目图片区域 */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                  <span className="text-6xl">
                    {index === 0 ? '🎮' : index === 1 ? '⚔️' : index === 2 ? '🤖' : index === 3 ? '🎬' : '💻'}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 项目亮点 */}
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      主要贡献:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-gray-500 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-teal-500 mr-2">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 查看链接 */}
                  {project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-600 font-medium text-sm"
                      whileHover={{ x: 5 }}
                    >
                      查看项目
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;