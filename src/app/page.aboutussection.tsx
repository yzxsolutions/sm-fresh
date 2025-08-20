"use client";

import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { getRecentTestimonials } from "@/data/testimonials";
import CategoryGrid from "@/components/category/CategoryGrid";
import {
  FeaturedProducts,
  WhyChooseUs,
  TestimonialsSlider,
  Hero,
  AboutUs,
} from "@/components/home";
import FreshHero from "@/components/home/FreshHero";
import { BottomNavigation, CssBaseline } from "@mui/material";
import { FoodCategoryGrid } from "@/components/category";
import { mockRootProps } from "@/data/foodCategoriesMockData";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const testimonials = getRecentTestimonials(5);

  return (
    <div>
      {/* 3D Hero Section */}
      <CssBaseline />
      <FreshHero />

      <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        <FoodCategoryGrid categories={mockRootProps.categories} />
      </div>
      <BottomNavigation />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Customer Testimonials Section */}
      <TestimonialsSlider testimonials={testimonials} />
    </div>
  );
}