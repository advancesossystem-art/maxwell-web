/** Expanded FAQs for service pages — Phase K (15–20 per service) */

type Faq = { question: string; answer: string };

const universalFaqs: Faq[] = [
  {
    question: "What is included in post-launch maintenance?",
    answer:
      "Maintenance covers bug fixes, security patches, monitoring, and minor enhancements. SLAs define response times—typically 4–24 hours for critical issues. Annual contracts include a dedicated support window.",
  },
  {
    question: "Do you sign NDAs before discovery?",
    answer: "Yes. NDAs are standard before sharing process documentation or proprietary data. Your information is never used for other clients.",
  },
  {
    question: "Who owns the source code and IP?",
    answer: "You own 100% of source code, designs, and documentation upon milestone completion. Maxwell retains no licensing claims.",
  },
  {
    question: "Can you work with our existing IT team?",
    answer: "Yes. We integrate with internal IT for infrastructure access, security reviews, and knowledge transfer. Weekly syncs keep both teams aligned.",
  },
  {
    question: "How do you handle change requests mid-project?",
    answer: "Changes go through a change-request process with impact on timeline and cost documented before approval. Agile sprints absorb minor adjustments; scope changes are quoted separately.",
  },
  {
    question: "Do you provide training for end users?",
    answer: "Yes. Role-based training sessions, video walkthroughs, and admin documentation are included. Shop-floor and field user training is part of go-live.",
  },
  {
    question: "What industries have you delivered for?",
    answer:
      "Manufacturing, chemical, textile, pharma, FMCG, logistics, retail, healthcare, construction, and SaaS—primarily in India with global delivery for US, UAE, and EU clients.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Fixed milestone quotes after paid discovery—typically 20% discovery, 30% core UAT, 30% integrations/mobile, 20% go-live. No surprise hourly overruns on fixed-scope contracts.",
  },
];

const erpFaqs: Faq[] = [
  {
    question: "Does custom ERP integrate with Tally and GST e-invoice?",
    answer:
      "Yes. Production integrations are bi-directional—vouchers sync from approved transactions, and GST e-invoice/e-way bill trigger from dispatch events, not manual re-entry.",
  },
  {
    question: "Can ERP handle multi-plant and multi-GSTIN operations?",
    answer: "Yes. Multi-plant inventory, inter-GSTIN transfers, and consolidated reporting are core requirements for Indian mid-market ERP builds.",
  },
  {
    question: "ERP for manufacturing vs trading—which modules differ?",
    answer:
      "Manufacturing adds BOM, production orders, shop-floor capture, and job-work (ITC-04). Trading focuses on purchase, sales, warehouse, and distributor schemes.",
  },
  {
    question: "How do you migrate data from Excel or legacy ERP?",
    answer: "Dry-run migrations with validation rules, reconciliation dashboards, and parallel run periods before cutover.",
  },
  {
    question: "Is mobile shop-floor access included?",
    answer: "Mobile apps for GRN, production reporting, and dispatch are commonly scoped. Offline sync supported for plants with connectivity gaps.",
  },
  {
    question: "Custom ERP vs SAP Business One for SMEs?",
    answer:
      "SAP B1 suits standard processes under 30 users. Custom ERP wins when workflows, integrations, or compliance require logic templates cannot support without heavy customization fees.",
  },
  {
    question: "What ERP modules should a manufacturer start with?",
    answer: "Inventory, purchase, sales/dispatch, and Tally integration first—then production planning, QC, and advanced analytics in phase 2.",
  },
  {
    question: "How do you ensure ERP adoption on the shop floor?",
    answer: "Shop-floor UX designed for gloved hands and tablets, champion users per line, and training in local language where needed.",
  },
];

const crmFaqs: Faq[] = [
  {
    question: "Can CRM integrate with WhatsApp and email?",
    answer: "Yes. WhatsApp Business API, email sync, and telephony integrations log conversations against lead and account records automatically.",
  },
  {
    question: "Does CRM support distributor and dealer hierarchies?",
    answer: "Yes. Parent-child account structures, territory mapping, and scheme management for FMCG and manufacturing distribution are common builds.",
  },
  {
    question: "Mobile CRM for field sales teams?",
    answer: "React Native or Flutter apps with offline visit logging, GPS proof, order capture, and sync when connectivity returns.",
  },
  {
    question: "CRM and ERP integration—what syncs?",
    answer: "Typical sync: customer master, orders, invoices, inventory availability, and payment status—event-driven, not batch CSV.",
  },
  {
    question: "Custom CRM vs Zoho CRM for B2B?",
    answer: "Zoho works for standard pipelines under 25 users. Custom CRM fits complex approval chains, distributor logic, or deep ERP integration.",
  },
  {
    question: "How is CRM pricing compared to per-seat SaaS?",
    answer: "Custom CRM has higher upfront cost but flat ownership—no per-seat fees at 40+ users, often cheaper over 3–5 years.",
  },
  {
    question: "Can CRM automate follow-up reminders?",
    answer: "Yes. Stage-based SLAs, email/WhatsApp reminders, and escalation rules when leads stall beyond defined thresholds.",
  },
  {
    question: "Reporting and dashboards included?",
    answer: "Sales vs target, pipeline velocity, conversion by stage, and collection dashboards—role-based for reps, managers, and leadership.",
  },
];

const aiFaqs: Faq[] = [
  {
    question: "What AI use cases deliver fastest ROI in manufacturing?",
    answer: "Computer vision for quality and safety, document extraction for invoices/POs, and demand forecasting for inventory—typically 6–12 month payback.",
  },
  {
    question: "Can AI run on-premises for data privacy?",
    answer: "Yes. Models can deploy on edge devices or private cloud when data cannot leave your network.",
  },
  {
    question: "Do we need a data science team to maintain AI features?",
    answer: "Maxwell delivers monitoring dashboards and retraining pipelines. Your team manages business rules; we support model updates under maintenance.",
  },
  {
    question: "LLM chatbots vs custom ML—which fits our case?",
    answer: "LLMs excel at document Q&A and support bots. Custom ML fits numeric forecasting, anomaly detection, and vision tasks with measurable accuracy targets.",
  },
];

const expansionBySlug: Record<string, Faq[]> = {
  "erp-development": erpFaqs,
  "crm-development": crmFaqs,
  "ai-solutions": aiFaqs,
  "mobile-app-development": [
    {
      question: "Offline-first mobile apps—how do they sync?",
      answer: "Local SQLite storage with background sync queues. Conflicts resolved with server-wins or merge rules defined per entity.",
    },
    {
      question: "App store submission and updates?",
      answer: "We handle Play Store and App Store submission, review responses, and staged rollouts for updates.",
    },
  ],
  "website-development": [
    {
      question: "Will the website rank on Google?",
      answer: "We build Core Web Vitals 95+ foundations, schema markup, semantic HTML, and SEO metadata. Content strategy recommendations included.",
    },
    {
      question: "Headless CMS for content updates?",
      answer: "Sanity, Strapi, or similar CMS integrations let marketing update content without developer involvement.",
    },
  ],
  "custom-software-development": [
    {
      question: "When is custom software better than SaaS?",
      answer: "When workflows are unique, integrations are complex, or per-seat SaaS costs exceed build TCO at your user count.",
    },
    {
      question: "Can you automate approvals and workflows?",
      answer: "Yes. Maker-checker workflows, SLA tracking, and cross-department automation are common custom software deliverables.",
    },
  ],
  "saas-development": [
    {
      question: "Multi-tenant vs single-tenant architecture?",
      answer: "Multi-tenant for cost efficiency at scale; single-tenant for enterprise clients requiring isolated data.",
    },
  ],
  "cloud-solutions": [
    {
      question: "AWS vs Azure for Indian workloads?",
      answer: "AWS for broadest catalog; Azure for Microsoft stack integration. Both offer India regions for data residency.",
    },
  ],
};

export function expandServiceFaqs(slug: string, baseFaqs: Faq[]): Faq[] {
  const extra = expansionBySlug[slug] ?? [];
  const merged = [...baseFaqs];
  for (const faq of [...extra, ...universalFaqs]) {
    if (!merged.some((f) => f.question === faq.question)) {
      merged.push(faq);
    }
  }
  return merged.slice(0, 20);
}
