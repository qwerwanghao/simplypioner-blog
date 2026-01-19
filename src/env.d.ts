/// <reference types="next" />
/// <reference types="next/types/global" />

// 扩展JSX命名空间
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// 修复装饰器中的模板字符串问题
interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
} 