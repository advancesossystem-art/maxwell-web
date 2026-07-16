import { siteConfig } from "./constants";

export type ReviewPlatformStatus = "Live" | "Profile in progress" | "Coming soon" | "Available on request";

export const reviewPlatforms = [
  {
    id: "google",
    name: "Google Business",
    description: "Local reviews from clients who share feedback publicly on Google.",
    status: "Available on request" as const,
    href: undefined as string | undefined,
  },
  {
    id: "clutch",
    name: "Clutch",
    description: "Independent B2B reviews for software development firms.",
    status: "Profile in progress" as const,
    href: undefined as string | undefined,
  },
  {
    id: "g2",
    name: "G2",
    description: "Peer reviews for business software and services.",
    status: "Coming soon" as const,
    href: undefined as string | undefined,
  },
  {
    id: "goodfirms",
    name: "GoodFirms",
    description: "B2B research platform for software firms.",
    status: "Profile in progress" as const,
    href: undefined as string | undefined,
  },
] as const;

/** Verifiable work shown when third-party reviews are not yet live */
export const verifiableWorkFallback = {
  title: "Verifiable work while we collect public reviews",
  description:
    "We're building our first public review profiles. In the meantime, here's work you can verify yourself — live sites, named clients, and measurable outcomes.",
  items: [
    {
      label: "Drashti Chemicals — 263-page product catalog",
      href: "/case-studies/drashti-chemicals",
      external: false,
    },
    {
      label: "See it live: drashtichemical.com",
      href: "https://drashtichemical.com",
      external: true,
    },
    {
      label: "How we rebuilt our own site (0 → 80 Google clicks in 28 days)",
      href: "/case-studies/maxwell-website-rebuild",
      external: false,
    },
  ],
} as const;

export const securitySections = [
  {
    id: "data-handling",
    title: "Data handling",
    body: `${siteConfig.legalName} processes client data only as needed for discovery, delivery, and support. Lead data from this website is stored with access controls and used to respond to inquiries — see our Privacy Policy and Data Processing page for retention and rights.`,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Data Processing", href: "/data-processing" },
    ],
  },
  {
    id: "nda",
    title: "NDA & confidentiality",
    body: "Mutual NDAs are available before sharing sensitive requirements, architecture, or data samples. Project teams work on need-to-know principles; credentials and production access are provisioned per role.",
  },
  {
    id: "ip-ownership",
    title: "Intellectual property",
    body: "Custom deliverables are transferred to the client per the signed statement of work or master service agreement. Maxwell retains rights only to pre-existing tools, frameworks, and general know-how unless otherwise agreed. Third-party licenses are documented in project handover.",
  },
  {
    id: "hosting",
    title: "Hosting & infrastructure",
    body: "Production workloads are typically deployed on major cloud providers (AWS, Azure, or GCP) in regions agreed with the client. We use HTTPS, environment separation, encrypted secrets, and documented deployment runbooks. Hosting may be client-owned or Maxwell-managed depending on engagement.",
  },
  {
    id: "access",
    title: "Access & incident response",
    body: "Production access is limited to assigned engineers and leads. Security issues can be reported to our team at the contact email below; we acknowledge reports within two business days for active engagements.",
  },
] as const;
