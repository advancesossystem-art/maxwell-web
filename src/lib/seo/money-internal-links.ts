/** Core money-page internal link graph — pass equity between commercial URLs. */

export type MoneyInternalLink = { label: string; href: string };

/** High-priority commercial URLs every money page should eventually touch. */
export const CORE_MONEY_LINKS: readonly MoneyInternalLink[] = [
  { label: "Website development company Vadodara", href: "/solutions/web-development-company-vadodara" },
  { label: "Manufacturer websites", href: "/services/website-development-for-manufacturers" },
  { label: "Industrial website design", href: "/services/industrial-website-design" },
  { label: "RFQ website development", href: "/services/rfq-website-development" },
  { label: "Gujarat GIDC hub", href: "/locations/india/gujarat/gidc" },
  { label: "Website pricing", href: "/pricing" },
  { label: "Request a quote", href: "/get-estimate" },
  { label: "Website AMC Vadodara", href: "/solutions/website-amc-vadodara" },
  { label: "Reviews & proof", href: "/reviews" },
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
