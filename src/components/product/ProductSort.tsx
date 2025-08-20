'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type SortOption = 'name' | 'price' | 'category' | 'featured';

interface ProductSortProps {
  sortBy: SortOption;
  onSortChange: (sortBy: SortOption) => void;
  productCount: number;
}

const ProductSort: React.FC<ProductSortProps> = ({
  sortBy,
  onSortChange,
  productCount
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'featured' as SortOption, label: 'Featured First', icon: '⭐' },
    { value: 'name' as SortOption, label: 'Name (A-Z)', icon: '🔤' },
    { value: 'price' as SortOption, label: 'Price (Low to High)', icon: '💰' },
    { value: 'category' as SortOption, label: 'Category', icon: '📂' },
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy);

  const handleSortChange = (newSort: SortOption) => {
    onSortChange(newSort);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {productCount} product{productCount !== 1 ? 's' : ''}
        </span>
        
        <div className="relative">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-border rounded-lg hover:border-border/80 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium text-foreground">
              Sort by: {currentSort?.label}
            </span>
            <motion.svg
              className="w-4 h-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  {sortOptions.map((option, index) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className={`w-full px-4 py-2 text-left flex items-center space-x-3 transition-colors ${
                        sortBy === option.value
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      }`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: sortBy === option.value ? 'rgba(34, 197, 94, 0.1)' : 'var(--color-muted)' }}
                    >
                      <span className="text-lg">{option.icon}</span>
                      <span className="font-medium">{option.label}</span>
                      {sortBy === option.value && (
                        <motion.svg
                          className="w-4 h-4 ml-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductSort;