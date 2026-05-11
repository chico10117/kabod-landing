export type ServiceCategory = 'color' | 'cut' | 'treatment' | 'styling' | 'events';

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  priceFrom: string;
  featured?: boolean;
};

export type ProductCategory = 'shampoo' | 'treatment' | 'styling' | 'professional-care' | 'packs';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number;
  image: string;
  badge?: string;
  stockStatus: 'available' | 'low-stock' | 'sold-out';
};

export type CartLine = {
  product: Product;
  quantity: number;
};

export type GalleryCategory = 'balayage' | 'blondes' | 'color' | 'treatments' | 'styling';

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  tag: string;
  caption: string;
  alt: string;
  imageSrc: string;
  objectPosition?: string;
  tone: 'light' | 'dark' | 'sage' | 'clay';
  beforeAfter?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  service: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  objectPosition?: string;
  tone: 'light' | 'dark' | 'sage' | 'clay';
};

export type Location = {
  id: string;
  name: string;
  address: string;
  hours: string[];
};

export type Treatment = {
  id: string;
  title: string;
  description: string;
  details: string[];
};
