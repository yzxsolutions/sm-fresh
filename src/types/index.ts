// Core data types for the fresh produce website

export interface Product {
  id: string;
  name: string;
  category: 'fruits' | 'vegetables' | 'dairy' | 'bakery';
  description: string;
  image: string;
  price?: string;
  featured?: boolean;
  tags: string[];
  nutritionalInfo?: {
    calories?: number;
    protein?: string;
    carbs?: string;
    fat?: string;
    fiber?: string;
    vitamins?: string[];
  };
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountPercentage: number;
  validFrom: Date;
  validUntil: Date;
  image?: string;
  featured?: boolean;
  applicableProducts: string[];
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number; // 1-5 stars
  comment: string;
  date: Date;
  image?: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

// 3D Model types
export interface Model3DProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  animationName?: string;
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: number;
}

// Component prop types
export interface ProductCardProps {
  product: Product;
  onHover?: () => void;
  onClick?: () => void;
}

export interface OfferCardProps {
  offer: Offer;
  showCountdown?: boolean;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface GalleryItemProps {
  item: GalleryItem;
  onImageClick?: (item: GalleryItem) => void;
}