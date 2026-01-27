import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 博客文章目录
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// 博客文章元数据类型
export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    readingTime: string;
    tags: string[];
}

// 博客文章完整数据类型
export interface Post extends PostMeta {
    content: string;
}

/**
 * 获取所有博客文章的 slug
 */
export function getAllSlugs(): string[] {
    // 确保目录存在
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

/**
 * 根据 slug 获取单篇文章
 */
export function getPostBySlug(slug: string): Post | null {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // 确保日期是字符串格式
    let dateString = '';
    if (data.date) {
        if (data.date instanceof Date) {
            dateString = data.date.toISOString().split('T')[0];
        } else {
            dateString = String(data.date);
        }
    }

    return {
        slug,
        title: data.title || '',
        date: dateString,
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        readingTime: data.readingTime || '',
        tags: data.tags || [],
        content,
    };
}

/**
 * 获取所有博客文章（按日期倒序）
 */
export function getAllPosts(): PostMeta[] {
    const slugs = getAllSlugs();
    const posts = slugs
        .map((slug) => {
            const post = getPostBySlug(slug);
            if (!post) return null;

            // 只返回元数据，不返回内容
            const { content, ...meta } = post;
            return meta;
        })
        .filter((post): post is PostMeta => post !== null);

    // 按日期倒序排序
    return posts.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
    });
}

/**
 * 获取所有标签
 */
export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tagsSet = new Set<string>();

    posts.forEach((post) => {
        post.tags.forEach((tag) => tagsSet.add(tag));
    });

    return Array.from(tagsSet).sort();
}
