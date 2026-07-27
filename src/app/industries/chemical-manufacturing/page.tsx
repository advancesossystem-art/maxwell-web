import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/industries/IndustryLandingPage";
import { getIndustryBySlug } from "@/lib/industries-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute:
      "ERP & CRM Software for Chemical Manufacturing Industry India | Maxwell Electrodeal",
  },
  description:
    "Streamline chemical batch production, manage recipe version controls, automate safety compliance, and secure GHS/HAZMAT documentation with Maxwell Electrodeal's custom ERP & CRM solutions for chemical manufacturers. Batch traceability, SDS vault, Tally Prime integration. From ₹2,50,000.",
  keywords: [
    "CRM software for chemical industry",
    "chemical manufacturing CRM",
    "chemical manufacturing ERP software",
    "ERP for chemical manufacturing",
    "best ERP for chemical manufacturing",
    "chemical industry ERP India",
    "batch tracking software chemical",
    "MSDS management software India",
    "CRM for chemical distributors Gujarat",
    "hazmat inventory software",
    "chemical ERP software India",
    "chemical batch traceability software",
    "SDS compliance software India",
    "ERP for chemical manufacturers Gujarat",
    "custom ERP chemical industry Vadodara",
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
    title: "ERP & CRM Software for Chemical Manufacturing Industry India",
    description:
      "Consolidate your chemical operations. Manage recipe version controls, automate safety compliance, and simplify GHS/HAZMAT documentation with a custom cloud platform integrated with Tally Prime. Proven 99.5% batch trace accuracy.",
    url: `${siteConfig.url}/industries/chemical-manufacturing`,
    type: "website",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Chemical Manufacturing ERP & CRM — Maxwell Electrodeal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP & CRM Software for Chemical Manufacturing Industry India",
    description:
      "Batch genealogy, SDS vault, hazmat compliance, and Tally Prime integration — custom chemical manufacturing ERP from ₹2,50,000.",
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
      <IndustryLandingPage industry={industry} />
    </>
  );
}
