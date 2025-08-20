// Mock data for testimonials - Multiple testimonials
export const mockTestimonialsData = [
  {
    id: 1,
    avatar: "/images/testimonial-avatar.png",
    quote:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The freshest produce I've ever bought!",
    customerName: "Lora Smith",
  },
  {
    id: 2,
    avatar: "/images/testimonial-avatar-2.jpg",
    quote:
      "SM Fresh Hyper has completely transformed my grocery shopping experience. The quality is exceptional and the delivery is always on time. Highly recommended!",
    customerName: "Michael Johnson",
  },
  {
    id: 3,
    avatar: "/images/testimonial-avatar-3.jpg",
    quote:
      "Amazing variety of fresh fruits and vegetables. The organic section is particularly impressive. My family loves shopping here for our weekly groceries.",
    customerName: "Sarah Williams",
  },
  {
    id: 4,
    avatar: "/images/testimonial-avatar-4.jpg",
    quote:
      "The customer service is outstanding and the produce is always fresh. I've been a loyal customer for over two years and wouldn't shop anywhere else.",
    customerName: "David Chen",
  },
  {
    id: 5,
    avatar: "/images/testimonial-avatar-5.jpg",
    quote:
      "Best prices in town for premium quality produce. The staff is knowledgeable and always helps me find exactly what I need for my recipes.",
    customerName: "Emma Rodriguez",
  },
];

// Keep the original for backward compatibility
export const mockTestimonialData = mockTestimonialsData[0];

export const mockFooterData = {
  logo: "/images/footer-logo.svg",
  tagline: "Make the right data-driven decisions that move your bussiness.",
  aboutLinks: ["About", "Categories", "Docs"],
  legalLinks: ["Terms and Conditions", "Privacy Policy", "Cookie Policy"],
  contactInfo: {
    title: "Let's chat!",
    email: "smfresh@gmail.com",
  },
  socialIcons: [
    { name: "instagram", component: "InstagramIcon" },
    { name: "facebook", component: "FacebookIcon" },
    { name: "github", component: "GitHubIcon" },
    { name: "telegram", component: "TelegramIcon" },
  ],
};

// Types for testimonial and footer data
export interface TestimonialData {
  avatar: string;
  quote: string;
  customerName: string;
}

export interface FooterData {
  logo: string;
  tagline: string;
  aboutLinks: string[];
  legalLinks: string[];
  contactInfo: {
    title: string;
    email: string;
  };
  socialIcons: Array<{
    name: string;
    component: string;
  }>;
}

// Props for the testimonial and footer components
export interface TestimonialSectionProps {
  testimonialData?: TestimonialData;
  onPrevious?: () => void;
  onNext?: () => void;
}

export interface FooterProps {
  footerData?: FooterData;
}
