import { formatPrice } from '../utils/format';
import clsx from 'clsx';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PriceTag = ({ 
  price, 
  originalPrice, 
  size = 'md', 
  className 
}: PriceTagProps) => {
  const hasDiscount = originalPrice && originalPrice > price;
  
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <span
        className={clsx('font-bold text-white', {
          'text-lg': size === 'lg',
          'text-base': size === 'md',
          'text-sm': size === 'sm',
        })}
      >
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <span
          className={clsx('text-muted line-through', {
            'text-sm': size === 'lg',
            'text-xs': size === 'md' || size === 'sm',
          })}
        >
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
};
