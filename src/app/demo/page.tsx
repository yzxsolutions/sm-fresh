'use client';

import { products } from '@/data';
import { ProductGrid, ProductSkeleton } from '@/components';
import { Test3DScene, EnhancedHeroScene } from '@/components/3d';

export default function DemoPage() {
  const featuredProducts = products.filter(p => p.featured);
  const allProducts = products.slice(0, 8); // Show first 8 products

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
          Product Card <span className="text-primary">Demo</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive product cards with hover animations, lazy loading, and responsive design.
        </p>
      </div>

      {/* Featured Products */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">
            Featured Products
          </h2>
          <p className="text-muted-foreground">
            Hover over the cards to see the animations and interactions in action.
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          onProductClick={(product) => {
            alert(`Clicked on: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`);
          }}
          onProductHover={(product) => {
            console.log('Hovered product:', product.name);
          }}
        />
      </section>

      {/* All Products */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">
            All Products
          </h2>
          <p className="text-muted-foreground">
            Complete product grid with different categories and animations.
          </p>
        </div>

        <ProductGrid
          products={allProducts}
          onProductClick={(product) => {
            console.log('Product clicked:', product);
          }}
          onProductHover={(product) => {
            console.log('Product hovered:', product.name);
          }}
        />
      </section>

      {/* Loading State Demo */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">
            Loading State
          </h2>
          <p className="text-muted-foreground">
            Skeleton loading animation for better user experience.
          </p>
        </div>

        <ProductSkeleton count={4} />
      </section>

      {/* Empty State Demo */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">
            Empty State
          </h2>
          <p className="text-muted-foreground">
            What users see when no products match their criteria.
          </p>
        </div>

        <ProductGrid
          products={[]}
          emptyMessage="No products match your search criteria"
        />
      </section>

      {/* 3D Test Scene */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground font-heading mb-2">
            3D Graphics Test
          </h2>
          <p className="text-muted-foreground">
            Testing React Three Fiber setup with a rotating cube.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 mb-8">
          <Test3DScene />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground font-heading mb-2">
            Enhanced Interactive 3D Scene
          </h3>
          <p className="text-muted-foreground mb-4">
            Move your mouse over the scene to interact with particles and hover over 3D models.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
          <EnhancedHeroScene height="h-80" />
        </div>
      </section>

      {/* Features List */}
      <section className="bg-muted rounded-xl p-8">
        <h2 className="text-2xl font-bold text-foreground font-heading mb-6 text-center">
          ProductCard Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">🎨 Hover Animations</h3>
            <p className="text-sm text-muted-foreground">
              Smooth scale and lift effects with Framer Motion
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">🖼️ Lazy Loading</h3>
            <p className="text-sm text-muted-foreground">
              Optimized image loading with Next.js Image component
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">📱 Responsive Design</h3>
            <p className="text-sm text-muted-foreground">
              Adapts to all screen sizes with Tailwind CSS
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">🏷️ Category Badges</h3>
            <p className="text-sm text-muted-foreground">
              Color-coded category indicators
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">⭐ Featured Items</h3>
            <p className="text-sm text-muted-foreground">
              Special highlighting for featured products
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">🔍 Hover Details</h3>
            <p className="text-sm text-muted-foreground">
              Additional information revealed on hover
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}