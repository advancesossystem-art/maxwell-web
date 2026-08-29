/** Core money-page internal link graph — pass equity between commercial URLs. */

export type MoneyInternalLink = { label: string; href: string };

/** High-priority commercial URLs every money page should eventually touch. */
export const CORE_MONEY_LINKS: readonly MoneyInternalLink[] = [
  { label: "Website development company Vadodara", href: "/solutions/web-development-company-vadodara" },
  { label: "Website development company India", href: "/solutions/web-development-company-india" },
  { label: "Business website development", href: "/services/business-website-development" },
  { label: "Web design company", href: "/services/web-design" },
  { label: "Ecommerce website development", href: "/services/ecommerce-website-development" },
  { label: "Website redesign", href: "/services/website-redesign" },
  { label: "Next.js website stack", href: "/services/website-technologies" },
  { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
  { label: "Industrial website design", href: "/services/industrial-website-design" },
  { label: "Website pricing", href: "/pricing" },
  { label: "Request a quote", href: "/get-estimate" },
  { label: "Drashti Chemicals case study", href: "/case-studies/drashti-chemicals" },
] as const;

/**
 * Merge page-specific related links with the core money graph.
 * Current page path is dropped; duplicates keep the first (page-specific) label.
 */
export function mergeMoneyInternalLinks(
  pagePath: string,
  pageLinks: readonly MoneyInternalLink[] = [],
  limit = 14,
): MoneyInternalLink[] {
  const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/$/, ""));
  const self = normalize(pagePath);
  const seen = new Set<string>();
  const out: MoneyInternalLink[] = [];

  for (const link of [...pageLinks, ...CORE_MONEY_LINKS]) {
    const href = normalize(link.href);
    if (href === self || seen.has(href)) continue;
    seen.add(href);
    out.push({ label: link.label, href: link.href });
    if (out.length >= limit) break;
  }
  return out;
}
