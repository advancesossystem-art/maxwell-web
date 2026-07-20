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
    body: `Website content describes ${siteConfig.name} website engineering and supporting software services. Formal engagements require executed statements of work or master service agreements.`,
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
    body: `Cookies and similar technologies (such as local storage and pixels) are small files or identifiers stored on your device. They help websites function, remember preferences, and — only with your consent — measure how a site is used.`,
  },
  {
    title: "Legal Basis",
    body: `Under the EU/UK GDPR and the ePrivacy Directive (and similar laws such as the UK PECR), we may set strictly necessary cookies without consent because they are required to provide the service you request. Analytics and marketing technologies require your freely given, specific, and informed consent before they are activated. We do not use pre-ticked boxes, and continuing to browse this site without choosing Accept or Reject does not count as consent.`,
  },
  {
    title: "Cookie Categories",
    body: `Strictly necessary: security, load balancing, admin session (where applicable), and storing your cookie choice (maxwell-cookie-consent in local storage). Analytics (only if you accept): Google Analytics 4 and/or Google Tag Manager to measure traffic and site performance. Optional marketing (only if you accept and configured): Meta Pixel, Microsoft Clarity session replay. Preference: portal display settings stored locally.`,
  },
  {
    title: "Third-Party Providers",
    body: `When you accept non-essential cookies, third parties may process data under their own policies: Google (Analytics / Tag Manager), Meta (advertising pixel, if enabled), and Microsoft (Clarity, if enabled). We use Google Consent Mode so analytics tags respect your choice. Data may be processed in the United States or other countries; where required, appropriate safeguards apply.`,
  },
  {
    title: "Retention",
    body: `Your cookie preference is stored until you change it or clear site data. Analytics cookies typically expire according to each provider's default (often up to 24 months). Session cookies expire when you close your browser.`,
  },
  {
    title: "Managing & Withdrawing Consent",
    body: `Use Reject all or Accept all on the cookie banner when you first visit. You can change your mind at any time by clicking Cookie settings in the site footer — this re-opens the banner with the same options. You can also block or delete cookies in your browser settings. Withdrawing consent does not affect the lawfulness of processing before withdrawal.`,
  },
  {
    title: "Contact",
    body: `Questions about cookies or privacy: ${siteConfig.email}. EU/UK residents may also contact their local data protection authority.`,
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
