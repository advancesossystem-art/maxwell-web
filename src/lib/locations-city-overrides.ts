import type { CityPageData } from "@/lib/locations-data";
import { siteConfig } from "@/lib/constants";

export type CityContentOverride = Partial<
  Pick<
    CityPageData,
    | "headline"
    | "subheadline"
    | "localInsights"
    | "localChallenges"
    | "faqs"
    | "metaDescription"
  >
> & {
  localIntro?: string[];
  servingSince?: string;
  mapEmbedUrl?: string;
};

/** Unique SSR copy for priority Indian cities — not template swaps. */
export const cityContentOverrides: Record<string, CityContentOverride> = {
  vadodara: {
    headline: "Software Development Company in Vadodara | Maxwell Electrodeal",
    subheadline:
      "Headquartered in Alkapuri, Vadodara—we build ERP, CRM, AI, and web platforms for Gujarat manufacturers, pharma suppliers, and growing SMEs.",
    localInsights:
      "Vadodara (Baroda) is Gujarat's education and industrial hub—home to pharma API suppliers, engineering manufacturers along the Golden Corridor, and a fast-growing SME base digitizing beyond Tally. Maxwell Electrodeal was founded here in 2018 and runs discovery workshops on Jetalpur Road and at client plants across Anand, Bharuch, and Halol.",
    localIntro: [
      "As a Vadodara-based software development company, we combine on-site factory visits with senior engineering—something remote-only vendors cannot replicate for ERP and shop-floor projects.",
      "Our team has delivered manufacturing ERP, healthcare portals, and AI safety systems for clients in Alkapuri, Makarpura GIDC, Savli, and clients exporting from Gujarat to the US and Middle East.",
    ],
    servingSince: "2018",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0!2d73.1666!3d22.3114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5a8e5e5e5e5%3A0x0!2sMaxwell%20Electrodeal!5e0!3m2!1sen!2sin!4v1",
    localChallenges: [
      {
        title: "Manufacturing ERP beyond Tally",
        description:
          "Vadodara plants often run production on Excel while finance lives in Tally—creating WIP blind spots and GST reconciliation pain during peak export seasons.",
      },
      {
        title: "Pharma & chemical compliance",
        description:
          "Batch traceability, QC documentation, and audit trails need software aligned to FDA-style and Indian regulatory expectations—not generic inventory modules.",
      },
      {
        title: "Talent retention vs project risk",
        description:
          "Local hiring cycles are competitive; a Vadodara partner with a stable bench reduces the freelancer risk for mission-critical platforms.",
      },
    ],
    faqs: [
      {
        question: "Is Maxwell Electrodeal based in Vadodara?",
        answer: `Yes. Our office is at 419, Lalita Tower, Jetalpur Road, Alkapuri, Vadodara 390007. We meet clients on-site across Gujarat and deliver pan-India and internationally.`,
      },
      {
        question: "Do you visit factories in Vadodara for ERP discovery?",
        answer: "Yes. Shop-floor discovery is standard for manufacturing ERP—we map BOM, job-work, and weighbridge flows before quoting modules.",
      },
      {
        question: "What industries do you serve in Vadodara?",
        answer: "Manufacturing, pharma, engineering, education, retail, and logistics—typical Golden Corridor verticals.",
      },
      {
        question: "How fast can a Vadodara project start?",
        answer: "Discovery can begin within one week. MVPs often launch in 6–10 weeks; ERP rollouts in 3–6 months phased by module.",
      },
      {
        question: "Do you offer support after launch?",
        answer: "Yes. SLA-backed support retainers with Vadodara timezone alignment and optional on-site hypercare.",
      },
    ],
    metaDescription: `Vadodara software development company — ERP, CRM, AI, mobile apps. ${siteConfig.name} HQ in Alkapuri since 2018. Free consultation.`,
  },
  ahmedabad: {
    headline: "Software Development Company in Ahmedabad | Maxwell Electrodeal",
    subheadline:
      "Custom software for Ahmedabad's pharma, textile, fintech, and startup ecosystem—ERP, mobile apps, and SaaS with Gujarat delivery experience.",
    localInsights:
      "Ahmedabad drives Gujarat's startup and pharma growth—with SG Highway tech parks, Changodar industrial estates, and B2B traders scaling past manual ops. Maxwell serves Ahmedabad clients with ERP for multi-unit manufacturers and conversion-focused web platforms for funded startups.",
    localIntro: [
      "Ahmedabad businesses often operate multiple GSTINs across plants and showrooms—software must handle branch logic, not single-location templates.",
      "We partner with Ahmedabad enterprises modernizing from Tally+Excel to integrated ERP and with consumer brands launching omnichannel commerce.",
    ],
    servingSince: "2019",
    localChallenges: [
      {
        title: "Multi-unit operations",
        description: "Ahmedabad groups run parallel units in Changodar, Naroda, and Sanand—inventory and production visibility requires unified ERP, not branch spreadsheets.",
      },
      {
        title: "Startup velocity vs enterprise compliance",
        description: "SG Highway startups need MVPs in weeks while pharma spin-offs need audit-ready systems—one partner must serve both speeds.",
      },
      {
        title: "Omnichannel retail pressure",
        description: "Ahmedabad retail chains compete on experience—POS, e-commerce, and warehouse sync are table stakes.",
      },
    ],
    faqs: [
      {
        question: `Does ${siteConfig.name} work with Ahmedabad businesses?`,
        answer: "Yes. We serve Ahmedabad remotely and on-site for discovery—with projects in pharma, textile, and B2B services.",
      },
      {
        question: "Can you build ERP for Ahmedabad manufacturers?",
        answer: "Yes. Multi-plant inventory, production, GST billing, and Tally integration are core strengths.",
      },
      {
        question: "Do you build apps for Ahmedabad startups?",
        answer: "Yes. Flutter/React Native MVPs and Next.js marketing sites with investor-ready demos in 6–10 weeks.",
      },
      {
        question: "What is typical project cost in Ahmedabad?",
        answer: "MVPs from ₹5L; ERP from ₹8L–₹20L depending on modules and integrations.",
      },
      {
        question: "How do you handle meetings across time zones?",
        answer: "IST business hours with overlap for US/UK clients; weekly demos and async documentation standard.",
      },
    ],
  },
  surat: {
    headline: "Software Development Company in Surat | Maxwell Electrodeal",
    subheadline:
      "ERP, inventory, and B2B platforms for Surat's diamond, textile, and logistics businesses—real-time stock and dealer management.",
    localInsights:
      "Surat powers India's diamond polishing and textile trade—industries defined by high SKU counts, job-work, and razor-thin margins. Software here must nail inventory accuracy, lot tracking, and fast billing—not generic CRM modules.",
    localIntro: [
      "Surat traders lose lakhs annually to stock mismatches between warehouse, job-worker, and showroom—custom ERP with barcode and lot tracking pays back quickly.",
      "Maxwell builds dealer portals, textile order management, and logistics apps for Surat businesses shipping nationwide.",
    ],
    servingSince: "2019",
    localChallenges: [
      {
        title: "Inventory-heavy operations",
        description: "Diamond and textile SKUs need lot-level traceability—Excel breaks at 10,000+ variants.",
      },
      {
        title: "Job-work coordination",
        description: "Outsourced processing across Surat units needs challan tracking and ITC-04 alignment.",
      },
      {
        title: "Dealer network visibility",
        description: "Secondary sales and scheme management need CRM tied to ERP—not WhatsApp groups alone.",
      },
    ],
    faqs: [
      {
        question: "Do you build software for Surat textile businesses?",
        answer: "Yes. Inventory, job-work, dealer CRM, and GST billing for textile and garment traders.",
      },
      {
        question: "Can ERP handle diamond industry lot tracking?",
        answer: "Yes. Lot/batch tracking, approvals, and audit trails are common requirements we implement.",
      },
      {
        question: "How long does Surat ERP implementation take?",
        answer: "Core inventory and billing: 3–5 months. Full multi-unit rollout: 6–9 months phased.",
      },
      {
        question: "Do you offer on-site discovery in Surat?",
        answer: "Yes. We conduct warehouse and office workshops across Surat and South Gujarat.",
      },
      {
        question: "What technologies do you use?",
        answer: "React, Node.js, PostgreSQL, Flutter for mobile—cloud-hosted on AWS with Indian data residency options.",
      },
    ],
  },
  mumbai: {
    headline: "Software Development Company in Mumbai | Maxwell Electrodeal",
    subheadline:
      "Enterprise software for Mumbai finance, retail, healthcare, and logistics—scalable ERP, SaaS, and mobile apps with compliance-aware delivery.",
    localInsights:
      "Mumbai enterprises demand uptime, security, and vendor accountability—whether BKC financial services, Andheri startups, or Navi Mumbai logistics hubs. Maxwell delivers India-based senior engineering with documentation and IP assignment suitable for enterprise procurement.",
    localIntro: [
      "Mumbai clients often need SOC-aligned practices, GST + multi-entity reporting, and integrations with legacy Oracle or SAP footprints—we build custom layers that sync without rip-and-replace.",
      "We support funded startups extending runway with offshore MVPs and established firms modernizing customer portals and field operations.",
    ],
    servingSince: "2018",
    localChallenges: [
      {
        title: "Enterprise integration complexity",
        description: "Mumbai IT landscapes mix cloud SaaS, on-prem ERP, and bespoke tools—API-first architecture is mandatory.",
      },
      {
        title: "Regulated industries",
        description: "BFSI and healthcare need audit logs, access controls, and data residency clarity.",
      },
      {
        title: "Cost of local agencies",
        description: "Mumbai boutique rates push businesses toward proven offshore partners with referenceable delivery.",
      },
    ],
    faqs: [
      {
        question: "Do you serve Mumbai enterprises?",
        answer: "Yes. ERP, CRM, SaaS, and mobile projects for Mumbai clients with weekly stakeholder demos.",
      },
      {
        question: "Can you sign enterprise MSAs?",
        answer: "Yes. NDAs, MSAs, and IP assignment on payment are standard.",
      },
      {
        question: "Do you support HIPAA or financial compliance?",
        answer: "We implement access controls, encryption, and audit trails; compliance scope is defined per project.",
      },
      {
        question: "What is your Mumbai project pricing?",
        answer: "Enterprise web apps ₹15L–₹50L; ERP ₹15L–₹40L+ depending on scope.",
      },
      {
        question: "How do meetings work for Mumbai clients?",
        answer: "Video standups, optional monthly on-site reviews, and shared Slack/Teams channels.",
      },
    ],
  },
  delhi: {
    headline: "Software Development Company in Delhi NCR | Maxwell Electrodeal",
    subheadline:
      "Software for Delhi NCR government vendors, education groups, healthcare chains, and retail—ERP, portals, and mobile apps.",
    localInsights:
      "Delhi NCR spans government IT, education franchises, healthcare chains, and consumer brands—each with multi-location governance needs. Maxwell builds portals, ERP, and CRM that handle branch hierarchies and North India logistics patterns.",
    localIntro: [
      "NCR businesses often coordinate Noida development teams with Delhi HQ finance—software must reflect role-based access across cities.",
      "We deliver education portals, hospital management modules, and retail omnichannel stacks for NCR clients.",
    ],
    servingSince: "2019",
    localChallenges: [
      {
        title: "Multi-city operations",
        description: "Delhi, Noida, and Gurugram units need unified reporting with local compliance nuances.",
      },
      {
        title: "Education & healthcare scale",
        description: "Franchise and multi-clinic models need centralized dashboards without losing branch autonomy.",
      },
      {
        title: "Vendor reliability",
        description: "Government and enterprise RFPs require documented delivery methodology and references.",
      },
    ],
    faqs: [
      {
        question: "Do you work with Delhi NCR clients?",
        answer: "Yes. Education, healthcare, retail, and logistics projects across Delhi, Noida, and Gurugram.",
      },
      {
        question: "Can you build government-facing portals?",
        answer: "Yes. Role-based portals with audit trails; compliance requirements scoped per tender.",
      },
      {
        question: "What ERP modules do NCR manufacturers need?",
        answer: "Inventory, dispatch, GST, dealer management, and Tally sync—phased by priority.",
      },
      {
        question: "How fast can you start in Delhi?",
        answer: "Discovery within 1–2 weeks of contract; MVPs in 6–10 weeks typical.",
      },
      {
        question: "Do you provide post-launch AMC?",
        answer: "Yes. Annual maintenance contracts with SLA response times.",
      },
    ],
  },
  bengaluru: {
    headline: "Software & Website Development Company Serving Bengaluru",
    subheadline:
      "Maxwell Electrodeal delivers custom software, websites, ERP, CRM, and AI solutions for Bengaluru startups and enterprises. Vadodara-based team with pan-India delivery from Vadodara — response under 4 hours during business hours. Free estimate in 24 hours.",
    localInsights:
      "Bengaluru is India's Silicon Valley — home to thousands of startups, GCCs, and tech companies that demand world-class engineering velocity. Whether you're a Koramangala startup needing an MVP in 8 weeks, a Whitefield GCC extending its India engineering team, or a Bangalore enterprise digitising operations with ERP or CRM, Maxwell Electrodeal delivers with the same standards.",
    metaDescription:
      "Maxwell Electrodeal delivers custom software, websites, ERP & AI for Bengaluru startups and enterprises. Vadodara-based team, pan-India delivery. Free estimate in 24 hours.",
    localIntro: [
      "We work remotely with Bengaluru clients with no difference in delivery quality — our team communicates on WhatsApp, Slack, and video calls with response time under 4 hours during business hours. Pan-India delivery from Vadodara means senior engineers without Bangalore salary premiums.",
      "Bengaluru clients come to us for SaaS MVPs (10–16 weeks), manufacturer websites (6–8 weeks), custom ERP for manufacturing operations, and AI/LLM-powered product features. We've served Bangalore-based tech companies, D2C brands, and enterprise clients needing software beyond what template tools can offer.",
    ],
    servingSince: "2020",
    localChallenges: [
      {
        title: "MVP speed pressure",
        description: "Bangalore startups need investor-ready products in 8–10 weeks — not 6-month waterfall documents.",
      },
      {
        title: "Cloud-native expectations",
        description: "Kubernetes, observability, and feature flags are baseline expectations for Bengaluru tech companies.",
      },
      {
        title: "Talent cost inflation",
        description: "Bengaluru salaries push startups toward engineering partners with senior leverage and lower burn while keeping product ownership local.",
      },
    ],
    faqs: [
      {
        question: "Do you build SaaS for Bangalore startups?",
        answer: "Yes. Multi-tenant architecture, billing, admin dashboards, and analytics in 10–16 weeks typical.",
      },
      {
        question: "Can you integrate AI/LLM features?",
        answer: "Yes. RAG assistants, workflow automation, and analytics—production monitoring included.",
      },
      {
        question: "Do you work with Bangalore GCCs?",
        answer: "Yes. Dedicated squads with IP assignment and security reviews.",
      },
      {
        question: "What stack do you use?",
        answer: "Next.js, React, Node.js, PostgreSQL, Flutter, AWS/GCP—aligned to your existing stack when needed.",
      },
      {
        question: "How do you collaborate across time zones?",
        answer: "IST overlap with US teams; async docs; sprint ceremonies on shared calendars.",
      },
    ],
  },
};

export function applyCityContentOverrides(city: CityPageData): CityPageData {
  const override = cityContentOverrides[city.slug];
  if (!override) return city;
  return {
    ...city,
    ...override,
    localChallenges: override.localChallenges ?? city.localChallenges,
    faqs: override.faqs ?? city.faqs,
  };
}
