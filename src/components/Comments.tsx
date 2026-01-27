'use client';

import Giscus from '@giscus/react';
import { useTheme } from '@/hooks/useTheme';

export default function Comments() {
    const { isDark, mounted } = useTheme();

    // 等待客户端 mount 后再渲染 Giscus，避免 hydration 不匹配导致组件重载
    if (!mounted) {
        return (
            <section className="mt-20 pt-10 border-t border-[var(--border-color)]">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8 tracking-tight">
                    评论
                </h2>
                <div className="h-32 flex items-center justify-center">
                    <span className="text-[var(--text-tertiary)]">加载评论中...</span>
                </div>
            </section>
        );
    }

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
