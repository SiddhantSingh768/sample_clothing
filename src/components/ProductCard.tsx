import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { formatPrice } from '../lib/utils';
import { motion } from 'framer-motion';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="group relative flex flex-col gap-3 rounded-[8px] bg-brand-secondary p-2 shadow-card"
      >
        <Link to={`/products/${product.slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">View {product.name}</span>
        </Link>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] bg-brand-accent">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
            loading="lazy"
          />
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              loading="lazy"
            />
          )}
          {product.originalPrice && (
            <span className="absolute left-2 top-2 rounded-[2px] bg-brand-error px-2 py-1 text-xs font-medium text-brand-secondary">
              Sale
            </span>
          )}
          
          {/* Quick View Button */}
          <div className="absolute bottom-2 left-2 right-2 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              className="w-full rounded-[2px] bg-brand-secondary/90 py-2 text-sm font-medium text-brand-primary shadow-sm backdrop-blur-sm hover:bg-brand-secondary transition-colors"
            >
              Quick View
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 px-1 pb-2">
          <h3 className="text-sm font-medium text-brand-primary line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-brand-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-brand-primary/50 line-through text-xs">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
