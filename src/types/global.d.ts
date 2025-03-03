import type { ReactElement, ReactNode as ReactNodeType } from 'react';

declare global {
  type ReactNode = ReactNodeType | ReactElement;
}
