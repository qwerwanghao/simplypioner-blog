import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout title="关于我 | 王浩的个人博客">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">王浩 | Unity 高级客户端工程师</h1>

        {/* 基本信息 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">基本信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="font-medium w-32">工作经验：</span>
              <span>5.5 年</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-32">所在地：</span>
              <span>深圳</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-32">邮箱：</span>
              <a href="mailto:qwerwanghao@gmail.com" className="text-blue-600 hover:underline">
                qwerwanghao@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-32">电话：</span>
              <span>186-3986-1974</span>
            </div>
          </div>
        </section>

        {/* 职业概述 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">职业概述</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Unity 高级客户端工程师，5.5 年移动与主机平台游戏开发经验。精通 Unity3D、C# 及活动系统、UI 框架等核心模块，具备丰富的跨端适配与性能优化实战。参与多款大型项目的开发与上线，服务千万级用户。注重代码质量与团队协作，善于自研工具和流程优化，熟练运用 AI 辅助工具提升开发效率，持续学习新技术，助力产品高质量交付。
          </p>
        </section>

        {/* 核心技能 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">核心技能</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2 text-green-600">精通：</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Unity3D、C#、UGUI、Lua、OOP、活动系统架构、Editor工具开发、代码重构与Code Review、AI辅助工具开发
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-blue-600">熟悉：</h3>
            <p className="text-gray-700 dark:text-gray-300">
              ECS/JobSystem、网络同步、热更新、资源管线（AssetBundle/Addressables）、CI/CD（蓝盾/Jenkins）、多平台打包（Android/iOS/Switch）、性能分析与优化（Profiler/RenderDoc）、Shader基础调优、主流GPU分析工具
            </p>
          </div>
        </section>

        {/* 关键成就 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">关键成就</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>2 款项目成功上线，覆盖千万级 DAU</li>
            <li>自研工具多款，累计节省人天 200+</li>
            <li>活动系统配置化后迭代效率显著提升</li>
            <li>积极跟进AI快速发展，研究AI从设计稿生成Prefab、UnityMCP、ExcelMCP等MCP工具的使用，持续提升开发效率</li>
          </ul>
        </section>

        {/* 工作经历 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">工作经历</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-2">外派腾讯天美 · 宝可梦大集结</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Unity 游戏客户端开发 | 2020.07 – 至今</p>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">【系统组】2021.07 – 2024.07</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>负责登录、抽奖、"活动塔"等十余个运营活动的 UI / 逻辑开发，将参数与界面解耦为策划可配表，后续同类活动基本无需客户端介入</li>
                <li>主导落地"趣游迷塔"大型活动，推动 5 轮需求评审与快速迭代，成为该版本玩家参与度最高的活动</li>
                <li>构建系统级 UI 组件库（按钮、进度条、弹窗模板），统一动画与事件封装，减少重复代码与维护成本</li>
                <li>设计并实现对战录像回放框架（快进、暂停），稳定运行至今未出现崩溃</li>
                <li>完成二维码加好友功能：集成第三方扫描 SDK + 动态加密二维码，完善社交链路，日均使用量大幅增长</li>
                <li>跟踪线上崩溃日志，集中修复 NullRef、UI 卡死等问题 100+，有效降低版本差评</li>
                <li>输出《运营活动客户端开发规范》《UI 资源命名规范》，用于新人 Onboarding 与 Code Review</li>
                <li>输出《客户端如何新增GM指令》《客户端常用GM指令》《快速查找GM指令》《GM指令输出Log》，用于帮助项目组同学使用GM系统</li>
                <li>输出《SVN合线工具指南》，帮助项目组同学使用合入工具节省合入时间</li>
                <li>输出《局外性能优化方法》，帮助项目组同学使用 Unity Profiler、Memory Profiler 等工具优化局外界面卡顿、帧率、内存问题</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">【战场组】2024.08 – 2025.04</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>重构 GM 工具：优化 GUI 排版并新增日志打印、常用 GM 指令，一线开发使用体验大幅提升</li>
                <li>小地图血量显示：实时渲染英雄血量百分比，增强信息获取，获得策划与玩家好评</li>
                <li>新增"伤害免疫率"角色属性，配合服务器与策划调参，丰富战斗机制并保持版本平衡</li>
                <li>扩展技能编辑器：支持"扣血 Buff"等新效果，让策划无需代码即可配置多样化技能</li>
                <li>自研 SVN 多分支合线机器人，自动冲突处理，显著降低人工错误</li>
                <li>开发动画检查工具，自动检测 Animator / Playable 资产缺失与冗余，减少美术资源错误</li>
                <li>优化 GameMode 逻辑与性能，持续定位并修复技能、特效、地图等 Bug</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">【基础体验组】2025.05 – 至今</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>搭建项目构建流水线：覆盖主干、性能、预发布、正式包四类流水线；并开发"一键搭建构建机环境"工具，确保稳定出包</li>
                <li>维护实体与云端构建机，处理构建机掉线、证书失效等突发问题</li>
                <li>修复构建脚本与蓝盾插件 Bug，保障每日自动构建准点产出</li>
                <li>输出《iOS证书即将过期如何处理》《机房构建机蓝盾agent频繁上下线如何处理》《搭建Mac构建机构建环境》解决构建难题</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">易帆互动 · 真三国无双霸</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Unity 客户端工程师 | 2019.04 – 2020.06</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>负责战令、运营活动、商店等局外系统 UI / 逻辑开发，保障按期上线</li>
              <li>使用 Unity Profiler / FrameDebugger 优化界面性能，低端机 FPS 提升约 20%</li>
              <li>重构战斗飘字：对象池 + 顶点合批，高强度场景下 GC Alloc ↓70%</li>
              <li>完成 12+ 机型分辨率适配，并封装自动校准工具，保证 UI 一致性</li>
              <li>通过热更新体系定位并修复线上 Bug 80+，确保版本稳定运行</li>
              <li>编写《局外系统 UI 规范》《资源打包流程》文档，提升团队协同效率</li>
            </ul>
          </div>
        </section>

        {/* 教育背景 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">教育背景</h2>
          <div>
            <h3 className="text-xl font-medium mb-2">郑州科技学院</h3>
            <p className="text-gray-600 dark:text-gray-400">2016年9月 - 2020年6月</p>
            <p>建筑环境与能源应用工程 本科</p>
            <p>成绩排名：5%-20%</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
