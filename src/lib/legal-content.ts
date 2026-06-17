import { siteConfig } from "./constants";

export const legalLastUpdated = "June 2026";

export const privacySections = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly (name, email, company, phone, project details) via contact forms, estimate requests, calculators, consultation bookings, newsletter signups, AI business tools exports, and client portal onboarding.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your data to respond to inquiries, deliver services, improve our website, score and route leads to our sales team, send project-related communications, and comply with legal obligations.`,
  },
  {
    title: "Legal Basis (GDPR)",
    body: `Where applicable, we process data based on consent (marketing), contract performance (client engagements), and legitimate interests (website security and analytics).`,
  },
  {
    title: "Data Retention",
    body: `Lead and client records are retained for the duration of the business relationship plus up to 24 months unless a longer period is required by law or contract.`,
  },
  {
    title: "Your Rights",
    body: `You may request access, correction, deletion, or portability of your personal data by contacting ${siteConfig.email}. EU/UK residents may lodge complaints with their supervisory authority.`,
  },
  {
    title: "International Transfers",
    body: `We may process data in India and through cloud providers with appropriate safeguards for cross-border transfers.`,
  },
];

export const termsSections = [
  {
    title: "Agreement",
    body: `By using ${siteConfig.url}, you agree to these Terms of Service. If you disagree, do not use the site.`,
  },
  {
    title: "Services",
    body: `Website content describes ${siteConfig.name} software development services. Formal engagements require executed statements of work or master service agreements.`,
  },
  {
    title: "Intellectual Property",
    body: `Site content, branding, and tools are owned by ${siteConfig.legalName}. Client deliverables are governed by separate project contracts.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from use of this website or AI planning tools, which provide estimates only—not binding quotes.`,
  },
  {
    title: "Governing Law",
    body: `These terms are governed by the laws of India. Disputes shall be subject to courts in Gujarat, India unless otherwise agreed in writing.`,
  },
];

export const cookieSections = [
  {
    title: "What Are Cookies",
    body: `Cookies are small files stored on your device to remember preferences and measure site usage.`,
  },
  {
    title: "Cookies We Use",
    body: `Essential cookies (session, security), analytics cookies (Google Analytics / GTM when you accept), and preference cookies (your cookie choice, portal dark mode in local storage).`,
  },
  {
    title: "Managing Cookies",
    body: `Use the cookie banner to accept or reject non-essential cookies. You can also control cookies through your browser settings. UK and EU visitors may withdraw consent at any time by clearing site data or blocking cookies.`,
  },
  {
    title: "Third Parties",
    body: `Analytics and advertising partners may set their own cookies when IDs are configured in environment variables.`,
  },
];

export const disclaimerSections = [
  {
    title: "General",
    body: `Information on this website is for general purposes. It does not constitute legal, financial, or professional advice.`,
  },
  {
    title: "Estimates & Tools",
    body: `Project calculators, ROI tools, roadmap generators, and AI outputs provide indicative guidance only. Final pricing and timelines require formal proposal and contract.`,
  },
  {
    title: "Case Studies",
    body: `Portfolio and case study metrics are representative. Individual results vary by scope, team, and client readiness.`,
  },
  {
    title: "External Links",
    body: `We are not responsible for third-party websites linked from our content.`,
  },
];

export const dataProcessingSections = [
  {
    title: "Data Controller",
    body: `${siteConfig.legalName} is the data controller for website and lead data. Contact: ${siteConfig.email}.`,
  },
  {
    title: "Categories Processed",
    body: `Identity and contact data, company information, project requirements, usage analytics, support tickets, and portal activity metadata.`,
  },
  {
    title: "Processors",
    body: `We use hosting (Vercel), email/CRM integrations (webhooks to HubSpot, Zoho, Salesforce when configured), and analytics providers you enable.`,
  },
  {
    title: "Security Measures",
    body: `HTTPS, security headers, input validation on APIs, rate limiting, and access controls on client portal (production auth to replace demo mode).`,
  },
  {
    title: "Sub-processors",
    body: `A current list of sub-processors is available on request. Material changes will be communicated to active clients.`,
  },
  {
    title: "DPA Requests",
    body: `Enterprise clients may request a Data Processing Agreement (DPA) by emailing ${siteConfig.email}.`,
  },
];
