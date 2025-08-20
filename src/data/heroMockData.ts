// Mock data for the hero section - all content is static as per design

// Navigation items
export const navigationItems = [
  { href: '/', label: 'Home', active: true },
  { href: '/products', label: 'Categories', active: false },
  { href: '/about', label: 'About Us', active: false },
  { href: '/contact', label: 'Contact Us', active: false }
] as const;

// Social media links
export const socialMediaLinks = {
  whatsapp: 'https://wa.me/1234567890',
  facebook: 'https://facebook.com/smfreshhyper',
  instagram: 'https://instagram.com/smfreshhyper'
} as const;

// Hero content
export const heroContent = {
  mainText: 'Fresh',
  qualityTitle: 'Quality & Care',
  qualityDescription: 'Invites customers to enjoy a superior shopping experience.',
  ctaText: 'SHOP NOW',
  ctaLink: '/products'
} as const;

// Delivery person image data
export const deliveryPersonImage = {
  src: 'https://images.unsplash.com/photo-1635341083388-84ca0a1733ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxkZWxpdmVyeSUyMHBlcnNvbiUyMGZyZXNoJTIwdmVnZXRhYmxlcyUyMGZydWl0cyUyMGdyb2NlcnklMjBiYXNrZXQlMjBvcmdhbmljJTIwcHJvZHVjZXxlbnwwfDF8fHwxNzU1MzI5OTc0fDA&ixlib=rb-4.1.0&q=85',
  alt: 'Delivery person with fresh produce basket - Skönn Communication on Unsplash',
  width: 600,
  height: 800
} as const;