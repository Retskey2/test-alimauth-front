import { type ComponentProps, forwardRef, useId } from 'react';

import clsx from 'clsx';

import styles from './TextField.module.scss';

interface ITextField extends ComponentProps<'input'> {
  label?: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, ITextField>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className={clsx(styles.wrapper, className)}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          className={clsx(styles.input, error && styles.hasError)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {error && (
          <span id={`${inputId}-error`} className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
