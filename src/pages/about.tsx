import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout title="关于我 | 王浩的个人博客">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">关于我</h1>
        
        {/* 基本信息 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">基本信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="font-medium w-24">姓名：</span>
              <span>王浩</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">职位：</span>
              <span>Unity3D前端开发工程师</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">邮箱：</span>
              <a href="mailto:qwerwanghao@gmail.com" className="text-blue-600 hover:underline">
                qwerwanghao@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-24">电话：</span>
              <span>18639861974</span>
            </div>
          </div>
        </section>

        {/* 工作经历 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">工作经历</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">腾讯科技（深圳）有限公司</h3>
            <p className="text-gray-600 mb-2">2021年9月 - 至今</p>
            <p className="font-medium mb-2">宝可梦大集结（MOBA）</p>
            <div className="mb-4">
              <p className="font-medium mb-2">系统组（2年）：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>完成登录、抽奖等运营活动的设计开发优化</li>
                <li>搭建系统框架，完成精彩时刻、二维码添加好友等系统开发</li>
                <li>确保系统模块代码稳定高效，与各部门高效协作</li>
                <li>修复与热更线上bug，降低bug率</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2">战场组（1年）：</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>优化GM工具，增加对局经济分析功能</li>
                <li>开发小地图血量显示等游戏功能</li>
                <li>扩展技能编辑器功能</li>
                <li>开发SVN多分支合并工具、动画检查工具等</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">深圳易帆互动科技有限公司</h3>
            <p className="text-gray-600 mb-2">2020年5月 - 2021年8月</p>
            <p className="font-medium mb-2">真三国无双霸（ARPG）</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>优化局外系统整体性能，提升界面帧率</li>
              <li>负责多个系统模块的开发与维护</li>
              <li>处理线上bug修复及热更新</li>
              <li>完成多设备、多分辨率的适配</li>
            </ul>
          </div>
        </section>

        {/* 技能特长 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">技能特长</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>掌握C#、Lua等编程语言，4年以上Unity3D开发经验</li>
            <li>擅长性能优化，包括内存管理、帧率提升和资源管理</li>
            <li>深入掌握UGUI开发与优化</li>
            <li>具备多平台（Android、iOS、Switch）开发和适配经验</li>
            <li>熟练使用Git、SVN等版本控制工具</li>
            <li>具备工具开发能力，开发过多种提升效率的内部工具</li>
          </ul>
        </section>

        {/* 教育背景 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">教育背景</h2>
          <div>
            <h3 className="text-xl font-medium mb-2">郑州科技学院</h3>
            <p className="text-gray-600">2016年9月 - 2020年6月</p>
            <p>建筑环境与能源应用工程 本科</p>
            <p>成绩排名：5%-20%</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
