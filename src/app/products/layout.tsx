import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our wide selection of fresh fruits, vegetables, dairy, and bakery items.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}