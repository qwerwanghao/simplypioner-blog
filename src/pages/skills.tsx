import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import SkillBar from '@/components/SkillBar';

// 技能分类
const skillCategories = [
  {
    title: '前端开发',
    skills: [
      { name: 'HTML/CSS', level: 10 },
      { name: 'JavaScript', level: 10 },
      { name: 'TypeScript', level: 9 },
      { name: 'React', level: 10 },
      { name: 'Next.js', level: 9 },
      { name: 'Vue.js', level: 7 },
      { name: 'Svelte', level: 6 },
      { name: 'TailwindCSS', level: 9 },
      { name: 'SASS/SCSS', level: 8 },
    ],
  },
  {
    title: '后端开发',
    skills: [
      { name: 'Node.js', level: 8 },
      { name: 'Express', level: 8 },
      { name: 'NestJS', level: 7 },
      { name: 'C#/.NET', level: 8 },
      { name: 'Python', level: 8 },
      { name: 'Django', level: 6 },
      { name: 'GraphQL', level: 7 },
      { name: 'RESTful API', level: 9 },
    ],
  },
  {
    title: '数据库',
    skills: [
      { name: 'MongoDB', level: 8 },
      { name: 'PostgreSQL', level: 7 },
      { name: 'MySQL', level: 7 },
      { name: 'Redis', level: 6 },
      { name: 'Firebase', level: 8 },
    ],
  },
  {
    title: '游戏开发',
    skills: [
      { name: 'Unity3D', level: 7 },
      { name: 'C#', level: 8 },
      { name: 'C++', level: 6 },
      { name: '游戏设计', level: 7 },
      { name: '游戏物理', level: 6 },
    ],
  },
  {
    title: '工具和其他',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'Docker', level: 7 },
      { name: 'CI/CD', level: 7 },
      { name: 'AWS', level: 6 },
      { name: '数据结构与算法', level: 8 },
      { name: '设计模式', level: 8 },
      { name: '敏捷开发', level: 8 },
    ],
  },
];

const SkillsPage = () => {
  return (
    <Layout title="技能 | 个人博客" description="我的技术技能和专长领域">
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">我的技能</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              多年来，我积累了丰富的技术栈和项目经验。以下是我的主要技能和专长领域，按类别分类。
            </p>
          </motion.div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-900">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">持续学习</h2>
          <p className="text-gray-400 mb-8">
            技术领域不断发展，我始终保持学习的热情。以下是我目前正在学习和探索的一些技术：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Rust</h3>
              <p className="text-gray-400">
                学习Rust语言及其生态系统，探索其在系统编程和Web开发中的应用。
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">机器学习</h3>
              <p className="text-gray-400">
                学习机器学习基础和应用，特别是在Web应用和游戏开发中的应用场景。
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Web3技术</h3>
              <p className="text-gray-400">
                探索区块链和去中心化应用开发，了解智能合约和DeFi生态系统。
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsPage; 