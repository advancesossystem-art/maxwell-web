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
    price: "₹35,000",
    scope: "25–30 pages + core SEO",
    timeline: "21–30 days",
    features: [
      "25–30 business / product pages",
      "WhatsApp + inquiry forms",
      "Mobile responsive Next.js build",
      "Core on-page SEO + sitemap",
      "Google Analytics / Search Console setup",
      "1 month support",
    ],
    bestFor: "SMEs and manufacturers launching an owned enquiry channel",
  },
  {
    id: "professional",
    name: "Professional",
    price: "₹75,000",
    scope: "Catalog site (often 40–80+ pages)",
    timeline: "30–45 days",
    highlight: true,
    features: [
      "Full product catalog (typically up to 50–100 SKUs)",
      "Category pages optimized for Google",
      "GST quote / RFQ request forms",
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

export const websiteAmcTiers: PricingTier[] = [
  {
    id: "amc-care",
    name: "Website AMC",
    price: "₹11,000/mo",
    scope: "SEO, weekly updates, two articles, two product changes",
    timeline: "Billed monthly · 3-month minimum",
    highlight: true,
    features: [
      "Two product / catalog changes per month",
      "Weekly website updates (content, speed, fixes)",
      "On-page SEO + ranking work every month",
      "Monthly SEO + performance report",
      "Two tailor-made articles / knowledge posts published on your site",
      "Uptime, SSL, backups, and Core Web Vitals watch",
    ],
    bestFor: "Manufacturer catalogs that must keep ranking after launch",
  },
  {
    id: "amc-growth",
    name: "Growth AMC",
    price: "₹19,000/mo",
    scope: "Heavier catalog edits + extra content",
    timeline: "Billed monthly · 3-month minimum",
    features: [
      "Everything in Website AMC",
      "Eight product / page edits per month",
      "Four knowledge posts per month",
      "Search Console + enquiry review call",
    ],
    bestFor: "Plants adding SKUs every week",
  },
  {
    id: "amc-plant",
    name: "Plant AMC",
    price: "₹29,000/mo",
    scope: "Priority SLA for export catalogs",
    timeline: "Billed monthly · next-business-day edits",
    features: [
      "Everything in Growth AMC",
      "Same-day edits in business hours",
      "GIDC / product SEO sprints",
      "Quarterly ranking + lead review",
    ],
    bestFor: "Export catalogs with weekly certificate or SKU changes",
  },
];

export const pricingTerms = {
  gst: "All prices + 18% GST",
  payment: "No advance payment · Full payment within 3 days after go-live",
  ownership:
    "You own the domain, hosting, source code, and design files — registered in your name from day one.",
  noGames: "No 'contact us for quote' games. These are our real prices.",
} as const;

export const pricingHero = {
  eyebrow: "TCO-first pricing",
  title: "Compare 3-year total cost before you choose a tier",
  description:
    "A ₹25K WordPress quote often costs ₹2.77L over three years. Our published tiers include zero plugin lock-in and full code ownership — real prices for Gujarat manufacturers with GST invoice on every project.",
} as const;
