import type { IncomingMessage, ServerResponse } from 'http';

const SITE_URL = 'https://wanghao.dev';

// 博客文章 slugs（与 blog/index.tsx 保持同步）
const blogSlugs = [
  'unity-performance-optimization',
  'ugui-optimization-tips',
  'game-activity-system-design',
  'svn-merge-automation',
  'how-to-build-blog-with-nextjs',
  'unity-editor-tools-guide',
];

function generateSiteMap() {
  const currentDate = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- 主页 -->
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- 关于页面 -->
  <url>
    <loc>${SITE_URL}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- 项目页面 -->
  <url>
    <loc>${SITE_URL}/projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- 技能页面 -->
  <url>
    <loc>${SITE_URL}/skills</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- 联系页面 -->
  <url>
    <loc>${SITE_URL}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- 博客列表 -->
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- 博客文章 -->
  ${blogSlugs
      .map(
        (slug) => `
  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
      )
      .join('')}
</urlset>`;
}

function SiteMap() {
  return null;
}

interface GetServerSidePropsContext {
  res: ServerResponse<IncomingMessage>;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
