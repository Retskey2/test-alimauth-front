import { type ButtonHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isLoading?: boolean;
}

export const Button = (props: IButton) => {
  const { className, children, isLoading, disabled, ...otherProps } = props;

  return (
    <button
      type="button"
      className={clsx(styles.button, className)}
      disabled={disabled || isLoading}
      {...otherProps}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

Button.displayName = 'Button';
