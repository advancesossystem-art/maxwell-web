import { siteConfig } from "@/lib/constants";
import { seoIds } from "@/lib/seo/config";
import { homepageFaqs } from "@/lib/homepage";
import { companyFaqs } from "@/lib/company-data";
import { getAuthorById } from "@/lib/content/authors";
import { formatAnonymousClient } from "@/lib/client-attribution";

export function ServicePageJsonLd({ service }: { service: import("@/lib/services-data").ServicePageData }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: { "@id": seoIds.organization },
    areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      description: `Starting from ${service.startingPrice}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/services/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export function IndustryPageJsonLd({ industry }: { industry: import("@/lib/industries-data").IndustryPageData }) {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${industry.title} Software Solutions — ${siteConfig.name}`,
    description: industry.metaDescription,
    url: `${siteConfig.url}/industries/${industry.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: `${industry.title} Software Development`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteConfig.url}/industries` },
      { "@type": "ListItem", position: 3, name: industry.title, item: `${siteConfig.url}/industries/${industry.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function ProjectPageJsonLd({ project }: { project: import("@/lib/projects-data").ProjectData }) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription,
    url: `${siteConfig.url}/work/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    about: {
      "@type": "Thing",
      name: `${project.industry} ${project.projectType}`,
    },
    keywords: [...project.technologies, project.industry, project.projectType].join(", "),
    ...(project.publishedAt ?? project.date
      ? { datePublished: project.publishedAt ?? project.date }
      : {}),
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteConfig.url}/work` },
      { "@type": "ListItem", position: 3, name: project.title, item: `${siteConfig.url}/work/${project.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function CaseStudyPageJsonLd({ study }: { study: import("@/lib/case-studies-data").CaseStudyData }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    datePublished: study.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    about: {
      "@type": "Organization",
      name: formatAnonymousClient(study.trust.industry),
    },
    keywords: [...study.technologyStack, study.trust.industry, study.filters.service].join(", "),
    inLanguage: "en-IN",
  };

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    name: study.title,
    description: study.executiveSummary,
    url: `${siteConfig.url}/case-studies/${study.slug}`,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    about: formatAnonymousClient(study.trust.industry),
    industry: study.trust.industry,
    result: study.roiMetrics.map((m) => `${m.value} ${m.label}`).join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: `${siteConfig.url}/case-studies` },
      { "@type": "ListItem", position: 3, name: study.title, item: `${siteConfig.url}/case-studies/${study.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function CompanyPageJsonLd({
  pageType,
  path,
  title,
}: {
  pageType: string;
  path: string;
  title: string;
}) {
  const isAboutPage = pageType === "about";
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": isAboutPage ? "AboutPage" : "WebPage",
    name: title,
    description: siteConfig.description,
    url: `${siteConfig.url}${path}`,
    ...(isAboutPage
      ? {
          mainEntity: {
            "@type": "Organization",
            name: siteConfig.legalName,
            url: siteConfig.url,
            foundingDate: "2018",
            numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
          },
        }
      : {}),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: "2018",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: title, item: `${siteConfig.url}${path}` },
    ],
  };

  const faqSchema =
    pageType === "about"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: companyFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
    </>
  );
}

export function CityPageJsonLd({ city }: { city: import("@/lib/locations-data").CityPageData }) {
  const url = `${siteConfig.url}/locations/${city.countrySlug}/${city.slug}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${siteConfig.name} — ${city.name}`,
    description: city.metaDescription,
    url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: city.name },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.primaryKeyword,
    description: city.subheadline,
    provider: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
    areaServed: city.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
      { "@type": "ListItem", position: 3, name: "India", item: `${siteConfig.url}/locations/india` },
      { "@type": "ListItem", position: 4, name: city.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function CountryPageJsonLd({ country }: { country: import("@/lib/locations-data").CountryPageData }) {
  const url = `${siteConfig.url}/locations/${country.slug}`;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    areaServed: country.name,
  };

  const indiaLocalBusinessRef =
    country.slug === "india"
      ? {
          "@context": "https://schema.org",
          "@id": seoIds.localBusiness,
        }
      : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${siteConfig.url}/locations` },
      { "@type": "ListItem", position: 3, name: country.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      {indiaLocalBusinessRef ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indiaLocalBusinessRef) }} />
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function SolutionPageJsonLd({ solution }: { solution: import("@/lib/solutions-data").SolutionPageData }) {
  const url = `${siteConfig.url}/solutions/${solution.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.metaDescription,
    url,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: ["IN", "US", "GB", "AE", "CA", "AU", "DE", "SG"],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-seo-speakable]", "h1"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteConfig.url}/solutions` },
      { "@type": "ListItem", position: 3, name: solution.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function ArticlePageJsonLd({
  article,
  authorName,
}: {
  article: import("@/lib/content/schema").Article;
  authorName: string;
}) {
  const url = `${siteConfig.url}/blog/${article.slug}`;
  const author = {
    "@type": "Person",
    name: authorName,
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const faqSchema = article.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}

export function ContentPageJsonLd({
  type,
  title,
  description,
  path,
  publishedAt,
  authorId,
  faqs,
}: {
  type: "guide" | "resource" | "report";
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  authorId: string;
  faqs?: { question: string; answer: string }[];
}) {
  const url = `${siteConfig.url}${path}`;
  const hubNames = { guide: "Guides", resource: "Resources", report: "Reports" };
  const hubPaths = { guide: "/guides", resource: "/resources", report: "/reports" };
  const author = getAuthorById(authorId);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": type === "report" ? "Report" : "Article",
    headline: title,
    description,
    url,
    datePublished: publishedAt,
    author: { "@type": "Person", name: author?.name ?? "Maxwell Team" },
    publisher: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: hubNames[type], item: `${siteConfig.url}${hubPaths[type]}` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };

  const faqSchema = faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}

export function AuthorPageJsonLd({ author }: { author: import("@/lib/content/authors").Author }) {
  const url = `${siteConfig.url}/authors/${author.slug}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url,
    worksFor: { "@type": "Organization", name: siteConfig.legalName },
    knowsAbout: author.expertise,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: author.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export function HomeFAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
