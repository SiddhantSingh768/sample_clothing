import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Subscribed successfully!', {
      description: 'Check your email for a 10% off code.',
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative flex h-[80vh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-brand-primary">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Fashion"
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center gap-6 px-4 text-center text-brand-secondary"
        >
          <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Redefine Basics
          </h1>
          <p className="max-w-[600px] text-lg font-medium text-brand-secondary/90 sm:text-xl">
            Elevated essentials for the modern wardrobe. Crafted with intention.
          </p>
          <Button asChild size="lg" className="mt-4 bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90">
            <Link to="/products">Shop the Collection</Link>
          </Button>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Featured Pieces</h2>
          <Link to="/products" className="text-sm font-medium underline underline-offset-4 hover:text-brand-primary/70">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Highlights */}
      <section className="bg-brand-accent py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: 'Womenswear', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', link: '/products?category=women' },
              { title: 'Menswear', image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=800', link: '/products?category=men' },
              { title: 'New Arrivals', image: 'https://images.unsplash.com/photo-1485230895905-ef40ba366905?auto=format&fit=crop&q=80&w=800', link: '/products?category=new-arrivals' },
            ].map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group relative aspect-[4/5] overflow-hidden rounded-[4px] bg-brand-primary"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl font-bold text-brand-secondary tracking-wide">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-24 text-center md:px-6">
        <h2 className="mb-12 font-serif text-3xl font-bold tracking-tight md:text-4xl">What They Say</h2>
        <div className="mx-auto max-w-3xl">
          <blockquote className="space-y-6">
            <p className="font-serif text-2xl italic leading-relaxed text-brand-primary/80 md:text-3xl">
              "The quality of the linen shirt is unmatched. It's become a staple in my weekly rotation. Highly recommend for anyone looking for timeless pieces."
            </p>
            <footer className="text-sm font-medium uppercase tracking-widest text-brand-primary/60">
              — Sarah J.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-primary py-24 text-brand-secondary">
        <div className="container mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center md:px-6">
          <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Join the Club</h2>
          <p className="text-brand-secondary/80">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="border-brand-secondary/30 text-brand-secondary placeholder:text-brand-secondary/50 focus-visible:ring-brand-secondary"
            />
            <Button type="submit" className="bg-brand-secondary text-brand-primary hover:bg-brand-secondary/90 shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Instagram Feed (Static) */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-10 font-serif text-2xl font-bold tracking-tight">@localbrand</h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden bg-brand-accent">
                <img
                  src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400&sig=${i}`}
                  alt={`Instagram post ${i}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
