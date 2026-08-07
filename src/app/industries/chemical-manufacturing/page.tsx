import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/IndustryLandingPage";
import { getIndustryBySlug } from "@/lib/industries-data";
import { siteConfig } from "@/lib/constants";
import Link from "next/link";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";

export const metadata: Metadata = {
  title: {
    absolute:
      "Website & Software for Chemical Manufacturers India | Maxwell Electrodeal",
  },
  description:
    "Maxwell Electrodeal builds Google-ranked websites and custom CRM/ERP software for chemical manufacturers in Gujarat and India. Product catalog sites, buyer inquiry flows, batch traceability, SDS vault. Vadodara-based. Free project assessment.",
  keywords: [
    "website development for chemical manufacturers",
    "chemical manufacturer website India",
    "CRM software for chemical industry",
    "chemical manufacturing CRM",
    "chemical manufacturing ERP software",
    "chemical industry website design Gujarat",
    "chemical supplier website India",
    "specialty chemical manufacturer website",
    "chemical distributor website development",
    "ERP for chemical manufacturing",
    "batch tracking software chemical",
    "MSDS management software India",
    "CRM for chemical distributors Gujarat",
    "chemical ERP software India",
    "chemical manufacturer website Vadodara",
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries/chemical-manufacturing`,
    languages: {
      "en-IN": `${siteConfig.url}/industries/chemical-manufacturing`,
      en: `${siteConfig.url}/industries/chemical-manufacturing`,
      "x-default": `${siteConfig.url}/industries/chemical-manufacturing`,
    },
  },
  openGraph: {
    title: "Website & Software for Chemical Manufacturers India | Maxwell Electrodeal",
    description:
      "Google-ranked product catalog websites + CRM/ERP software for chemical manufacturers in Gujarat. Batch traceability, SDS vault, buyer inquiry capture. Based in Vadodara — on-site discovery across Nandesari, Ankleshwar, Bharuch chemical belt.",
    url: `${siteConfig.url}/industries/chemical-manufacturing`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Chemical Manufacturer Website & Software — Maxwell Electrodeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & Software for Chemical Manufacturers India",
    description:
      "Catalog websites that rank on Google + batch ERP, SDS vault, CRM for chemical manufacturers in Gujarat. On-site discovery, Vadodara.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Vadodara, Gujarat",
  },
};

/* ------------------------------------------------------------------ */
/*  Structured Data                                                      */
/* ------------------------------------------------------------------ */

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Maxwell Chemical Manufacturing ERP & CRM",
  description:
    "Custom cloud ERP and CRM for chemical manufacturers — batch genealogy, SDS compliance vault, hazmat inventory control, recipe version management, GHS/OSHA label generation, and Tally Prime integration.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Enterprise Resource Planning",
  operatingSystem: "All Cloud Platforms",
  offers: {
    "@type": "Offer",
    price: "250000.00",
    priceCurrency: "INR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "250000.00",
      priceCurrency: "INR",
      name: "Starting price — focused CRM or warehouse module",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "12",
    bestRating: "5",
    worstRating: "1",
    description:
      "Verified rating from delivered chemical industry ERP and CRM engagements",
  },
  featureList: [
    "Batch and lot genealogy traceability",
    "Safety Data Sheet (SDS) version-controlled vault",
    "GHS/OSHA compliant label generation",
    "Hazmat storage segregation rules enforcement",
    "Recipe and formula version control",
    "Certificate of Analysis (COA) automated generation",
    "Tally Prime bi-directional integration",
    "GST e-invoice and e-way bill automation",
    "Chemical distributor CRM with pipeline management",
    "Regulatory reporting dashboard (PCB, HSE)",
  ],
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  url: `${siteConfig.url}/industries/chemical-manufacturing`,
};

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chemical Manufacturing ERP & CRM Development",
  description:
    "Custom ERP and CRM software for chemical manufacturers in India — batch traceability, SDS compliance, hazmat inventory, recipe management, and Tally Prime integration. Delivered by Maxwell Electrodeal from Vadodara, Gujarat.",
  provider: {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
  },
  areaServed: [
    { "@type": "State", name: "Gujarat" },
    { "@type": "Country", name: "India" },
  ],
  serviceType: "Chemical Industry Software Development",
  offers: {
    "@type": "Offer",
    price: "250000",
    priceCurrency: "INR",
    description: "Starting price for focused chemical CRM or ERP module",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chemical Manufacturing Software Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chemical Batch Manufacturing ERP",
          description:
            "End-to-end ERP for process manufacturing — batch genealogy, reactor scheduling, in-process QC, Tally integration.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chemical Distributor CRM",
          description:
            "Lead-to-order CRM for chemical manufacturers and distributors — product catalogs with hazard flags, quote versioning, sample requests.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SDS & Compliance Document Hub",
          description:
            "Version-controlled SDS vault linked to SKUs and batches with GHS/OSHA label generation and automatic COA generation.",
        },
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  FAQ Schema — AEO / AI answer targeting                              */
/* ------------------------------------------------------------------ */

const chemicalFaqs = [
  {
    question: "Does a chemical manufacturer need a website to get B2B buyers?",
    answer:
      "Yes. Procurement managers at FMCG companies, pharma manufacturers, and industrial processors search Google for suppliers by product name — 'specialty defoamer supplier India', 'chlor-alkali chemical manufacturer Gujarat'. A chemical manufacturer without a properly indexed website loses these high-intent buyers to competitors and paid directories. Maxwell Electrodeal builds product catalog websites for chemical manufacturers with category pages optimized for Google, spec-sheet downloads, and direct inquiry forms — so buyers find you before they find IndiaMart.",
  },
  {
    question: "What should a chemical manufacturer's website include?",
    answer:
      "A chemical manufacturer's website needs: individual product category pages with CAS numbers, purity grades, and packaging options; downloadable Safety Data Sheets (SDS/MSDS); Certificate of Analysis (COA) request forms; hazard classification labels; export inquiry forms with UN number fields; GST quote generation; and SEO-optimized content targeting the search terms your buyers use. Maxwell Electrodeal has delivered a 263-page chemical supplier catalog for Drashti Chemicals, Nandesari GIDC, with full product SEO.",
  },
  {
    question: "What is the cost of a website for a chemical manufacturer in India?",
    answer:
      "A professional chemical manufacturer catalog website in India ranges from ₹75,000 (starter, up to 50 products, category pages, inquiry forms, GST quote, SEO setup) to ₹3,00,000+ for large catalogs with 500+ SKUs, SDS vault integration, and export-targeted content. Maxwell Electrodeal is based in Vadodara and serves chemical manufacturers across Gujarat's Nandesari, Ankleshwar, Bharuch-Ankleshwar belt, Vatva, and Vapi corridors.",
  },
  {
    question: "What CRM software does Maxwell build for chemical distributors?",
    answer:
      "Maxwell Electrodeal builds custom CRM for chemical distributors and manufacturers — lead-to-order pipeline with product hazard flags, quote versioning, sample request tracking, and SDS dispatch linking. Key features: route-based sales rep management, chemical-specific pricing tiers, automated COA and SDS email at dispatch, GST invoice integration with Tally Prime. Starting from ₹2,50,000 for a focused CRM module.",
  },
  {
    question: "Do you serve chemical manufacturers in Ankleshwar and Bharuch?",
    answer:
      "Yes. Maxwell Electrodeal conducts on-site discovery workshops at the Bharuch-Ankleshwar chemical corridor — one of India's largest chemical manufacturing clusters. We have built systems for chemical manufacturers in Nandesari GIDC (Vadodara), Ankleshwar GIDC (Bharuch), and Vatva GIDC (Ahmedabad). We offer a free one-day discovery workshop for chemical manufacturers planning a website or software project.",
  },
];

/* ------------------------------------------------------------------ */
/*  Website development for chemical manufacturers section             */
/* ------------------------------------------------------------------ */

function ChemicalWebsiteSection() {
  const corridors = [
    { name: "Nandesari GIDC, Vadodara", href: "/locations/india/gujarat/nandesari-gidc", note: "Specialty chemicals, intermediates, API" },
    { name: "Ankleshwar GIDC, Bharuch", href: "/locations/india/gujarat/ankleshwar-gidc", note: "Chlor-alkali, dyes, surfactants" },
    { name: "Bharuch–Ankleshwar belt", href: "/services/website-development/bharuch-ankleshwar-chemical", note: "Largest chemical corridor Gujarat" },
    { name: "Vatva GIDC, Ahmedabad", href: "/locations/india/gujarat/vatva-gidc", note: "Dyes, pigments, agro-chemicals" },
    { name: "Savli GIDC, Vadodara", href: "/locations/india/gujarat/savli-gidc", note: "Process chemicals, industrial gases" },
  ];

  return (
    <section className="border-t border-gray-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">
          Website Development for Chemical Manufacturers
        </p>
        <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl mb-4">
          Your Buyers Search Google for Chemicals. Is Your Website There?
        </h2>
        <p className="max-w-3xl text-gray-600 leading-relaxed mb-8">
          Procurement managers at FMCG companies, pharma plants, and industrial processors search
          Google for chemical suppliers before calling any sales rep. A chemical manufacturer
          without SEO-optimized product pages loses these direct inquiries to marketplace listings
          that cost ₹2–5L/year in listing fees — and share your leads with competitors.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {[
            { title: "Product catalog pages", desc: "Individual pages per product with CAS numbers, grades, packing — each indexed by Google for buyer search terms." },
            { title: "SDS / MSDS document hub", desc: "Downloadable Safety Data Sheets linked to SKUs — builds procurement credibility and reduces pre-sales calls." },
            { title: "Buyer inquiry & COA requests", desc: "Structured inquiry forms with quantity, grade, and delivery fields. COA request auto-routes to dispatch team." },
            { title: "Export inquiry flows", desc: "FOB price inquiry forms with UN number, HS code, and container size fields — ready for international buyer shortlisting." },
            { title: "Category SEO architecture", desc: "Category pages optimized for how procurement managers search — 'specialty defoamer India', 'chlor-alkali supplier Gujarat'." },
            { title: "GST invoice & quote system", desc: "Instant GST-compliant quotation from product page — reduces sales turnaround from days to hours." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900 text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <p className="text-sm font-semibold text-gray-700 mb-3">Gujarat chemical corridors we serve:</p>
          <div className="flex flex-wrap gap-3">
            {corridors.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 hover:border-blue-400 hover:bg-blue-100 transition"
              >
                {c.name}
                <span className="ml-1 text-blue-400">— {c.note}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-display font-bold text-blue-900 mb-1">
              Free website assessment for chemical manufacturers
            </p>
            <p className="text-sm text-blue-700 leading-relaxed">
              We review your current site (or lack of one), audit which product search terms your
              buyers use, and show you a page architecture — all before you spend a rupee.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/get-estimate"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition whitespace-nowrap"
            >
              Get free assessment →
            </Link>
            <Link
              href="/case-studies/drashti-chemicals"
              className="rounded-full border border-blue-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition whitespace-nowrap"
            >
              See chemical case study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                       */
/* ------------------------------------------------------------------ */

export default function ChemicalManufacturingPage() {
  const industry = getIndustryBySlug("chemical-manufacturing");
  if (!industry) notFound();

  return (
    <>
      {/* SoftwareApplication schema — targets "CRM software for chemical industry" queries */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      {/* Service schema with local provider and offer catalog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      {/* FAQ schema for AEO / AI search answers */}
      <FaqPageJsonLd
        faqs={chemicalFaqs}
        id={`${siteConfig.url}/industries/chemical-manufacturing#faq`}
        name="Chemical Manufacturer Website & Software — Frequently Asked Questions"
      />
      {/* Primary landing page content */}
      <IndustryLandingPage industry={industry} />
      {/* Website development for chemical manufacturers section */}
      <ChemicalWebsiteSection />
    </>
  );
}
