import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { state, dispatch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: 'Shop All', path: '/products' },
    { name: 'Men', path: '/products?category=men' },
    { name: 'Women', path: '/products?category=women' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-primary/10 bg-brand-secondary/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brand-primary hover:bg-brand-accent rounded-[2px]"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-bold tracking-tight">LOCAL BRAND</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-brand-primary/80 transition-colors hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="relative p-2 text-brand-primary hover:bg-brand-accent rounded-[2px]"
          >
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-brand-secondary">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-brand-primary/10 bg-brand-secondary"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-lg font-medium text-brand-primary border-b border-brand-primary/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
