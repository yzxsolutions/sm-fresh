"use client";

import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  productCount: number;
  color: string;
  gradient: string;
}

interface CategoryGridProps {
  categories: Category[];
  title?: string;
  subtitle?: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  title = "Shop by Category",
  subtitle = "Discover our fresh selection organized by category",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Categories Grid - Custom Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* First Row: Large card (2 spaces) + 2 small cards (1 space each) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large card taking 2 columns */}
            <div className="md:col-span-2">
              <CategoryCard
                key={categories[0]?.id}
                category={categories[0]}
                index={0}
                size="large"
                showButton={true}
              />
            </div>
            
            {/* Small card 1 */}
            <div className="md:col-span-1">
              <CategoryCard
                key={categories[1]?.id}
                category={categories[1]}
                index={1}
                size="small"
                showButton={false}
              />
            </div>
            
            {/* Small card 2 */}
            <div className="md:col-span-1">
              <CategoryCard
                key={categories[2]?.id}
                category={categories[2]}
                index={2}
                size="small"
                showButton={false}
              />
            </div>
          </div>

          {/* Second Row: 2 small cards + Large card (2 spaces) */}
          {categories.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Small card 3 */}
              <div className="md:col-span-1">
                <CategoryCard
                  key={categories[3]?.id}
                  category={categories[3]}
                  index={3}
                  size="small"
                  showButton={false}
                />
              </div>
              
              {/* Small card 4 */}
              <div className="md:col-span-1">
                <CategoryCard
                  key={categories[4]?.id}
                  category={categories[4]}
                  index={4}
                  size="small"
                  showButton={false}
                />
              </div>
              
              {/* Large card taking 2 columns - Seafood */}
              <div className="md:col-span-2">
                <CategoryCard
                  key={categories[5]?.id}
                  category={categories[5]}
                  index={5}
                  size="large"
                  showButton={true}
                />
              </div>
            </div>
          )}

          {/* Third Row: Large card (2 spaces) + 2 small cards */}
          {categories.length > 6 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Large card taking 2 columns - Pantry Staples */}
              <div className="md:col-span-2">
                <CategoryCard
                  key={categories[6]?.id}
                  category={categories[6]}
                  index={6}
                  size="large"
                  showButton={true}
                />
              </div>
              
              {/* Small card 7 */}
              {categories[7] && (
                <div className="md:col-span-1">
                  <CategoryCard
                    key={categories[7]?.id}
                    category={categories[7]}
                    index={7}
                    size="small"
                    showButton={false}
                  />
                </div>
              )}
              
              {/* Small card 8 */}
              {categories[8] && (
                <div className="md:col-span-1">
                  <CategoryCard
                    key={categories[8]?.id}
                    category={categories[8]}
                    index={8}
                    size="small"
                    showButton={false}
                  />
                </div>
              )}
            </div>
          )}

          {/* Additional categories if any */}
          {categories.length > 9 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(9).map((category, index) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  index={index + 9}
                  size="medium"
                  showButton={false}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Explore More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Contact Us for More Info
            <svg
              className="ml-2 w-5 h-5"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;
