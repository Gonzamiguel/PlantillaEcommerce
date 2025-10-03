import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-ring disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl': variant === 'primary',
            'bg-accent text-white hover:bg-accent/90 shadow-lg hover:shadow-xl': variant === 'secondary',
            'border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm': variant === 'outline',
            'text-white hover:bg-white/10': variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
