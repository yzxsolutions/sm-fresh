// Export all data structures and utilities
export { 
  products, 
  getProductsByCategory, 
  getFeaturedProducts, 
  searchProducts as searchProductsData, 
  getProductById, 
  getProductCategories 
} from './products';

export { 
  offers, 
  getActiveOffers, 
  getFeaturedOffers, 
  getOfferById, 
  getOffersForProduct, 
  isOfferExpiringSoon 
} from './offers';

export { 
  testimonials, 
  getVerifiedTestimonials, 
  getTestimonialsByRating, 
  getRecentTestimonials, 
  getAverageRating, 
  getRatingDistribution, 
  getTestimonialById 
} from './testimonials';

export { 
  galleryItems, 
  getGalleryItemsByCategory, 
  getGalleryCategories, 
  getFeaturedGalleryItems, 
  searchGalleryItems, 
  getGalleryItemById, 
  getRandomGalleryItems 
} from './gallery';

export { 
  categories, 
  getCategoryById, 
  getCategoryByName, 
  getTotalProductCount 
} from './categories';