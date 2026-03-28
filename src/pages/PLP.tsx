import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export function PLP() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');
  const [priceRange, setPriceRange] = useState<string>('');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        const priceInRupees = p.price / 100;
        if (max) {
          return priceInRupees >= min && priceInRupees <= max;
        }
        return priceInRupees >= min;
      });
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        // Assuming original array order is newest first for this demo
        break;
    }

    return result;
  }, [categoryFilter, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-4xl font-bold tracking-tight capitalize">
            {categoryFilter ? categoryFilter.replace('-', ' ') : 'All Products'}
          </h1>
          <p className="mt-2 text-brand-primary/60">{filteredProducts.length} items</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Category:</span>
            <select
              className="rounded-[2px] border border-brand-primary/20 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-brand-primary"
              value={categoryFilter || ''}
              onChange={(e) => {
                if (e.target.value) {
                  setSearchParams({ category: e.target.value });
                } else {
                  setSearchParams({});
                }
              }}
            >
              <option value="">All</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="new-arrivals">New Arrivals</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Price:</span>
            <select
              className="rounded-[2px] border border-brand-primary/20 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-brand-primary"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-2000">Under ₹2,000</option>
              <option value="2000-4000">₹2,000 - ₹4,000</option>
              <option value="4000-">Over ₹4,000</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Sort by:</span>
            <select
              className="rounded-[2px] border border-brand-primary/20 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-brand-primary"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-serif text-2xl font-bold">No products found</h2>
          <p className="text-brand-primary/60">Try adjusting your filters to see more results.</p>
          <Button onClick={() => { setSearchParams({}); setPriceRange(''); }}>Clear Filters</Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
