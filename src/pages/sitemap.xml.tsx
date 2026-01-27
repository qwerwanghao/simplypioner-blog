import type { IncomingMessage, ServerResponse } from 'http';
import { getAllSlugs } from '@/lib/mdx';

const SITE_URL = 'https://wanghao.dev';

function generateSiteMap(slugs: string[]) {
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
  ${slugs
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
  const slugs = getAllSlugs();
  const sitemap = generateSiteMap(slugs);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
