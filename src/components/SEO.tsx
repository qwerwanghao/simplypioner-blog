import React from 'react';
import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    canonicalUrl?: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
}

const SEO = ({
    title = '王浩的个人博客',
    description = 'Unity3D高级开发工程师，5.5年游戏开发经验，专注于MOBA和ARPG类型游戏开发，擅长性能优化和跨平台适配。',
    keywords = 'Unity3D, 游戏开发, C#, Lua, MOBA, ARPG, 性能优化, 王浩, 前端开发',
    ogImage = '/images/og-image.jpg',
    ogType = 'website',
    canonicalUrl,
    publishedTime,
    modifiedTime,
    author = '王浩',
}: SEOProps) => {
    const siteUrl = 'https://wanghao.dev';
    const fullTitle = title === '王浩的个人博客' ? title : `${title} | 王浩的个人博客`;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Head>
            {/* 基础 Meta 标签 */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:site_name" content="王浩的个人博客" />
            <meta property="og:locale" content="zh_CN" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />

            {/* 文章特定 Meta */}
            {ogType === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {ogType === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {ogType === 'article' && author && (
                <meta property="article:author" content={author} />
            )}

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* 主题色 */}
            <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
            <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />

            {/* 结构化数据 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: '王浩',
                        url: siteUrl,
                        jobTitle: 'Unity3D高级开发工程师',
                        email: 'qwerwanghao@gmail.com',
                        sameAs: [
                            'https://github.com/qwerwanghao',
                        ],
                        knowsAbout: [
                            'Unity3D',
                            'C#',
                            'Lua',
                            'Game Development',
                            'MOBA Games',
                            'ARPG Games',
                            'Performance Optimization',
                        ],
                    }),
                }}
            />
        </Head>
    );
};

export default SEO;
