import { Product, Offer, Testimonial, GalleryItem } from '@/types';

// Product utilities
export const filterProducts = (products: Product[], category: string): Product[] => {
  if (!category || category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query.trim()) {
    return products;
  }
  
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const sortProducts = (products: Product[], sortBy: 'name' | 'price' | 'category' | 'featured'): Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'featured':
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.name.localeCompare(b.name);
      case 'price':
        // Extract numeric value from price string for comparison
        const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0');
        const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0');
        return priceA - priceB;
      default:
        return 0;
    }
  });
};

export const filterProductsByTags = (products: Product[], tags: string[]): Product[] => {
  if (!tags.length) {
    return products;
  }
  
  return products.filter(product =>
    tags.some(tag => product.tags.includes(tag))
  );
};

export const getUniqueProductTags = (products: Product[]): string[] => {
  const allTags = products.flatMap(product => product.tags);
  return [...new Set(allTags)].sort();
};

// Offer utilities
export const filterActiveOffers = (offers: Offer[]): Offer[] => {
  const now = new Date();
  return offers.filter(offer =>
    offer.validFrom <= now && offer.validUntil >= now
  );
};

export const sortOffersByExpiry = (offers: Offer[]): Offer[] => {
  return [...offers].sort((a, b) => a.validUntil.getTime() - b.validUntil.getTime());
};

export const getOffersExpiringIn = (offers: Offer[], days: number): Offer[] => {
  const now = new Date();
  const futureDate = new Date(now.getTime() + (days * 24 * 60 * 60 * 1000));
  
  return offers.filter(offer =>
    offer.validUntil >= now && offer.validUntil <= futureDate
  );
};

// Testimonial utilities
export const sortTestimonialsByDate = (testimonials: Testimonial[], ascending: boolean = false): Testimonial[] => {
  return [...testimonials].sort((a, b) => {
    const comparison = b.date.getTime() - a.date.getTime();
    return ascending ? -comparison : comparison;
  });
};

export const filterTestimonialsByRating = (testimonials: Testimonial[], minRating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating);
};

export const getTestimonialStats = (testimonials: Testimonial[]) => {
  const total = testimonials.length;
  const verified = testimonials.filter(t => t.verified).length;
  const averageRating = total > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / total 
    : 0;
  
  const ratingDistribution = testimonials.reduce((acc, t) => {
    acc[t.rating] = (acc[t.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  return {
    total,
    verified,
    averageRating: Math.round(averageRating * 10) / 10,
    ratingDistribution
  };
};

// Gallery utilities
export const filterGalleryByCategory = (items: GalleryItem[], category: string): GalleryItem[] => {
  if (!category || category === 'all') {
    return items;
  }
  return items.filter(item => item.category === category);
};

export const searchGalleryItems = (items: GalleryItem[], query: string): GalleryItem[] => {
  if (!query.trim()) {
    return items;
  }
  
  const lowercaseQuery = query.toLowerCase();
  return items.filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery) ||
    (item.description && item.description.toLowerCase().includes(lowercaseQuery))
  );
};

// General utilities
export const paginate = <T>(items: T[], page: number, itemsPerPage: number): { items: T[], totalPages: number, currentPage: number } => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return {
    items: paginatedItems,
    totalPages,
    currentPage: page
  };
};

export const debounce = <T extends (...args: any[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const formatPrice = (price: string | undefined): string => {
  if (!price) return 'Price not available';
  return price;
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const calculateTimeRemaining = (endDate: Date): { days: number, hours: number, minutes: number, seconds: number } => {
  const now = new Date();
  const timeDiff = endDate.getTime() - now.getTime();
  
  if (timeDiff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
};