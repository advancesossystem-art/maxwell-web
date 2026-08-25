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
      "Chemical Industry Websites | From ₹35,000 | Maxwell",
  },
  description:
    "Websites for chemical manufacturers in Gujarat & India — catalogs, SDS/COA, RFQ, GIDC SEO. From ₹35,000. Vadodara team. Nandesari to Bharuch.",
  keywords: [
    "website development for chemical manufacturers",
    "chemical manufacturer website India",
    "chemical industry website design Gujarat",
    "chemical supplier website India",
    "specialty chemical manufacturer website",
    "chemical distributor website development",
    "chemical manufacturer website Vadodara",
    "Nandesari Ankleshwar chemical website",
    "MSDS product page chemical website",
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
    title: "Chemical Industry Websites | From ₹35,000 | Maxwell",
    description:
      "Google-ranked product catalog websites for chemical manufacturers in Gujarat. SDS/COA paths, buyer RFQ. Vadodara — Nandesari, Ankleshwar, Bharuch.",
    url: `${siteConfig.url}/industries/chemical-manufacturing`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Chemical Manufacturer Website — Maxwell Electrodeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chemical Industry Websites | From ₹35,000 | Maxwell",
    description:
      "Catalog websites that rank on Google for chemical manufacturers in Gujarat. RFQ, SDS paths, Vadodara delivery.",
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
/*  Structured Data — website offer only (no ERP/CRM software schema)  */
/* ------------------------------------------------------------------ */

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Chemical Manufacturer Website Development",
  description:
    "Product catalog websites for chemical manufacturers in Gujarat and India — CAS/grade pages, SDS paths, RFQ forms, and Google SEO. Delivered by Maxwell Electrodeal from Vadodara.",
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
  serviceType: "Website Development",
  offers: {
    "@type": "Offer",
    price: "35000",
    priceCurrency: "INR",
    description: "Starter manufacturer website from ₹35,000; Professional chemical catalogs from ₹75,000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chemical manufacturer website packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chemical product catalog website",
          description:
            "Indexed product pages with CAS, grades, packing, and WhatsApp/RFQ enquiry paths.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SDS / COA request paths",
          description:
            "Document request flows linked to SKUs — procurement-ready without a PDF brochure site.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GIDC chemical corridor SEO",
          description:
            "On-page SEO for Nandesari, Ankleshwar, Bharuch, and Vatva buyer searches.",
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
      "Yes. Procurement managers search Google for suppliers by product name — specialty grades, CAS, and Gujarat corridors. A chemical manufacturer without an indexed catalog loses buyers to directories. Maxwell builds product catalog websites with category SEO, SDS/COA request paths, and direct inquiry forms from ₹35,000.",
  },
  {
    question: "What should a chemical manufacturer's website include?",
    answer:
      "Individual product pages with CAS numbers, purity grades, and packing; SDS/MSDS request paths; COA request forms; export RFQ fields; and SEO for buyer search terms. Live proof: Drashti Chemicals, Nandesari GIDC — 263-page chemical supplier catalog.",
  },
  {
    question: "What is the cost of a website for a chemical manufacturer in India?",
    answer:
      "Starter business sites from ₹35,000. Professional chemical catalogs from ₹75,000 (typical for 50+ products with RFQ). Growth catalogs for large SKU counts from ₹1,50,000. Monthly AMC from ₹15,000. Maxwell serves Nandesari, Ankleshwar, Bharuch, and Gujarat chemical corridors from Vadodara.",
  },
  {
    question: "Do you serve chemical manufacturers in Ankleshwar and Bharuch?",
    answer:
      "Yes. Maxwell Electrodeal delivers manufacturer websites across the Bharuch–Ankleshwar chemical corridor plus Nandesari GIDC (Vadodara). Plant visits when the catalog needs shop-floor accuracy. Request a quote for a scoped website package.",
  },
  {
    question: "Is this page about ERP or CRM software for chemical plants?",
    answer:
      "No. This page is for chemical manufacturer websites — catalogs, SEO, and enquiry paths. Maxwell’s primary offer is website development, SEO, and AMC. We do not sell SAP or generic ERP packages here.",
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
    { name: "Savli GIDC, Vadodara", href: "/locations/india/gujarat/savli-gidc", note: "Process chemicals, industrial gases" },
    { name: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc", note: "All focus estates we publish for" },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />
      <FaqPageJsonLd
        faqs={chemicalFaqs}
        id={`${siteConfig.url}/industries/chemical-manufacturing#faq`}
        name="Chemical Manufacturer Website — Frequently Asked Questions"
      />
      <IndustryLandingPage industry={industry} />
      <ChemicalWebsiteSection />
    </>
  );
}
