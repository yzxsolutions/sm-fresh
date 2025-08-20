'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';

interface ProductStatsProps {
  products: Product[];
  totalProducts: number;
  searchQuery?: string;
  selectedCategory?: string;
  selectedTags?: string[];
}

const ProductStats: React.FC<ProductStatsProps> = ({
  products,
  totalProducts,
  searchQuery,
  selectedCategory,
  selectedTags = []
}) => {
  const categoryStats = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const featuredCount = products.filter(p => p.featured).length;

  const hasFilters = searchQuery || selectedCategory !== 'all' || selectedTags.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white border border-border rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Results Summary</h3>
        {hasFilters && (
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            Filtered
          </span>
        )}
      </div>

      <div className="space-y-3">
        {/* Total Results */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Total Products:</span>
          <span className="font-medium text-foreground">
            {products.length} of {totalProducts}
          </span>
        </div>

        {/* Featured Count */}
        {featuredCount > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Featured:</span>
            <span className="font-medium text-primary">
              {featuredCount}
            </span>
          </div>
        )}

        {/* Category Breakdown */}
        {Object.keys(categoryStats).length > 1 && (
          <div className="pt-3 border-t border-border">
            <h4 className="text-sm font-medium text-foreground mb-2">By Category:</h4>
            <div className="space-y-1">
              {Object.entries(categoryStats).map(([category, count]) => (
                <div key={category} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground capitalize">{category}:</span>
                  <span className="font-medium">{count}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Active Filters Summary */}
        {hasFilters && (
          <div className="pt-3 border-t border-border">
            <h4 className="text-sm font-medium text-foreground mb-2">Active Filters:</h4>
            <div className="space-y-1 text-xs">
              {searchQuery && (
                <div className="text-muted-foreground">
                  Search: "{searchQuery}"
                </div>
              )}
              {selectedCategory && selectedCategory !== 'all' && (
                <div className="text-muted-foreground">
                  Category: {selectedCategory}
                </div>
              )}
              {selectedTags.length > 0 && (
                <div className="text-muted-foreground">
                  Tags: {selectedTags.join(', ')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductStats;