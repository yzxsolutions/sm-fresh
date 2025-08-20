import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SM Fresh Hyper - Premium Fresh Produce Market",
    template: "%s | SM Fresh Hyper"
  },
  description: "Discover the freshest fruits, vegetables, and quality produce at SM Fresh Hyper. Your trusted source for farm-fresh goodness with modern shopping experience.",
  keywords: ["fresh produce", "fruits", "vegetables", "organic", "farm fresh", "grocery", "market"],
  authors: [{ name: "SM Fresh Hyper" }],
  creator: "SM Fresh Hyper",
  publisher: "SM Fresh Hyper",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smfreshhyper.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smfreshhyper.com",
    siteName: "SM Fresh Hyper",
    title: "SM Fresh Hyper - Premium Fresh Produce Market",
    description: "Discover the freshest fruits, vegetables, and quality produce at SM Fresh Hyper. Your trusted source for farm-fresh goodness.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SM Fresh Hyper - Fresh Produce Market",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SM Fresh Hyper - Premium Fresh Produce Market",
    description: "Discover the freshest fruits, vegetables, and quality produce at SM Fresh Hyper.",
    images: ["/images/twitter-image.jpg"],
    creator: "@smfreshhyper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <MainLayout>
          {children}
        </MainLayout>
       
      </body>
    </html>
  );
}
