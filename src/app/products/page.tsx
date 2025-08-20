'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import CategoryGrid from '@/components/category/CategoryGrid';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { FoodCategoryGrid } from '@/components/category';
import { mockRootProps } from '@/data/foodCategoriesMockData';
import { CssBaseline } from '@mui/material';
import Image from 'next/image';
import HeroNavigation from '@/components/home/HeroNavigation';

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
       <div className='h-32 bg-white'>

      <HeroNavigation />
       </div>
        
      {/* Header Section */}
      <div className="lg:flex hidden *:bg-gray-50 border-b relative cursor-pointer border-gray-200">
        <Image
          src="/images/banner/banner1.png"
          alt="Hero"
          width={1920}
          height={1080}
          className="w-full  object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="px-4 py-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Breadcrumb
            items={[
              { label: 'Categories' }
            ]}
          />
        </motion.div>

       
         <CssBaseline />
       
        <div style={{ minHeight: "100vh",  backgroundColor: "#ffffff" , alignItems: "center", display: "flex", justifyContent: "center" }}>
          <FoodCategoryGrid categories={mockRootProps.categories} />
        </div>
        

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Categories?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Each category is carefully organized to help you find exactly what you need. 
              From farm-fresh produce to artisan bakery items, we ensure quality in every selection.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
                <p className="text-gray-600">Every item in our categories meets our strict quality standards</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh Daily</h3>
                <p className="text-gray-600">New deliveries arrive daily to ensure maximum freshness</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Sourcing</h3>
                <p className="text-gray-600">Supporting local farmers and suppliers in our community</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}