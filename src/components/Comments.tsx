'use client';

import Giscus from '@giscus/react';
import { useTheme } from '@/hooks/useTheme';

export default function Comments() {
    const { isDark } = useTheme();

    return (
        <section className="mt-16 pt-8 border-t border-gray-700">
            <h2 className="text-2xl font-bold mb-8 text-white">💬 评论</h2>
            <Giscus
                repo="qwerwanghao/simplypioner-blog"
                repoId="R_kgDOOCYWwA"
                category="Announcements"
                categoryId="DIC_kwDOOCYWwM4C1N5Y"
                mapping="pathname"
                strict="0"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={isDark ? 'dark' : 'light'}
                lang="zh-CN"
                loading="lazy"
            />
        </section>
    );
}
