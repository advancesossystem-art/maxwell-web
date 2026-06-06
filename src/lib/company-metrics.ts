/**
 * Maxwell Electrodeal — single source of truth for company proof metrics.
 * All pages must reference this module (not hardcoded counts).
 */

export const companyMetrics = {
  projectsCompleted: 50,
  industriesServed: 15,
  clientRetentionPercent: 98,
  satisfactionScore: 4.9,
  satisfactionScale: 5,
  deliverySuccessPercent: 94,
  countriesServed: 12,
  expertEngineers: 50,
  yearsInBusiness: 8,
  avgResponseHours: 4,
  supportCoverage: "24/7",
  technologiesUsed: 24,
  avgRoiMonths: 8,
  revenueImpactLabel: "₹12Cr+",
} as const;

export type CompanyMetricKey = keyof typeof companyMetrics;

/** Formatted display values for UI */
export const companyMetricDisplay = {
  projectsCompleted: `${companyMetrics.projectsCompleted}+`,
  industriesServed: `${companyMetrics.industriesServed}+`,
  clientRetention: `${companyMetrics.clientRetentionPercent}%`,
  satisfaction: `${companyMetrics.satisfactionScore}/${companyMetrics.satisfactionScale}`,
  satisfactionPercent: `${Math.round((companyMetrics.satisfactionScore / companyMetrics.satisfactionScale) * 100)}%`,
  deliverySuccess: `${companyMetrics.deliverySuccessPercent}%`,
  countriesServed: `${companyMetrics.countriesServed}+`,
  expertEngineers: `${companyMetrics.expertEngineers}+`,
  yearsInBusiness: `${companyMetrics.yearsInBusiness}+`,
  supportResponse: `<${companyMetrics.avgResponseHours}hr`,
  supportCoverage: companyMetrics.supportCoverage,
  avgRoiTimeline: `${companyMetrics.avgRoiMonths} mo`,
  revenueImpact: companyMetrics.revenueImpactLabel,
  technologiesUsed: `${companyMetrics.technologiesUsed}+`,
} as const;

export type TrustStripItem = {
  value: string;
  label: string;
  description?: string;
};

/** Default trust strip — Projects, Industries, Satisfaction, Support, Delivery */
export function getTrustStripItems(): TrustStripItem[] {
  return [
    {
      value: companyMetricDisplay.projectsCompleted,
      label: "Projects Completed",
      description: "Documented enterprise deliveries",
    },
    {
      value: companyMetricDisplay.industriesServed,
      label: "Industries Served",
      description: "Manufacturing, healthcare, logistics & more",
    },
    {
      value: companyMetricDisplay.satisfactionPercent,
      label: "Client Satisfaction",
      description: `Post-delivery surveys (${companyMetricDisplay.satisfaction})`,
    },
    {
      value: companyMetricDisplay.supportResponse,
      label: "Support Response",
      description: `Business hours · ${companyMetricDisplay.supportCoverage} critical coverage`,
    },
    {
      value: companyMetricDisplay.deliverySuccess,
      label: "Delivery Success",
      description: "On-time milestone completion",
    },
  ];
}

/** Hero stat row (homepage) */
export function getHeroStats() {
  return [
    { value: companyMetrics.projectsCompleted, suffix: "+", label: "Projects Delivered" },
    { value: companyMetrics.industriesServed, suffix: "+", label: "Industries Served" },
    {
      value: Math.round((companyMetrics.satisfactionScore / companyMetrics.satisfactionScale) * 100),
      suffix: "%",
      label: "Client Satisfaction",
    },
  ] as const;
}

/** Portfolio hub metrics */
export const portfolioStats = {
  totalProjects: companyMetrics.projectsCompleted,
  industriesServed: companyMetrics.industriesServed,
  technologiesUsed: companyMetrics.technologiesUsed,
  avgRoiMonths: companyMetrics.avgRoiMonths,
} as const;

/** Case studies hub metrics */
export const caseStudyStats = {
  totalProjects: companyMetrics.projectsCompleted,
  averageRoi: `${companyMetrics.avgRoiMonths} months`,
  industriesServed: companyMetrics.industriesServed,
  revenueImpact: companyMetrics.revenueImpactLabel,
} as const;

/** Company stats bar / trust grid source */
export const companyStats = {
  projectsDelivered: companyMetrics.projectsCompleted,
  clientRetention: companyMetrics.clientRetentionPercent,
  countriesServed: companyMetrics.countriesServed,
  expertEngineers: companyMetrics.expertEngineers,
  onTimeDelivery: companyMetrics.deliverySuccessPercent,
  clientSatisfaction: companyMetrics.satisfactionScore,
  avgResponseHours: companyMetrics.avgResponseHours,
  supportCoverage: companyMetrics.supportCoverage,
  yearsInBusiness: companyMetrics.yearsInBusiness,
} as const;

export function getTrustMetricsGrid() {
  return [
    {
      value: companyMetricDisplay.projectsCompleted,
      label: "Projects Delivered",
      description: `Across ${companyMetricDisplay.industriesServed} industries`,
    },
    {
      value: companyMetricDisplay.deliverySuccess,
      label: "On-Time Delivery",
      description: "Milestone-based tracking",
    },
    {
      value: companyMetricDisplay.clientRetention,
      label: "Client Retention",
      description: "Long-term partnerships",
    },
    {
      value: companyMetricDisplay.satisfaction,
      label: "Client Satisfaction",
      description: "Post-project surveys",
    },
    {
      value: companyMetricDisplay.supportResponse,
      label: "Avg. Response Time",
      description: "Business hours SLA",
    },
    {
      value: companyMetricDisplay.supportCoverage,
      label: "Support Coverage",
      description: "Critical systems monitored",
    },
  ] as const;
}

export function getCompanyStatsBar() {
  return [
    { value: companyMetricDisplay.projectsCompleted, label: "Projects" },
    { value: companyMetricDisplay.clientRetention, label: "Retention" },
    { value: companyMetricDisplay.countriesServed, label: "Countries" },
    { value: companyMetricDisplay.expertEngineers, label: "Engineers" },
    { value: companyMetricDisplay.yearsInBusiness, label: "Years" },
  ] as const;
}

export const leadTrustBadges = [
  `${companyMetricDisplay.projectsCompleted} Projects`,
  `${companyMetricDisplay.supportResponse} Response`,
  "100% Code Ownership",
  "NDA Available",
] as const;
