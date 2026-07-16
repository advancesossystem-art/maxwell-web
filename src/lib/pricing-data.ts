/** Website pricing — single source of truth for /pricing and manufacturer pages */

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  scope: string;
  timeline: string;
  highlight?: boolean;
  features: string[];
  bestFor: string;
};

export const websitePricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹45,000",
    scope: "5–8 pages",
    timeline: "21 days",
    features: [
      "Home, About, Services, Contact pages",
      "WhatsApp + inquiry form",
      "Mobile responsive",
      "Basic on-page SEO",
      "Google Analytics setup",
      "1 month support",
    ],
    bestFor: "Small manufacturers starting online",
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹75,000",
    scope: "15–25 pages",
    timeline: "30 days",
    highlight: true,
    features: [
      "Full product catalog (up to 50 products)",
      "Category pages optimized for Google",
      "GST quote request forms",
      "Search Console + sitemap setup",
      "WhatsApp inquiry on every page",
      "3 months support",
    ],
    bestFor: "Mid-size manufacturers with multiple product lines",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹1,50,000",
    scope: "40+ pages",
    timeline: "6–8 weeks",
    features: [
      "Programmatic product/category pages",
      "200+ products with search + filter",
      "Multi-language support (optional)",
      "Monthly SEO reporting",
      "ERP/CRM integration ready",
      "12 months support",
    ],
    bestFor: "Large manufacturers targeting export markets",
  },
];

export const pricingTerms = {
  gst: "All prices + 18% GST",
  payment: "40% on design approval · 40% on staging · 20% on go-live",
  ownership:
    "You own the domain, hosting, source code, and design files — registered in your name from day one.",
  noGames: "No 'contact us for quote' games. These are our real prices.",
} as const;

export const pricingHero = {
  eyebrow: "Transparent pricing",
  title: "Website development pricing — fixed, published, no surprises",
  description:
    "Real prices for Gujarat manufacturers. No hidden fees, no lock-in, no quote games. GST invoice on every project.",
} as const;
