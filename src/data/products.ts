export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'men' | 'women' | 'new-arrivals';
  price: number;
  originalPrice?: number;
  sizes: string[];
  inStock: string[];
  images: string[];
  description: string;
  care: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "prod_001",
    slug: "oversized-linen-shirt-white",
    name: "Oversized Linen Shirt",
    category: "women",
    price: 2499,
    originalPrice: 3200,
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: ["S", "M", "L"],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1598554889165-8139a49f2883?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A relaxed, oversized fit crafted from breathable 100% organic linen. Perfect for layering or wearing on its own during warmer days.",
    care: "Machine wash cold. Tumble dry low or hang to dry.",
    featured: true
  },
  {
    id: "prod_002",
    slug: "classic-cotton-tee-black",
    name: "Classic Cotton Tee",
    category: "men",
    price: 1299,
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800"
    ],
    description: "The essential everyday tee. Made from heavyweight premium cotton with a structured fit that holds its shape.",
    care: "Machine wash cold with like colors. Do not bleach.",
    featured: true
  },
  {
    id: "prod_003",
    slug: "pleated-wide-leg-trousers",
    name: "Pleated Wide-Leg Trousers",
    category: "women",
    price: 3499,
    sizes: ["XS", "S", "M", "L"],
    inStock: ["XS", "S", "M"],
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800"
    ],
    description: "High-waisted trousers featuring a relaxed wide leg and sharp front pleats. Tailored for a fluid drape.",
    care: "Dry clean only.",
    featured: true
  },
  {
    id: "prod_004",
    slug: "heavyweight-hoodie-grey",
    name: "Heavyweight Boxy Hoodie",
    category: "new-arrivals",
    price: 4599,
    originalPrice: 5000,
    sizes: ["S", "M", "L", "XL"],
    inStock: ["M", "L"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A premium 450gsm fleece hoodie with a dropped shoulder and slightly cropped, boxy silhouette.",
    care: "Machine wash cold inside out. Lay flat to dry.",
    featured: true
  },
  {
    id: "prod_005",
    slug: "knit-polo-shirt",
    name: "Textured Knit Polo",
    category: "men",
    price: 2899,
    sizes: ["S", "M", "L", "XL"],
    inStock: ["S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
    ],
    description: "A retro-inspired knit polo with a subtle open-weave texture and contrasting collar details.",
    care: "Hand wash cold. Dry flat.",
    featured: false
  },
  {
    id: "prod_006",
    slug: "silk-slip-dress",
    name: "Bias Cut Silk Dress",
    category: "women",
    price: 5999,
    sizes: ["XS", "S", "M", "L"],
    inStock: ["S", "M"],
    images: [
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80&w=800"
    ],
    description: "Elegant and effortless. Cut on the bias from 100% mulberry silk to drape beautifully across the body.",
    care: "Dry clean only.",
    featured: false
  }
];
