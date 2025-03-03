// 全局类型声明

// 扩展JSX命名空间
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  
  interface ElementAttributesProperty {
    props: {};
  }
  
  interface ElementChildrenAttribute {
    children: {};
  }
  
  interface IntrinsicAttributes {
    key?: string | number;
  }
}

// 声明React类型
declare namespace React {
  interface ReactNode {
    key?: string | number;
  }
  
  interface ComponentProps {
    key?: string | number;
    children?: ReactNode;
  }

  // 添加React事件类型
  interface ChangeEvent<T = Element> {
    target: T;
    currentTarget: T;
  }

  interface FormEvent<T = Element> {
    target: T;
    currentTarget: T;
    preventDefault(): void;
  }
  
  // 添加HTML属性类型
  interface HTMLAttributes<T> {
    key?: string | number;
  }
  
  // 添加函数组件类型
  type FC<P = {}> = FunctionComponent<P>;
  
  interface FunctionComponent<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement | null;
  }
  
  interface ReactElement {
    type: any;
    props: any;
    key: string | number | null;
  }
}

// 声明Next.js类型
declare module 'next' {
  export type GetStaticProps<P = any> = (context: any) => Promise<{ props: P }>;
  export type GetStaticPaths = () => Promise<{ paths: any[]; fallback: boolean }>;
}

// 声明next/document模块
declare module 'next/document' {
  export const Html: any;
  export const Head: any;
  export const Main: any;
  export const NextScript: any;
  export default class Document {}
}

// 声明next/app模块
declare module 'next/app' {
  export interface AppProps {
    Component: any;
    pageProps: any;
    router?: any;
  }
}

// 声明模块
declare module 'react' {
  export = React;
  export as namespace React;
  
  export function useState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
  export function useState<T = undefined>(): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];
  
  export function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void;
}

declare module 'react-dom' {
  export = ReactDOM;
}

declare module 'next/image' {
  const Image: any;
  export default Image;
}

declare module 'next/link' {
  const Link: any;
  export default Link;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'react-icons/fi' {
  export const FiMenu: any;
  export const FiX: any;
  export const FiGithub: any;
  export const FiTwitter: any;
  export const FiLinkedin: any;
  export const FiMail: any;
  export const FiArrowRight: any;
  export const FiCalendar: any;
  export const FiClock: any;
  export const FiArrowLeft: any;
  export const FiShare2: any;
  export const FiMapPin: any;
  export const FiExternalLink: any;
} 