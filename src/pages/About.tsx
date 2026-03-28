import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function About() {
  return (
    <div className="flex flex-col">
      <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-brand-primary">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=2000"
          alt="About Us"
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
        />
        <div className="relative z-10 flex flex-col items-center gap-4 px-4 text-center text-brand-secondary">
          <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl">Our Story</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-brand-primary/80">
          <p>
            Founded in 2026, Local Brand was born from a simple desire: to create clothing that transcends fleeting trends. We believe that true style is rooted in quality, intention, and a deep respect for the materials we use.
          </p>
          <p>
            Our journey began in a small studio, where we obsessed over the perfect fit of a classic cotton tee. Today, that same obsession drives everything we do. We source premium fabrics from ethical suppliers and work closely with skilled artisans to ensure every piece meets our exacting standards.
          </p>
          
          <blockquote className="my-16 border-l-4 border-brand-primary pl-6 font-serif text-3xl italic leading-tight text-brand-primary md:text-4xl">
            "We don't just make clothes. We craft the foundation of your personal style."
          </blockquote>

          <p>
            We are committed to transparency and sustainability. From our organic linen to our recycled packaging, we are constantly exploring ways to minimize our environmental footprint while maximizing the longevity of our garments.
          </p>
          
          <div className="pt-12 text-center">
            <Button asChild size="lg">
              <Link to="/products">Explore the Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
