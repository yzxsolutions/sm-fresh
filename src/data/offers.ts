import { Offer } from "@/types";

export const offers: Offer[] = [
  {
    id: "summer-fruit-special",
    title: "Summer Fruit Bonanza",
    description:
      "Get 25% off on all fresh fruits! Perfect time to stock up on seasonal favorites.",
    discountPercentage: 25,
    validFrom: new Date("2024-06-01"),
    validUntil: new Date("2024-08-31"),
    image: "/images/offers/summer-fruit-special.jpg",
    featured: true,
    applicableProducts: [
      "apple-red-delicious",
      "banana-cavendish",
      "orange-navel",
      "strawberry-fresh",
      "grape-red",
    ],
  },
  {
    id: "organic-veggie-week",
    title: "Organic Vegetable Week",
    description:
      "Celebrate healthy eating with 20% off all organic vegetables this week only!",
    discountPercentage: 20,
    validFrom: new Date("2024-07-15"),
    validUntil: new Date("2024-07-22"),
    image: "/images/offers/organic-veggie-week.jpg",
    featured: true,
    applicableProducts: [
      "carrot-organic",
      "broccoli-fresh",
      "spinach-baby",
      "tomato-vine",
      "bell-pepper-mix",
    ],
  },
  {
    id: "dairy-delight-deal",
    title: "Dairy Delight Deal",
    description:
      "Fresh dairy products at unbeatable prices. Save 15% on all dairy items.",
    discountPercentage: 15,
    validFrom: new Date("2024-07-01"),
    validUntil: new Date("2024-07-31"),
    image: "/images/offers/dairy-delight-deal.jpg",
    featured: false,
    applicableProducts: [
      "milk-organic-whole",
      "cheese-cheddar-aged",
      "yogurt-greek-plain",
    ],
  },
  {
    id: "fresh-baked-friday",
    title: "Fresh Baked Friday",
    description:
      "Every Friday, enjoy 30% off on all freshly baked goods. Limited time offer!",
    discountPercentage: 30,
    validFrom: new Date("2024-07-05"),
    validUntil: new Date("2024-12-31"),
    image: "/images/offers/fresh-baked-friday.jpg",
    featured: true,
    applicableProducts: [
      "bread-sourdough-artisan",
      "croissant-butter",
      "muffin-blueberry",
    ],
  },
  {
    id: "weekend-warrior-bundle",
    title: "Weekend Warrior Bundle",
    description:
      "Perfect for weekend meal prep! Buy any 5 items and get 10% off your entire order.",
    discountPercentage: 10,
    validFrom: new Date("2024-07-01"),
    validUntil: new Date("2024-09-30"),
    image: "/images/offers/weekend-warrior-bundle.jpg",
    featured: false,
    applicableProducts: [], // Applies to all products when buying 5 or more
  },
  {
    id: "new-customer-welcome",
    title: "New Customer Welcome",
    description:
      "Welcome to SM Fresh Hyper! Enjoy 20% off your first order. Use code: WELCOME20",
    discountPercentage: 20,
    validFrom: new Date("2024-01-01"),
    validUntil: new Date("2024-12-31"),
    image: "/images/offers/new-customer-welcome.jpg",
    featured: true,
    applicableProducts: [], // Applies to all products for new customers
  },
];

// Utility functions for offers data
export const getActiveOffers = (): Offer[] => {
  const now = new Date();
  return offers.filter(
    (offer) => offer.validFrom <= now && offer.validUntil >= now
  );
};

export const getFeaturedOffers = (): Offer[] => {
  return getActiveOffers().filter((offer) => offer.featured);
};

export const getOfferById = (id: string): Offer | undefined => {
  return offers.find((offer) => offer.id === id);
};

export const getOffersForProduct = (productId: string): Offer[] => {
  return getActiveOffers().filter(
    (offer) =>
      offer.applicableProducts.length === 0 || // Universal offers
      offer.applicableProducts.includes(productId)
  );
};

export const isOfferExpiringSoon = (
  offer: Offer,
  daysThreshold: number = 7
): boolean => {
  const now = new Date();
  const timeDiff = offer.validUntil.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff <= daysThreshold && daysDiff > 0;
};
