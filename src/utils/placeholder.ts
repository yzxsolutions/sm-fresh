// Utility functions for generating placeholder images and content

export const generatePlaceholderImage = (
  width: number = 400,
  height: number = 400,
  text?: string,
  bgColor: string = 'e5e7eb',
  textColor: string = '6b7280'
): string => {
  const displayText = text || `${width}x${height}`;
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(displayText)}`;
};

export const getProductPlaceholder = (productName: string, category: string): string => {
  const categoryColors = {
    fruits: { bg: 'fef3c7', text: 'f59e0b' }, // Yellow
    vegetables: { bg: 'dcfce7', text: '22c55e' }, // Green
    dairy: { bg: 'dbeafe', text: '3b82f6' }, // Blue
    bakery: { bg: 'fed7aa', text: 'ea580c' }, // Orange
  };

  const colors = categoryColors[category as keyof typeof categoryColors] || { bg: 'e5e7eb', text: '6b7280' };
  
  return generatePlaceholderImage(400, 400, productName, colors.bg, colors.text);
};

export const generateProductImagePath = (productId: string): string => {
  // For now, return placeholder images
  // In production, this would return actual image paths
  return `/images/products/${productId}.jpg`;
};

// Fallback images for different categories
export const getCategoryFallbackImage = (category: string): string => {
  const fallbacks = {
    fruits: generatePlaceholderImage(400, 400, 'Fresh Fruits', 'fef3c7', 'f59e0b'),
    vegetables: generatePlaceholderImage(400, 400, 'Fresh Vegetables', 'dcfce7', '22c55e'),
    dairy: generatePlaceholderImage(400, 400, 'Dairy Products', 'dbeafe', '3b82f6'),
    bakery: generatePlaceholderImage(400, 400, 'Bakery Items', 'fed7aa', 'ea580c'),
  };

  return fallbacks[category as keyof typeof fallbacks] || generatePlaceholderImage(400, 400, 'Product');
};