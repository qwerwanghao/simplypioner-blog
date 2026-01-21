import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 自定义链接组件
const CustomLink = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <Link href={href} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
};

// 自定义图片组件
const CustomImage = ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // 如果是相对路径，直接使用 img 标签
    if (src && !src.startsWith('http')) {
        return (
            <span className="block my-6">
                <img
                    src={src}
                    alt={alt || ''}
                    className="rounded-xl max-w-full h-auto"
                    {...props}
                />
            </span>
        );
    }

    return (
        <span className="block my-6">
            <img
                src={src}
                alt={alt || ''}
                className="rounded-xl max-w-full h-auto"
                {...props}
            />
        </span>
    );
};

// 自定义代码块组件
const CustomPre = ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
        <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto my-6 text-sm" {...props}>
            {children}
        </pre>
    );
};

// 自定义行内代码组件
const CustomCode = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // 如果有 className，说明是代码块中的 code，不需要额外样式
    if (className) {
        return <code className={className} {...props}>{children}</code>;
    }

    // 行内代码
    return (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm text-pink-500 dark:text-pink-400" {...props}>
            {children}
        </code>
    );
};

// 提示框组件
interface CalloutProps {
    type?: 'info' | 'warning' | 'tip' | 'danger';
    children: React.ReactNode;
}

const Callout = ({ type = 'info', children }: CalloutProps) => {
    const styles = {
        info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-700 dark:text-blue-300',
        warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-700 dark:text-yellow-300',
        tip: 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300',
        danger: 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-300',
    };

    const icons = {
        info: 'ℹ️',
        warning: '⚠️',
        tip: '💡',
        danger: '🚨',
    };

    return (
        <div className={`my-6 p-4 border-l-4 rounded-r-xl ${styles[type]}`}>
            <span className="mr-2">{icons[type]}</span>
            {children}
        </div>
    );
};

// MDX 组件映射
export const MDXComponents = {
    a: CustomLink,
    img: CustomImage,
    pre: CustomPre,
    code: CustomCode,
    Callout,
    // 标题样式
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-3xl font-bold mt-10 mb-4 text-gray-900 dark:text-white" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" {...props} />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />
    ),
    // 段落和列表
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="my-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="my-4 pl-6 list-disc space-y-2 text-gray-700 dark:text-gray-300" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="my-4 pl-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" {...props} />
    ),
    // 引用
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="my-6 pl-4 border-l-4 border-blue-500 italic text-gray-600 dark:text-gray-400" {...props} />
    ),
    // 分割线
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
    ),
    // 表格
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
        </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-white" {...props} />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700" {...props} />
    ),
};

export default MDXComponents;
