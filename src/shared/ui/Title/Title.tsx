import { type ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './Title.module.scss';

interface ITitle {
  className?: string;
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ children, className, as: Component = 'h1', ...props }: ITitle) => {
  return (
    <Component className={clsx(styles.title, className)} {...props}>
      {children}
    </Component>
  );
};
