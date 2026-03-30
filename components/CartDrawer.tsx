import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { BundleOption } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BundleOption[];
  onRemoveItem: (index: number) => void;
}

const SHOPIFY_PRODUCT_URL = 'https://11ze23-ty.myshopify.com/products/charmetique-hydrating-scar-cream-30-ml';

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  // Calculate total quantity based on bundle selections
  const totalQuantity = items.reduce((acc, item) => {
    if (item.id === '1-unit') return acc + 1;
    if (item.id === '2-units') return acc + 2;
    if (item.id === '3-units') return acc + 3;
    return acc + 1;
  }, 0);

  const handleCheckout = () => {
    // Open Shopify product page with quantity pre-selected
    const checkoutUrl = `${SHOPIFY_PRODUCT_URL}?quantity=${totalQuantity}`;
    window.open(checkoutUrl, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-stone-100 flex justify-between items-center">
            <h2 className="font-serif text-xl text-stone-900">Your Cart</h2>
            <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-900">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <p className="text-stone-500">Your cart is empty.</p>
                <button 
                  onClick={onClose}
                  className="text-stone-900 underline font-medium hover:text-stone-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-20 h-20 bg-stone-50 rounded-sm overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-stone-900">{item.title}</h3>
                        <p className="font-medium text-stone-900">€{item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-stone-500 mb-2">{item.subtitle}</p>
                      <button 
                        onClick={() => onRemoveItem(idx)}
                        className="text-xs text-stone-400 hover:text-red-500 flex items-center space-x-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-stone-100 px-6 py-6 bg-stone-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-stone-600">Subtotal</span>
                <span className="font-serif text-xl font-medium text-stone-900">€{total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
              <button
                onClick={handleCheckout}
                className="w-full bg-stone-900 text-white py-4 rounded-sm font-medium hover:bg-stone-800 transition-colors flex justify-center items-center space-x-2"
              >
                <span>Checkout Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-stone-400 text-center mt-2">
                You'll be redirected to our secure checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;