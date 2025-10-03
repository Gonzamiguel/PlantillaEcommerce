import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className 
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-medium',
        {
          'bg-muted/20 text-muted': variant === 'default',
          'bg-primary/20 text-primary': variant === 'primary',
          'bg-accent/20 text-accent': variant === 'accent',
          'bg-green-500/20 text-green-400': variant === 'success',
          'bg-yellow-500/20 text-yellow-400': variant === 'warning',
          'bg-red-500/20 text-red-400': variant === 'error',
        },
        {
          'px-2 py-0.5 text-xs': size === 'sm',
          'px-2.5 py-1 text-sm': size === 'md',
          'px-3 py-1.5 text-base': size === 'lg',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
