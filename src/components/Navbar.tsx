import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Badge } from './Badge';
import { useCartStore } from '../store/cart';
import { useState } from 'react';
import { CartDrawer } from './CartDrawer';

export const Navbar = () => {
  const { getCount } = useCartStore();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = getCount();

  return (
    <>
      <nav className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white">
              E-Shop
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Inicio
              </Link>
              <Link 
                to="/products" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Productos
              </Link>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-white/80 hover:text-white transition-colors duration-200"
              aria-label="Abrir carrito"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
                />
              </svg>
              {cartCount > 0 && (
                <Badge 
                  variant="accent" 
                  size="sm" 
                  className="absolute -top-1 -right-1 min-w-[20px] h-5 flex items-center justify-center"
                >
                  {cartCount}
                </Badge>
              )}
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
