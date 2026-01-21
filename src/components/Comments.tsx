'use client';

import Giscus from '@giscus/react';
import { useTheme } from '@/hooks/useTheme';

export default function Comments() {
    const { isDark } = useTheme();

    return (
        <section className="mt-20 pt-10 border-t border-[var(--border-color)]">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8 tracking-tight">
                评论
            </h2>
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
