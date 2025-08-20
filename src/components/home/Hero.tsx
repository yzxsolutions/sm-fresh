'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnhancedHeroScene } from '@/components/3d';
import { detectWebGL } from '@/utils/webgl';

const Hero: React.FC = () => {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebGLSupported(detectWebGL());
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const sceneVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Fresh <span className="text-green-600">Produce</span>
              <br />
              <span className="text-emerald-600">Delivered Daily</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl"
              variants={textVariants}
            >
              Experience the finest selection of farm-fresh fruits and vegetables, 
              delivered straight to your doorstep with our premium quality guarantee.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={textVariants}
            >
              <motion.button
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-colors duration-200"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Shop Now
              </motion.button>
              
              <motion.button
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              variants={textVariants}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-green-600">500+</div>
                <div className="text-gray-600">Fresh Products</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600">24h</div>
                <div className="text-gray-600">Fast Delivery</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-teal-600">100%</div>
                <div className="text-gray-600">Organic</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            className="relative"
            initial="hidden"
            animate="visible"
            variants={sceneVariants}
          >
            {webGLSupported === null ? (
              // Loading state
              <div className="h-96 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                <div className="animate-pulse text-green-600 text-lg">Loading 3D Scene...</div>
              </div>
            ) : webGLSupported ? (
              // Enhanced 3D Scene with interactions
              <EnhancedHeroScene 
                height="h-96 md:h-[500px]" 
                enableControls={false}
                className="shadow-2xl"
              />
            ) : (
              // Fallback for no WebGL support
              <div className="h-96 md:h-[500px] flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6">🥬🍎🥕</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Fresh & Organic
                  </h3>
                  <p className="text-green-600">
                    Premium quality produce for your healthy lifestyle
                  </p>
                </div>
              </div>
            )}

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-200 rounded-full opacity-40"
              animate={{
                y: [0, 10, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-green-600 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;