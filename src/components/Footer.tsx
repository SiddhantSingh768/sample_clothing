import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-brand-primary/10 bg-brand-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link to="/" className="font-serif text-xl font-bold tracking-tight">
              LOCAL BRAND
            </Link>
            <p className="text-sm text-brand-primary/70">
              Elevating everyday essentials with premium materials and timeless design.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Shop</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/products?category=new-arrivals" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">New Arrivals</Link>
              <Link to="/products?category=men" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">Men</Link>
              <Link to="/products?category=women" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">Women</Link>
              <Link to="/products" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">All Products</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">About Us</Link>
              <Link to="/contact" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">Contact</Link>
              <a href="#" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">Terms of Service</a>
              <a href="#" className="text-sm text-brand-primary/70 hover:text-brand-primary hover:underline">Privacy Policy</a>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-brand-accent text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-accent text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-brand-accent text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-brand-primary/10 pt-8 text-center text-sm text-brand-primary/50">
          &copy; {new Date().getFullYear()} Local Clothing Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
