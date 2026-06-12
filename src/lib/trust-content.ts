import { siteConfig } from "./constants";

export const reviewPlatforms = [
  {
    id: "clutch",
    name: "Clutch",
    description:
      "Independent B2B reviews for software development firms. We are building our public Clutch profile — no scores are shown here until verified reviews are published.",
    status: "Profile in progress" as const,
    href: undefined,
  },
  {
    id: "g2",
    name: "G2",
    description:
      "Peer reviews for business software and services. A G2 presence is planned; we do not display ratings we have not earned on-platform.",
    status: "Coming soon" as const,
    href: undefined,
  },
  {
    id: "google",
    name: "Google Business",
    description:
      "Local reviews from clients who choose to share feedback publicly. Ask us for a direct review link after project completion.",
    status: "Available on request" as const,
    href: undefined,
  },
  {
    id: "goodfirms",
    name: "GoodFirms",
    description:
      "B2B research platform for software firms. A GoodFirms profile is planned — no ratings displayed until verified on-platform.",
    status: "Profile in progress" as const,
    href: undefined,
  },
] as const;

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
