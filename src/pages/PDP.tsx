import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

export function PDP() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find((p) => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-serif text-3xl font-bold">Product Not Found</h1>
        <p className="text-brand-primary/60">The item you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/products')}>Back to Shop</Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
  };

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="aspect-[3/4] w-full overflow-hidden rounded-[4px] bg-brand-accent"
          >
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`h-24 w-20 shrink-0 overflow-hidden rounded-[2px] border-2 transition-colors ${
                  activeImage === idx ? 'border-brand-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-3 text-xl">
              <span className="font-medium text-brand-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-brand-primary/50 line-through text-base">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <span className="rounded-[2px] bg-brand-error px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-secondary">
                  Sale
                </span>
              )}
            </div>
          </div>

          <p className="text-brand-primary/80 leading-relaxed">{product.description}</p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Size</span>
              <button className="text-sm text-brand-primary/60 underline underline-offset-4 hover:text-brand-primary">
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => {
                const isAvailable = product.inStock.includes(size);
                return (
                  <button
                    key={size}
                    disabled={!isAvailable}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-12 items-center justify-center rounded-[2px] border text-sm font-medium transition-colors ${
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

          <Button
            size="lg"
            className="w-full text-base h-14"
            disabled={!selectedSize}
            onClick={handleAddToCart}
          >
            {selectedSize ? 'Add to Cart' : 'Select a Size'}
          </Button>

          <div className="mt-4">
            <Accordion
              items={[
                { title: 'Description', content: product.description },
                { title: 'Care Instructions', content: product.care },
                { title: 'Shipping & Returns', content: 'Free standard shipping on orders over ₹5000. Returns accepted within 30 days of delivery.' },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-8 font-serif text-2xl font-bold tracking-tight">You May Also Like</h2>
          <div className="flex gap-4 overflow-x-auto pb-8 md:grid md:grid-cols-4 md:overflow-visible md:pb-0">
            {relatedProducts.map((p) => (
              <div key={p.id} className="w-[280px] shrink-0 md:w-auto">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
