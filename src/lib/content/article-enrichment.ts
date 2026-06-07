import type { ContentCategorySlug, ContentFAQ } from "./schema";
import type { ArticleDef, RichSection } from "./article-factory";
import { createArticle } from "./article-factory";

/** Search-intent depth sections appended to editorial articles that are too thin. */
const categoryDepthSections: Record<ContentCategorySlug, RichSection[]> = {
  erp: [
    {
      heading: "Build vs buy vs customize: what Indian teams actually choose",
      paragraphs: [
        "Off-the-shelf ERP (Tally Prime, Zoho, SAP Business One) wins when processes are standard and user count is under 25. Custom ERP wins when shop-floor workflows, multi-plant inventory, or job-work (ITC-04) cannot be modeled without expensive workarounds.",
        "Hybrid is common: keep Tally for statutory books while custom modules handle production, WIP, and integrations. The mistake is forcing Tally to be an MRP system—it was never designed for that.",
      ],
      list: [
        "Buy when: single location, standard chart of accounts, no complex BOM/routing",
        "Customize when: multi-level BOM, job-work, weighbridge, or OEM traceability",
        "Build when: competitive advantage lives in operational workflow software",
      ],
      callout: {
        variant: "tip",
        title: "TCO rule of thumb",
        text: "Compare 5-year TCO: license + implementation + per-seat fees + internal IT time. Custom build often breaks even vs per-seat SaaS between 30–60 users for manufacturing SMEs.",
      },
    },
    {
      heading: "GST, Tally, and integration patterns that survive audits",
      paragraphs: [
        "Indian ERP projects fail integration—not modules. Bi-directional Tally sync (vouchers, ledgers, GST returns) should be event-driven with reconciliation dashboards, not nightly CSV dumps.",
        "E-invoice and e-way bill generation should trigger from approved dispatch events, not manual re-entry. ITC-04 job-work challans need linkage to production orders.",
      ],
      subsections: [
        {
          heading: "Pre-go-live compliance checklist",
          list: [
            "GSTIN master validated per branch",
            "HSN/SAC mapping on all sellable items",
            "E-invoice IRN retry queue with audit log",
            "Role-based approval for credit notes",
            "Stock valuation matches Tally trial balance ± agreed tolerance",
          ],
          paragraphs: [],
        },
      ],
    },
    {
      heading: "90-day implementation roadmap (realistic for SMEs)",
      paragraphs: [
        "Weeks 1–2: process mapping workshops on the factory floor—not only in conference rooms. Weeks 3–6: core modules with weekly stakeholder demos. Weeks 7–10: integrations, UAT with real transactions. Weeks 11–12: phased go-live with hypercare.",
      ],
      list: [
        "Phase 1 — Discovery: current-state process maps, pain quantification, module priority",
        "Phase 2 — Core build: inventory + production OR finance first (never everything at once)",
        "Phase 3 — Integrations: Tally, weighbridge, WhatsApp alerts, biometric attendance",
        "Phase 4 — Go-live: one plant/branch first, then roll forward",
      ],
    },
    {
      heading: "How to evaluate an ERP development partner",
      paragraphs: [
        "Ask for production references in your industry—not demo screenshots. Request milestone-based contracts with IP ownership and escrow for source code.",
      ],
      list: [
        "3+ case studies with measurable outcomes (inventory accuracy %, close time reduction)",
        "Named delivery team—not anonymous bench",
        "Fixed discovery sprint before full build quote",
        "Post-go-live SLA with response times in writing",
        "100% source code and data export rights",
      ],
    },
  ],
  crm: [
    {
      heading: "Custom CRM vs Salesforce/HubSpot for Indian B2B sales",
      paragraphs: [
        "Standard CRMs assume a linear pipeline: Lead → Qualified → Proposal → Won. Indian B2B often includes distributor tiers, scheme management, sample approvals, and multi-stakeholder enterprise deals that break default ontology.",
        "Per-seat pricing hurts at 50+ field users. Custom CRM with flat infrastructure cost often wins TCO at scale—especially with WhatsApp-first follow-up and vernacular mobile UX.",
      ],
      list: [
        "Use Salesforce/HubSpot when: standard B2B SaaS motion, <40 seats, marketing automation is core",
        "Build custom when: distributor hierarchy, beat planning, or OEM approval chains are unique",
        "Hybrid: marketing on HubSpot, operations on custom field CRM",
      ],
    },
    {
      heading: "Pipeline design that matches how your team actually sells",
      paragraphs: [
        "Stages should mirror physical actions—site visit completed, sample dispatched, technical approval—not abstract CRM jargon. Automations should fire on missed SLAs (no follow-up in 48 hours) with manager escalation.",
      ],
      subsections: [
        {
          heading: "Automation ROI targets",
          paragraphs: ["Measure these within 90 days of go-live:"],
          list: [
            "Lead response time (target: under 4 hours)",
            "Follow-up compliance rate on open deals",
            "Win rate on qualified opportunities",
            "Sales admin hours per rep per week",
          ],
        },
      ],
    },
    {
      heading: "Integrations buyers expect in 2026",
      paragraphs: [
        "CRM without ERP/accounting visibility creates duplicate data entry. Priority integrations: Tally/Zoho Books for invoicing, WhatsApp Business API for field updates, telephony for call logging, and e-mail/calendar sync.",
      ],
    },
    {
      heading: "Vendor evaluation checklist",
      list: [
        "Mobile offline mode for field reps",
        "Role-based dashboards for RM vs ASM vs national head",
        "API documentation and webhook support",
        "Data residency and export on contract exit",
        "Admin training included—not only user training",
      ],
      paragraphs: ["Request a 2-week pilot on one sales zone before enterprise rollout."],
    },
  ],
  ai: [
    {
      heading: "Where AI delivers ROI before the chatbot demo",
      paragraphs: [
        "Generic LLM chatbots rarely pay back in manufacturing. High-ROI AI starts with structured data: computer vision on known camera angles, demand forecasting on clean historical sales, or document extraction on standardized invoices.",
        "Fix data quality first—AI amplifies garbage. Master data (SKU, BOM, customer hierarchy) must be stable before model training.",
      ],
      list: [
        "Computer vision: PPE detection, quality inspection, zone intrusion",
        "Forecasting: inventory and procurement with seasonality",
        "Document AI: invoice PO matching, KYC extraction",
        "Workflow AI: lead scoring with explainable features—not black boxes",
      ],
    },
    {
      heading: "Build vs buy for enterprise AI",
      paragraphs: [
        "Cloud APIs (OpenAI, Azure Vision) accelerate pilots. Production systems need edge inference for latency, cost control, and data residency—often custom models fine-tuned on your images and documents.",
      ],
      callout: {
        variant: "warning",
        title: "Common failure mode",
        text: "Running vision models on generic cloud APIs at 24/7 camera scale becomes expensive fast. Edge deployment with custom-trained models typically reduces inference cost 60–80% at production scale.",
      },
    },
    {
      heading: "90-day AI pilot framework",
      list: [
        "Week 1–2: define success metric (incidents/week, defect ppm, hours saved)",
        "Week 3–4: data audit and camera/document sample collection",
        "Week 5–8: model training and edge deployment POC",
        "Week 9–12: UAT on one line/site, measure against baseline",
      ],
      paragraphs: ["Scale only after metric improvement is statistically significant—not after a flashy demo."],
    },
  ],
  "mobile-apps": [
    {
      heading: "Flutter vs React Native vs native in 2026",
      paragraphs: [
        "Cross-platform wins for field teams needing offline sync, camera, GPS, and rapid iteration. Native wins for heavy Bluetooth/hardware SDK integration or platform-specific UX mandates.",
        "Most Indian B2B field apps (beat planning, POD capture, service tickets) ship on Flutter or React Native with 85–90% shared codebase.",
      ],
      list: [
        "Flutter: strong UI consistency, good offline packages",
        "React Native: leverage existing React team skills",
        "PWA first: when App Store discovery is not required and SEO matters",
      ],
    },
    {
      heading: "Offline-first architecture for unreliable networks",
      paragraphs: [
        "Field users will not tolerate spinners on factory floors. Local SQLite/Hive queues with background sync and conflict resolution are non-negotiable for logistics and sales apps.",
      ],
    },
    {
      heading: "Cost and timeline expectations (India, 2026)",
      paragraphs: [
        "MVPs with auth, 5–8 core screens, offline sync, and admin web panel: typically ₹8L–₹25L and 10–14 weeks. Enterprise apps with ERP integration and role complexity: ₹20L–₹45L+.",
      ],
    },
  ],
  "web-development": [
    {
      heading: "What high-converting B2B websites include in 2026",
      paragraphs: [
        "Buyers research on Google and AI assistants before contacting sales. Your site must answer commercial-intent queries with specificity—pricing ranges, timelines, industry case studies, and interactive estimators.",
        "Core Web Vitals in the green zone is table stakes; differentiation comes from trust architecture and service-specific landing depth.",
      ],
      list: [
        "Industry-specific service pages (not one generic Services page)",
        "Case studies with metrics—not only logos",
        "Interactive cost/ROI calculators",
        "FAQ schema on commercial pages",
        "Book consultation with context passed to CRM",
      ],
    },
    {
      heading: "Next.js architecture for SEO and conversion",
      paragraphs: [
        "Static generation for content hubs, structured metadata API on every route, and minimal client JS on above-the-fold content. Forms should post to CRM with UTM and service context preserved.",
      ],
    },
  ],
  "software-development": [
    {
      heading: "Build vs buy decision framework (scored)",
      paragraphs: [
        "Score each core process 1–5 on uniqueness. Average above 3.5 strongly favors custom build. Score integration complexity separately—high integration need also favors bespoke middleware.",
      ],
      list: [
        "1–2: buy SaaS off the shelf",
        "3: configure SaaS + custom integrations",
        "4–5: custom application with API-first design",
      ],
    },
    {
      heading: "How to structure discovery before signing a build contract",
      paragraphs: [
        "Paid discovery (2–4 weeks) produces user stories, wireframes, integration map, and fixed milestone quote. Vendors quoting full project price without discovery are guessing—and change orders follow.",
      ],
    },
    {
      heading: "IP, source code, and exit clauses",
      paragraphs: [
        "You should own 100% of custom code. Escrow source on milestone payments. Require documentation, environment setup scripts, and knowledge transfer sessions in the contract—not as optional extras.",
      ],
    },
  ],
  cloud: [
    {
      heading: "AWS cost optimization without sacrificing reliability",
      paragraphs: [
        "SME production workloads often overspend on oversized RDS instances and always-on dev environments. Right-size after 30 days of CloudWatch metrics; use reserved instances for stable baselines.",
      ],
      list: [
        "Separate dev/staging auto-shutdown schedules",
        "S3 lifecycle policies for logs and backups",
        "CloudFront for static assets",
        "Alert on monthly budget thresholds",
      ],
    },
    {
      heading: "Migration phases that minimize downtime",
      paragraphs: [
        "Assessment → parallel run → cutover is safer than big-bang. Database migration with dual-write periods protects against reconciliation gaps.",
      ],
    },
  ],
  saas: [
    {
      heading: "Multi-tenant SaaS architecture from MVP",
      paragraphs: [
        "Tenant isolation at the database row level (tenant_id) is sufficient for most B2B MVPs. Schema-per-tenant only when regulatory isolation demands it.",
        "Billing webhooks (Razorpay/Stripe) and usage metering should be designed in sprint 1—not bolted on after launch.",
      ],
    },
    {
      heading: "Pricing psychology for Indian B2B SaaS",
      paragraphs: [
        "Annual plans with GST-inclusive pricing reduce friction. Anchor with a 'growth' tier most buyers choose. Offer INR billing and UPI where possible.",
      ],
    },
  ],
  "digital-transformation": [
    {
      heading: "Digital transformation sequence for Indian SMEs",
      paragraphs: [
        "Digitize transactions first (inventory, orders, invoices), then automate workflows (approvals, alerts), then optimize with AI. Skipping straight to AI on spreadsheet data wastes budget.",
      ],
      list: [
        "Step 1: single source of truth for inventory and customers",
        "Step 2: integrate Tally/accounting and remove double entry",
        "Step 3: mobile capture for field and shop floor",
        "Step 4: dashboards and exception-based management",
        "Step 5: forecasting and vision/AI on clean data",
      ],
    },
    {
      heading: "Change management that prevents shelfware",
      paragraphs: [
        "Train champions on each shift/zone—not only HO staff. Measure adoption weekly (login rates, transactions per user). Executive sponsorship without shop-floor champions fails.",
      ],
    },
  ],
};

const universalFaqs: ContentFAQ[] = [
  {
    question: "How long should a software project take from discovery to go-live?",
    answer:
      "SME ERP/CRM projects typically run 12–20 weeks after discovery. MVPs and focused modules can ship in 8–12 weeks. Enterprise multi-plant rollouts may take 6–12 months phased by location.",
  },
  {
    question: "Should we hire in-house developers or outsource to an agency?",
    answer:
      "Outsource for defined projects with milestone delivery and IP transfer. Hire in-house for ongoing product companies with continuous roadmap. Hybrid works: agency builds v1, small internal team maintains.",
  },
];

export function enrichArticleDef(def: ArticleDef): ArticleDef {
  const minSections = 6;
  const existingHeadings = new Set(def.sections.map((s) => s.heading));
  const extra = (categoryDepthSections[def.category] ?? []).filter((s) => !existingHeadings.has(s.heading));

  let sections = [...def.sections];
  if (sections.length < minSections) {
    sections = [...sections, ...extra.slice(0, minSections - sections.length + 2)];
  }

  if (sections.length < minSections) {
    sections.push({
      heading: "Key takeaways for decision-makers",
      paragraphs: [
        "Start with measurable pain—inventory accuracy, lead response time, or month-end close duration. Software ROI should be expressed in hours saved and error reduction, not features shipped.",
        "Sequence implementation in phases with weekly demos. Avoid big-bang go-lives across all plants or departments simultaneously.",
      ],
      list: [
        "Quantify baseline metrics before project kickoff",
        "Run paid discovery before fixed-price build contracts",
        "Demand IP ownership and exportable data",
        "Plan hypercare for 4–6 weeks post go-live",
      ],
    });
  }

  const faqs = [...(def.faqs ?? [])];
  for (const uf of universalFaqs) {
    if (!faqs.some((f) => f.question === uf.question)) {
      faqs.push(uf);
    }
  }

  const intro =
    typeof def.intro === "string"
      ? def.intro.length < 280
        ? [
            def.intro,
            "This guide is written for owners, IT heads, and operations leaders evaluating software investments in India— with practical cost ranges, build-vs-buy frameworks, and implementation checklists you can use in vendor meetings.",
          ]
        : def.intro
      : def.intro;

  return {
    ...def,
    intro,
    sections,
    faqs,
  };
}

export function enrichedCreateArticle(def: ArticleDef) {
  return createArticle(enrichArticleDef(def));
}
