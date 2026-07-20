/**
 * Phase 0 — International market intent verification (GSC Performance export 2026-07-07).
 *
 * Source: maxwellelectrodeal.com-Performance-on-Search-2026-07-07.xlsx
 * Note: GSC export had country totals + sitewide queries (not country×query). Sitewide
 * query mix is used as the best proxy for what drives foreign impressions.
 */

export type MarketInvestment = "invest" | "maintain" | "hold";

export type MarketIntentVerdict = {
  country: string;
  iso: string;
  clicks: number;
  impressions: number;
  avgPosition: number | null;
  investment: MarketInvestment;
  rationale: string;
};

/** Sitewide query classification from the same GSC export. */
export const gscQueryMix = {
  totalQueries: 333,
  totalImpressions: 1276,
  byCluster: {
    erp: { queries: 232, impressions: 938, clicks: 0, shareOfImpressions: 0.735 },
    brand: { queries: 8, impressions: 55, clicks: 14, shareOfImpressions: 0.043 },
    crm: { queries: 22, impressions: 52, clicks: 0, shareOfImpressions: 0.041 },
    website: { queries: 0, impressions: 0, clicks: 0, shareOfImpressions: 0 },
    ai: { queries: 2, impressions: 5, clicks: 0, shareOfImpressions: 0.004 },
    other: { queries: 69, impressions: 226, clicks: 0, shareOfImpressions: 0.177 },
  },
  conclusion:
    "Impressions are ERP-legacy dominated. Zero website-development queries in the export. Brand queries drive nearly all clicks. Do not treat country impression volume as website-intent demand until a country×query export proves otherwise.",
} as const;

export const marketIntentVerdicts: MarketIntentVerdict[] = [
  {
    country: "India",
    iso: "IN",
    clicks: 65,
    impressions: 1372,
    avgPosition: 52.88,
    investment: "invest",
    rationale: "Primary market — only geography with meaningful clicks. Own website-development head terms nationally first.",
  },
  {
    country: "United States",
    iso: "US",
    clicks: 0,
    impressions: 486,
    avgPosition: 33.21,
    investment: "hold",
    rationale:
      "High impressions, zero clicks. Sitewide query mix is ~74% ERP. Keep existing /solutions/web-development-company-india-usa page; do not expand US cluster until website-intent queries appear.",
  },
  {
    country: "United Kingdom",
    iso: "GB",
    clicks: 1,
    impressions: 50,
    avgPosition: 65.04,
    investment: "maintain",
    rationale: "Low volume. Maintain existing UK page with GDPR-aware localization; no new UK spokes until website-intent is verified.",
  },
  {
    country: "Turkey",
    iso: "TR",
    clicks: 0,
    impressions: 0,
    avgPosition: null,
    investment: "hold",
    rationale: "Not present in GSC country totals for the export window. Keep existing Turkey page if live; do not invest in new Turkish content.",
  },
  {
    country: "United Arab Emirates",
    iso: "AE",
    clicks: 0,
    impressions: 12,
    avgPosition: 40.58,
    investment: "maintain",
    rationale: "Minimal impressions. Maintain existing UAE page only.",
  },
  {
    country: "Germany",
    iso: "DE",
    clicks: 2,
    impressions: 58,
    avgPosition: 59.78,
    investment: "maintain",
    rationale: "Small but converting. Maintain Germany page; no expansion.",
  },
  {
    country: "Canada",
    iso: "CA",
    clicks: 0,
    impressions: 21,
    avgPosition: 32.76,
    investment: "hold",
    rationale: "No clicks; no dedicated expansion until website-intent verified.",
  },
  {
    country: "Australia",
    iso: "AU",
    clicks: 0,
    impressions: 18,
    avgPosition: 39.61,
    investment: "hold",
    rationale: "No clicks; hold.",
  },
];

export function getMarketInvestment(iso: string): MarketInvestment {
  return marketIntentVerdicts.find((m) => m.iso === iso)?.investment ?? "hold";
}

/** Markets allowed to receive new localized content this roadmap cycle. */
export const marketsOpenForExpansion = marketIntentVerdicts
  .filter((m) => m.investment === "invest")
  .map((m) => m.iso);

/** Markets that keep existing pages but get no new spokes. */
export const marketsMaintainOnly = marketIntentVerdicts
  .filter((m) => m.investment === "maintain")
  .map((m) => m.iso);
