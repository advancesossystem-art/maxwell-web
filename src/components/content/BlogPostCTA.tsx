import Link from "next/link";
import type { ContentCategorySlug } from "@/lib/content/schema";

const CATEGORY_CTAS: Record<
  string,
  {
    heading: string;
    body: string;
    estimateLabel: string;
    estimateService: string;
    waText: string;
    accent: "blue" | "indigo" | "emerald" | "amber";
  }
> = {
  "ai": {
    heading: "Building AI solutions for your business?",
    body: "Maxwell Electrodeal builds custom AI systems for Indian manufacturers — computer vision, demand forecasting, document AI, and automation. Free estimate, no commitment.",
    estimateLabel: "Get Free Estimate →",
    estimateService: "AI+Solutions",
    waText: "Hi%20Maxwell%2C%20I%20read%20your%20AI%20article%20and%20want%20to%20discuss%20AI%20for%20my%20business.",
    accent: "indigo",
  },
  "erp": {
    heading: "Need ERP software for your business?",
    body: "We build custom ERP for Indian manufacturers and traders — inventory, production, GST billing, Tally integration. Based in Vadodara. Free estimate in 24 hours.",
    estimateLabel: "Get Free Estimate →",
    estimateService: "ERP",
    waText: "Hi%20Maxwell%2C%20I%20read%20your%20ERP%20article%20and%20want%20to%20discuss%20ERP%20for%20my%20business.",
    accent: "amber",
  },
  "crm": {
    heading: "Need CRM software for your sales team?",
    body: "We build custom CRM for manufacturers, distributors, and field-force teams in India. Pipeline management, dealer portals, mobile apps. Free estimate in 24 hours.",
    estimateLabel: "Get Free Estimate →",
    estimateService: "CRM",
    waText: "Hi%20Maxwell%2C%20I%20read%20your%20CRM%20article%20and%20want%20to%20discuss%20CRM%20for%20my%20business.",
    accent: "blue",
  },
  "web-development": {
    heading: "Need a website for your business or manufacturing unit?",
    body: "We build product catalog websites, B2B landing pages, and corporate sites for Indian manufacturers and businesses. Starting from ₹75,000. Free estimate in 24 hours.",
    estimateLabel: "Get Free Estimate →",
    estimateService: "Website+Development",
    waText: "Hi%20Maxwell%2C%20I%20read%20your%20web%20development%20article%20and%20want%20to%20discuss%20a%20website%20for%20my%20business.",
    accent: "emerald",
  },
  "education": {
    heading: "Need custom education software for your institution?",
    body: "We build student management systems, fee portals, LMS platforms, and DPDP-compliant data privacy software for Indian schools and universities. Free estimate in 24 hours.",
    estimateLabel: "Get Free Estimate →",
    estimateService: "Education+Software",
    waText: "Hi%20Maxwell%2C%20I%20read%20your%20education%20software%20article%20and%20want%20to%20discuss%20a%20project.",
    accent: "blue",
  },
};

const ACCENT_STYLES = {
  blue: {
    wrapper: "bg-blue-50 border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
    wa: "bg-green-500 hover:bg-green-600",
  },
  indigo: {
    wrapper: "bg-indigo-50 border-indigo-200",
    button: "bg-indigo-600 hover:bg-indigo-700",
    wa: "bg-green-500 hover:bg-green-600",
  },
  emerald: {
    wrapper: "bg-emerald-50 border-emerald-200",
    button: "bg-emerald-600 hover:bg-emerald-700",
    wa: "bg-green-500 hover:bg-green-600",
  },
  amber: {
    wrapper: "bg-amber-50 border-amber-200",
    button: "bg-amber-600 hover:bg-amber-700",
    wa: "bg-green-500 hover:bg-green-600",
  },
};

interface BlogPostCTAProps {
  category: ContentCategorySlug;
  slug: string;
  source?: string;
}

export function BlogPostCTA({ category, slug, source }: BlogPostCTAProps) {
  const cta = CATEGORY_CTAS[category] ?? CATEGORY_CTAS["erp"];
  const styles = ACCENT_STYLES[cta.accent];
  const estimateUrl = `/get-estimate?service=${cta.estimateService}&source=${source ?? `blog-${slug}`}`;
  const waUrl = `https://wa.me/919586868538?text=${cta.waText}`;

  return (
    <div className={`rounded-xl border p-6 mt-10 ${styles.wrapper}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{cta.heading}</h3>
      <p className="text-gray-600 mb-5 text-sm leading-relaxed">{cta.body}</p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={estimateUrl}
          className={`inline-block text-white font-semibold px-5 py-2.5 rounded-md transition text-sm ${styles.button}`}
        >
          {cta.estimateLabel}
        </Link>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block text-white font-semibold px-5 py-2.5 rounded-md transition text-sm ${styles.wa}`}
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
