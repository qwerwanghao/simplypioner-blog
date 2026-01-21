import React from 'react';
import Link from 'next/link';

// Custom Link Component
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

// Custom Image Component
const CustomImage = ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <span className="block my-8">
            <img
                src={src}
                alt={alt || ''}
                className="rounded-xl max-w-full h-auto"
                {...props}
            />
        </span>
    );
};

// Custom Pre Component - Apple Style
const CustomPre = ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
        <pre
            className="my-8 p-5 rounded-xl overflow-x-auto text-sm leading-relaxed"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
            }}
            {...props}
        >
            {children}
        </pre>
    );
};

// Custom Code Component
const CustomCode = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    if (className) {
        return <code className={className} {...props}>{children}</code>;
    }

    return (
        <code
            className="px-1.5 py-0.5 rounded-md text-sm font-mono"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--accent-blue)',
            }}
            {...props}
        >
            {children}
        </code>
    );
};

// Callout Component - Apple Style
interface CalloutProps {
    type?: 'info' | 'warning' | 'tip' | 'danger';
    children: React.ReactNode;
}

const Callout = ({ type = 'info', children }: CalloutProps) => {
    const styles = {
        info: {
            bg: 'rgba(0, 113, 227, 0.08)',
            border: 'rgba(0, 113, 227, 0.3)',
            icon: 'ℹ️'
        },
        warning: {
            bg: 'rgba(255, 159, 10, 0.08)',
            border: 'rgba(255, 159, 10, 0.3)',
            icon: '⚠️'
        },
        tip: {
            bg: 'rgba(52, 199, 89, 0.08)',
            border: 'rgba(52, 199, 89, 0.3)',
            icon: '💡'
        },
        danger: {
            bg: 'rgba(255, 59, 48, 0.08)',
            border: 'rgba(255, 59, 48, 0.3)',
            icon: '🚨'
        },
    };

    const style = styles[type];

    return (
        <div
            className="my-8 p-5 rounded-xl flex gap-3"
            style={{
                backgroundColor: style.bg,
                border: `1px solid ${style.border}`,
            }}
        >
            <span className="text-lg flex-shrink-0">{style.icon}</span>
            <div className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {children}
            </div>
        </div>
    );
};

// MDX Components Mapping
export const MDXComponents = {
    a: CustomLink,
    img: CustomImage,
    pre: CustomPre,
    code: CustomCode,
    Callout,
    // Headings - Apple Typography
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className="text-3xl font-semibold mt-12 mb-5 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            {...props}
        />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className="text-2xl font-semibold mt-10 mb-4 tracking-tight pb-3"
            style={{
                color: 'var(--text-primary)',
                borderBottom: '1px solid var(--border-color)'
            }}
            {...props}
        />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className="text-xl font-semibold mt-8 mb-3 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            {...props}
        />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className="text-lg font-semibold mt-6 mb-2 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
            {...props}
        />
    ),
    // Paragraphs and Lists
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className="my-5 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            {...props}
        />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul
            className="my-5 pl-6 list-disc space-y-2"
            style={{ color: 'var(--text-secondary)' }}
            {...props}
        />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol
            className="my-5 pl-6 list-decimal space-y-2"
            style={{ color: 'var(--text-secondary)' }}
            {...props}
        />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-relaxed" {...props} />
    ),
    // Blockquote
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="my-8 pl-5 border-l-3 italic"
            style={{
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--accent-blue)',
                color: 'var(--text-tertiary)'
            }}
            {...props}
        />
    ),
    // Divider
    hr: () => (
        <div className="my-12 apple-divider" />
    ),
    // Table
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-8 overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border-color)' }}>
            <table className="min-w-full" {...props} />
        </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-tertiary)'
            }}
            {...props}
        />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className="px-4 py-3 text-sm"
            style={{
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-color)'
            }}
            {...props}
        />
    ),
};

export default MDXComponents;
