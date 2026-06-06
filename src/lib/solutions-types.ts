export interface SolutionPageData {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  relatedSearches: string[];
  serviceHref: string;
  industryLinks: { name: string; href: string }[];
  caseStudySlugs: string[];
  marketInsights: string;
  industryChallenges: { title: string; description: string }[];
  recommendedApproach: string[];
  technologies: string[];
  roiExamples: { metric: string; label: string; description: string }[];
  internalLinks: { label: string; href: string; description: string }[];
  faqs: { question: string; answer: string }[];
  gradient: string;
  accent: string;
}
