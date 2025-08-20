'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProductSkeletonProps {
  count?: number;
}

const ProductSkeleton: React.FC<ProductSkeletonProps> = ({ count = 8 }) => {
  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: {
      x: '100%',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear' as const
      }
    }
  };

  const SkeletonCard = ({ index }: { index: number }) => (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Image Skeleton */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={shimmerVariants}
          initial="initial"
          animate="animate"
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="relative h-4 bg-muted rounded overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={shimmerVariants}
            initial="initial"
            animate="animate"
          />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="relative h-3 bg-muted rounded overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="relative h-3 bg-muted rounded w-3/4 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>

        {/* Tags Skeleton */}
        <div className="flex gap-2">
          <div className="relative h-6 bg-muted rounded w-16 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="relative h-6 bg-muted rounded w-12 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <div className="relative h-6 bg-muted rounded w-14 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} index={index} />
      ))}
    </div>
  );
};

export default ProductSkeleton;