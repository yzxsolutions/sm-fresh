import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our gallery of fresh produce and happy customers.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
          Our <span className="text-accent">Gallery</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Take a look at our beautiful fresh produce and satisfied customers.
        </p>
        <div className="text-muted-foreground">
          <p>Gallery coming soon...</p>
        </div>
      </div>
    </div>
  );
}