import type { IndustryPageData, IndustrySlug } from "@/lib/industries-data";

export const phase8IndustrySlugs = [
  "fintech-bfsi",
  "legal-compliance",
  "energy-utilities",
  "travel-logistics",
  "fmcg-retail",
] as const;

const asSlug = (slug: string): IndustrySlug => slug as IndustrySlug;

const phase8WhyMaxwell = [
  {
    title: "Regulated-Industry Engineering",
    description:
      "RBI, RERA, and sector-specific compliance requirements are designed into architecture—not bolted on after launch.",
  },
  {
    title: "Integration-First Delivery",
    description:
      "Core banking APIs, payment gateways, Tally, GST, and legacy systems connected with audit trails and retry logic.",
  },
  {
    title: "Measurable Business Outcomes",
    description:
      "We define KPIs upfront—KYC turnaround, loan TAT, dispatch SLA, inventory accuracy—and build toward quantifiable ROI.",
  },
  {
    title: "Long-Term AMC Partnership",
    description:
      "Post-go-live hypercare, security patches, and feature expansion as regulations and operations evolve.",
  },
] as const;

export const phase8RealEstateOverride: IndustryPageData = {
  slug: "real-estate",
  title: "Real Estate",
  headline: "Real Estate Software Development India — CRM, ERP & Property Management | Maxwell Electrodeal",
  subheadline:
    "RERA-compliant property CRM, booking reconciliation, broker commission tracking, and construction progress dashboards—built for developers and property managers who need audit-ready operations, not spreadsheet chaos.",
  metaTitle: "Real Estate Software Development India — CRM, ERP & Property Management",
  metaDescription:
    "Real estate software development in India — RERA-compliant CRM, property management ERP, booking reconciliation & broker portals. Maxwell Electrodeal.",
  keywords: [
    "real estate software development India",
    "property management software India",
    "RERA compliant real estate CRM",
    "real estate ERP development",
    "property booking software India",
  ],
  icon: "construction",
  gradient: "from-amber-950 via-orange-950 to-slate-950",
  accent: "#F59E0B",
  focusAreas: [
    {
      title: "RERA Compliance Workflows",
      description: "Project registration tracking, buyer agreement templates, milestone disclosures, and audit-ready document vaults.",
    },
    {
      title: "Property CRM & Lead Management",
      description: "Site visit scheduling, broker hierarchy, lead scoring, and WhatsApp-first follow-up for Indian buyers.",
    },
    {
      title: "Booking & Payment Reconciliation",
      description: "Unit inventory, allotment letters, payment plans, and TDS/GST alignment on advances and installments.",
    },
    {
      title: "Construction Progress Tracking",
      description: "Milestone-based site updates, contractor billing, and buyer-facing construction status portals.",
    },
  ],
  challenges: [
    {
      title: "Booking reconciliation nightmares",
      description:
        "Multiple brokers, duplicate bookings, and manual Excel trackers cause allotment disputes and revenue leakage.",
    },
    {
      title: "RERA documentation gaps",
      description:
        "Buyer agreements, quarterly disclosures, and project updates scattered across email and drives—not audit-ready.",
    },
    {
      title: "Broker commission disputes",
      description:
        "Tiered broker structures, clawbacks, and delayed payouts erode channel partner trust without transparent ledgers.",
    },
    {
      title: "Construction visibility blind spots",
      description:
        "Buyers call daily for updates; site teams lack a single system to log progress, photos, and contractor milestones.",
    },
  ],
  solutions: [
    {
      title: "RERA-Ready Property CRM",
      description: "Lead-to-booking pipeline with broker portals, site visit logs, and document generation.",
      category: "CRM",
      serviceSlug: "crm-development",
    },
    {
      title: "Real Estate ERP",
      description: "Unit inventory, payment schedules, contractor billing, and finance integration with Tally.",
      category: "ERP",
      serviceSlug: "erp-development",
    },
    {
      title: "Buyer Self-Service Portal",
      description: "Construction updates, payment history, document downloads, and support ticket tracking.",
      category: "Portal",
      serviceSlug: "custom-software-development",
    },
    {
      title: "Broker & Channel Partner App",
      description: "Mobile app for lead registration, inventory check, and commission statements.",
      category: "Mobile",
      serviceSlug: "mobile-app-development",
    },
  ],
  softwareStack: [
    { name: "Next.js / React", purpose: "Buyer and broker web portals" },
    { name: "Node.js / PostgreSQL", purpose: "Booking, inventory, and payment APIs" },
    { name: "Flutter", purpose: "Broker and site engineer mobile apps" },
    { name: "Tally Integration", purpose: "Voucher sync for advances and installments" },
    { name: "AWS / Azure India", purpose: "RERA document storage with encryption" },
  ],
  impactMetrics: [
    { value: "40%", label: "Faster booking closure", description: "Average reduction in lead-to-allotment cycle time" },
    { value: "99%", label: "Inventory accuracy", description: "Real-time unit availability across sales and brokers" },
    { value: "60%", label: "Support calls reduced", description: "Buyer self-service for construction and payments" },
    { value: "100%", label: "RERA doc traceability", description: "Immutable audit log for agreements and disclosures" },
  ],
  useCases: [
    {
      title: "Multi-Project Developer CRM",
      description: "12-project portfolio with broker hierarchy, inventory sync, and RERA milestone tracking.",
      outcome: "Single dashboard for sales, finance, and compliance teams",
    },
    {
      title: "Booking Reconciliation Engine",
      description: "Automated allotment with payment plan validation and duplicate-booking prevention.",
      outcome: "Zero double-allotment incidents post go-live",
    },
    {
      title: "Construction Buyer Portal",
      description: "Photo timelines, milestone notifications, and document vault for 2,000+ buyers.",
      outcome: "60% reduction in buyer inquiry calls",
    },
    {
      title: "Broker Commission Ledger",
      description: "Tiered commission rules, clawback logic, and monthly statement generation.",
      outcome: "Transparent payouts improving channel partner retention",
    },
  ],
  caseStudy: {
    title: "RERA-Compliant Property Management Platform",
    client: "Western India residential developer",
    challenge: "8 projects with broker-led sales, manual booking sheets, and RERA disclosure delays.",
    solution: "Property CRM, booking ERP, buyer portal, and broker mobile app with Tally sync.",
    results: [
      "40% faster lead-to-booking cycle",
      "99% unit inventory accuracy across brokers",
      "RERA quarterly filings prepared in hours, not weeks",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Flutter", "Tally API"],
  },
  workflowSteps: [
    { step: "01", title: "Lead", description: "Broker/site visit capture, qualification, and inventory check" },
    { step: "02", title: "Book", description: "Token, agreement, payment plan, and allotment letter" },
    { step: "03", title: "Build", description: "Construction milestones, contractor billing, buyer updates" },
    { step: "04", title: "Collect", description: "Installment reminders, TDS, GST, and reconciliation" },
    { step: "05", title: "Comply", description: "RERA disclosures, document vault, and audit exports" },
  ],
  whyMaxwell: [...phase8WhyMaxwell],
  faqs: [
    {
      question: "Can you build RERA-compliant real estate software?",
      answer:
        "Yes. We engineer project registration workflows, buyer agreement templates, milestone disclosure tracking, and immutable document audit logs aligned with RERA state portal requirements. Compliance rules vary by state—we map yours during discovery.",
    },
    {
      question: "How do you handle broker hierarchy and lead duplication?",
      answer:
        "Our property CRM supports multi-tier broker structures with unique lead registration codes, first-touch attribution rules, and duplicate detection across projects. Commission ledgers reflect your clawback and tier policies.",
    },
    {
      question: "Can the system integrate with Tally for payment collection?",
      answer:
        "Yes. Booking advances, installments, and TDS deductions sync to Tally via event-driven voucher generation with daily reconciliation dashboards—not brittle CSV imports.",
    },
    {
      question: "Do you build buyer-facing construction update portals?",
      answer:
        "Yes. Buyers receive milestone notifications, photo timelines, and document downloads. This typically reduces support call volume 50–60% within the first quarter after launch.",
    },
    {
      question: "What is the cost of real estate CRM development in India?",
      answer:
        "Focused property CRM with broker portal: ₹12L–₹22L. Full ERP with booking, construction, and Tally sync: ₹25L–₹45L phased over 14–24 weeks. Request a scoped estimate at /get-estimate.",
    },
    {
      question: "How long does real estate software implementation take?",
      answer:
        "CRM MVP with inventory and broker app: 10–14 weeks. Full platform with buyer portal and Tally integration: 18–26 weeks with phased go-live per project.",
    },
    {
      question: "Can site engineers update construction progress from mobile?",
      answer:
        "Yes. Offline-capable mobile apps let site teams log milestones, upload photos, and trigger buyer notifications—syncing when connectivity returns.",
    },
    {
      question: "Do you support multiple projects and unit typologies?",
      answer:
        "Yes. Multi-project inventory with towers, floors, unit types, parking slots, and payment plan variants. Inventory locks during booking prevent double allotment in real time.",
    },
  ],
};

export const phase8IndustriesData: Partial<Record<IndustrySlug, IndustryPageData>> = {
  [asSlug("fintech-bfsi")]: {
    slug: asSlug("fintech-bfsi"),
    title: "BFSI & Fintech",
    headline: "IT Solutions for BFSI & Fintech Companies India | Maxwell Electrodeal",
    subheadline:
      "RBI-aware lending platforms, digital KYC, loan management systems, and core banking integrations—engineered for NBFCs, fintech startups, and BFSI teams that cannot afford compliance gaps or brittle vendor lock-in.",
    metaTitle: "IT Solutions for BFSI & Fintech Companies India | Maxwell Electrodeal",
    metaDescription:
      "BFSI & fintech software development India — RBI compliance, digital KYC, loan management, NBFC platforms. Maxwell Electrodeal.",
    keywords: [
      "fintech software development India",
      "BFSI IT solutions India",
      "loan management software development",
      "digital KYC platform India",
      "RBI compliant fintech software",
    ],
    icon: "retail",
    gradient: "from-emerald-950 via-teal-950 to-slate-950",
    accent: "#10B981",
    focusAreas: [
      {
        title: "RBI Compliance & Audit Trails",
        description: "Immutable logs, role-based access, data retention policies, and reporting aligned with RBI master directions.",
      },
      {
        title: "Digital KYC & Onboarding",
        description: "Aadhaar eKYC, PAN verification, liveness checks, and document OCR with consent management.",
      },
      {
        title: "Loan Origination & Management",
        description: "Application workflows, credit bureau integration, disbursement, collections, and NPA tracking.",
      },
      {
        title: "Payment & Banking Integrations",
        description: "UPI, NEFT/RTGS, payment gateways, and core banking API connectivity with retry queues.",
      },
    ],
    challenges: [
      {
        title: "Regulatory compliance complexity",
        description:
          "RBI guidelines evolve frequently; legacy systems lack audit trails, consent logs, and data localization controls.",
      },
      {
        title: "Slow KYC and onboarding",
        description:
          "Manual document collection delays loan disbursement and increases drop-off in digital lending funnels.",
      },
      {
        title: "Loan lifecycle fragmentation",
        description:
          "Origination, servicing, and collections run on disconnected tools—no single view of portfolio risk.",
      },
      {
        title: "Integration with cores and bureaus",
        description:
          "CIBIL, Experian, account aggregators, and bank CBS APIs require robust middleware—not one-off scripts.",
      },
    ],
    solutions: [
      {
        title: "Digital Lending Platform",
        description: "End-to-end LOS with credit rules, bureau pull, and disbursement workflows.",
        category: "Lending",
        serviceSlug: "custom-software-development",
      },
      {
        title: "KYC & Onboarding Module",
        description: "Video KYC, eSign, and document vault with RBI-aligned consent capture.",
        category: "KYC",
        serviceSlug: "mobile-app-development",
      },
      {
        title: "Collections & Recovery CRM",
        description: "Bucket management, field agent apps, and payment link automation.",
        category: "CRM",
        serviceSlug: "crm-development",
      },
      {
        title: "AI Risk & Fraud Scoring",
        description: "Anomaly detection, document fraud checks, and portfolio early-warning signals.",
        category: "AI",
        serviceSlug: "ai-solutions",
      },
    ],
    softwareStack: [
      { name: "Node.js / Java", purpose: "Secure API layer and workflow engines" },
      { name: "PostgreSQL", purpose: "Transactional loan and customer data" },
      { name: "Redis", purpose: "Session, rate limiting, and queue management" },
      { name: "Flutter", purpose: "Borrower and field agent mobile apps" },
      { name: "AWS India / Azure India", purpose: "Data residency and encryption at rest" },
    ],
    impactMetrics: [
      { value: "70%", label: "Faster KYC", description: "Digital onboarding vs manual document chase" },
      { value: "45%", label: "Lower ops cost", description: "Automation in origination and collections" },
      { value: "High availability", label: "API uptime targets", description: "Mission-critical lending infrastructure per SLA" },
      { value: "100%", label: "Audit-ready logs", description: "Immutable trail for regulatory inspections" },
    ],
    useCases: [
      {
        title: "NBFC Digital Lending Stack",
        description: "Personal loan origination with bureau integration and UPI disbursement.",
        outcome: "Disbursement TAT reduced from 5 days to 24 hours",
      },
      {
        title: "Video KYC Platform",
        description: "RBI-compliant VKYC with agent queue, recording, and audit export.",
        outcome: "70% reduction in onboarding drop-off",
      },
      {
        title: "Loan Management System",
        description: "Portfolio servicing, EMI schedules, prepayment, and NPA classification.",
        outcome: "Single source of truth for 50,000+ active loans",
      },
      {
        title: "Collections Field App",
        description: "GPS-tagged visits, payment capture, and promise-to-pay workflows.",
        outcome: "18% improvement in bucket-1 recovery rates",
      },
    ],
    caseStudy: {
      title: "NBFC Digital Lending Transformation",
      client: "Pan-India NBFC",
      challenge: "Manual KYC, fragmented LOS, and no real-time portfolio visibility across branches.",
      solution: "Digital lending platform with VKYC, bureau integration, LMS, and collections CRM.",
      results: [
        "Loan disbursement TAT cut from 5 days to under 24 hours",
        "45% reduction in origination operations cost",
        "RBI inspection-ready audit logs from day one",
      ],
      tech: ["Node.js", "PostgreSQL", "Flutter", "CIBIL API", "Razorpay"],
    },
    workflowSteps: [
      { step: "01", title: "Apply", description: "Digital application, eligibility, and consent capture" },
      { step: "02", title: "Verify", description: "KYC, bureau pull, and credit decisioning" },
      { step: "03", title: "Disburse", description: "Agreement eSign, mandate, and fund transfer" },
      { step: "04", title: "Service", description: "EMI, prepayment, and customer self-service" },
      { step: "05", title: "Recover", description: "Collections buckets, field visits, and settlements" },
    ],
    whyMaxwell: [...phase8WhyMaxwell],
    faqs: [
      {
        question: "Do you build RBI-compliant fintech software?",
        answer:
          "Yes. We design audit trails, data retention, access controls, and reporting aligned with RBI master directions for NBFCs and lending platforms. We work with your compliance officer during architecture review.",
      },
      {
        question: "Can you integrate CIBIL and other credit bureaus?",
        answer:
          "Yes. We integrate CIBIL, Experian, CRIF, and account aggregator APIs with consent management, retry logic, and immutable pull logs for audit purposes.",
      },
      {
        question: "How do you handle digital KYC and video KYC?",
        answer:
          "We implement Aadhaar eKYC, PAN validation, liveness detection, and RBI-compliant video KYC with agent workflows, recording storage, and export for regulatory review.",
      },
      {
        question: "What is the cost of loan management software in India?",
        answer:
          "Focused LOS/LMS MVP: ₹18L–₹30L. Enterprise platform with KYC, collections, and bureau integrations: ₹35L–₹60L+ phased over 16–28 weeks.",
      },
      {
        question: "Can you integrate with our existing core banking system?",
        answer:
          "Yes. We build API middleware for CBS integration—disbursement, repayment posting, and reconciliation—with idempotent transaction handling and dead-letter queues.",
      },
      {
        question: "How do you ensure data security for financial applications?",
        answer:
          "Encryption at rest and in transit, VPC isolation on AWS/Azure India regions, OWASP practices, penetration testing, and role-based access with MFA for privileged operations.",
      },
      {
        question: "Do you build borrower-facing mobile apps?",
        answer:
          "Yes. Flutter/React Native apps for loan application, EMI payment, document upload, and support—with biometric login and push notifications for due dates.",
      },
      {
        question: "What is the typical timeline for a fintech platform build?",
        answer:
          "KYC + origination MVP: 12–16 weeks. Full LOS/LMS with collections and integrations: 20–32 weeks with phased regulatory and UAT milestones.",
      },
    ],
  },

  [asSlug("legal-compliance")]: {
    slug: asSlug("legal-compliance"),
    title: "Legal & Compliance",
    headline: "Legal & Compliance Software Development India | Maxwell Electrodeal",
    subheadline:
      "Contract lifecycle management, compliance tracking, matter management, and regulatory workflow automation—for law firms, in-house legal teams, and compliance officers who need audit-ready systems, not email chains.",
    metaTitle: "Legal & Compliance Software Development India | Maxwell Electrodeal",
    metaDescription:
      "Legal & compliance software development India — contract management, matter tracking, regulatory workflows & audit trails. Maxwell Electrodeal.",
    keywords: [
      "legal software development India",
      "compliance management software India",
      "contract lifecycle management development",
      "legal tech software company India",
      "regulatory compliance software",
    ],
    icon: "education",
    gradient: "from-indigo-950 via-violet-950 to-slate-950",
    accent: "#6366F1",
    focusAreas: [
      {
        title: "Contract Lifecycle Management",
        description: "Template libraries, approval workflows, eSign integration, and obligation tracking with renewal alerts.",
      },
      {
        title: "Matter & Case Management",
        description: "Client matters, hearing dates, document repositories, and time-billing for law firms and legal departments.",
      },
      {
        title: "Regulatory Compliance Tracking",
        description: "Obligation calendars, filing deadlines, policy attestations, and board-ready compliance dashboards.",
      },
      {
        title: "Document Management & eDiscovery",
        description: "Version control, full-text search, access controls, and export for litigation and audit requests.",
      },
    ],
    challenges: [
      {
        title: "Contract chaos",
        description:
          "Agreements scattered across email, drives, and desks—with missed renewals and untracked obligations.",
      },
      {
        title: "Compliance deadline misses",
        description:
          "Regulatory filings and internal policy reviews tracked in spreadsheets; no escalation when deadlines slip.",
      },
      {
        title: "Matter visibility gaps",
        description:
          "Partners lack real-time status on active matters, associate workload, and billing realization.",
      },
      {
        title: "Audit and discovery pain",
        description:
          "Producing documents for litigation or regulatory inquiry takes weeks of manual collection.",
      },
    ],
    solutions: [
      {
        title: "Contract Management Platform",
        description: "CLM with templates, redlining, approval chains, and eSign (DocuSign, Leegality).",
        category: "CLM",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Legal Practice Management",
        description: "Matter tracking, court dates, time entries, and client billing.",
        category: "Practice",
        serviceSlug: "crm-development",
      },
      {
        title: "Compliance Workflow Engine",
        description: "Obligation registry, attestations, and automated reminders.",
        category: "GRC",
        serviceSlug: "erp-development",
      },
      {
        title: "AI Document Review",
        description: "Clause extraction, risk flagging, and similarity search across contract corpora.",
        category: "AI",
        serviceSlug: "ai-solutions",
      },
    ],
    softwareStack: [
      { name: "Next.js / React", purpose: "Legal team dashboards and client portals" },
      { name: "Node.js / Python", purpose: "Workflow engines and NLP pipelines" },
      { name: "PostgreSQL", purpose: "Matters, contracts, and audit metadata" },
      { name: "Elasticsearch", purpose: "Full-text document search" },
      { name: "S3 / Azure Blob", purpose: "Encrypted document storage" },
    ],
    impactMetrics: [
      { value: "50%", label: "Faster contract cycle", description: "Approval automation vs email routing" },
      { value: "90%", label: "Deadline compliance", description: "Obligation tracking with escalations" },
      { value: "35%", label: "Billable recovery", description: "Time capture improvement for law firms" },
      { value: "80%", label: "Discovery time saved", description: "Centralized searchable document vault" },
    ],
    useCases: [
      {
        title: "Enterprise CLM Rollout",
        description: "500+ vendor contracts with renewal alerts and obligation dashboards.",
        outcome: "Zero missed renewal penalties in year one",
      },
      {
        title: "Law Firm Practice System",
        description: "Matter management with court calendar and client billing integration.",
        outcome: "35% improvement in billable hour capture",
      },
      {
        title: "Regulatory Compliance Portal",
        description: "SEBI/RBI obligation tracker with board reporting exports.",
        outcome: "Audit preparation time reduced from weeks to days",
      },
      {
        title: "AI Clause Risk Scanner",
        description: "Automated review of vendor MSAs against playbooks.",
        outcome: "Legal review throughput increased 3×",
      },
    ],
    caseStudy: {
      title: "Compliance Workflow Automation",
      client: "Listed Indian enterprise legal department",
      challenge: "200+ regulatory obligations tracked manually; missed SEBI filing deadlines twice in 18 months.",
      solution: "Compliance registry, automated reminders, document vault, and board-ready dashboards.",
      results: [
        "90% on-time filing rate within first year",
        "80% reduction in audit document collection time",
        "Single source of truth for 1,200+ compliance artifacts",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Elasticsearch"],
    },
    workflowSteps: [
      { step: "01", title: "Intake", description: "Matter/contract request, conflict check, assignment" },
      { step: "02", title: "Draft", description: "Templates, collaboration, version control" },
      { step: "03", title: "Approve", description: "Multi-level approval, redlines, eSign" },
      { step: "04", title: "Monitor", description: "Obligations, renewals, regulatory deadlines" },
      { step: "05", title: "Report", description: "Audit exports, board dashboards, analytics" },
    ],
    whyMaxwell: [...phase8WhyMaxwell],
    faqs: [
      {
        question: "Do you build custom legal software for Indian law firms?",
        answer:
          "Yes. Practice management, matter tracking, court calendars, time billing, and client portals tailored to Indian litigation and corporate practice workflows.",
      },
      {
        question: "Can you integrate eSign providers like DocuSign or Leegality?",
        answer:
          "Yes. We integrate DocuSign, Leegality, and other Aadhaar-based eSign providers with webhook callbacks, status tracking, and immutable signing audit logs.",
      },
      {
        question: "How do you handle document security and privilege?",
        answer:
          "Role-based access, matter-level permissions, encryption at rest, activity logs, and optional VPC deployment. Chinese-wall rules can be encoded in workflow logic.",
      },
      {
        question: "Can AI review contracts against our playbook?",
        answer:
          "Yes. We build clause extraction, risk scoring, and deviation highlighting using NLP—always with human-in-the-loop for final legal judgment.",
      },
      {
        question: "What is the cost of compliance management software?",
        answer:
          "Focused obligation tracker: ₹10L–₹18L. Full GRC platform with CLM and document vault: ₹22L–₹40L phased over 12–22 weeks.",
      },
      {
        question: "Do you support SEBI, RBI, and sector-specific compliance calendars?",
        answer:
          "Yes. We configure obligation libraries per your regulatory footprint—with custom filing types, responsible owners, and escalation chains.",
      },
      {
        question: "Can external counsel access matters via a secure portal?",
        answer:
          "Yes. Guest access with matter-scoped permissions, document upload, and activity tracking—without exposing unrelated client data.",
      },
      {
        question: "How long does legal software implementation take?",
        answer:
          "CLM MVP: 10–14 weeks. Full practice management or GRC platform: 16–24 weeks with phased rollout by department or practice area.",
      },
    ],
  },

  [asSlug("energy-utilities")]: {
    slug: asSlug("energy-utilities"),
    title: "Energy & Utilities",
    headline: "Software Solutions for Energy & Utilities Companies India | Maxwell Electrodeal",
    subheadline:
      "Smart meter integration, outage management, billing systems, asset maintenance, and renewable energy dashboards—for DISCOMs, IPPs, and utilities modernizing grid operations and customer service.",
    metaTitle: "Software Solutions for Energy & Utilities Companies India | Maxwell Electrodeal",
    metaDescription:
      "Energy & utilities software development India — smart metering, billing, outage management, asset maintenance. Maxwell Electrodeal.",
    keywords: [
      "energy utilities software development India",
      "utility billing software India",
      "smart meter integration software",
      "power distribution software",
      "renewable energy management platform",
    ],
    icon: "factory",
    gradient: "from-yellow-950 via-amber-950 to-slate-950",
    accent: "#EAB308",
    focusAreas: [
      {
        title: "Smart Meter & AMI Integration",
        description: "Head-end system connectivity, consumption analytics, and tamper detection dashboards.",
      },
      {
        title: "Billing & Revenue Management",
        description: "Tariff engines, prepaid/postpaid billing, demand charges, and payment gateway integration.",
      },
      {
        title: "Outage & Fault Management",
        description: "GIS-based outage mapping, crew dispatch, and customer notification workflows.",
      },
      {
        title: "Asset & Maintenance Management",
        description: "Transformer, feeder, and substation maintenance schedules with mobile field inspections.",
      },
    ],
    challenges: [
      {
        title: "Legacy billing inefficiency",
        description:
          "Manual meter reading, estimated bills, and delayed reconciliation increase complaints and revenue leakage.",
      },
      {
        title: "Outage response delays",
        description:
          "No real-time fault visibility; crews dispatched without optimized routing or customer communication.",
      },
      {
        title: "Asset maintenance gaps",
        description:
          "Preventive maintenance on transformers and feeders tracked on paper—failures cause extended downtime.",
      },
      {
        title: "Renewable integration complexity",
        description:
          "Solar/wind assets need production forecasting and grid balancing data not available in legacy SCADA exports.",
      },
    ],
    solutions: [
      {
        title: "Utility Billing Platform",
        description: "Tariff configuration, invoicing, payment collection, and consumer self-service.",
        category: "Billing",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Outage Management System",
        description: "Fault logging, crew dispatch, GIS maps, and SMS/WhatsApp alerts.",
        category: "OMS",
        serviceSlug: "mobile-app-development",
      },
      {
        title: "Asset Maintenance ERP",
        description: "Equipment registry, PM schedules, and field inspection mobile apps.",
        category: "ERP",
        serviceSlug: "erp-development",
      },
      {
        title: "Energy Analytics & AI",
        description: "Load forecasting, theft detection, and renewable production dashboards.",
        category: "AI",
        serviceSlug: "ai-solutions",
      },
    ],
    softwareStack: [
      { name: "Python / Node.js", purpose: "Billing engines and integration APIs" },
      { name: "PostgreSQL + TimescaleDB", purpose: "Meter readings and time-series data" },
      { name: "React / Leaflet GIS", purpose: "Outage maps and operations dashboards" },
      { name: "Flutter", purpose: "Field crew and meter reader apps" },
      { name: "AWS IoT / Azure IoT", purpose: "Smart meter and sensor ingestion" },
    ],
    impactMetrics: [
      { value: "25%", label: "Billing accuracy gain", description: "AMI-driven vs estimated billing" },
      { value: "40%", label: "Faster outage restoration", description: "OMS with optimized crew dispatch" },
      { value: "30%", label: "Revenue recovery", description: "Theft detection and tamper alerts" },
      { value: "50%", label: "PM compliance", description: "Scheduled maintenance vs reactive repairs" },
    ],
    useCases: [
      {
        title: "Smart Meter Billing Rollout",
        description: "50,000 AMI meters with prepaid billing and consumer app.",
        outcome: "25% improvement in billing accuracy",
      },
      {
        title: "Outage Management Dashboard",
        description: "GIS fault map with crew tracking and customer notifications.",
        outcome: "40% faster mean time to restoration",
      },
      {
        title: "Substation Maintenance System",
        description: "PM schedules, inspection checklists, and spare parts inventory.",
        outcome: "50% increase in preventive maintenance compliance",
      },
      {
        title: "Solar Plant Monitoring",
        description: "IPP production dashboards with inverter alerts and PPA reporting.",
        outcome: "Real-time visibility across 120 MW portfolio",
      },
    ],
    caseStudy: {
      title: "Distribution Utility Digital Platform",
      client: "Regional power distribution utility",
      challenge: "Manual billing, no outage visibility, and reactive transformer maintenance causing frequent complaints.",
      solution: "Billing platform, OMS with GIS, field mobile app, and consumer self-service portal.",
      results: [
        "25% billing accuracy improvement within 12 months",
        "40% reduction in average outage restoration time",
        "Consumer complaint volume down 35%",
      ],
      tech: ["Python", "PostgreSQL", "React", "Flutter", "AWS IoT"],
    },
    workflowSteps: [
      { step: "01", title: "Meter", description: "AMI read, validation, and anomaly flagging" },
      { step: "02", title: "Bill", description: "Tariff application, invoice generation, delivery" },
      { step: "03", title: "Collect", description: "Payment gateways, prepaid top-up, reconciliation" },
      { step: "04", title: "Maintain", description: "Asset inspections, PM work orders, spares" },
      { step: "05", title: "Restore", description: "Fault intake, dispatch, resolution, reporting" },
    ],
    whyMaxwell: [...phase8WhyMaxwell],
    faqs: [
      {
        question: "Can you integrate with smart meter head-end systems?",
        answer:
          "Yes. We build middleware for AMI head-end APIs—consumption pulls, tamper events, and disconnect commands—with retry logic and data validation pipelines.",
      },
      {
        question: "Do you build prepaid and postpaid utility billing?",
        answer:
          "Yes. Tariff engines supporting slab rates, TOD pricing, demand charges, subsidies, and prepaid wallet top-up via UPI and payment gateways.",
      },
      {
        question: "Can consumers pay bills and track usage via mobile app?",
        answer:
          "Yes. Consumer apps with bill history, usage charts, outage notifications, and complaint registration—integrated with your billing and OMS backends.",
      },
      {
        question: "How do you handle outage management and crew dispatch?",
        answer:
          "GIS-based fault logging, feeder impact analysis, crew assignment with route optimization, and automated SMS/WhatsApp updates to affected consumers.",
      },
      {
        question: "What is the cost of utility billing software in India?",
        answer:
          "Billing platform for 50K consumers: ₹20L–₹35L. Full suite with OMS, AMI integration, and mobile apps: ₹40L–₹70L+ phased over 20–36 weeks.",
      },
      {
        question: "Do you support renewable energy plant monitoring?",
        answer:
          "Yes. Solar/wind production dashboards, inverter integration, performance ratio analytics, and PPA reporting for IPPs and C&I installations.",
      },
      {
        question: "Can field crews use offline mobile apps for inspections?",
        answer:
          "Yes. Offline-capable apps for meter reading, asset inspection, and work order closure—syncing when connectivity returns.",
      },
      {
        question: "How do you ensure data security for utility systems?",
        answer:
          "Role-based access, encryption, network segmentation, audit logs, and deployment on India-region cloud with disaster recovery per your IT policy.",
      },
    ],
  },

  [asSlug("travel-logistics")]: {
    slug: asSlug("travel-logistics"),
    title: "Travel & Logistics",
    headline: "Software Development for Travel & Logistics Companies India | Maxwell Electrodeal",
    subheadline:
      "Fleet management, route optimization, booking engines, warehouse WMS, and customer tracking portals—for travel operators and logistics companies competing on reliability and real-time visibility.",
    metaTitle: "Software Development for Travel & Logistics Companies India | Maxwell Electrodeal",
    metaDescription:
      "Travel & logistics software development India — fleet tracking, booking systems, WMS, route optimization. Maxwell Electrodeal.",
    keywords: [
      "travel logistics software development India",
      "fleet management software India",
      "logistics software company India",
      "travel booking platform development",
      "warehouse management system India",
    ],
    icon: "logistics",
    gradient: "from-blue-950 via-cyan-950 to-slate-950",
    accent: "#0EA5E9",
    focusAreas: [
      {
        title: "Fleet & Route Optimization",
        description: "GPS tracking, dynamic routing, fuel analytics, and driver performance dashboards.",
      },
      {
        title: "Travel Booking & Operations",
        description: "Inventory, pricing, agent portals, and GDS/API integrations for OTAs and tour operators.",
      },
      {
        title: "Warehouse & Last-Mile WMS",
        description: "Inbound, pick-pack-ship, barcode scanning, and e-way bill integration.",
      },
      {
        title: "Customer Tracking & Support",
        description: "Branded tracking portals, POD capture, and automated ETA notifications.",
      },
    ],
    challenges: [
      {
        title: "Dispatch inefficiency",
        description:
          "Manual route planning and phone-based dispatch limit deliveries per vehicle and inflate fuel costs.",
      },
      {
        title: "Inventory and booking silos",
        description:
          "Travel inventory on one system, operations on another—overbooking and reconciliation errors follow.",
      },
      {
        title: "Customer visibility gaps",
        description:
          "Support teams flooded with 'where is my shipment/booking' calls without self-service tracking.",
      },
      {
        title: "Warehouse throughput bottlenecks",
        description:
          "Paper pick lists, mis-picks, and slow dispatch delay SLAs and increase returns.",
      },
    ],
    solutions: [
      {
        title: "Fleet Management Platform",
        description: "GPS dashboard, driver app, maintenance alerts, and fuel reporting.",
        category: "Fleet",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Travel Booking Engine",
        description: "Multi-supplier inventory, pricing rules, and agent B2B portal.",
        category: "Travel",
        serviceSlug: "saas-development",
      },
      {
        title: "Warehouse Management System",
        description: "Barcode WMS with e-way bill and GST dispatch integration.",
        category: "WMS",
        serviceSlug: "erp-development",
      },
      {
        title: "Route Optimization AI",
        description: "OR-Tools routing with capacity, time windows, and traffic constraints.",
        category: "AI",
        serviceSlug: "ai-solutions",
      },
    ],
    softwareStack: [
      { name: "React Dashboard", purpose: "Operations command center" },
      { name: "Python / Node.js", purpose: "Routing engines and API integrations" },
      { name: "PostgreSQL", purpose: "Shipments, bookings, and fleet data" },
      { name: "Flutter", purpose: "Driver and field executive apps" },
      { name: "Google Maps / OR-Tools", purpose: "Routing and geofencing" },
    ],
    impactMetrics: [
      { value: "30%", label: "More deliveries/day", description: "Route optimization impact on fleet productivity" },
      { value: "25%", label: "Fuel savings", description: "Optimized routing and idling reduction" },
      { value: "95%", label: "On-time SLA", description: "Real-time tracking and proactive alerts" },
      { value: "50%", label: "Support calls down", description: "Customer self-service tracking portals" },
    ],
    useCases: [
      {
        title: "200-Vehicle Fleet Platform",
        description: "GPS tracking, route optimization, and client portal for a 3PL operator.",
        outcome: "30% more deliveries per driver per day",
      },
      {
        title: "OTA Booking Backend",
        description: "Multi-supplier hotel and transport inventory with agent commission engine.",
        outcome: "Booking reconciliation time cut by 60%",
      },
      {
        title: "E-commerce Fulfillment WMS",
        description: "Barcode pick-pack-ship with e-way bill generation at dispatch.",
        outcome: "40% faster warehouse throughput",
      },
      {
        title: "POD Mobile App",
        description: "Photo POD, OTP delivery, and cash-on-delivery reconciliation.",
        outcome: "95% on-time delivery SLA achieved",
      },
    ],
    caseStudy: {
      title: "Integrated Logistics Platform",
      client: "Pan-India 3PL and travel operator",
      challenge: "Separate systems for fleet, warehouse, and bookings; no customer self-service tracking.",
      solution: "Unified logistics ERP, fleet GPS, WMS, booking module, and branded tracking portal.",
      results: [
        "30% increase in deliveries per vehicle",
        "25% fuel cost reduction",
        "50% reduction in customer support calls",
      ],
      tech: ["React", "Python", "PostgreSQL", "Flutter", "Google Maps"],
    },
    workflowSteps: [
      { step: "01", title: "Book", description: "Order/booking capture, allocation, scheduling" },
      { step: "02", title: "Plan", description: "Route optimization, load planning, dispatch" },
      { step: "03", title: "Execute", description: "GPS tracking, status updates, exceptions" },
      { step: "04", title: "Deliver", description: "POD capture, confirmation, feedback" },
      { step: "05", title: "Settle", description: "Billing, COD reconciliation, analytics" },
    ],
    whyMaxwell: [...phase8WhyMaxwell],
    faqs: [
      {
        question: "Can you integrate GPS hardware for fleet tracking?",
        answer:
          "Yes. We integrate Teltonika, Concox, and other tracker APIs, plus smartphone-based tracking for driver apps without dedicated hardware.",
      },
      {
        question: "Do you build travel booking platforms for OTAs?",
        answer:
          "Yes. Inventory management, pricing engines, agent portals, payment integration, and supplier API connectivity for hotels, transport, and packages.",
      },
      {
        question: "Can you implement route optimization for last-mile delivery?",
        answer:
          "Yes. We use Google OR-Tools and custom algorithms considering distance, traffic, delivery windows, vehicle capacity, and priority shipments.",
      },
      {
        question: "Do you build warehouse management with e-way bill integration?",
        answer:
          "Yes. Barcode-driven WMS with pick-pack-ship, GST invoice generation, and e-way bill APIs triggered on approved dispatch events.",
      },
      {
        question: "What is the cost of logistics software in India?",
        answer:
          "Fleet tracking MVP: ₹10L–₹18L. Full logistics ERP with WMS and client portal: ₹25L–₹45L phased over 14–24 weeks.",
      },
      {
        question: "Can clients track shipments in real time?",
        answer:
          "Yes. Branded tracking portals with live maps, ETA updates, and automated SMS/WhatsApp notifications—reducing support volume significantly.",
      },
      {
        question: "How long does a logistics platform take to build?",
        answer:
          "Fleet MVP: 8–12 weeks. Full platform with WMS and booking: 16–28 weeks depending on integration complexity.",
      },
      {
        question: "Do you support multi-hub and cross-dock operations?",
        answer:
          "Yes. Multi-warehouse inventory, hub transfers, cross-dock workflows, and consolidated billing across branches.",
      },
    ],
  },

  [asSlug("fmcg-retail")]: {
    slug: asSlug("fmcg-retail"),
    title: "FMCG & Retail",
    headline: "Software Solutions for Retail & FMCG Companies India | Maxwell Electrodeal",
    subheadline:
      "Distributor ERP, van sales apps, trade promotion management, and omnichannel retail—for FMCG brands and retailers scaling across modern trade, general trade, and e-commerce channels.",
    metaTitle: "Software Solutions for Retail & FMCG Companies India | Maxwell Electrodeal",
    metaDescription:
      "FMCG & retail software development India — distributor ERP, van sales, trade schemes, omnichannel inventory. Maxwell Electrodeal.",
    keywords: [
      "FMCG software development India",
      "retail ERP development India",
      "van sales app development",
      "trade promotion management software",
      "omnichannel retail platform India",
    ],
    icon: "retail",
    gradient: "from-rose-950 via-pink-900 to-slate-950",
    accent: "#F43F5E",
    focusAreas: [
      {
        title: "Distributor & Van Sales",
        description: "Beat planning, order capture, scheme application, and offline mobile sync for field sales.",
      },
      {
        title: "Trade Promotion Management",
        description: "Scheme configuration, claim validation, and retailer visibility on discounts and bundles.",
      },
      {
        title: "Omnichannel Inventory",
        description: "Unified stock across warehouse, distributors, stores, and e-commerce with batch/expiry tracking.",
      },
      {
        title: "Retail Analytics & Forecasting",
        description: "Sell-through dashboards, demand planning, and AI-assisted replenishment.",
      },
    ],
    challenges: [
      {
        title: "General trade opacity",
        description:
          "Distributor and retailer sell-through invisible until month-end—slow response to stockouts and scheme leakage.",
      },
      {
        title: "Scheme and claim disputes",
        description:
          "Trade promotions tracked in spreadsheets; retailers and distributors dispute claim settlements.",
      },
      {
        title: "Expiry and batch risk",
        description:
          "FMCG perishables without FEFO discipline cause write-offs and regulatory exposure.",
      },
      {
        title: "Channel conflict",
        description:
          "E-commerce, modern trade, and GT pricing collide without unified inventory and pricing governance.",
      },
    ],
    solutions: [
      {
        title: "FMCG Distributor ERP",
        description: "Inventory, secondary sales, scheme engine, and Tally/GST integration.",
        category: "ERP",
        serviceSlug: "erp-development",
      },
      {
        title: "Van Sales Mobile App",
        description: "Offline order capture, GPS beat adherence, and instant invoice printing.",
        category: "Mobile",
        serviceSlug: "mobile-app-development",
      },
      {
        title: "Retail CRM & Loyalty",
        description: "Retailer tiers, points, and targeted promotion campaigns.",
        category: "CRM",
        serviceSlug: "crm-development",
      },
      {
        title: "Demand Forecasting AI",
        description: "SKU-level forecasting using sell-through and seasonality signals.",
        category: "AI",
        serviceSlug: "ai-solutions",
      },
    ],
    softwareStack: [
      { name: "Flutter", purpose: "Van sales and retailer ordering apps" },
      { name: "Next.js / React", purpose: "HO dashboards and e-commerce" },
      { name: "Node.js / PostgreSQL", purpose: "ERP, schemes, and inventory APIs" },
      { name: "Tally Integration", purpose: "Statutory books and GST sync" },
      { name: "Power BI / Custom Analytics", purpose: "Sell-through and trade spend reporting" },
    ],
    impactMetrics: [
      { value: "35%", label: "Sell-through visibility", description: "Real-time secondary sales vs month-end lag" },
      { value: "22%", label: "Scheme leakage cut", description: "Automated claim validation" },
      { value: "40%", label: "Expiry write-off drop", description: "FEFO and batch tracking discipline" },
      { value: "28%", label: "Order fulfillment gain", description: "Unified inventory across channels" },
    ],
    useCases: [
      {
        title: "Van Sales Digitization",
        description: "400 field reps with offline ordering, beat plans, and thermal invoice printing.",
        outcome: "Order entry time reduced 50%",
      },
      {
        title: "Trade Scheme Engine",
        description: "Multi-tier schemes with automated claim validation for distributors.",
        outcome: "22% reduction in promotion leakage",
      },
      {
        title: "Omnichannel Retail ERP",
        description: "12 stores plus e-commerce with unified inventory and loyalty.",
        outcome: "28% improvement in fulfillment rate",
      },
      {
        title: "FEFO Warehouse System",
        description: "Batch/expiry tracking with automated pick suggestions.",
        outcome: "40% reduction in expiry write-offs",
      },
    ],
    caseStudy: {
      title: "FMCG Distribution Platform",
      client: "National FMCG brand",
      challenge: "No secondary sales visibility, manual scheme claims, and high expiry write-offs in regional warehouses.",
      solution: "Distributor ERP, van sales app, scheme engine, and sell-through analytics dashboard.",
      results: [
        "35% improvement in sell-through visibility within 90 days",
        "22% cut in trade promotion leakage",
        "40% reduction in expiry-related write-offs",
      ],
      tech: ["Flutter", "Node.js", "PostgreSQL", "Tally API", "React"],
    },
    workflowSteps: [
      { step: "01", title: "Plan", description: "Beat plans, targets, and scheme activation" },
      { step: "02", title: "Sell", description: "Van/retailer orders, pricing, and invoicing" },
      { step: "03", title: "Fulfill", description: "Warehouse pick, dispatch, and POD" },
      { step: "04", title: "Claim", description: "Scheme validation, settlement, and disputes" },
      { step: "05", title: "Analyze", description: "Sell-through, ROI, and replenishment" },
    ],
    whyMaxwell: [...phase8WhyMaxwell],
    faqs: [
      {
        question: "Do you build van sales apps that work offline?",
        answer:
          "Yes. Flutter-based apps with offline order capture, catalog sync, scheme application, and thermal printer integration—syncing when connectivity returns.",
      },
      {
        question: "Can you handle FMCG batch and expiry tracking?",
        answer:
          "Yes. FEFO picking, batch traceability, expiry alerts, and write-off workflows integrated with warehouse and distributor inventory.",
      },
      {
        question: "How do trade promotion schemes work in your system?",
        answer:
          "Configurable slab, bundle, and visibility schemes with automated claim validation against sell-through data—reducing disputes and leakage.",
      },
      {
        question: "Can you integrate with Tally and GST e-invoicing?",
        answer:
          "Yes. Bi-directional Tally sync, e-invoice IRN generation on dispatch, and e-way bill integration for inter-state FMCG movement.",
      },
      {
        question: "What is the cost of FMCG distributor ERP in India?",
        answer:
          "Distributor ERP with van sales: ₹18L–₹32L. Enterprise platform with schemes, analytics, and omnichannel: ₹35L–₹55L phased over 16–28 weeks.",
      },
      {
        question: "Do you support modern trade and general trade in one system?",
        answer:
          "Yes. Channel-specific pricing, inventory allocation, and reporting while maintaining a unified product and scheme master.",
      },
      {
        question: "Can retailers order via their own app?",
        answer:
          "Yes. Retailer ordering apps with scheme visibility, order history, and UPI payment—integrated with distributor fulfillment workflows.",
      },
      {
        question: "How long does FMCG software implementation take?",
        answer:
          "Van sales MVP: 10–14 weeks. Full distributor ERP with schemes and analytics: 18–26 weeks with phased rollout by region.",
      },
    ],
  },
};
