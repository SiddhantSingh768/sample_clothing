import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function CartSidebar() {
  const { state, dispatch, subtotal } = useCart();

  const handleCheckout = () => {
    toast.info('Checkout coming soon!', {
      description: 'This is a demo store. Payment processing is not enabled.',
    });
  };

  return (
    <AnimatePresence>
      {state.isSidebarOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
            className="fixed inset-0 z-50 bg-brand-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-brand-secondary shadow-modal"
          >
            <div className="flex items-center justify-between border-b border-brand-primary/10 px-6 py-4">
              <h2 className="font-serif text-xl font-bold">Your Cart</h2>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
                className="rounded-full p-2 hover:bg-brand-accent transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {state.items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-brand-primary/50">
                  <ShoppingBag className="h-16 w-16 opacity-20" />
                  <p className="font-medium">Your cart is empty</p>
                  <Button
                    variant="outline"
                    onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR', payload: false })}
                    className="mt-4"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="flex flex-col gap-6">
                  {state.items.map((item) => (
                    <li key={item.cartItemId} className="flex gap-4">
                      <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[4px] bg-brand-accent">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="font-medium text-brand-primary line-clamp-1">{item.name}</h3>
                            <button
                              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.cartItemId })}
                              className="text-brand-primary/50 hover:text-brand-error transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm text-brand-primary/70">Size: {item.selectedSize}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center rounded-[2px] border border-brand-primary/20">
                            <button
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.cartItemId, quantity: item.quantity - 1 } })}
                              className="p-1 hover:bg-brand-accent transition-colors disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.cartItemId, quantity: item.quantity + 1 } })}
                              className="p-1 hover:bg-brand-accent transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {state.items.length > 0 && (
              <div className="border-t border-brand-primary/10 bg-brand-accent/50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-serif text-xl font-bold">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-6 text-sm text-brand-primary/60">
                  Shipping and taxes calculated at checkout.
                </p>
                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
