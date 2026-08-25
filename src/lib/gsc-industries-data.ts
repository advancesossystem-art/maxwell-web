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
    headline: "Chemical Manufacturer Websites That Rank on Google — Not Another Directory Listing",
    subheadline:
      "Product catalogs with CAS/grades, SDS/COA request paths, and WhatsApp RFQ for Gujarat chemical plants. Starter from ₹35,000 · Professional catalogs from ₹75,000. Live proof: Drashti Chemicals, Nandesari GIDC.",
    metaTitle: "Chemical Manufacturer Website India | Catalogs from ₹35,000 | Maxwell",
    metaDescription:
      "Website development for chemical manufacturers in Gujarat & India — product catalogs, SDS/COA paths, RFQ forms, GIDC SEO. From ₹35,000. Vadodara team.",
    keywords: [
      "chemical manufacturer website India",
      "website development for chemical manufacturers",
      "chemical industry website design Gujarat",
      "chemical supplier website India",
      "specialty chemical manufacturer website",
      "chemical manufacturer website Vadodara",
      "Nandesari Ankleshwar chemical website",
      "MSDS product page chemical website",
    ],
    icon: "factory",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#0D9488",
    startingPrice: "₹35,000",
    leadFormTitle: "Get a Chemical Manufacturer Website Quote",
    leadFormSubmitLabel: "Request Website Quote",
    focusAreas: [
      {
        title: "Product catalog pages",
        description:
          "Indexed pages per product with CAS numbers, purity grades, packing options, and applications — so procurement managers find you on Google, not only on a paid listing.",
      },
      {
        title: "SDS / COA request paths",
        description:
          "Request flows for Safety Data Sheets and Certificates of Analysis linked to SKUs — builds buyer trust without a PDF brochure dump.",
      },
      {
        title: "WhatsApp & RFQ enquiry",
        description:
          "Structured inquiry forms with quantity, grade, and delivery fields. Money pages route to WhatsApp and email you own.",
      },
      {
        title: "Export inquiry flows",
        description:
          "FOB-style enquiry fields (UN number, HS code, container size) for international buyers shortlisting Gujarat suppliers.",
      },
      {
        title: "GIDC corridor SEO",
        description:
          "On-page SEO for Nandesari, Ankleshwar, Bharuch, Vatva, and product long-tails your buyers already type.",
      },
    ],
    challenges: [
      {
        title: "Directory-only presence",
        description:
          "Buyers search product + Gujarat terms on Google. A rented IndiaMART slot puts you next to competitors and resets every renewal.",
      },
      {
        title: "PDF brochure pretending to be a website",
        description:
          "A five-page ‘Welcome’ site with one downloadable catalog does not rank for grades or CAS terms — and does not capture RFQs.",
      },
      {
        title: "Missing SDS / COA paths",
        description:
          "Procurement teams bounce when they cannot request documents from the product page. That enquiry goes to the next vendor.",
      },
      {
        title: "No WhatsApp on money pages",
        description:
          "Plant owners answer WhatsApp all day. If the site only has a contact form buried in a footer, you lose speed against local competitors.",
      },
    ],
    solutions: [
      {
        title: "Chemical product catalog website",
        description:
          "Category and product IA with CAS, grades, packing, and internal links that support Google indexing.",
        category: "Website",
        serviceSlug: "website-development",
      },
      {
        title: "RFQ & WhatsApp conversion",
        description:
          "Enquiry forms and click-to-WhatsApp on every product and category page you care about.",
        category: "Conversion",
        serviceSlug: "rfq-website-development",
      },
      {
        title: "Industrial SEO setup",
        description:
          "Search Console, sitemap, title/meta aligned to buyer queries, Core Web Vitals on Next.js.",
        category: "SEO",
        serviceSlug: "website-seo",
      },
      {
        title: "Manufacturer website hub",
        description:
          "Same stack we use for engineering and pharma equipment plants — published prices, code ownership.",
        category: "Website",
        serviceSlug: "website-development-for-manufacturers",
      },
      {
        title: "Monthly website AMC",
        description:
          "Product edits, weekly checks, SEO report, and two articles from ₹15,000/month after go-live.",
        category: "AMC",
        serviceSlug: "website-maintenance",
      },
    ],
    softwareStack: [
      { name: "Next.js", purpose: "Fast, SEO-ready manufacturer sites" },
      { name: "Core Web Vitals", purpose: "90+ mobile PageSpeed targets" },
      { name: "Search Console", purpose: "Indexing + query feedback" },
      { name: "WhatsApp CTAs", purpose: "Direct plant owner contact" },
      { name: "RFQ forms", purpose: "Grade / MOQ / city capture" },
      { name: "GST invoice", purpose: "Formal billing on every build" },
    ],
    impactMetrics: [
      { value: "263", label: "Pages live", description: "Drashti Chemicals chemical catalog" },
      { value: "154", label: "Products indexed", description: "Grade-level pages buyers can search" },
      { value: "94/100", label: "Mobile PageSpeed", description: "Drashti live catalog measurement" },
      { value: "₹35k", label: "Starter from", description: "Published website packages — no advance" },
    ],
    useCases: [
      {
        title: "Specialty chemical catalog — Nandesari GIDC",
        description:
          "Drashti Chemicals needed indexed product pages and enquiry paths instead of directory-only leads.",
        outcome: "263-page live catalog with 94/100 mobile PageSpeed",
      },
      {
        title: "Ankleshwar corridor manufacturer site",
        description:
          "Chemical unit wanted CAS-style product pages and export RFQ for Bharuch-belt buyers.",
        outcome: "Owned Google enquiries without renewing directory rent",
      },
      {
        title: "MSME chemical trader website",
        description:
          "Trader with 40 SKUs needed a Starter site that looked real on Google and WhatsApp.",
        outcome: "₹35,000 Starter launch with Search Console at go-live",
      },
      {
        title: "Export-ready chemical catalog",
        description:
          "Exporter needed English product pages with document request paths for overseas buyers.",
        outcome: "Professional catalog architecture from ₹75,000",
      },
    ],
    caseStudy: {
      title: "Drashti Chemicals — Chemical Manufacturer Website",
      client: "Drashti Chemicals, Nandesari GIDC, Vadodara",
      challenge:
        "Directory dependency and no owned catalog buyers could search by product grade.",
      solution:
        "Next.js manufacturer catalog with 154 products, enquiry paths, and technical SEO — delivered by Maxwell Electrodeal.",
      results: [
        "263 pages live with product-level indexing",
        "94/100 mobile PageSpeed on the live catalog",
        "Owned enquiry channel replacing rented directory slots",
      ],
      tech: ["Next.js", "Core Web Vitals", "Search Console", "WhatsApp CTAs"],
    },
    workflowSteps: [
      { step: "01", title: "Discovery", description: "SKU list, competitors, GIDC visit if needed" },
      { step: "02", title: "IA & SEO", description: "Categories, titles, product page template" },
      { step: "03", title: "Build", description: "Next.js catalog, forms, WhatsApp routes" },
      { step: "04", title: "Go-live", description: "Analytics, Search Console, sitemap" },
      { step: "05", title: "AMC", description: "Product edits + monthly SEO report" },
    ],
    whyMaxwell: [
      {
        title: "Vadodara chemical corridor delivery",
        description: "Plant visits across Nandesari, Ankleshwar, and Vatva when the catalog needs shop-floor accuracy.",
      },
      {
        title: "Published website prices",
        description: "Starter ₹35,000 · Professional ₹75,000 · Growth ₹1.5L. No advance — pay after go-live.",
      },
      {
        title: "Named chemical proof",
        description: "Drashti Chemicals live catalog — not a logo wall of unnamed ERP projects.",
      },
      {
        title: "Websites, SEO, AMC — not ERP pitch",
        description: "This page sells manufacturer websites. We do not sell SAP or generic ERP packages here.",
      },
    ],
    faqs: [
      {
        question: "Does a chemical manufacturer need a website to get B2B buyers?",
        answer:
          "Yes. Procurement managers search Google for grades and CAS terms. A chemical manufacturer without an indexed catalog loses buyers to directories. Maxwell builds catalog websites from ₹35,000.",
      },
      {
        question: "What should a chemical manufacturer's website include?",
        answer:
          "Product pages with CAS/grades/packing, SDS/COA request paths, RFQ forms, WhatsApp CTAs, and SEO for buyer queries. See Drashti Chemicals for a live example.",
      },
      {
        question: "What does a chemical manufacturer website cost in India?",
        answer:
          "Starter from ₹35,000. Professional catalogs from ₹75,000. Growth from ₹1,50,000. AMC from ₹15,000/month. GST invoice. No advance on website packages.",
      },
      {
        question: "Do you serve Ankleshwar, Bharuch, and Nandesari?",
        answer:
          "Yes. Maxwell delivers from Vadodara across Gujarat chemical corridors including Nandesari, Ankleshwar, Bharuch, and Vatva — with plant visits when needed.",
      },
      {
        question: "Is this an ERP or CRM software page?",
        answer:
          "No. This page is for chemical manufacturer websites, SEO, and AMC. We do not sell SAP or custom ERP packages on this offer.",
      },
    ],
    seoParagraphs: [
      "Chemical manufacturers in Gujarat lose high-intent buyers when the only digital presence is a paid B2B directory. Procurement teams search product names, grades, and corridor terms on Google — and expect a product page with a clear enquiry path. Maxwell Electrodeal builds chemical manufacturer websites from Vadodara with catalog architecture, SDS/COA request flows, and WhatsApp RFQ.",
      "Our live proof is Drashti Chemicals (Nandesari GIDC): 263 pages, 154 products, 94/100 mobile PageSpeed. That is a manufacturer catalog, not a software demo. Published prices start at ₹35,000 for Starter sites and ₹75,000 for Professional catalogs, with monthly AMC from ₹15,000.",
      "Whether you are in Ankleshwar, Bharuch, Vatva, or Nandesari, the job is the same: own the enquiry channel. Maxwell focuses this page on website development for chemical manufacturers — not ERP or CRM software pitches.",
    ],
    resourceLinks: [
      { label: "Manufacturer Website Development", href: "/services/website-development-for-manufacturers" },
      { label: "Chemical Manufacturer Websites", href: "/services/website-development/chemical-manufacturers" },
      { label: "Drashti Chemicals Case Study", href: "/case-studies/drashti-chemicals" },
      { label: "Website Development Company Vadodara", href: "/solutions/web-development-company-vadodara" },
      { label: "Nandesari GIDC Websites", href: "/locations/india/gujarat/nandesari-gidc" },
      { label: "Ankleshwar GIDC Websites", href: "/locations/india/gujarat/ankleshwar-gidc" },
      { label: "Website Pricing", href: "/pricing" },
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
