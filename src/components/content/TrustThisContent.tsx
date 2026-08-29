import Link from "next/link";
import type { ContentCategorySlug } from "@/lib/content/schema";
import { companyMetricDisplay } from "@/lib/company-metrics";
import { getContentAuthor } from "@/lib/content/resolve-author";

const categoryLabels: Record<ContentCategorySlug, string> = {
  erp: "ERP and manufacturing operations",
  crm: "CRM and revenue operations",
  ai: "AI and intelligent automation",
  "mobile-apps": "mobile and field applications",
  cloud: "cloud infrastructure",
  saas: "SaaS product engineering",
  "software-development": "custom software delivery",
  "web-development": "website development and SEO",
  "digital-transformation": "digital transformation programs",
};

interface TrustThisContentProps {
  category: ContentCategorySlug;
  authorId: string;
  contentType?: "guide" | "report" | "resource" | "article";
}

export function TrustThisContent({ category, authorId, contentType = "guide" }: TrustThisContentProps) {
  const topic = categoryLabels[category];
  const author = getContentAuthor(authorId, category);
  const isWebsite = category === "web-development";

  return (
    <aside
      className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6 sm:p-8"
      aria-label="Why trust this content"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Why trust this {contentType}?</p>
      <h2 className="mt-2 font-display text-xl font-bold text-[var(--v6-text)]">
        Written from delivery experience, not generic research
      </h2>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--v6-text-secondary)]">
        <li>
          <strong className="text-[var(--v6-text)]">Author:</strong>{" "}
          <Link href={`/authors/${author.slug}`} className="text-brand-600 hover:underline">
            {author.name}
          </Link>
          , {author.role} — {author.specialization}.
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Industry experience:</strong>{" "}
          {isWebsite
            ? `Maxwell has delivered ${companyMetricDisplay.projectsCompleted}+ website and catalog projects — including Drashti Chemicals (263 pages, Vadodara) and our own Search Console rebuild case study.`
            : `Maxwell has delivered ${companyMetricDisplay.projectsCompleted}+ projects across software delivery for manufacturers and B2B operators in India.`}
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Topic focus:</strong> {topic} — recommendations reflect
          real client work, not recycled listicles.
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Proof:</strong>{" "}
          <Link href="/case-studies/drashti-chemicals" className="text-brand-600 hover:underline">
            Drashti catalog case study
          </Link>
          {" · "}
          <Link href="/reviews" className="text-brand-600 hover:underline">
            Client reviews
          </Link>
          {" · "}
          <Link href="/pricing" className="text-brand-600 hover:underline">
            Published pricing
          </Link>
        </li>
      </ul>
    </aside>
  );
}
