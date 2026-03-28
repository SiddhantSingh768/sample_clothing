/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartSidebar } from './components/CartSidebar';
import { Home } from './pages/Home';
import { PLP } from './pages/PLP';
import { PDP } from './pages/PDP';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-brand-secondary text-brand-primary font-sans selection:bg-brand-primary selection:text-brand-secondary">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<PLP />} />
              <Route path="/products/:slug" element={<PDP />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <CartSidebar />
          <Toaster position="bottom-right" toastOptions={{
            className: 'bg-brand-primary text-brand-secondary border-none rounded-[4px]',
          }} />
        </div>
      </Router>
    </CartProvider>
  );
}
