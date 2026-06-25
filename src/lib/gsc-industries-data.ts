import type { IndustryPageData } from "./industries-data";

const sharedWhyMaxwell = [
  {
    title: "Industry-Native Engineering",
    description: "We map shop-floor, dealer, and campus workflows before writing code — not the other way around.",
  },
  {
    title: "Compliance-Aware Architecture",
    description: "Audit trails, role-based access, and regulatory documentation are designed in from sprint one.",
  },
  {
    title: "Measurable ROI Focus",
    description: "We define success metrics upfront — batch accuracy, dispatch turnaround, or consent audit readiness.",
  },
  {
    title: "Long-Term Partnership",
    description: "Post-launch support, optimization, and module expansion as your operations scale across India.",
  },
] as const;

export const gscIndustrySlugs = [
  "chemical-manufacturing",
  "cement-construction-materials",
  "education-data-privacy",
] as const;

export const gscIndustriesData: Record<(typeof gscIndustrySlugs)[number], IndustryPageData> = {
  "chemical-manufacturing": {
    slug: "chemical-manufacturing",
    title: "Chemical Manufacturing",
    headline: "CRM & ERP Software for Chemical Manufacturing Companies India",
    subheadline:
      "Maxwell Electrodeal builds CRM and ERP platforms for chemical manufacturers, distributors, and specialty chemical traders — with batch genealogy, Safety Data Sheet (SDS) management, hazmat inventory controls, and GST-ready reporting. Projects typically start from ₹2,50,000 with phased rollout across sales, warehouse, and production teams.",
    metaTitle: "CRM Software for Chemical Industry India | Chemical Manufacturing CRM",
    metaDescription:
      "CRM & ERP software for chemical manufacturing companies in India — batch tracking, SDS compliance, hazmat inventory, regulatory reporting & distributor CRM. From ₹2,50,000. Gujarat & pan-India delivery.",
    keywords: [
      "CRM software for chemical industry",
      "chemical manufacturing CRM",
      "chemical industry ERP India",
      "batch tracking software chemical",
      "MSDS management software India",
      "hazmat inventory software",
    ],
    icon: "factory",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#0D9488",
    startingPrice: "₹2,50,000",
    leadFormTitle: "Get a Chemical Industry Software Quote",
    leadFormSubmitLabel: "Get Chemical Industry CRM Quote",
    focusAreas: [
      {
        title: "Batch & Lot Traceability",
        description:
          "Forward and backward traceability from raw material receipt through reaction, blending, QC release, and dispatch — with genealogy reports auditors expect in minutes, not days.",
      },
      {
        title: "Safety Data Sheet (SDS) Vault",
        description:
          "Version-controlled SDS library linked to SKUs, batches, and customer shipments. Automatic expiry alerts when formulations change or suppliers issue revised sheets.",
      },
      {
        title: "Hazmat & Storage Compliance",
        description:
          "Segregation rules, storage capacity limits, UN classification flags, and dispatch documentation for flammable, corrosive, and toxic inventory across warehouses and tank farms.",
      },
      {
        title: "Regulatory & Environmental Reporting",
        description:
          "Structured data exports for pollution control submissions, waste manifests, and internal HSE dashboards — reducing manual compilation before quarterly audits.",
      },
      {
        title: "Chemical Distributor CRM",
        description:
          "Pipeline management for bulk traders and distributors: inquiry-to-quote, sample tracking, credit limits, transporter assignment, and repeat-order forecasting by product family.",
      },
    ],
    challenges: [
      {
        title: "Batch records trapped in spreadsheets",
        description:
          "Production teams log batch weights, reactor times, and QC results in Excel. When a customer complaint arrives six months later, reconstructing genealogy takes days and risks incomplete recall data.",
      },
      {
        title: "SDS chaos across email and folders",
        description:
          "Safety Data Sheets live in shared drives, WhatsApp forwards, and supplier emails. Sales dispatches products without confirming the latest SDS version — a compliance and liability gap.",
      },
      {
        title: "Hazmat storage rules enforced manually",
        description:
          "Warehouse staff rely on experience to segregate incompatible chemicals. Without system-enforced rules, near-misses and audit findings accumulate quietly.",
      },
      {
        title: "Sales and inventory on different systems",
        description:
          "CRM tracks quotes in one tool while stock, batch availability, and transporter docs sit elsewhere. Order confirmation delays cost margin on time-sensitive chemical trades.",
      },
    ],
    solutions: [
      {
        title: "Chemical Industry CRM",
        description:
          "Lead-to-order CRM for manufacturers and distributors: account hierarchies, product catalogs with hazard flags, quote versioning, sample requests, and integration with inventory availability.",
        category: "CRM",
        serviceSlug: "crm-development",
      },
      {
        title: "Batch Manufacturing ERP",
        description:
          "End-to-end ERP for process manufacturing: BOMs, reactor scheduling, in-process QC, batch release, co-product handling, and Tally/GST integration for Indian chemical units.",
        category: "ERP",
        serviceSlug: "erp-development",
      },
      {
        title: "Hazmat Warehouse Module",
        description:
          "Location-aware inventory with segregation matrices, drum/tank tracking, expiry and retest dates, and dispatch checklists before goods leave the gate.",
        category: "Inventory",
        serviceSlug: "erp-development",
      },
      {
        title: "SDS & Document Compliance Hub",
        description:
          "Central repository with approval workflows, customer-specific SDS bundles, and shipment-linked document packs for export and domestic consignments.",
        category: "Compliance",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Regulatory Reporting Dashboard",
        description:
          "Configurable exports for environmental, waste, and production summaries — replacing manual consolidation before board and authority submissions.",
        category: "Reporting",
        serviceSlug: "erp-development",
      },
    ],
    softwareStack: [
      { name: "React / Next.js", purpose: "Operations dashboards & CRM portals" },
      { name: "Node.js API", purpose: "Batch logic, integrations, audit logs" },
      { name: "PostgreSQL", purpose: "Batch genealogy & transactional records" },
      { name: "Document Store", purpose: "SDS PDF vault with versioning" },
      { name: "Tally / GST Bridge", purpose: "Finance & e-invoice alignment" },
      { name: "Mobile QC App", purpose: "Shop-floor sampling & batch status" },
    ],
    impactMetrics: [
      { value: "99.5%", label: "Batch Trace Accuracy", description: "Audit-ready genealogy from raw material to dispatch" },
      { value: "48hr", label: "Audit Prep Time", description: "Down from two weeks of manual record compilation" },
      { value: "35%", label: "Less Manual Entry", description: "Automated batch status and inventory updates" },
      { value: "₹9L+", label: "Annual Savings", description: "Typical reduction in rework, write-offs, and dispatch errors" },
    ],
    useCases: [
      {
        title: "Specialty Chemical Manufacturer — Gujarat",
        description:
          "A Vadodara-area unit producing industrial intermediates needed reactor scheduling tied to batch genealogy and MSDS links on every dispatch note.",
        outcome: "99.5% batch accuracy and audit prep in 48 hours vs. two weeks",
      },
      {
        title: "Bulk Chemical Trading CRM",
        description:
          "A Gujarat chemical trading company managing 200+ SKUs across multiple warehouses required quote-to-dispatch CRM with credit control and transporter assignment.",
        outcome: "40% faster order confirmation and fewer stock mismatches",
      },
      {
        title: "Export Consignment Documentation",
        description:
          "Exporter needed SDS, COA, and packing lists auto-bundled per shipment with version control when formulations changed mid-season.",
        outcome: "Zero dispatch holds for missing compliance documents",
      },
      {
        title: "Hazmat Warehouse Digitization",
        description:
          "Multi-location storage for flammable and corrosive drums with segregation rules enforced at pick-list generation.",
        outcome: "Clean internal HSE audits with digital segregation logs",
      },
    ],
    caseStudy: {
      title: "Chemical Industry ERP — Gujarat Trading & Manufacturing",
      client: "Gujarat-based chemical trading and manufacturing group",
      challenge:
        "Batch records, MSDS files, and customer quotes lived in disconnected spreadsheets. Dispatch teams could not confirm batch availability or latest SDS versions before loading trucks.",
      solution:
        "Integrated CRM and ERP with batch genealogy, SDS document vault, hazmat storage rules, reactor scheduling, and Tally/GST integration — deployed in phased sprints across sales and warehouse teams.",
      results: [
        "99.5% batch trace accuracy across production and trading divisions",
        "Audit preparation reduced from two weeks to 48 hours",
        "35% reduction in manual data entry on shop floor and dispatch",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "Tally integration"],
    },
    workflowSteps: [
      { step: "01", title: "Inquiry & Quote", description: "CRM capture, hazard review, sample requests" },
      { step: "02", title: "Production / Procurement", description: "Batch planning, reactor schedule, raw material QC" },
      { step: "03", title: "QC Release", description: "In-process tests, COA generation, batch approval" },
      { step: "04", title: "Dispatch", description: "SDS bundle, transporter docs, e-way alignment" },
      { step: "05", title: "Compliance Archive", description: "Genealogy reports, audit logs, regulatory exports" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "Do you build CRM software specifically for the chemical industry?",
        answer:
          "Yes. We build chemical manufacturing CRM with product catalogs that include hazard classifications, batch-linked availability, sample tracking, and quote workflows tuned for distributors and manufacturers — not generic sales pipelines renamed for chemicals.",
      },
      {
        question: "Can your ERP handle batch manufacturing and traceability?",
        answer:
          "Our chemical ERP supports batch genealogy, reactor scheduling, co-products, QC hold/release, and recall reports. Each batch links raw lots, production parameters, and dispatch customers for audit-ready traceability.",
      },
      {
        question: "How do you manage Safety Data Sheets (SDS) in the software?",
        answer:
          "SDS documents are stored in a version-controlled vault linked to SKUs and batches. The system alerts teams when sheets expire or suppliers issue updates, and dispatch workflows block shipments if required SDS versions are missing.",
      },
      {
        question: "Does the system support hazmat storage compliance?",
        answer:
          "Yes. We configure segregation matrices, storage capacity limits, and UN classification flags. Pick lists and transfer orders enforce compatible storage rules before material moves between locations.",
      },
      {
        question: "What is the starting price for chemical industry CRM or ERP?",
        answer:
          "Engagements typically start from ₹2,50,000 for a focused CRM or warehouse module, with full ERP rollouts scoped after discovery. Final pricing depends on batch complexity, locations, integrations (Tally/GST), and mobile QC requirements.",
      },
      {
        question: "Can you integrate with Tally and GST e-invoicing?",
        answer:
          "We routinely integrate chemical operations software with Tally, GST e-invoice APIs, and transporter workflows common in Gujarat and pan-India chemical corridors.",
      },
      {
        question: "Have you delivered projects for chemical companies in Gujarat?",
        answer:
          "Yes. Our chemical industry case study covers a Gujarat trading and manufacturing group with batch ERP, MSDS traceability, and CRM — achieving 99.5% batch accuracy and dramatically faster audit preparation.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "A phased CRM or warehouse module can go live in 8–12 weeks. Full ERP with production and compliance modules typically runs 14–20 weeks depending on data migration and plant locations.",
      },
    ],
  },

  "cement-construction-materials": {
    slug: "cement-construction-materials",
    title: "Cement & Construction Materials",
    headline: "Software Solutions for Cement & Construction Material Companies India",
    subheadline:
      "Maxwell builds cement plant software and ERP platforms for cement manufacturers, RMC plants, and building material distributors — covering production tracking, dispatch logistics, weighbridge integration, and dealer network management. Implementations start from ₹5,00,000 with dealer portals and mobile dispatch apps.",
    metaTitle: "Cement Plant Software India | Construction Material ERP",
    metaDescription:
      "Cement plant software & ERP for Indian manufacturers — production tracking, dispatch, weighbridge, dealer/distributor portals & GST billing. From ₹5,00,000. Pan-India delivery.",
    keywords: [
      "cement plant software",
      "cement ERP India",
      "construction material software",
      "dealer management cement",
      "RMC plant software India",
      "building materials ERP",
    ],
    icon: "construction",
    gradient: "from-stone-950 via-neutral-900 to-slate-950",
    accent: "#78716C",
    startingPrice: "₹5,00,000",
    leadFormTitle: "Get Cement & Building Materials Software Quote",
    leadFormSubmitLabel: "Request Cement Plant Software Quote",
    focusAreas: [
      {
        title: "Production & Plant Tracking",
        description:
          "Shift-wise clinker and cement output, kiln/RMC batch logs, downtime reasons, and energy consumption dashboards for plant managers and HO teams.",
      },
      {
        title: "Dispatch & Logistics Control",
        description:
          "Truck assignment, delivery challans, transporter rate contracts, GPS milestones, and proof-of-delivery capture for bulk cement and aggregates.",
      },
      {
        title: "Dealer & Distributor Network",
        description:
          "Credit limits, scheme pricing by zone, ledger reconciliation, secondary sales visibility, and self-service ordering through dealer portals.",
      },
      {
        title: "Weighbridge Integration",
        description:
          "Automated gross/tare capture linked to dispatch orders — reducing manual weighbridge disputes and speeding gate-out documentation.",
      },
      {
        title: "Finance & GST Alignment",
        description:
          "Tally-ready billing, e-invoice generation, freight accounting, and region-wise profitability for cement bags, bulk, and allied building products.",
      },
    ],
    challenges: [
      {
        title: "Production data arrives too late",
        description:
          "Plant output is logged manually at shift end. Head office discovers shortfalls hours later — too late to adjust dispatch plans or investigate kiln issues.",
      },
      {
        title: "Dispatch bottlenecks at the gate",
        description:
          "Weighbridge queues, handwritten challans, and phone-based truck assignments create delays, revenue leakage, and transporter billing disputes.",
      },
      {
        title: "Dealer ledger confusion",
        description:
          "Schemes, freight subsidies, and credit notes are tracked in spreadsheets. Dealers dispute balances; sales teams lack a single source of truth.",
      },
      {
        title: "Regional pricing complexity",
        description:
          "Zone-wise pricing, promotional schemes, and RMC grade variations make manual quoting error-prone — especially during peak construction seasons.",
      },
    ],
    solutions: [
      {
        title: "Cement Plant ERP",
        description:
          "Unified platform for production, inventory, dispatch, billing, and dealer accounts — designed for cement plants, grinding units, and RMC operations.",
        category: "ERP",
        serviceSlug: "erp-development",
      },
      {
        title: "Dealer & Distributor Portal",
        description:
          "Self-service ordering, ledger views, scheme eligibility, delivery tracking, and digital payment reconciliation for your dealer network.",
        category: "Portal",
        serviceSlug: "crm-development",
      },
      {
        title: "Dispatch & Fleet Module",
        description:
          "Order-to-truck workflow with weighbridge hooks, challan printing, transporter contracts, and mobile POD for drivers and site receivers.",
        category: "Logistics",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Production Monitoring Dashboard",
        description:
          "Real-time and shift-wise KPIs for output, downtime, and quality parameters — with alerts when production deviates from targets.",
        category: "Analytics",
        serviceSlug: "erp-development",
      },
      {
        title: "Sales CRM for Building Materials",
        description:
          "Inquiry tracking for bulk orders, project-based pricing, and coordination between sales, plant dispatch, and finance teams.",
        category: "CRM",
        serviceSlug: "crm-development",
      },
    ],
    softwareStack: [
      { name: "Cement ERP Core", purpose: "Production, inventory, billing" },
      { name: "Dealer Portal", purpose: "Orders, ledgers, schemes" },
      { name: "Weighbridge API", purpose: "Automated weight capture" },
      { name: "Driver Mobile App", purpose: "Dispatch status & POD" },
      { name: "PostgreSQL", purpose: "Transactional & analytics data" },
      { name: "Tally / GST", purpose: "Finance integration" },
    ],
    impactMetrics: [
      { value: "30%", label: "Faster Dispatch Cycle", description: "Gate-to-exit time reduced with digital challans" },
      { value: "25%", label: "Fewer Ledger Disputes", description: "Dealer balances reconciled in real time" },
      { value: "15%", label: "Plant Visibility Gain", description: "HO sees shift output same day vs. next morning" },
      { value: "100%", label: "Weighbridge Linked Orders", description: "Every load tied to approved dispatch order" },
    ],
    useCases: [
      {
        title: "Integrated Cement Plant Operations",
        description:
          "Grinding unit needed shift production logs tied to silo inventory and automated dispatch from approved dealer orders.",
        outcome: "Same-day production visibility for head office",
      },
      {
        title: "Dealer Network Portal Rollout",
        description:
          "Regional cement brand with 400+ dealers required self-service ordering, scheme tracking, and ledger transparency.",
        outcome: "25% reduction in dealer balance disputes",
      },
      {
        title: "RMC Dispatch Optimization",
        description:
          "Ready-mix plant coordinated grade recipes, truck rotation, and site pour schedules through mobile dispatch.",
        outcome: "30% improvement in truck utilization during peak season",
      },
      {
        title: "Weighbridge Automation",
        description:
          "Bulk dispatch gate integrated with weighbridge software to eliminate manual weight entry and challan mismatches.",
        outcome: "Zero revenue leakage from unlinked weighbridge tickets",
      },
    ],
    caseStudy: {
      title: "Construction Materials Operations Platform",
      client: "Multi-location building materials and dispatch operation",
      challenge:
        "Production, dispatch, and dealer accounts ran on separate tools. Weighbridge data was re-keyed manually, and dealers disputed ledger balances every quarter.",
      solution:
        "Cement plant software with production dashboards, weighbridge-linked dispatch, dealer portal, and Tally integration — rolled out plant-first then dealer network.",
      results: [
        "30% faster dispatch cycle at plant gates",
        "25% fewer dealer ledger disputes",
        "Same-day production reporting to head office",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Weighbridge API", "Tally"],
    },
    workflowSteps: [
      { step: "01", title: "Order Intake", description: "Dealer portal, sales CRM, credit check" },
      { step: "02", title: "Production Plan", description: "Shift targets, silo levels, RMC recipes" },
      { step: "03", title: "Dispatch", description: "Truck assign, weighbridge, challan" },
      { step: "04", title: "Delivery", description: "POD, site receipt, transporter billing" },
      { step: "05", title: "Settlement", description: "GST invoice, dealer ledger, scheme reconciliation" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "What is cement plant software and what does it include?",
        answer:
          "Cement plant software typically covers production tracking, silo inventory, dispatch and weighbridge integration, dealer management, and GST billing. Maxwell delivers these as an integrated ERP rather than disconnected plant and sales tools.",
      },
      {
        question: "Can you integrate with existing weighbridge systems?",
        answer:
          "Yes. We integrate with common weighbridge hardware and middleware via APIs or file drops, linking gross/tare weights directly to dispatch orders and challans.",
      },
      {
        question: "Do you provide a dealer and distributor portal?",
        answer:
          "Our dealer portal supports order placement, ledger views, scheme eligibility, delivery tracking, and document downloads — reducing phone-based order taking and balance disputes.",
      },
      {
        question: "Is the software suitable for RMC plants as well as cement grinding units?",
        answer:
          "Yes. We configure modules for RMC grade recipes, truck rotation, site pour schedules, and bulk cement dispatch from grinding and packing plants.",
      },
      {
        question: "What is the starting investment for cement plant ERP?",
        answer:
          "Engagements typically start from ₹5,00,000 for a plant dispatch and dealer module foundation. Full multi-plant ERP with production analytics is scoped after discovery workshops.",
      },
      {
        question: "Does it work with Tally and GST e-invoicing?",
        answer:
          "We integrate with Tally and GST e-invoice workflows common in Indian cement and building material businesses, including freight and subsidy accounting.",
      },
      {
        question: "How long does a typical implementation take?",
        answer:
          "Plant dispatch and weighbridge modules often go live in 10–14 weeks. Full dealer network and production analytics rollouts typically run 16–24 weeks depending on locations and data migration.",
      },
      {
        question: "Can sales teams use a CRM alongside the ERP?",
        answer:
          "Yes. We build CRM for project-based bulk orders and link confirmed deals to plant dispatch — see our CRM development and ERP development services for module details.",
      },
    ],
  },

  "education-data-privacy": {
    slug: "education-data-privacy",
    title: "Education Data Privacy",
    headline: "Student Data Privacy Software & Education Management Systems India",
    subheadline:
      "Maxwell builds student data privacy software and education management systems aligned with India's Digital Personal Data Protection (DPDP) Act — consent management, role-based access, encryption, audit trails, and parent-facing portals for schools, colleges, and EdTech platforms serving Indian learners.",
    metaTitle: "Student Data Privacy Software India — DPDP Ready",
    metaDescription:
      "Protect student PII with consent logs, role-based access & audit trails for schools and EdTech. DPDP-aligned builds from Vadodara. Request a privacy assessment.",
    keywords: [
      "student data privacy software",
      "education data privacy India",
      "DPDP Act education software",
      "school management software privacy",
      "EdTech data protection India",
      "student information system India",
    ],
    icon: "education",
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    accent: "#8B5CF6",
    leadFormTitle: "Get Education Data Privacy Software Quote",
    leadFormSubmitLabel: "Request Student Data Privacy Assessment",
    focusAreas: [
      {
        title: "DPDP Act Compliance Framework",
        description:
          "Purpose limitation, consent capture, data principal rights workflows, breach notification procedures, and retention schedules mapped to school and college operations.",
      },
      {
        title: "Consent & Preference Management",
        description:
          "Granular consent for photos, communications, third-party EdTech tools, and marketing — with timestamped logs parents and auditors can review.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Teachers, counsellors, admins, and vendors see only the student fields their role requires — with automatic masking for sensitive identifiers.",
      },
      {
        title: "Education Management Core",
        description:
          "Admissions, attendance, fees, examinations, and parent communication in one platform — privacy by design rather than bolted-on permissions.",
      },
      {
        title: "Audit Trails & Data Subject Requests",
        description:
          "Immutable logs of who accessed or exported student records, plus workflows to handle correction, deletion, and portability requests under DPDP.",
      },
    ],
    challenges: [
      {
        title: "Student PII scattered across tools",
        description:
          "Admissions spreadsheets, WhatsApp groups, legacy LMS platforms, and fee apps each hold fragments of student data — with no unified consent or retention policy.",
      },
      {
        title: "Weak access controls",
        description:
          "Staff share login credentials or export full student lists when they only need attendance for one class — increasing breach and compliance risk.",
      },
      {
        title: "EdTech vendor sprawl",
        description:
          "Schools adopt third-party apps without data processing agreements or parent consent trails — a gap regulators and parents increasingly question.",
      },
      {
        title: "No breach readiness",
        description:
          "Institutions lack playbooks, logging, and notification workflows required when student data incidents occur — exposing leadership to regulatory and reputational damage.",
      },
    ],
    solutions: [
      {
        title: "Student Data Privacy Platform",
        description:
          "Central governance layer for consent, access policies, encryption, and audit logs — integrated with your SIS, LMS, and parent apps.",
        category: "Privacy",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Education Management System (EMS)",
        description:
          "Admissions-to-alumni campus software with privacy controls embedded in every module — attendance, fees, exams, and communications.",
        category: "EMS",
        serviceSlug: "erp-development",
      },
      {
        title: "Parent & Student Portals",
        description:
          "Secure portals with consent dashboards, communication preferences, and document access — mobile-first for Indian parents.",
        category: "Portal",
        serviceSlug: "crm-development",
      },
      {
        title: "Examination & Records Module",
        description:
          "Online exams, grade books, and transcript generation with field-level permissions and export controls for counsellors and registrars.",
        category: "Academics",
        serviceSlug: "custom-software-development",
      },
      {
        title: "Vendor & Integration Governance",
        description:
          "Register third-party EdTech integrations, map data flows, and enforce API scopes so external tools cannot over-fetch student records.",
        category: "Integration",
        serviceSlug: "crm-development",
      },
    ],
    softwareStack: [
      { name: "Next.js EMS", purpose: "Web admin & parent portals" },
      { name: "Flutter Mobile", purpose: "Student & parent apps" },
      { name: "PostgreSQL", purpose: "Encrypted student records" },
      { name: "Audit Log Service", purpose: "Immutable access trails" },
      { name: "Consent Registry", purpose: "DPDP-aligned consent store" },
      { name: "Azure / AWS India", purpose: "Data residency options" },
    ],
    impactMetrics: [
      { value: "100%", label: "Consent Log Coverage", description: "Parent consents timestamped and retrievable" },
      { value: "90%", label: "Parent Portal Adoption", description: "On deployed education privacy rollouts" },
      { value: "80%", label: "Access Requests Automated", description: "Role-based views vs. manual exports" },
      { value: "48hr", label: "DSR Turnaround", description: "Data subject request workflow target" },
    ],
    useCases: [
      {
        title: "School Chain DPDP Readiness",
        description:
          "Multi-branch CBSE group needed unified consent, staff access policies, and audit logs before DPDP enforcement milestones.",
        outcome: "Board-ready privacy documentation and live consent registry",
      },
      {
        title: "EdTech Platform Data Governance",
        description:
          "Online learning provider required tenant isolation, parental consent for minors, and API scopes for content partners.",
        outcome: "Clean security review for institutional sales",
      },
      {
        title: "College Admissions Privacy",
        description:
          "Private college digitized admissions with document encryption, counsellor-only views, and retention rules for rejected applicants.",
        outcome: "70% faster admission processing with privacy controls intact",
      },
      {
        title: "Exam Records & Transcript Control",
        description:
          "Examination cell needed role-based grade access and controlled transcript exports for verification requests.",
        outcome: "Zero unauthorized bulk exports in audit sampling",
      },
    ],
    caseStudy: {
      title: "Education Platform with Privacy-First Architecture",
      client: "Multi-school education group in India",
      challenge:
        "Student data lived across legacy LMS, fee software, and WhatsApp workflows with no consent registry or access auditing — DPDP readiness was a board-level risk.",
      solution:
        "Unified education management system with consent management, role-based access, encrypted records, parent portal, and vendor integration governance.",
      results: [
        "100% consent events logged with parent timestamps",
        "90% parent portal adoption within one academic year",
        "Audit-ready access trails for regulatory review",
      ],
      tech: ["Next.js", "Flutter", "PostgreSQL", "Azure", "Consent API"],
    },
    workflowSteps: [
      { step: "01", title: "Consent & Enrollment", description: "Admission, purpose notice, parent consent" },
      { step: "02", title: "Daily Operations", description: "Attendance, LMS, fee, communications" },
      { step: "03", title: "Assessment", description: "Exams, grades, controlled exports" },
      { step: "04", title: "Governance", description: "Access reviews, vendor registry, retention" },
      { step: "05", title: "Data Subject Rights", description: "Correction, deletion, portability workflows" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      {
        question: "What is student data privacy software?",
        answer:
          "Student data privacy software governs how schools and EdTech platforms collect, store, share, and delete learner personal data — including consent logs, access controls, encryption, and audit trails required under India's DPDP Act.",
      },
      {
        question: "Is your education software DPDP Act compliant?",
        answer:
          "We architect for DPDP principles: purpose limitation, consent, data principal rights, security safeguards, and breach readiness. Final compliance also depends on your policies, vendor contracts, and operational processes — we document technical controls for your legal review.",
      },
      {
        question: "Can parents manage consent and communication preferences?",
        answer:
          "Yes. Parent portals include consent dashboards for photos, messaging, third-party apps, and marketing — with timestamps stored for audit purposes.",
      },
      {
        question: "Do you build full school management systems or privacy layers only?",
        answer:
          "Both. We deliver full education management systems with privacy embedded, or a governance layer integrated with your existing SIS/LMS via APIs.",
      },
      {
        question: "How do you handle third-party EdTech integrations?",
        answer:
          "We register vendors, map data fields shared, enforce API scopes, and log cross-system access so schools know exactly which app touched which student record.",
      },
      {
        question: "Where is student data hosted?",
        answer:
          "We deploy on AWS or Azure with India region options where required. Encryption at rest and in transit, backup policies, and access logging are standard.",
      },
      {
        question: "Can you support data subject access and deletion requests?",
        answer:
          "Yes. Workflows route correction, deletion, and portability requests to data owners with SLA tracking — essential for DPDP data principal rights.",
      },
      {
        question: "How does this relate to your CRM and ERP services?",
        answer:
          "Education EMS modules overlap ERP patterns (fees, inventory, HR). Parent engagement and admissions pipelines use CRM-style workflows — see our ERP development and CRM development pages for related capabilities.",
      },
    ],
  },
};
