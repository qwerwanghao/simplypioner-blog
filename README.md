# 王浩的个人博客

基于 Next.js 14 + TypeScript + Tailwind CSS 构建的现代化个人博客网站。

## 技术栈

- **框架**: Next.js 14 (Pages Router)
- **语言**: TypeScript 5.2
- **样式**: Tailwind CSS 3.3
- **动画**: Framer Motion 10.16
- **图标**: React Icons 4.11

## 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
npm start
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
personal-blog/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Layout.tsx       # 主布局组件
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── Footer.tsx       # 页脚
│   │   ├── BlogCard.tsx     # 博客卡片
│   │   ├── ProjectCard.tsx  # 项目卡片
│   │   ├── SkillBar.tsx     # 技能条
│   │   └── ContactForm.tsx  # 联系表单
│   ├── pages/               # 页面路由
│   │   ├── index.tsx        # 首页
│   │   ├── about.tsx        # 关于我
│   │   ├── projects.tsx     # 项目展示
│   │   ├── skills.tsx       # 技能展示
│   │   ├── contact.tsx      # 联系方式
│   │   └── blog/
│   │       ├── index.tsx    # 博客列表
│   │       └── [slug].tsx   # 博客详情
│   ├── styles/              # 样式文件
│   │   └── globals.css      # 全局样式
│   └── types/               # TypeScript 类型定义
├── public/                  # 静态资源
└── package.json
```

## 功能特性

- ✅ 响应式设计，支持移动端和桌面端
- ✅ 深色模式支持
- ✅ Apple 风格的渐变背景和动画效果
- ✅ 博客文章静态生成
- ✅ SEO 优化
- ✅ TypeScript 类型安全

## 添加博客文章

在 `src/pages/blog/[slug].tsx` 中的 `blogPosts` 数组添加新的文章对象：

```typescript
{
  title: '文章标题',
  slug: 'article-slug',
  excerpt: '文章摘要',
  coverImage: '/images/blog/cover.jpg',
  date: '2024-01-01',
  readingTime: '10分钟',
  tags: ['Next.js', 'React'],
  content: '<p>文章内容...</p>'
}
```

## 部署

推荐使用 [Vercel](https://vercel.com) 进行部署：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 并进行部署

## 许可证

MIT

---

**作者**: 王浩
**邮箱**: qwerwanghao@gmail.com
**GitHub**: [your-github-username]
