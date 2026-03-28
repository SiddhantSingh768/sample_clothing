import React, { useState } from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Button } from './ui/Button';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleAddToCart = () => {
    if (!selectedSize) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        selectedSize,
        quantity: 1,
      },
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-[8px] bg-brand-secondary shadow-modal md:flex-row"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-brand-secondary/80 p-2 text-brand-primary backdrop-blur-sm hover:bg-brand-accent transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[3/4] w-full bg-brand-accent md:w-1/2">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 md:w-1/2 md:p-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold tracking-tight">{product.name}</h2>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-lg font-medium text-brand-primary">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-brand-primary/50 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-brand-primary/80 line-clamp-3">{product.description}</p>

                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Size</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {product.sizes.map((size) => {
                        const isAvailable = product.inStock.includes(size);
                        return (
                          <button
                            key={size}
                            disabled={!isAvailable}
                            onClick={() => setSelectedSize(size)}
                            className={`flex h-10 items-center justify-center rounded-[2px] border text-sm font-medium transition-colors ${
                              !isAvailable
                                ? 'cursor-not-allowed border-brand-primary/10 bg-brand-primary/5 text-brand-primary/30 line-through'
                                : selectedSize === size
                                ? 'border-brand-primary bg-brand-primary text-brand-secondary'
                                : 'border-brand-primary/20 hover:border-brand-primary'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={!selectedSize}
                    onClick={handleAddToCart}
                  >
                    {selectedSize ? 'Add to Cart' : 'Select a Size'}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      window.location.href = `/products/${product.slug}`;
                    }}
                  >
                    View Full Details
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
