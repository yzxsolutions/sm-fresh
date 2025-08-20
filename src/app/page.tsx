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
  TestimonialSection,
} from "@/components/home";
import FreshHero from "@/components/home/FreshHero";
import { CssBaseline } from "@mui/material";
import { FoodCategoryGrid } from "@/components/category";
import { mockRootProps } from "@/data/foodCategoriesMockData";
import AppWithSplash from "@/components/layout/AppWithSplash";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const testimonials = getRecentTestimonials(5);

  return (
    <AppWithSplash splashDuration={2000} enableSplash={true}>
      <div>
        {/* 3D Hero Section */}
        <CssBaseline />
        <FreshHero />

        <div style={{ minHeight: "100vh",  backgroundColor: "#ffffff" }}>
          <FoodCategoryGrid categories={mockRootProps.categories} />
        </div>

        {/* About Us Section */}
        <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        <AboutUs />

        </div>
        <div style={{ minHeight: "50vh", backgroundColor: "#ffffff" }}>
        {/* New Testimonial Section */}
        <TestimonialSection />
        </div>
      </div>
    </AppWithSplash>
  );
}