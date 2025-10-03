import { useCartStore } from '../store/cart';
import { CartItem } from './CartItem';
import { Button } from './Button';
import { PriceTag } from './PriceTag';
import { formatPrice } from '../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { items, getTotal, getCount, clearCart } = useCartStore();
  const total = getTotal();
  const count = getCount();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-paper border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">
              Carrito ({count})
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-muted hover:text-white transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg 
                  className="w-16 h-16 text-muted mb-4" 
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
                <h3 className="text-lg font-medium text-white mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-muted">
                  Agrega algunos productos para comenzar
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-white/10 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">Total:</span>
                <PriceTag price={total} size="lg" />
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  disabled
                  title="Funcionalidad de checkout no implementada (demo)"
                >
                  Proceder al Pago
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={clearCart}
                >
                  Limpiar Carrito
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
