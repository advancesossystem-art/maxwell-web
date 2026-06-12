import type { ContentCategorySlug } from "@/lib/content/schema";
import { getContentAuthor } from "@/lib/content/resolve-author";
import { companyMetricDisplay } from "@/lib/company-metrics";

const categoryLabels: Record<ContentCategorySlug, string> = {
  erp: "ERP and manufacturing operations",
  crm: "CRM and revenue operations",
  ai: "AI and intelligent automation",
  "mobile-apps": "mobile and field applications",
  cloud: "cloud infrastructure",
  saas: "SaaS product engineering",
  "software-development": "custom software delivery",
  "web-development": "web platforms and conversion",
  "digital-transformation": "digital transformation programs",
};

interface TrustThisContentProps {
  category: ContentCategorySlug;
  authorId: string;
  contentType?: "guide" | "report" | "resource" | "article";
}

export function TrustThisContent({ category, authorId, contentType = "guide" }: TrustThisContentProps) {
  const author = getContentAuthor(authorId, category);
  const topic = categoryLabels[category];

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
          <strong className="text-[var(--v6-text)]">Industry experience:</strong> Maxwell has delivered{" "}
          {companyMetricDisplay.projectsCompleted}+ projects across ERP, CRM, AI, automation, and software development
          for manufacturers, healthcare, logistics, and B2B operators in India and globally.
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Research methodology:</strong> Findings combine client discovery
          workshops, production implementation data, and cited industry sources — updated when delivery patterns change.
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Practical project experience:</strong> Recommendations reflect
          real rollouts: Tally/GST integration, shop-floor mobile, CRM pipelines, and phased go-lives — not slide-deck
          theory.
        </li>
        <li>
          <strong className="text-[var(--v6-text)]">Expert author:</strong>{" "}
          <span className="text-[var(--v6-text)]">{author.name}</span>, {author.role} ({author.experience}) —
          specializes in {topic} and {author.specialization.toLowerCase()}.
        </li>
      </ul>
    </aside>
  );
}
