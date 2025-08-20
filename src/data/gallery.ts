import { GalleryItem } from '@/types';

export const galleryItems: GalleryItem[] = [
  // Fresh Produce Displays
  {
    id: 'fresh-fruit-display-1',
    title: 'Colorful Fruit Display',
    image: '/images/gallery/fresh-fruit-display-1.jpg',
    category: 'displays',
    description: 'Beautiful arrangement of fresh seasonal fruits showcasing our quality and variety.'
  },
  {
    id: 'vegetable-section-1',
    title: 'Organic Vegetable Section',
    image: '/images/gallery/vegetable-section-1.jpg',
    category: 'displays',
    description: 'Our well-organized organic vegetable section with farm-fresh produce.'
  },
  {
    id: 'berry-collection',
    title: 'Premium Berry Collection',
    image: '/images/gallery/berry-collection.jpg',
    category: 'products',
    description: 'Fresh strawberries, blueberries, and raspberries at their peak ripeness.'
  },
  {
    id: 'citrus-arrangement',
    title: 'Citrus Fruit Arrangement',
    image: '/images/gallery/citrus-arrangement.jpg',
    category: 'products',
    description: 'Vibrant display of oranges, lemons, limes, and grapefruits.'
  },
  {
    id: 'leafy-greens-display',
    title: 'Fresh Leafy Greens',
    image: '/images/gallery/leafy-greens-display.jpg',
    category: 'products',
    description: 'Crisp lettuce, spinach, kale, and other leafy greens ready for healthy meals.'
  },

  // Store Interior
  {
    id: 'store-entrance',
    title: 'Store Entrance',
    image: '/images/gallery/store-entrance.jpg',
    category: 'store',
    description: 'Welcome to SM Fresh Hyper - your premium fresh produce destination.'
  },
  {
    id: 'produce-aisles',
    title: 'Spacious Produce Aisles',
    image: '/images/gallery/produce-aisles.jpg',
    category: 'store',
    description: 'Wide, well-lit aisles making shopping comfortable and enjoyable.'
  },
  {
    id: 'checkout-area',
    title: 'Modern Checkout Area',
    image: '/images/gallery/checkout-area.jpg',
    category: 'store',
    description: 'Efficient and friendly checkout experience with modern equipment.'
  },
  {
    id: 'refrigerated-section',
    title: 'Refrigerated Dairy Section',
    image: '/images/gallery/refrigerated-section.jpg',
    category: 'store',
    description: 'Temperature-controlled section for dairy products and fresh items.'
  },

  // Customer Experience
  {
    id: 'happy-family-shopping',
    title: 'Family Shopping Experience',
    image: '/images/gallery/happy-family-shopping.jpg',
    category: 'customers',
    description: 'Families enjoy shopping for fresh, healthy produce together.'
  },
  {
    id: 'customer-service',
    title: 'Helpful Customer Service',
    image: '/images/gallery/customer-service.jpg',
    category: 'customers',
    description: 'Our knowledgeable staff helping customers find the perfect produce.'
  },
  {
    id: 'chef-selecting-produce',
    title: 'Professional Chef Shopping',
    image: '/images/gallery/chef-selecting-produce.jpg',
    category: 'customers',
    description: 'Local chefs trust us for their premium ingredient needs.'
  },

  // Seasonal Highlights
  {
    id: 'summer-harvest',
    title: 'Summer Harvest Display',
    image: '/images/gallery/summer-harvest.jpg',
    category: 'seasonal',
    description: 'Celebrating summer with the season\'s best fruits and vegetables.'
  },
  {
    id: 'autumn-pumpkins',
    title: 'Autumn Pumpkin Collection',
    image: '/images/gallery/autumn-pumpkins.jpg',
    category: 'seasonal',
    description: 'Beautiful variety of pumpkins and gourds for fall celebrations.'
  },
  {
    id: 'winter-citrus',
    title: 'Winter Citrus Selection',
    image: '/images/gallery/winter-citrus.jpg',
    category: 'seasonal',
    description: 'Bright citrus fruits bringing sunshine to winter days.'
  },
  {
    id: 'spring-asparagus',
    title: 'Fresh Spring Asparagus',
    image: '/images/gallery/spring-asparagus.jpg',
    category: 'seasonal',
    description: 'Tender spring asparagus marking the start of growing season.'
  },

  // Behind the Scenes
  {
    id: 'delivery-truck',
    title: 'Fresh Delivery Arrival',
    image: '/images/gallery/delivery-truck.jpg',
    category: 'operations',
    description: 'Daily fresh deliveries ensuring the highest quality produce.'
  },
  {
    id: 'quality-inspection',
    title: 'Quality Inspection Process',
    image: '/images/gallery/quality-inspection.jpg',
    category: 'operations',
    description: 'Our team carefully inspects every item for quality and freshness.'
  },
  {
    id: 'local-farm-partnership',
    title: 'Local Farm Partnership',
    image: '/images/gallery/local-farm-partnership.jpg',
    category: 'operations',
    description: 'Working directly with local farms to bring you the freshest produce.'
  },

  // Special Events
  {
    id: 'cooking-demonstration',
    title: 'In-Store Cooking Demo',
    image: '/images/gallery/cooking-demonstration.jpg',
    category: 'events',
    description: 'Monthly cooking demonstrations featuring seasonal produce.'
  },
  {
    id: 'farmers-market-day',
    title: 'Farmers Market Day',
    image: '/images/gallery/farmers-market-day.jpg',
    category: 'events',
    description: 'Special events bringing local farmers directly to our customers.'
  },
  {
    id: 'community-harvest-festival',
    title: 'Community Harvest Festival',
    image: '/images/gallery/community-harvest-festival.jpg',
    category: 'events',
    description: 'Celebrating the harvest season with our local community.'
  }
];

// Utility functions for gallery data
export const getGalleryItemsByCategory = (category: string): GalleryItem[] => {
  return galleryItems.filter(item => item.category === category);
};

export const getGalleryCategories = (): string[] => {
  const categories = [...new Set(galleryItems.map(item => item.category))];
  return categories.sort();
};

export const getFeaturedGalleryItems = (limit: number = 6): GalleryItem[] => {
  // Return a mix of different categories for featured items
  const categories = getGalleryCategories();
  const featured: GalleryItem[] = [];
  
  categories.forEach(category => {
    const categoryItems = getGalleryItemsByCategory(category);
    if (categoryItems.length > 0) {
      featured.push(categoryItems[0]); // Take first item from each category
    }
  });
  
  return featured.slice(0, limit);
};

export const searchGalleryItems = (query: string): GalleryItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return galleryItems.filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery) ||
    (item.description && item.description.toLowerCase().includes(lowercaseQuery))
  );
};

export const getGalleryItemById = (id: string): GalleryItem | undefined => {
  return galleryItems.find(item => item.id === id);
};

export const getRandomGalleryItems = (count: number): GalleryItem[] => {
  const shuffled = [...galleryItems].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};