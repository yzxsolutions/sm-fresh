'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  availableTags: string[];
  productCount: number;
  isOpen: boolean;
  onToggle: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedTags,
  onTagsChange,
  availableTags,
  productCount,
  isOpen,
  onToggle
}) => {
  const categories = [
    { value: 'all', label: 'All Products', icon: '🛒' },
    { value: 'fruits', label: 'Fruits', icon: '🍎' },
    { value: 'vegetables', label: 'Vegetables', icon: '🥕' },
    { value: 'dairy', label: 'Dairy', icon: '🥛' },
    { value: 'bakery', label: 'Bakery', icon: '🍞' },
  ];

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    onTagsChange([]);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedTags.length > 0;

  return (
    <div className="bg-white border border-border rounded-xl shadow-sm">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <h3 className="font-semibold text-foreground">Filters</h3>
          <span className="text-sm text-muted-foreground">
            {productCount} product{productCount !== 1 ? 's' : ''} found
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <motion.button
              onClick={clearAllFilters}
              className="text-sm text-primary hover:text-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear all
            </motion.button>
          )}
          
          <button
            onClick={onToggle}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle filters"
          >
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Filter Content */}
      <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="overflow-hidden"
        >
            <div className="p-4 space-y-6">
              {/* Category Filters */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Categories</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.value}
                      onClick={() => onCategoryChange(category.value)}
                      className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                        selectedCategory === category.value
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Tag Filters */}
              {availableTags.length > 0 && (
                <div>
                  <h4 className="font-medium text-foreground mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <motion.button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedTags.includes(tag)
                            ? 'bg-primary text-white'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Active Filters Summary */}
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-4 border-t border-border"
                >
                  <h4 className="font-medium text-foreground mb-2">Active Filters</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== 'all' && (
                      <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        Category: {categories.find(c => c.value === selectedCategory)?.label}
                        <button
                          onClick={() => onCategoryChange('all')}
                          className="ml-1 hover:text-primary-dark"
                        >
                          ×
                        </button>
                      </span>
                    )}
                    {selectedTags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md"
                      >
                        {tag}
                        <button
                          onClick={() => handleTagToggle(tag)}
                          className="ml-1 hover:text-secondary-dark"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductFilters;