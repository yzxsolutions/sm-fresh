import { Product } from '@/types';
import { getProductPlaceholder } from '@/utils/placeholder';

export const products: Product[] = [
  // Fruits
  {
    id: 'apple-red-delicious',
    name: 'Red Delicious Apples',
    category: 'fruits',
    description: 'Crisp and sweet red delicious apples, perfect for snacking or baking.',
    image: getProductPlaceholder('Red Delicious Apples', 'fruits'),
    price: '$3.99/lb',
    featured: true,
    tags: ['organic', 'local', 'sweet', 'crisp'],
    nutritionalInfo: {
      calories: 95,
      protein: '0.5g',
      carbs: '25g',
      fat: '0.3g',
      fiber: '4g',
      vitamins: ['Vitamin C', 'Potassium', 'Fiber']
    }
  },
  {
    id: 'banana-cavendish',
    name: 'Fresh Bananas',
    category: 'fruits',
    description: 'Ripe and creamy Cavendish bananas, rich in potassium and natural energy.',
    image: getProductPlaceholder('Fresh Bananas', 'fruits'),
    price: '$2.49/lb',
    featured: true,
    tags: ['tropical', 'energy', 'potassium'],
    nutritionalInfo: {
      calories: 105,
      protein: '1.3g',
      carbs: '27g',
      fat: '0.4g',
      fiber: '3g',
      vitamins: ['Vitamin B6', 'Vitamin C', 'Potassium']
    }
  },
  {
    id: 'orange-navel',
    name: 'Navel Oranges',
    category: 'fruits',
    description: 'Juicy and sweet navel oranges, packed with vitamin C and natural flavor.',
    image: getProductPlaceholder('Navel Oranges', 'fruits'),
    price: '$4.99/lb',
    featured: false,
    tags: ['citrus', 'vitamin-c', 'juicy'],
    nutritionalInfo: {
      calories: 62,
      protein: '1.2g',
      carbs: '15g',
      fat: '0.2g',
      fiber: '3g',
      vitamins: ['Vitamin C', 'Folate', 'Calcium']
    }
  },
  {
    id: 'strawberry-fresh',
    name: 'Fresh Strawberries',
    category: 'fruits',
    description: 'Sweet and juicy strawberries, perfect for desserts or healthy snacking.',
    image: getProductPlaceholder('Fresh Strawberries', 'fruits'),
    price: '$5.99/lb',
    featured: true,
    tags: ['berries', 'antioxidants', 'sweet'],
    nutritionalInfo: {
      calories: 49,
      protein: '1g',
      carbs: '12g',
      fat: '0.5g',
      fiber: '3g',
      vitamins: ['Vitamin C', 'Manganese', 'Antioxidants']
    }
  },
  {
    id: 'grape-red',
    name: 'Red Grapes',
    category: 'fruits',
    description: 'Sweet and seedless red grapes, perfect for snacking or wine making.',
    image: getProductPlaceholder('Red Grapes', 'fruits'),
    price: '$3.49/lb',
    featured: false,
    tags: ['seedless', 'sweet', 'antioxidants'],
    nutritionalInfo: {
      calories: 62,
      protein: '0.6g',
      carbs: '16g',
      fat: '0.2g',
      fiber: '1g',
      vitamins: ['Vitamin C', 'Vitamin K', 'Resveratrol']
    }
  },

  // Vegetables
  {
    id: 'carrot-organic',
    name: 'Organic Carrots',
    category: 'vegetables',
    description: 'Fresh organic carrots, sweet and crunchy, perfect for cooking or snacking.',
    image: getProductPlaceholder('Organic Carrots', 'vegetables'),
    price: '$2.99/lb',
    featured: true,
    tags: ['organic', 'beta-carotene', 'crunchy'],
    nutritionalInfo: {
      calories: 41,
      protein: '0.9g',
      carbs: '10g',
      fat: '0.2g',
      fiber: '3g',
      vitamins: ['Beta-carotene', 'Vitamin A', 'Vitamin K']
    }
  },
  {
    id: 'broccoli-fresh',
    name: 'Fresh Broccoli',
    category: 'vegetables',
    description: 'Nutritious fresh broccoli crowns, rich in vitamins and minerals.',
    image: getProductPlaceholder('Fresh Broccoli', 'vegetables'),
    price: '$3.99/lb',
    featured: true,
    tags: ['superfood', 'vitamin-c', 'fiber'],
    nutritionalInfo: {
      calories: 34,
      protein: '2.8g',
      carbs: '7g',
      fat: '0.4g',
      fiber: '3g',
      vitamins: ['Vitamin C', 'Vitamin K', 'Folate']
    }
  },
  {
    id: 'spinach-baby',
    name: 'Baby Spinach',
    category: 'vegetables',
    description: 'Tender baby spinach leaves, perfect for salads and cooking.',
    image: getProductPlaceholder('Baby Spinach', 'vegetables'),
    price: '$4.49/lb',
    featured: false,
    tags: ['leafy-greens', 'iron', 'tender'],
    nutritionalInfo: {
      calories: 23,
      protein: '2.9g',
      carbs: '4g',
      fat: '0.4g',
      fiber: '2g',
      vitamins: ['Iron', 'Vitamin K', 'Folate']
    }
  },
  {
    id: 'tomato-vine',
    name: 'Vine Tomatoes',
    category: 'vegetables',
    description: 'Ripe vine tomatoes with rich flavor, perfect for salads and cooking.',
    image: getProductPlaceholder('Vine Tomatoes', 'vegetables'),
    price: '$4.99/lb',
    featured: true,
    tags: ['vine-ripened', 'lycopene', 'flavorful'],
    nutritionalInfo: {
      calories: 18,
      protein: '0.9g',
      carbs: '4g',
      fat: '0.2g',
      fiber: '1g',
      vitamins: ['Lycopene', 'Vitamin C', 'Potassium']
    }
  },
  {
    id: 'bell-pepper-mix',
    name: 'Mixed Bell Peppers',
    category: 'vegetables',
    description: 'Colorful mix of red, yellow, and green bell peppers, sweet and crunchy.',
    image: getProductPlaceholder('Mixed Bell Peppers', 'vegetables'),
    price: '$5.99/lb',
    featured: false,
    tags: ['colorful', 'vitamin-c', 'sweet'],
    nutritionalInfo: {
      calories: 31,
      protein: '1g',
      carbs: '7g',
      fat: '0.3g',
      fiber: '3g',
      vitamins: ['Vitamin C', 'Vitamin A', 'Antioxidants']
    }
  },

  // Dairy
  {
    id: 'milk-organic-whole',
    name: 'Organic Whole Milk',
    category: 'dairy',
    description: 'Fresh organic whole milk from grass-fed cows, rich and creamy.',
    image: getProductPlaceholder('Organic Whole Milk', 'dairy'),
    price: '$5.99/gallon',
    featured: true,
    tags: ['organic', 'grass-fed', 'calcium'],
    nutritionalInfo: {
      calories: 150,
      protein: '8g',
      carbs: '12g',
      fat: '8g',
      fiber: '0g',
      vitamins: ['Calcium', 'Vitamin D', 'Protein']
    }
  },
  {
    id: 'cheese-cheddar-aged',
    name: 'Aged Cheddar Cheese',
    category: 'dairy',
    description: 'Sharp aged cheddar cheese, perfect for sandwiches and cooking.',
    image: getProductPlaceholder('Aged Cheddar Cheese', 'dairy'),
    price: '$8.99/lb',
    featured: false,
    tags: ['aged', 'sharp', 'artisan'],
    nutritionalInfo: {
      calories: 113,
      protein: '7g',
      carbs: '1g',
      fat: '9g',
      fiber: '0g',
      vitamins: ['Calcium', 'Protein', 'Vitamin A']
    }
  },
  {
    id: 'yogurt-greek-plain',
    name: 'Greek Plain Yogurt',
    category: 'dairy',
    description: 'Thick and creamy Greek yogurt, high in protein and probiotics.',
    image: getProductPlaceholder('Greek Plain Yogurt', 'dairy'),
    price: '$6.99/32oz',
    featured: true,
    tags: ['greek', 'probiotics', 'protein'],
    nutritionalInfo: {
      calories: 100,
      protein: '17g',
      carbs: '6g',
      fat: '0g',
      fiber: '0g',
      vitamins: ['Protein', 'Probiotics', 'Calcium']
    }
  },

  // Bakery
  {
    id: 'bread-sourdough-artisan',
    name: 'Artisan Sourdough Bread',
    category: 'bakery',
    description: 'Handcrafted sourdough bread with a crispy crust and tangy flavor.',
    image: getProductPlaceholder('Artisan Sourdough Bread', 'bakery'),
    price: '$4.99/loaf',
    featured: true,
    tags: ['artisan', 'sourdough', 'handcrafted'],
    nutritionalInfo: {
      calories: 120,
      protein: '4g',
      carbs: '22g',
      fat: '2g',
      fiber: '2g',
      vitamins: ['B Vitamins', 'Iron', 'Fiber']
    }
  },
  {
    id: 'croissant-butter',
    name: 'Butter Croissants',
    category: 'bakery',
    description: 'Flaky and buttery croissants, perfect for breakfast or snacking.',
    image: getProductPlaceholder('Butter Croissants', 'bakery'),
    price: '$2.99/each',
    featured: false,
    tags: ['buttery', 'flaky', 'french'],
    nutritionalInfo: {
      calories: 231,
      protein: '5g',
      carbs: '26g',
      fat: '12g',
      fiber: '1g',
      vitamins: ['B Vitamins', 'Iron']
    }
  },
  {
    id: 'muffin-blueberry',
    name: 'Blueberry Muffins',
    category: 'bakery',
    description: 'Fresh baked blueberry muffins with real blueberries and a tender crumb.',
    image: getProductPlaceholder('Blueberry Muffins', 'bakery'),
    price: '$3.49/each',
    featured: true,
    tags: ['blueberries', 'fresh-baked', 'sweet'],
    nutritionalInfo: {
      calories: 265,
      protein: '4g',
      carbs: '47g',
      fat: '7g',
      fiber: '2g',
      vitamins: ['Antioxidants', 'Vitamin C', 'Fiber']
    }
  }
];

// Utility functions for product data
export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductCategories = (): Product['category'][] => {
  return ['fruits', 'vegetables', 'dairy', 'bakery'];
};