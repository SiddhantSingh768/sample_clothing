import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    toast.success('Message sent successfully!', {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="font-serif text-5xl font-bold tracking-tight md:text-6xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-brand-primary/70">
            Have a question about an order, sizing, or just want to say hello?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-12 rounded-[8px] bg-brand-accent p-8 md:p-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl font-bold">Contact Information</h2>
              <p className="text-brand-primary/80">
                Our customer service team is available Monday through Friday, 9am - 5pm IST.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-primary p-3 text-brand-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:hello@localbrand.com" className="text-brand-primary/70 hover:text-brand-primary hover:underline">
                    hello@localbrand.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-primary p-3 text-brand-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919876543210" className="text-brand-primary/70 hover:text-brand-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-brand-primary p-3 text-brand-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Studio</h3>
                  <p className="text-brand-primary/70">
                    123 Fashion Street<br />
                    Creative District<br />
                    Mumbai, 400001
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-brand-primary/10">
              <h3 className="mb-4 font-medium">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-brand-primary p-3 text-brand-secondary hover:bg-brand-primary/90 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-8 font-serif text-3xl font-bold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you?"
                  required
                  rows={5}
                  className="w-full rounded-[2px] border border-brand-primary/20 bg-transparent px-3 py-2 text-sm placeholder:text-brand-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto self-start">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
