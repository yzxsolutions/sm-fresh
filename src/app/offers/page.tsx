import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offers",
  description: "Check out our latest deals and special offers on fresh produce.",
};

export default function OffersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
          Special <span className="text-secondary">Offers</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't miss out on our amazing deals and discounts on premium fresh produce.
        </p>
        <div className="text-muted-foreground">
          <p>Special offers coming soon...</p>
        </div>
      </div>
    </div>
  );
}