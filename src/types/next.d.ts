import 'next';

declare module 'next/app' {
  export interface AppProps {
    Component: any;
    pageProps: any;
    router?: any;
  }
}

declare module 'next/document' {
  export const Html: any;
  export const Head: any;
  export const Main: any;
  export const NextScript: any;
  export default class Document {}
}

declare module 'next/head' {
  export default function Head(props: {
    children: React.ReactNode;
  }): JSX.Element;
}

declare module 'next' {
  export interface GetStaticPropsContext {
    params?: Record<string, string>;
    preview?: boolean;
    previewData?: any;
    locale?: string;
    locales?: string[];
    defaultLocale?: string;
  }

  export interface GetStaticPropsResult<P> {
    props: P;
    revalidate?: number | boolean;
    notFound?: boolean;
  }

  export type GetStaticProps<
    P = { [key: string]: any },
    Q = { [key: string]: string }
  > = (
    context: GetStaticPropsContext
  ) => Promise<GetStaticPropsResult<P>>;

  export interface GetStaticPathsResult {
    paths: Array<string | { params: { [key: string]: string } }>;
    fallback: boolean | 'blocking';
  }

  export type GetStaticPaths = () => Promise<GetStaticPathsResult>;
} 