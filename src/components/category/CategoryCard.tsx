'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    icon: string;
    image: string;
    productCount: number;
    color: string;
    gradient: string;
  };
  index?: number;
  size?: 'small' | 'medium' | 'large';
  showButton?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  index = 0, 
  size = 'medium',
  showButton = false 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'h-64';
      case 'large':
        return 'h-96 md:h-[500px]';
      default:
        return 'h-80';
    }
  };

  const getTextSizes = () => {
    switch (size) {
      case 'small':
        return {
          title: 'text-2xl md:text-3xl',
          description: 'text-sm',
        };
      case 'large':
        return {
          title: 'text-4xl md:text-6xl',
          description: 'text-base md:text-lg',
        };
      default:
        return {
          title: 'text-3xl md:text-4xl',
          description: 'text-sm md:text-base',
        };
    }
  };

  const textSizes = getTextSizes();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <Link href={`/products?category=${category.id}`}>
        <div
          className={`relative ${getSizeClasses()} rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex`}
          style={{ backgroundColor: category.color }}
        >
          {/* Left Content Section */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-between z-10">
            {/* Text Content - Left Aligned */}
            <div className="text-left">
              <p className={`${textSizes.description} font-medium text-gray-600 mb-3 uppercase tracking-wide`}>
                {category.description}
              </p>
              <h3 className={`${textSizes.title} font-extrabold leading-tight text-gray-800 mb-4`}>
                {category.name}
              </h3>
            </div>

            {/* Bottom Content */}
            <div className="flex items-end justify-start">
              {showButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 transition-all duration-200 flex items-center space-x-2 shadow-md"
                >
                  <span>SHOP NOW</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              )}
            </div>
          </div>

          {/* Right Image Section - Top positioned, bigger size */}
          <div className="flex-1 relative overflow-hidden flex items-start justify-end p-4">
            <div className="w-full h-4/5 flex justify-end">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain object-top-right transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;