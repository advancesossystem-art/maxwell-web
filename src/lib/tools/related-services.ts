export interface ToolRelatedLink {
  href: string;
  label: string;
  description?: string;
}

export const toolRelatedLinks: Record<string, ToolRelatedLink[]> = {
  "industrial-website-rfq-estimator": [
    { href: "/services/industrial-website-design", label: "Industrial Website Design" },
    { href: "/services/rfq-website-development", label: "RFQ Website Development" },
    { href: "/services/industrial-catalog-development", label: "Industrial Catalog Development" },
    { href: "/services/website-development-for-manufacturers", label: "Manufacturer Websites Hub" },
    { href: "/cost/manufacturing-website-cost", label: "Manufacturing Website Cost" },
    { href: "/locations/india/gujarat/gidc", label: "Gujarat GIDC Hub" },
    { href: "/get-estimate", label: "Get Free Estimate" },
  ],
  "erp-roi-calculator": [
    { href: "/services/website-development-for-manufacturers", label: "Manufacturer Websites", description: "Start with an owned RFQ catalog before systems" },
    { href: "/tools/industrial-website-rfq-estimator", label: "Industrial Website RFQ Estimator" },
    { href: "/pricing", label: "Published Website Pricing" },
    { href: "/get-estimate", label: "Get Free Estimate" },
  ],
  "crm-roi-calculator": [
    { href: "/services/website-development/owned-enquiry-channel", label: "Owned Enquiry Channel" },
    { href: "/services/rfq-website-development", label: "RFQ Website Development" },
    { href: "/tools/industrial-website-rfq-estimator", label: "Website Cost Estimator" },
    { href: "/get-estimate", label: "Get Project Estimate" },
  ],
  "software-cost-calculator": [
    { href: "/cost", label: "Cost Guides", description: "City & service pricing benchmarks" },
    { href: "/tools/project-timeline-estimator", label: "Project Timeline Estimator" },
    { href: "/tools/team-size-calculator", label: "Team Size Calculator" },
    { href: "/book-consultation", label: "Book Free Consultation" },
  ],
  "digital-transformation-assessment": [
    { href: "/tools/ai-readiness-assessment", label: "AI Readiness Assessment" },
    { href: "/services/custom-software-development", label: "Custom Software Development" },
    { href: "/resources", label: "Resource Center" },
    { href: "/book-consultation", label: "Book Consultation" },
  ],
  "roi-calculator": [
    { href: "/services/website-development-for-manufacturers", label: "Manufacturer Websites" },
    { href: "/tools/industrial-website-rfq-estimator", label: "Website RFQ Estimator" },
    { href: "/pricing", label: "Published Pricing" },
  ],
  "ai-readiness-assessment": [
    { href: "/services/website-seo", label: "Website SEO" },
    { href: "/services/website-development", label: "Website Development" },
    { href: "/tools/industrial-website-rfq-estimator", label: "Website Cost Estimator" },
    { href: "/book-consultation", label: "Book Strategy Call" },
  ],
  "vendor-comparison-scorecard": [
    { href: "/blog/nextjs-vs-wordpress-industrial-website", label: "Platform Comparison Guide" },
    { href: "/get-estimate", label: "Get Maxwell Quote" },
  ],
  "erp-requirement-generator": [
    { href: "/services/website-development-for-manufacturers", label: "Manufacturer Website Hub" },
    { href: "/tools/industrial-website-rfq-estimator", label: "Website RFQ Estimator" },
    { href: "/cost/manufacturing-website-cost", label: "Manufacturing Website Cost" },
    { href: "/get-estimate", label: "Get Free Estimate" },
  ],
  "crm-requirement-generator": [
    { href: "/services/rfq-website-development", label: "RFQ Website Development" },
    { href: "/services/website-development/owned-enquiry-channel", label: "Owned Enquiry Channel" },
    { href: "/pricing", label: "Website Pricing" },
    { href: "/get-estimate", label: "Get Free Estimate" },
  ],
  "project-timeline-estimator": [
    { href: "/tools/project-roadmap", label: "Project Roadmap Generator" },
    { href: "/tools/team-size-calculator", label: "Team Size Calculator" },
    { href: "/tools/software-cost-calculator", label: "Software Cost Calculator" },
    { href: "/process", label: "Our Delivery Process" },
  ],
  "team-size-calculator": [
    { href: "/tools/project-timeline-estimator", label: "Project Timeline Estimator" },
    { href: "/tools/software-cost-calculator", label: "Software Cost Calculator" },
    { href: "/process", label: "Delivery Process" },
    { href: "/get-estimate", label: "Get Staffing Estimate" },
  ],
};

export function getToolRelatedLinks(slug: string): ToolRelatedLink[] {
  return toolRelatedLinks[slug] ?? [
    { href: "/tools", label: "All Tools" },
    { href: "/get-estimate", label: "Get Project Estimate" },
    { href: "/book-consultation", label: "Book Consultation" },
  ];
}
