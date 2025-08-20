'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onHover?: () => void;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onHover, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getCategoryColor = (category: Product['category']) => {
    switch (category) {
      case 'fruits':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'vegetables':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'dairy':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'bakery':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatCategoryName = (category: Product['category']) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-xl shadow-sm border border-border overflow-hidden cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.3
      }}
      onHoverStart={onHover}
      onClick={onClick}
    >
      {/* Featured Badge */}
      {product.featured && (
        <motion.div
          className="absolute top-3 left-3 z-10 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Featured
        </motion.div>
      )}

      {/* Category Badge */}
      <motion.div
        className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(product.category)}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {formatCategoryName(product.category)}
      </motion.div>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
        
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center text-muted-foreground">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />

        {/* Price Tag */}
        {product.price && (
          <motion.div
            className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-sm font-semibold text-primary">{product.price}</span>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <motion.h3
          className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {product.name}
        </motion.h3>

        <motion.p
          className="text-muted-foreground text-sm mb-3 line-clamp-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {product.description}
        </motion.p>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-1 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {product.tags.slice(0, 3).map((tag, index) => (
              <span
                key={tag}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                +{product.tags.length - 3}
              </span>
            )}
          </motion.div>
        )}

        {/* Nutritional Info Preview */}
        {product.nutritionalInfo && (
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ height: 0 }}
            whileHover={{ height: 'auto' }}
          >
            <div className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-border">
              {product.nutritionalInfo.calories && (
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span className="font-medium">{product.nutritionalInfo.calories}</span>
                </div>
              )}
              {product.nutritionalInfo.vitamins && product.nutritionalInfo.vitamins.length > 0 && (
                <div className="flex justify-between">
                  <span>Rich in:</span>
                  <span className="font-medium">{product.nutritionalInfo.vitamins.slice(0, 2).join(', ')}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Action Button */}
        <motion.button
          className="w-full mt-3 py-2 px-4 bg-primary text-white rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.button>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
        }}
      />
    </motion.div>
  );
};

export default ProductCard;