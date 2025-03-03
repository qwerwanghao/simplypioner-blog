import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人博客</h1>
          <p className="text-xl text-gray-600">
            Unity3D 前端开发工程师 | 游戏客户端开发
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">关于我</h2>
          <p className="text-gray-700 mb-4">
            我是一名拥有4年以上游戏客户端开发经验的Unity3D工程师，目前就职于腾讯科技（深圳）有限公司。
            在游戏开发领域有丰富的实践经验，特别是在MOBA和ARPG类型游戏的开发方面。
          </p>
          <div className="flex justify-start">
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              了解更多
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">技术栈</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Unity3D游戏开发</li>
            <li>C#, Lua编程</li>
            <li>UGUI开发与优化</li>
            <li>多平台开发（Android、iOS、Switch）</li>
            <li>性能优化</li>
            <li>工具开发</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">联系方式</h2>
          <div className="flex flex-col space-y-2 text-gray-700">
            <a href="mailto:qwerwanghao@gmail.com" className="hover:text-blue-600">
              邮箱：qwerwanghao@gmail.com
            </a>
            <a href="tel:18639861974" className="hover:text-blue-600">
              电话：18639861974
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
