import { products } from './products';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
  color: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: 'meat-poultry',
    name: 'Meat & Poultry',
    description: 'Fresh cuts of meat and poultry',
    icon: '🥩',
    image: '/images/category/meat-poultry.png',
    productCount: 25,
    color: '#e5e7eb',
    gradient: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)'
  },
  {
    id: 'vegetables',
    name: 'VEGETABLES',
    description: 'Fresh & Seasonal',
    icon: '🥕',
    image: '/images/category/vegetables.png',
    productCount: products.filter(p => p.category === 'vegetables').length,
    color: '#86efac',
    gradient: 'linear-gradient(135deg, #dcfce7 0%, #86efac 100%)'
  },
  {
    id: 'fruits',
    name: 'FRUITS',
    description: 'Feature a variety of seasonal',
    icon: '🍎',
    image: '/images/category/fruits.png',
    productCount: products.filter(p => p.category === 'fruits').length,
    color: '#fef08a',
    gradient: 'linear-gradient(135deg, #fefce8 0%, #fef08a 100%)'
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    description: 'High Quality Dairies',
    icon: '🥛',
    image: '/images/category/dairy-eggs.png',
    productCount: products.filter(p => p.category === 'dairy').length,
    color: '#f3e8ff',
    gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
  },
  {
    id: 'bakery',
    name: 'Bakery',
    description: 'baked bread, pastries',
    icon: '🍞',
    image: '/images/category/bakery.png',
    productCount: products.filter(p => p.category === 'bakery').length,
    color: '#a7f3d0',
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)'
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: 'Fresh fish and shellfish',
    icon: '🐟',
    image: '/images/category/seafood.png',
    productCount: 18,
    color: '#fecaca',
    gradient: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)'
  },
  {
    id: 'pantry',
    name: 'Pantry Staples',
    description: 'Fresh fish and shellfish',
    icon: '🌾',
    image: '/images/category/pantry-staples.png',
    productCount: 45,
    color: '#fed7d7',
    gradient: 'linear-gradient(135deg, #fef5e7 0%, #fed7d7 100%)'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'High Quality Dairies',
    icon: '🥤',
    image: '/images/category/beverages.png',
    productCount: 32,
    color: '#fde68a',
    gradient: 'linear-gradient(135deg, #fffbeb 0%, #fde68a 100%)'
  },
  {
    id: 'spices',
    name: 'Spices',
    description: 'baked bread, pastries',
    icon: '🌶️',
    image: '/images/category/spices.png',
    productCount: 28,
    color: '#a7f3d0',
    gradient: 'linear-gradient(135deg, #ecfdf5 0%, #a7f3d0 100%)'
  }
];

// Utility functions
export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getCategoryByName = (name: string): Category | undefined => {
  return categories.find(category => 
    category.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const getTotalProductCount = (): number => {
  return categories.reduce((total, category) => total + category.productCount, 0);
};