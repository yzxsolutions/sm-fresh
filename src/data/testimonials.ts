import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'sarah-johnson',
    customerName: 'Sarah Johnson',
    rating: 5,
    comment: 'SM Fresh Hyper has the best quality produce in town! Their fruits are always fresh and their customer service is exceptional. I especially love their organic selection.',
    date: new Date('2024-06-15'),
    image: '/images/testimonials/sarah-johnson.jpg',
    verified: true
  },
  {
    id: 'michael-chen',
    customerName: 'Michael Chen',
    rating: 5,
    comment: 'As a chef, I demand the highest quality ingredients. SM Fresh Hyper consistently delivers fresh, premium produce that makes my dishes shine. Highly recommended!',
    date: new Date('2024-06-20'),
    image: '/images/testimonials/michael-chen.jpg',
    verified: true
  },
  {
    id: 'emily-rodriguez',
    customerName: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great variety and competitive prices. The staff is knowledgeable and always helpful. My family has been shopping here for over a year and we love it!',
    date: new Date('2024-06-25'),
    image: '/images/testimonials/emily-rodriguez.jpg',
    verified: true
  },
  {
    id: 'david-thompson',
    customerName: 'David Thompson',
    rating: 5,
    comment: 'The convenience of online ordering combined with the quality of their produce is unmatched. Delivery is always on time and everything arrives in perfect condition.',
    date: new Date('2024-07-01'),
    image: '/images/testimonials/david-thompson.jpg',
    verified: true
  },
  {
    id: 'lisa-patel',
    customerName: 'Lisa Patel',
    rating: 5,
    comment: 'I love supporting local businesses, and SM Fresh Hyper makes it easy with their amazing selection of locally sourced produce. The taste difference is incredible!',
    date: new Date('2024-07-05'),
    image: '/images/testimonials/lisa-patel.jpg',
    verified: true
  },
  {
    id: 'james-wilson',
    customerName: 'James Wilson',
    rating: 4,
    comment: 'Excellent quality and fair prices. The organic section is particularly impressive. My only wish is that they had longer hours on weekends.',
    date: new Date('2024-07-08'),
    verified: false
  },
  {
    id: 'maria-gonzalez',
    customerName: 'Maria Gonzalez',
    rating: 5,
    comment: 'The freshest vegetables I\'ve ever bought! Their tomatoes taste like they were just picked from the garden. Customer service is also top-notch.',
    date: new Date('2024-07-10'),
    image: '/images/testimonials/maria-gonzalez.jpg',
    verified: true
  },
  {
    id: 'robert-kim',
    customerName: 'Robert Kim',
    rating: 5,
    comment: 'Been a loyal customer for 3 years. The quality never disappoints and their seasonal specials are always exciting. Great job, SM Fresh Hyper team!',
    date: new Date('2024-07-12'),
    verified: true
  },
  {
    id: 'amanda-brown',
    customerName: 'Amanda Brown',
    rating: 4,
    comment: 'Love the variety of exotic fruits they carry. It\'s like taking a culinary journey around the world. The staff is also very knowledgeable about their products.',
    date: new Date('2024-07-14'),
    image: '/images/testimonials/amanda-brown.jpg',
    verified: true
  },
  {
    id: 'carlos-martinez',
    customerName: 'Carlos Martinez',
    rating: 5,
    comment: 'Outstanding quality and service! The produce is always fresh, and I appreciate their commitment to sustainable farming practices. Keep up the great work!',
    date: new Date('2024-07-16'),
    verified: true
  }
];

// Utility functions for testimonials data
export const getVerifiedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.verified);
};

export const getTestimonialsByRating = (minRating: number): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.rating >= minRating);
};

export const getRecentTestimonials = (limit: number = 5): Testimonial[] => {
  return testimonials
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, limit);
};

export const getAverageRating = (): number => {
  if (testimonials.length === 0) return 0;
  const totalRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
  return Math.round((totalRating / testimonials.length) * 10) / 10;
};

export const getRatingDistribution = (): Record<number, number> => {
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  testimonials.forEach(testimonial => {
    distribution[testimonial.rating]++;
  });
  return distribution;
};

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};