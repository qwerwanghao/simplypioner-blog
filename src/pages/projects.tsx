import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

// 项目分类
const categories = ['全部', 'Web开发', '移动应用', '游戏开发', '开源项目'];

// 项目数据
const projectsData = [
  {
    title: '个人博客',
    description: '使用Next.js和TailwindCSS构建的个人博客网站，展示我的项目和技术文章。',
    image: '/images/projects/blog.jpg',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Web开发'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    title: '电子商务平台',
    description: '全功能电子商务平台，支持产品展示、购物车、支付和订单管理。',
    image: '/images/projects/ecommerce.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Web开发'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    title: '任务管理应用',
    description: '帮助用户管理日常任务和项目的移动应用，支持提醒和团队协作。',
    image: '/images/projects/task-app.jpg',
    tags: ['React Native', 'Firebase', '移动应用'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    title: '健身追踪器',
    description: '帮助用户记录和分析健身活动的移动应用，包括数据可视化和进度追踪。',
    image: '/images/projects/fitness-app.jpg',
    tags: ['Flutter', 'Firebase', '移动应用'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    title: '2D平台游戏',
    description: '使用Unity开发的2D平台游戏，包含多个关卡和角色技能系统。',
    image: '/images/projects/platform-game.jpg',
    tags: ['Unity', 'C#', '游戏开发'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
  {
    title: '开源UI组件库',
    description: '为React开发的可重用UI组件库，支持主题定制和多种组件。',
    image: '/images/projects/ui-library.jpg',
    tags: ['React', 'TypeScript', 'Storybook', '开源项目'],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com',
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('全部');

  // 根据选中的分类过滤项目
  const filteredProjects = activeCategory === '全部'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeCategory));

  return (
    <Layout title="项目 | 个人博客" description="我的项目作品集，包括Web开发、移动应用和游戏开发">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">我的项目</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              这里展示了我的一些项目作品，涵盖了Web开发、移动应用和游戏开发等领域。
            </p>
          </motion.div>

          {/* 分类过滤器 */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? 'bg-accent text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 项目网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>

          {/* 如果没有匹配的项目 */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">没有找到匹配的项目。</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage; 