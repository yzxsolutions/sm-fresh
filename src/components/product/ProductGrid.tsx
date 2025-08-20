'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductHover?: (product: Product) => void;
  onProductClick?: (product: Product) => void;
  loading?: boolean;
  emptyMessage?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onProductHover,
  onProductClick,
  loading = false,
  emptyMessage = "No products found"
}) => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      <div className="aspect-square bg-muted animate-pulse" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-3 bg-muted rounded w-3/4 animate-pulse" />
        <div className="flex gap-2">
          <div className="h-6 bg-muted rounded w-16 animate-pulse" />
          <div className="h-6 bg-muted rounded w-12 animate-pulse" />
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <LoadingSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No Products Found</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          {emptyMessage}. Try adjusting your filters or search terms.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          custom={index}
        >
          <ProductCard
            product={product}
            onHover={() => onProductHover?.(product)}
            onClick={() => onProductClick?.(product)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;