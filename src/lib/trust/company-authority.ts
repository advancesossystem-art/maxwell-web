/**
 * Phase 5 — Verifiable company authority facts (single source of truth).
 * Do not add registration numbers, awards, or review stats here unless confirmed in repo/env.
 */

import { siteConfig } from "@/lib/constants";
import { businessAddress } from "@/lib/business-address";
import { companyMetrics, companyMetricDisplay } from "@/lib/company-metrics";

export const companyAuthorityFacts = {
  legalName: siteConfig.legalName,
  brandName: siteConfig.name,
  foundedYear: 2018,
  headquartersLine: businessAddress.formatted,
  businessHours: "Monday–Friday, 9:00 AM – 6:30 PM IST",
  gstNote: "GST-compliant invoicing available for India clients",
  responseExpectation: `Typical reply within ${companyMetrics.avgResponseHours} business hours`,
  supportCoverage: companyMetrics.supportCoverage,
  projectsDelivered: companyMetricDisplay.projectsCompleted,
  industriesServed: companyMetricDisplay.industriesServed,
  countriesServed: companyMetricDisplay.countriesServed,
  yearsInBusiness: companyMetricDisplay.yearsInBusiness,
  codeOwnership: "100% source code and IP ownership on delivery",
  ndaAvailable: true,
  milestoneBilling: "Fixed-scope milestone billing after discovery",
} as const;

export const founderAuthorityPaths = {
  about: "/about",
  team: "/about/team",
  founderInsights: "/founder-insights",
  reviews: "/reviews",
  company: "/company",
  process: "/process",
} as const;
