export const caseStudyIndustries = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Logistics",
  "Retail",
  "Construction",
] as const;

export const caseStudyServices = [
  "ERP Development",
  "Custom Software Development",
  "Mobile App Development",
  "AI Solutions",
  "SaaS Development",
  "Cloud Solutions",
  "CRM Development",
] as const;

export const caseStudyProjectValues = [
  "₹5L–₹15L",
  "₹15L–₹30L",
  "₹30L–₹50L",
  "₹50L+",
] as const;

export const caseStudyTechnologies = [
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  "Python",
  "AWS",
] as const;

export const caseStudyOutcomes = [
  "Efficiency",
  "Automation",
  "Revenue Growth",
  "Cost Reduction",
  "Compliance",
  "Scalability",
] as const;

export type CaseStudyIndustry = (typeof caseStudyIndustries)[number];
export type CaseStudyService = (typeof caseStudyServices)[number];
export type CaseStudyProjectValue = (typeof caseStudyProjectValues)[number];
export type CaseStudyTechnology = (typeof caseStudyTechnologies)[number];
export type CaseStudyOutcome = (typeof caseStudyOutcomes)[number];

export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  executiveSummary: string;
  clientProfile: {
    name: string;
    overview: string;
    size: string;
    location: string;
    sector: string;
  };
  initialSituation: string;
  challenges: string[];
  projectGoals: string[];
  discoveryPlanning: string[];
  solutionArchitecture: {
    overview: string;
    layers: { name: string; items: string[] }[];
  };
  designProcess: string[];
  developmentProcess: string[];
  technologyStack: string[];
  deploymentStrategy: string[];
  roiMetrics: { value: string; label: string; description: string }[];
  results: { metric: string; label: string; description: string }[];
  testimonial: { quote: string; author: string; role: string; company: string };
  lessonsLearned: string[];
  similarSolutions: { title: string; href: string; description: string }[];
  trust: {
    projectValue: CaseStudyProjectValue;
    timeline: string;
    industry: CaseStudyIndustry;
    teamSize: string;
    technologies: string[];
    businessOutcome: CaseStudyOutcome;
    supportPeriod: string;
  };
  filters: {
    industry: CaseStudyIndustry;
    service: CaseStudyService;
    projectValue: CaseStudyProjectValue;
    technologies: CaseStudyTechnology[];
    businessOutcome: CaseStudyOutcome;
  };
  timeline: { phase: string; duration: string; description: string }[];
  milestones: { label: string; period: string; description: string }[];
  beforeAfter: { before: string[]; after: string[] };
  workflowSteps: { title: string; description: string }[];
  accent: string;
  gradient: string;
  cardHighlight: string;
  publishedAt: string;
}

export const caseStudySlugs = [
  "manufacturing-erp",
  "healthcare-management",
  "logistics-platform",
  "educational-portal",
  "retail-analytics",
  "construction-platform",
  "ai-safety-monitoring",
  "saas-workforce-management",
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

export { caseStudyStats } from "@/lib/company-metrics";

export const caseStudiesData: Record<CaseStudySlug, CaseStudyData> = {
  "manufacturing-erp": {
    slug: "manufacturing-erp",
    title: "a manufacturing client Manufacturing ERP",
    subtitle: "How a mid-size manufacturer unified 3 facilities and saved ₹12L annually with custom ERP.",
    metaTitle: "Manufacturing ERP Case Study — 40% Less Manual Work",
    metaDescription:
      "Enterprise case study: Maxwell Electrodeal delivered a manufacturing ERP for A precision manufacturing group—40% less manual entry, ₹12L annual savings, 99.2% inventory accuracy.",
    executiveSummary:
      "A precision manufacturing group operated three production facilities with disconnected Excel workflows, manual inventory counts, and two-week month-end reconciliation cycles. Maxwell Electrodeal designed and deployed a modular ERP aligned to their GRN → production → QC → dispatch workflow. Within 14 weeks, all facilities were live with barcode scanning, real-time dashboards, and Tally integration—delivering measurable ROI in the first quarter.",
    clientProfile: {
      name: "Leading manufacturing organization",
      overview:
        "Mid-size precision manufacturing company producing 200+ SKUs for automotive and industrial clients across Gujarat.",
      size: "450 employees · 3 facilities",
      location: "Gujarat, India",
      sector: "Precision Manufacturing",
    },
    initialSituation:
      "Operations ran on Excel spreadsheets and legacy Tally disconnected from the shop floor. Production scheduling happened via WhatsApp. Inventory accuracy sat at 87%, causing material shortages and delayed orders worth ₹15L+ annually in waste.",
    challenges: [
      "No real-time visibility across 3 warehouses and production lines",
      "Manual data entry causing errors and 2-week reconciliation cycles",
      "Production scheduling via informal channels with no capacity planning",
      "Supplier coordination through phone calls and email with no portal",
      "Finance team unable to reconcile shop floor data with accounting",
    ],
    projectGoals: [
      "Unify inventory, production, and finance across all facilities",
      "Reduce manual data entry by at least 35%",
      "Achieve 95%+ inventory accuracy with barcode scanning",
      "Enable real-time OEE dashboards for plant managers",
      "Integrate with existing Tally for GST-compliant accounting",
    ],
    discoveryPlanning: [
      "2-week shop floor observation across all 3 facilities",
      "Workflow mapping workshops with production, inventory, and finance teams",
      "Current-state process documentation and pain point prioritization",
      "Phased rollout plan: Facility 1 pilot → validation → Facilities 2 & 3",
      "Technical architecture review with IT and Tally integration partner",
    ],
    solutionArchitecture: {
      overview:
        "Modular microservices architecture with a React admin portal, shop floor tablet apps, PostgreSQL for transactional data, and AWS for hosting. Tally sync runs as a dedicated integration service with bi-directional GST-compliant data flow.",
      layers: [
        { name: "Presentation", items: ["React Web Admin", "Shop Floor Tablet UI", "Executive Dashboards"] },
        { name: "Application", items: ["Inventory Service", "Production Service", "QC Module", "Supplier Portal API"] },
        { name: "Integration", items: ["Tally Bi-directional Sync", "Barcode Scanner SDK", "SMS Alerts"] },
        { name: "Data", items: ["PostgreSQL Primary", "Read Replicas for Reporting", "S3 for Documents"] },
        { name: "Infrastructure", items: ["AWS ECS", "CloudWatch Monitoring", "Automated Backups"] },
      ],
    },
    designProcess: [
      "Role-based dashboard wireframes for management, supervisors, and operators",
      "Shop floor UX optimized for gloved hands and tablet use in factory lighting",
      "Interactive prototypes tested with 12 end users before development",
      "Visual hierarchy designed for at-a-glance OEE and inventory status",
    ],
    developmentProcess: [
      "Agile sprints with weekly demos to plant managers",
      "Barcode integration for inventory scanning on shop floor tablets",
      "Real-time PostgreSQL with read replicas for reporting performance",
      "Tally bi-directional sync for GST-compliant accounting",
      "Phased rollout: Facility 1 → 2 → 3 over 8 weeks post-MVP",
    ],
    technologyStack: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript", "Redis"],
    deploymentStrategy: [
      "Pilot deployment at Facility 1 with parallel run for 2 weeks",
      "Staff training program: 3 sessions per role before go-live",
      "Blue-green deployment for zero-downtime updates",
      "24/7 monitoring with escalation to Maxwell support team",
      "Post-launch hypercare for 30 days with on-site support",
    ],
    roiMetrics: [
      { value: "45%", label: "Faster Operations", description: "Production scheduling and dispatch" },
      { value: "60%", label: "Less Manual Work", description: "Automated shop floor data capture" },
      { value: "₹12L", label: "Annual Savings", description: "Waste and overtime reduction" },
      { value: "99.2%", label: "System Availability", description: "Since full rollout" },
    ],
    results: [
      { metric: "40%", label: "Less Manual Entry", description: "Automated data capture from shop floor" },
      { metric: "₹12L", label: "Annual Savings", description: "Reduced waste and overtime costs" },
      { metric: "99.2%", label: "Inventory Accuracy", description: "Up from 87% with manual counts" },
      { metric: "14 weeks", label: "Full Delivery", description: "Discovery to all-facility rollout" },
    ],
    testimonial: {
      quote:
        "Maxwell understood our factory floor better than the big ERP vendors. The system works the way we work—not the other way around. ROI was visible within the first quarter.",
      author: "",
      role: "COO",
      company: "",
    },
    lessonsLearned: [
      "Shop floor observation before wireframes prevents costly rework",
      "Phased rollout beats big-bang deployment for manufacturing adoption",
      "Tally integration must be scoped early—not treated as an afterthought",
      "Operator training is as critical as the software itself",
    ],
    similarSolutions: [
      { title: "ERP Development", href: "/services/erp-development", description: "Custom ERP for manufacturing workflows" },
      { title: "Manufacturing Industry", href: "/industries/manufacturing", description: "Industry-specific software solutions" },
      { title: "AI Safety Monitoring", href: "/case-studies/ai-safety-monitoring", description: "Computer vision for factory safety" },
    ],
    trust: {
      projectValue: "₹30L–₹50L",
      timeline: "14 weeks",
      industry: "Manufacturing",
      teamSize: "6 engineers",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      businessOutcome: "Cost Reduction",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Manufacturing",
      service: "ERP Development",
      projectValue: "₹30L–₹50L",
      technologies: ["React", "Node.js", "AWS"],
      businessOutcome: "Cost Reduction",
    },
    timeline: [
      { phase: "Discovery", duration: "3 weeks", description: "Shop floor observation, workflow mapping, requirements" },
      { phase: "Design", duration: "2 weeks", description: "Wireframes, prototypes, user validation" },
      { phase: "Development", duration: "7 weeks", description: "Core modules, Tally sync, barcode integration" },
      { phase: "Rollout", duration: "2 weeks", description: "Phased deployment across 3 facilities" },
    ],
    milestones: [
      { label: "Discovery Complete", period: "Week 3", description: "Workflow maps signed off by COO" },
      { label: "MVP Live", period: "Week 10", description: "Facility 1 production go-live" },
      { label: "Full Rollout", period: "Week 14", description: "All 3 facilities operational" },
      { label: "ROI Validated", period: "Month 4", description: "₹3L quarterly savings confirmed" },
    ],
    beforeAfter: {
      before: ["Excel-based inventory across 3 sites", "WhatsApp production scheduling", "2-week month-end reconciliation", "87% inventory accuracy"],
      after: ["Real-time unified ERP dashboard", "Automated production scheduling", "Same-day financial reconciliation", "99.2% inventory accuracy"],
    },
    workflowSteps: [
      { title: "GRN Receipt", description: "Barcode scan on material arrival" },
      { title: "Production", description: "Work order execution with BOM tracking" },
      { title: "Quality Check", description: "Digital QC checklist with photo capture" },
      { title: "Dispatch", description: "Automated invoicing and Tally sync" },
    ],
    accent: "#2563EB",
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    cardHighlight: "₹12L annual savings",
    publishedAt: "2025-03-15",
  },

  "healthcare-management": {
    slug: "healthcare-management",
    title: "MedSync Healthcare Platform",
    subtitle: "Unified patient management across 15 clinics serving 10,000+ active patients.",
    metaTitle: "Healthcare Management Case Study — 99.9% Uptime",
    metaDescription:
      "Case study: Maxwell Electrodeal built MedSync for A multi-clinic healthcare network—10,000+ patients, 60% fewer phone calls, 99.9% uptime across 15 clinic locations.",
    executiveSummary:
      "A multi-clinic healthcare network operated 15 independent locations with paper records, phone-based scheduling, and no cross-clinic patient visibility. Maxwell delivered a unified healthcare platform with patient portal, telehealth, and clinic admin dashboards—achieving 99.9% uptime and 60% reduction in scheduling phone calls within 6 months of launch.",
    clientProfile: {
      name: "Leading healthcare organization",
      overview: "Multi-specialty clinic network with general practice, pediatrics, and diagnostics across multiple regions.",
      size: "15 locations · 200+ staff",
      location: "Multi-region operations",
      sector: "Healthcare Services",
    },
    initialSituation:
      "Each clinic maintained independent appointment books. Patients called individual locations for bookings. Medical records were paper-based with no cross-clinic access. Staff spent 4+ hours daily on phone scheduling.",
    challenges: [
      "Fragmented patient data across 15 clinic locations",
      "No telehealth capability during and post-COVID demand",
      "4+ hours daily spent on phone-based appointment scheduling",
      "Paper records preventing continuity of care across clinics",
      "No analytics for clinic performance or patient flow",
    ],
    projectGoals: [
      "Single patient portal across all 15 locations",
      "Reduce scheduling phone calls by 50%+",
      "Enable telehealth consultations integrated with appointments",
      "Achieve 99.9% platform uptime for critical healthcare operations",
      "HIPAA-aware encrypted records architecture",
    ],
    discoveryPlanning: [
      "Patient journey mapping from booking to follow-up across 3 clinic types",
      "Clinician workflow interviews with 8 doctors and 12 front-desk staff",
      "Compliance review for health data storage and access controls",
      "Telehealth integration requirements with video SDK evaluation",
      "Phased rollout plan starting with 3 pilot clinics",
    ],
    solutionArchitecture: {
      overview:
        "Microservices architecture with React web admin, React Native patient apps, Node.js API layer, MongoDB for flexible medical records, and AWS with encrypted storage and automated backups.",
      layers: [
        { name: "Client Apps", items: ["Patient Mobile App (iOS/Android)", "Clinic Web Admin Portal", "Doctor Dashboard"] },
        { name: "Services", items: ["Appointment Service", "Records Service", "Telehealth Service", "Notification Service"] },
        { name: "Security", items: ["End-to-end Encryption", "Role-based Access Control", "Audit Logging"] },
        { name: "Infrastructure", items: ["AWS ECS", "MongoDB Atlas", "CloudFront CDN", "Automated Backups"] },
      ],
    },
    designProcess: [
      "Accessibility-first UI following WCAG 2.1 AA standards",
      "Patient booking flow optimized for 3-tap appointment completion",
      "Clinician dashboard designed for high patient volume workflows",
      "Mobile app user testing with 50-patient beta group",
    ],
    developmentProcess: [
      "Microservices architecture for independent clinic scalability",
      "React Native apps for iOS and Android patient access",
      "Video SDK integration for telehealth consultations",
      "SMS/email reminder automation with delivery tracking",
      "AWS deployment with health checks and auto-scaling",
    ],
    technologyStack: ["React", "React Native", "Node.js", "MongoDB", "AWS"],
    deploymentStrategy: [
      "Pilot launch at 3 clinics with 2-week parallel operation",
      "Staff training: admin portal and telehealth workflows",
      "Rolling deployment to remaining 12 clinics over 4 weeks",
      "24/7 monitoring with 15-minute incident response SLA",
      "6-month post-launch support with monthly health checks",
    ],
    roiMetrics: [
      { value: "60%", label: "Less Manual Work", description: "Self-service appointment booking" },
      { value: "99.9%", label: "System Availability", description: "Zero critical downtime" },
      { value: "10K+", label: "Active Patients", description: "Onboarded in 6 months" },
      { value: "45%", label: "Faster Operations", description: "Appointment-to-consultation flow" },
    ],
    results: [
      { metric: "10K+", label: "Active Patients", description: "Onboarded within 6 months" },
      { metric: "99.9%", label: "Uptime", description: "Zero critical downtime since launch" },
      { metric: "60%", label: "Fewer Phone Calls", description: "Self-service booking adoption" },
      { metric: "4.8★", label: "App Rating", description: "Google Play and App Store" },
    ],
    testimonial: {
      quote:
        "Our patient portal handles 10,000+ users with zero downtime since launch. The team's healthcare expertise showed in every architectural decision.",
      author: "",
      role: "Medical Director",
      company: "",
    },
    lessonsLearned: [
      "Healthcare UX must prioritize accessibility and simplicity over features",
      "Pilot clinics build internal champions for broader rollout",
      "Telehealth integration requires early bandwidth and device testing",
      "Audit logging is non-negotiable for healthcare compliance",
    ],
    similarSolutions: [
      { title: "Custom Software Development", href: "/services/custom-software-development", description: "Enterprise healthcare platforms" },
      { title: "Healthcare Industry", href: "/industries/healthcare", description: "Healthcare software solutions" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Patient and clinician apps" },
    ],
    trust: {
      projectValue: "₹30L–₹50L",
      timeline: "16 weeks",
      industry: "Healthcare",
      teamSize: "7 engineers",
      technologies: ["React", "Node.js", "AWS"],
      businessOutcome: "Automation",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Healthcare",
      service: "Custom Software Development",
      projectValue: "₹30L–₹50L",
      technologies: ["React", "Node.js", "AWS"],
      businessOutcome: "Automation",
    },
    timeline: [
      { phase: "Discovery", duration: "3 weeks", description: "Patient journeys, compliance review, pilot selection" },
      { phase: "Design", duration: "3 weeks", description: "Accessibility-first UI, clinician workflows" },
      { phase: "Development", duration: "8 weeks", description: "Portal, apps, telehealth integration" },
      { phase: "Rollout", duration: "2 weeks", description: "15-clinic phased deployment" },
    ],
    milestones: [
      { label: "Pilot Launch", period: "Week 12", description: "3 clinics live with 2,000 patients" },
      { label: "Full Network", period: "Week 16", description: "All 15 clinics operational" },
      { label: "10K Patients", period: "Month 6", description: "Patient adoption milestone" },
      { label: "Telehealth Live", period: "Week 14", description: "Video consultations enabled" },
    ],
    beforeAfter: {
      before: ["15 independent appointment systems", "Paper medical records", "4+ hours daily phone scheduling", "No telehealth capability"],
      after: ["Unified patient portal", "Digital encrypted records", "Self-service online booking", "Integrated telehealth consultations"],
    },
    workflowSteps: [
      { title: "Book", description: "Patient selects clinic, doctor, and slot online" },
      { title: "Consult", description: "In-person or telehealth appointment" },
      { title: "Record", description: "Digital notes and prescriptions stored securely" },
      { title: "Follow-up", description: "Automated reminders and lab result notifications" },
    ],
    accent: "#10B981",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    cardHighlight: "99.9% uptime · 10K+ patients",
    publishedAt: "2025-02-20",
  },

  "logistics-platform": {
    slug: "logistics-platform",
    title: "Fleet Management Platform",
    subtitle: "Real-time fleet command center for 200+ vehicles with route optimization.",
    metaTitle: "Logistics Platform Case Study — 25% Faster Deliveries",
    metaDescription:
      "Enterprise case study: Fleet management platform by Maxwell Electrodeal—25% faster deliveries, 30% fuel savings, 95% on-time rate for 200+ vehicles.",
    executiveSummary:
      "a regional logistics operator managed 200+ delivery vehicles with phone-based dispatch, no GPS visibility, and paper proof-of-delivery. Maxwell built a command center platform with live tracking, AI route optimization, driver mobile app, and client self-service portal—cutting fuel costs 30% and improving on-time delivery from 72% to 95%.",
    clientProfile: {
      name: "Leading logistics organization",
      overview: "B2B logistics company serving e-commerce, manufacturing, and retail with same-day and next-day delivery across multiple regions.",
      size: "200+ vehicles · 350 staff",
      location: "multiple regions",
      sector: "B2B Logistics",
    },
    initialSituation:
      "Dispatch happened via phone calls and WhatsApp. No GPS tracking meant clients constantly called for updates. Route planning was manual, causing 30% fuel waste. Proof of delivery was paper-based, leading to billing disputes.",
    challenges: [
      "No real-time visibility into 200+ vehicle locations",
      "Manual route planning causing 30% fuel waste",
      "High volume of client support calls for shipment status",
      "Paper POD causing billing disputes and delayed invoicing",
      "Driver coordination via informal WhatsApp groups",
    ],
    projectGoals: [
      "Live GPS tracking for entire fleet on interactive map",
      "Reduce fuel costs by 25%+ through route optimization",
      "Achieve 90%+ on-time delivery rate",
      "Client self-service tracking to reduce support calls by 50%",
      "Digital POD with photo capture for instant billing",
    ],
    discoveryPlanning: [
      "Ride-along sessions with 10 drivers across urban and rural routes",
      "Dispatch center observation and bottleneck mapping",
      "GPS hardware API evaluation with existing tracker fleet",
      "Client portal requirements from top 5 B2B accounts",
      "Route optimization algorithm benchmarking with OR-Tools",
    ],
    solutionArchitecture: {
      overview:
        "Python backend for route optimization, React command center dashboard, React Native driver app with offline sync, PostgreSQL for shipment data, and WebSocket layer for real-time GPS updates on AWS.",
      layers: [
        { name: "Command Center", items: ["Live Fleet Map", "Dispatch Console", "Analytics Dashboard"] },
        { name: "Field Apps", items: ["Driver Mobile App", "Offline POD Capture", "Navigation Integration"] },
        { name: "Client Layer", items: ["Tracking Portal", "White-label Pages", "Webhook Notifications"] },
        { name: "Optimization", items: ["OR-Tools Route Engine", "GPS Ingestion Pipeline", "ETA Prediction"] },
        { name: "Infrastructure", items: ["AWS ECS", "PostgreSQL", "Redis Pub/Sub", "WebSocket Gateway"] },
      ],
    },
    designProcess: [
      "Map-based UI prototypes for command center operators",
      "Driver app UX tested with 15 drivers in field conditions",
      "Client tracking page designed for non-technical users",
      "Alert and notification hierarchy for dispatch supervisors",
    ],
    developmentProcess: [
      "GPS hardware API integration with existing trackers",
      "Google OR-Tools route optimization backend",
      "Real-time WebSocket updates for live tracking",
      "Offline-capable driver app with background sync",
      "Client portal with white-label tracking pages",
    ],
    technologyStack: ["React", "Python", "Node.js", "PostgreSQL", "AWS"],
    deploymentStrategy: [
      "Staged rollout: 50 vehicles pilot → full fleet over 3 weeks",
      "Driver training via in-app tutorials and field support team",
      "Client onboarding with branded tracking link templates",
      "Performance monitoring for WebSocket connection stability",
      "Quarterly optimization reviews with operations team",
    ],
    roiMetrics: [
      { value: "25%", label: "Faster Operations", description: "Delivery cycle time reduction" },
      { value: "30%", label: "Cost Reduction", description: "Fuel savings from route optimization" },
      { value: "95%", label: "On-Time Rate", description: "Up from 72% pre-platform" },
      { value: "99.9%", label: "System Availability", description: "Command center uptime" },
    ],
    results: [
      { metric: "25%", label: "Faster Deliveries", description: "Route optimization impact" },
      { metric: "30%", label: "Fuel Savings", description: "Reduced idle time and detours" },
      { metric: "95%", label: "On-Time Rate", description: "Up from 72% pre-platform" },
      { metric: "50%", label: "Support Calls Down", description: "Client self-service tracking" },
    ],
    testimonial: {
      quote:
        "We went from phone-based dispatch chaos to a command center that rivals enterprise logistics companies. Clients stopped calling—we send them tracking links instead.",
      author: "",
      role: "Operations Director",
      company: "",
    },
    lessonsLearned: [
      "Driver app offline capability is essential for rural delivery routes",
      "Route optimization gains require 2–3 weeks of data calibration",
      "Client white-label tracking reduces support load immediately",
      "WebSocket infrastructure must be load-tested for 200+ concurrent vehicles",
    ],
    similarSolutions: [
      { title: "Custom Software Development", href: "/services/custom-software-development", description: "Logistics and fleet platforms" },
      { title: "Logistics Industry", href: "/industries/logistics", description: "Logistics software solutions" },
      { title: "Cloud Solutions", href: "/services/cloud-solutions", description: "Scalable cloud infrastructure" },
    ],
    trust: {
      projectValue: "₹15L–₹30L",
      timeline: "12 weeks",
      industry: "Logistics",
      teamSize: "5 engineers",
      technologies: ["React", "Python", "AWS"],
      businessOutcome: "Efficiency",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Logistics",
      service: "Custom Software Development",
      projectValue: "₹15L–₹30L",
      technologies: ["React", "Python", "AWS"],
      businessOutcome: "Efficiency",
    },
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Field observation, GPS audit, client requirements" },
      { phase: "Design", duration: "2 weeks", description: "Map UI, driver app, client portal prototypes" },
      { phase: "Development", duration: "6 weeks", description: "Tracking, optimization, driver and client apps" },
      { phase: "Rollout", duration: "2 weeks", description: "Phased fleet deployment" },
    ],
    milestones: [
      { label: "GPS Integration", period: "Week 4", description: "Live tracking for 50 pilot vehicles" },
      { label: "Route Engine Live", period: "Week 8", description: "Automated dispatch optimization" },
      { label: "Full Fleet", period: "Week 12", description: "200+ vehicles on platform" },
      { label: "95% On-Time", period: "Month 3", description: "Delivery performance target met" },
    ],
    beforeAfter: {
      before: ["Phone and WhatsApp dispatch", "No GPS visibility", "Manual route planning", "Paper proof of delivery"],
      after: ["Digital command center", "Live fleet map with ETAs", "AI route optimization", "Instant digital POD and billing"],
    },
    workflowSteps: [
      { title: "Dispatch", description: "Optimized routes assigned to drivers" },
      { title: "Track", description: "Live GPS with client notifications" },
      { title: "Deliver", description: "Digital POD with photo capture" },
      { title: "Invoice", description: "Automated billing on delivery confirmation" },
    ],
    accent: "#F59E0B",
    gradient: "from-orange-950 via-amber-900 to-slate-950",
    cardHighlight: "30% fuel savings",
    publishedAt: "2025-01-10",
  },

  "educational-portal": {
    slug: "educational-portal",
    title: "Learning Management Platform",
    subtitle: "Mobile-first LMS driving 3× adoption across 20+ CBSE schools.",
    metaTitle: "Educational Portal Case Study — 3× Platform Adoption",
    metaDescription:
      "Case study: the education group LMS by Maxwell Electrodeal—3× adoption, 50,000+ monthly sessions, 90% parent engagement across 20+ schools.",
    executiveSummary:
      "An education institution group's legacy LMS had 15% student adoption with no mobile access and zero parent visibility. Maxwell delivered a mobile-first learning platform with gamification, online exams, and parent apps—achieving 3× adoption, 50,000+ monthly sessions, and 90% parent engagement within one academic year.",
    clientProfile: {
      name: "Leading education organization",
      overview: "School chain operating 20+ CBSE-affiliated schools serving 8,000+ students from primary through senior secondary.",
      size: "20 schools · 8,000+ students",
      location: "Multi-region operations",
      sector: "K-12 Education",
    },
    initialSituation:
      "Legacy LMS had 15% student adoption. Teachers uploaded PDFs manually. Parents had no visibility into homework, grades, or attendance. Online exams during lockdown were impossible.",
    challenges: [
      "15% student adoption on legacy desktop-only LMS",
      "No parent communication channel for academic progress",
      "Manual grading consuming 10+ hours weekly per teacher",
      "No online examination capability",
      "Content management fragmented across 20 school branches",
    ],
    projectGoals: [
      "Achieve 40%+ active student adoption within 6 months",
      "Launch parent app with 80%+ engagement rate",
      "Enable online examinations with auto-grading",
      "Reduce teacher grading time by 50%",
      "Multi-tenant architecture for 20 school branches",
    ],
    discoveryPlanning: [
      "Student and teacher interviews across 5 representative schools",
      "Gamification mechanics workshop for ages 6–18",
      "Parent focus groups on communication preferences",
      "Exam module requirements with academic leadership",
      "Multi-tenant architecture planning for branch isolation",
    ],
    solutionArchitecture: {
      overview:
        "Next.js web platform with SSR, Flutter cross-platform mobile apps, PostgreSQL multi-tenant database on Azure, video streaming for live classes, and auto-grading engine for assessments.",
      layers: [
        { name: "Learning Apps", items: ["Student Web Portal", "Flutter Student App", "Parent Mobile App"] },
        { name: "Admin", items: ["School Admin Dashboard", "Content CMS", "Exam Management"] },
        { name: "Assessment", items: ["Auto-grading Engine", "Question Bank", "Result Analytics"] },
        { name: "Infrastructure", items: ["Azure App Service", "PostgreSQL", "CDN for Video", "Multi-tenant RLS"] },
      ],
    },
    designProcess: [
      "Gamification mechanics designed for ages 6–18 with badge systems",
      "Parent app wireframes focused on 3-tap access to grades and attendance",
      "Accessibility testing for diverse literacy levels across age groups",
      "Teacher dashboard optimized for bulk grading workflows",
    ],
    developmentProcess: [
      "Next.js web platform with SSR for performance on low-bandwidth connections",
      "Flutter cross-platform student and parent apps",
      "Video streaming integration for live classes",
      "Auto-grading engine for MCQ and short-answer exams",
      "Multi-tenant architecture with row-level security per school",
    ],
    technologyStack: ["Next.js", "Flutter", "Node.js", "PostgreSQL", "Azure"],
    deploymentStrategy: [
      "Pilot at 3 schools for one academic term before network rollout",
      "Teacher training program: 2 sessions per school before go-live",
      "Staggered rollout: 5 schools per week over 4 weeks",
      "Exam module soft launch before high-stakes board exam season",
      "Academic year support with dedicated success manager",
    ],
    roiMetrics: [
      { value: "3×", label: "Platform Adoption", description: "From 15% to 45% active users" },
      { value: "60%", label: "Less Manual Work", description: "Automated grading and attendance" },
      { value: "90%", label: "Parent Engagement", description: "Active on parent portal" },
      { value: "99.9%", label: "System Availability", description: "During exam periods" },
    ],
    results: [
      { metric: "3×", label: "Adoption Rate", description: "From 15% to 45% active users" },
      { metric: "50K+", label: "Monthly Sessions", description: "Student learning activity" },
      { metric: "90%", label: "Parent Engagement", description: "Active on parent portal" },
      { metric: "24hr", label: "Result Publishing", description: "Down from 2 weeks manually" },
    ],
    testimonial: {
      quote:
        "Students actually use this platform—unlike our previous LMS. Parents finally have visibility, and teachers save hours on grading every week.",
      author: "",
      role: "Academic Director",
      company: "",
    },
    lessonsLearned: [
      "Mobile-first design is non-negotiable for student adoption in India",
      "Gamification drives engagement but must not distract from learning outcomes",
      "Parent apps require extreme simplicity—3 taps to any key information",
      "Exam module load testing before board exam season is critical",
    ],
    similarSolutions: [
      { title: "SaaS Development", href: "/services/saas-development", description: "Multi-tenant education platforms" },
      { title: "Education Industry", href: "/industries/education", description: "EdTech software solutions" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Student and parent apps" },
    ],
    trust: {
      projectValue: "₹30L–₹50L",
      timeline: "18 weeks",
      industry: "Education",
      teamSize: "8 engineers",
      technologies: ["Next.js", "Flutter", "AWS"],
      businessOutcome: "Scalability",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Education",
      service: "SaaS Development",
      projectValue: "₹30L–₹50L",
      technologies: ["Next.js", "Flutter"],
      businessOutcome: "Scalability",
    },
    timeline: [
      { phase: "Discovery", duration: "3 weeks", description: "School interviews, LMS audit, pilot selection" },
      { phase: "Design", duration: "3 weeks", description: "Gamification UX, parent app, exam flows" },
      { phase: "Development", duration: "10 weeks", description: "LMS, apps, exam engine, multi-tenant setup" },
      { phase: "Rollout", duration: "2 weeks", description: "20-school network deployment" },
    ],
    milestones: [
      { label: "Pilot Schools", period: "Week 14", description: "3 schools live for term trial" },
      { label: "Full Network", period: "Week 18", description: "All 20 schools operational" },
      { label: "50K Sessions", period: "Month 6", description: "Monthly active session milestone" },
      { label: "Exam Module", period: "Week 16", description: "Online exams with auto-grading" },
    ],
    beforeAfter: {
      before: ["15% LMS adoption", "Desktop-only access", "Manual grading and attendance", "No parent visibility"],
      after: ["45% active student adoption", "Mobile-first learning apps", "Auto-graded online exams", "90% parent engagement"],
    },
    workflowSteps: [
      { title: "Learn", description: "Video lessons and interactive content" },
      { title: "Practice", description: "Assignments with gamified progress" },
      { title: "Assess", description: "Online exams with instant results" },
      { title: "Report", description: "Automated grade and attendance reports to parents" },
    ],
    accent: "#8B5CF6",
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    cardHighlight: "50K+ monthly sessions",
    publishedAt: "2024-11-05",
  },

  "retail-analytics": {
    slug: "retail-analytics",
    title: "a retail group Intelligence",
    subtitle: "Omnichannel analytics and loyalty platform for 12 fashion retail locations.",
    metaTitle: "Retail Analytics Case Study — 35% Revenue Growth",
    metaDescription:
      "Enterprise case study: Omnichannel retail platform by Maxwell Electrodeal—35% online revenue growth, 98% inventory sync, 2.5× repeat purchases.",
    executiveSummary:
      "The client operated 12 independent POS systems with no unified inventory view and a disconnected e-commerce channel causing stock mismatches. Maxwell built an omnichannel retail intelligence platform with real-time POS sync, loyalty program, and executive analytics—driving 35% online revenue growth and 2.5× repeat purchases within 12 months.",
    clientProfile: {
      name: "Leading retail organization",
      overview: "Fashion retail chain with 12 stores across multiple metro markets targeting urban millennials and Gen-Z shoppers.",
      size: "12 stores · 180 staff",
      location: "major metro markets & secondary markets, India",
      sector: "Fashion Retail",
    },
    initialSituation:
      "12 stores ran independent POS systems with no central inventory view. E-commerce launched separately, causing stock mismatches and cancelled orders. No customer data unified across channels.",
    challenges: [
      "98% inventory mismatch between online and in-store channels",
      "No unified customer view across 12 locations and e-commerce",
      "Generic marketing with no purchase history insights",
      "Executive team lacked real-time sales analytics",
      "High cart abandonment due to stock unavailability online",
    ],
    projectGoals: [
      "Achieve 95%+ cross-channel inventory sync accuracy",
      "Grow online revenue by 30%+ in first year",
      "Launch loyalty program driving 2× repeat purchase rate",
      "Executive dashboard with drill-down analytics by store and category",
      "Enable buy-online-pickup-in-store (BOPIS) capability",
    ],
    discoveryPlanning: [
      "Customer journey mapping across online and offline touchpoints",
      "Store manager workflow analysis at 4 representative locations",
      "POS API audit with Gofrugal integration partner",
      "Loyalty program design workshops with marketing team",
      "Data warehouse architecture for nightly ETL consolidation",
    ],
    solutionArchitecture: {
      overview:
        "Next.js e-commerce frontend, Node.js API layer, PostgreSQL for unified inventory and CRM, ETL pipeline for POS sync, and executive analytics dashboard with real-time and batch reporting on AWS.",
      layers: [
        { name: "Commerce", items: ["Next.js E-commerce", "BOPIS Module", "Customer Account Portal"] },
        { name: "Retail Ops", items: ["POS Sync Service", "Inventory Engine", "Loyalty & CRM"] },
        { name: "Analytics", items: ["Executive Dashboard", "ETL Pipeline", "Segmentation Engine"] },
        { name: "Infrastructure", items: ["AWS ECS", "PostgreSQL", "Redis Cache", "Scheduled ETL Jobs"] },
      ],
    },
    designProcess: [
      "Analytics dashboard designed for non-technical executives",
      "E-commerce UX optimized for mobile-first fashion shoppers",
      "Loyalty program UX tested with customer focus groups",
      "Store associate interface for BOPIS order fulfillment",
    ],
    developmentProcess: [
      "POS API integration with Gofrugal across all 12 stores",
      "Next.js e-commerce with real-time inventory checks",
      "Points-based loyalty engine with tier management",
      "ETL pipeline for nightly sales consolidation",
      "Executive dashboard with drill-down analytics",
    ],
    technologyStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "React"],
    deploymentStrategy: [
      "POS sync pilot at 3 stores before full network integration",
      "E-commerce soft launch with inventory guardrails",
      "Loyalty program launch coordinated with seasonal campaign",
      "Executive dashboard training for leadership team",
      "Monthly analytics review sessions with Maxwell team",
    ],
    roiMetrics: [
      { value: "35%", label: "Revenue Increase", description: "Online channel growth in 12 months" },
      { value: "98%", label: "Inventory Accuracy", description: "Cross-channel sync rate" },
      { value: "2.5×", label: "Repeat Purchases", description: "Loyalty program impact" },
      { value: "45%", label: "Faster Operations", description: "Order fulfillment cycle" },
    ],
    results: [
      { metric: "35%", label: "Online Revenue", description: "Growth in first 12 months" },
      { metric: "98%", label: "Inventory Sync", description: "Cross-channel accuracy" },
      { metric: "2.5×", label: "Repeat Purchases", description: "Loyalty program impact" },
      { metric: "20%", label: "Stockout Reduction", description: "Better inventory visibility" },
    ],
    testimonial: {
      quote:
        "We finally have one view of our business—online and offline. The loyalty program alone paid for the platform within 8 months.",
      author: "",
      role: "CEO",
      company: "",
    },
    lessonsLearned: [
      "POS integration complexity often exceeds initial estimates—buffer 2 weeks",
      "Inventory sync requires conflict resolution rules defined upfront",
      "Loyalty programs need simple tier structures for customer comprehension",
      "Executive dashboards must show actionable metrics, not vanity numbers",
    ],
    similarSolutions: [
      { title: "Custom Software Development", href: "/services/custom-software-development", description: "Retail and e-commerce platforms" },
      { title: "Retail Industry", href: "/industries/retail", description: "Retail software solutions" },
      { title: "CRM Development", href: "/services/crm-development", description: "Customer loyalty and CRM" },
    ],
    trust: {
      projectValue: "₹30L–₹50L",
      timeline: "20 weeks",
      industry: "Retail",
      teamSize: "6 engineers",
      technologies: ["Next.js", "Node.js", "AWS"],
      businessOutcome: "Revenue Growth",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Retail",
      service: "Custom Software Development",
      projectValue: "₹30L–₹50L",
      technologies: ["Next.js", "Node.js", "AWS"],
      businessOutcome: "Revenue Growth",
    },
    timeline: [
      { phase: "Discovery", duration: "3 weeks", description: "POS audit, customer journeys, loyalty design" },
      { phase: "Design", duration: "3 weeks", description: "E-commerce UX, analytics dashboard, loyalty flows" },
      { phase: "Development", duration: "12 weeks", description: "POS sync, e-commerce, loyalty, analytics" },
      { phase: "Rollout", duration: "2 weeks", description: "12-store network and e-commerce launch" },
    ],
    milestones: [
      { label: "POS Sync Live", period: "Week 10", description: "Real-time inventory across 12 stores" },
      { label: "E-commerce Launch", period: "Week 16", description: "Online store with BOPIS" },
      { label: "Loyalty Program", period: "Week 18", description: "Points system with 3 tiers" },
      { label: "35% Revenue Growth", period: "Month 12", description: "Online channel growth target" },
    ],
    beforeAfter: {
      before: ["12 independent POS systems", "Disconnected e-commerce", "No customer loyalty program", "Weekly manual sales reports"],
      after: ["Unified omnichannel inventory", "Integrated e-commerce with BOPIS", "2.5× repeat purchase loyalty program", "Real-time executive analytics"],
    },
    workflowSteps: [
      { title: "Browse", description: "Unified inventory across online and stores" },
      { title: "Purchase", description: "Online, in-store, or BOPIS checkout" },
      { title: "Earn", description: "Loyalty points and tier progression" },
      { title: "Analyze", description: "Executive dashboard with segment insights" },
    ],
    accent: "#F43F5E",
    gradient: "from-rose-950 via-pink-900 to-slate-950",
    cardHighlight: "35% online revenue growth",
    publishedAt: "2024-10-18",
  },

  "construction-platform": {
    slug: "construction-platform",
    title: "Construction Project Platform",
    subtitle: "Construction ERP with mobile site reporting and digital inspections.",
    metaTitle: "Construction Platform Case Study — 25% Cost Control",
    metaDescription:
      "Case study: Construction project platform by Maxwell Electrodeal—25% cost overrun reduction, 100% digital site records, 40% faster reporting.",
    executiveSummary:
      "a construction firm managed 8+ simultaneous projects with Excel-based costing, WhatsApp progress reports, and paper safety inspections. Maxwell delivered a construction ERP with mobile site apps, digital inspections, and subcontractor portal—reducing cost overruns 25% and achieving 100% digital compliance records.",
    clientProfile: {
      name: "Leading construction organization",
      overview: "Commercial and residential contractor managing 8+ simultaneous projects with 150+ field workers and 30+ subcontractors.",
      size: "8+ active projects · 150+ field workers",
      location: "Multi-region operations",
      sector: "Commercial Construction",
    },
    initialSituation:
      "Project costs tracked in Excel with no real-time budget visibility. Site managers reported progress via WhatsApp photos. Safety inspections were paper-based with compliance gaps.",
    challenges: [
      "No real-time budget vs. actual visibility across 8 projects",
      "Site progress reporting via informal WhatsApp channels",
      "Material wastage untracked across project sites",
      "Paper safety inspections with audit compliance gaps",
      "Subcontractor payment delays due to manual verification",
    ],
    projectGoals: [
      "Real-time project costing with budget vs. actual tracking",
      "Digital daily progress reports from all site managers",
      "100% digital safety and quality inspection records",
      "Reduce cost overruns by 20%+",
      "Subcontractor portal for work orders and invoicing",
    ],
    discoveryPlanning: [
      "Site visits to 3 active construction projects",
      "Site manager and foreman workflow interviews",
      "Safety compliance audit with legal team",
      "Subcontractor payment process mapping",
      "Offline-first mobile requirements for poor connectivity sites",
    ],
    solutionArchitecture: {
      overview:
        "React web admin for project portfolio management, React Native offline-first site app, Node.js API, PostgreSQL for project costing, and subcontractor portal with approval workflows.",
      layers: [
        { name: "Management", items: ["Project Portfolio Dashboard", "Cost Analytics", "Executive Reports"] },
        { name: "Field", items: ["Site Manager Mobile App", "Offline Sync", "GPS Photo Capture"] },
        { name: "Compliance", items: ["Digital Inspection Forms", "Safety Checklists", "Audit Trail"] },
        { name: "Partners", items: ["Subcontractor Portal", "Work Order Management", "Invoice Approval"] },
        { name: "Infrastructure", items: ["AWS Hosting", "PostgreSQL", "S3 for Site Photos"] },
      ],
    },
    designProcess: [
      "Offline-first mobile app prototypes for field use in low-connectivity areas",
      "Executive dashboard designed for project portfolio overview",
      "Inspection form UX with mandatory checkpoint enforcement",
      "Subcontractor portal designed for low-tech user adoption",
    ],
    developmentProcess: [
      "Project costing module with budget vs. actual tracking",
      "React Native site app with offline sync capability",
      "GPS-tagged photo capture for progress documentation",
      "Digital inspection forms with mandatory checkpoints",
      "Subcontractor portal with multi-level approval workflows",
    ],
    technologyStack: ["React", "React Native", "Node.js", "PostgreSQL", "AWS"],
    deploymentStrategy: [
      "Pilot on 2 projects with parallel manual reporting for validation",
      "Site manager training: hands-on sessions at each project site",
      "Rolling deployment to remaining 6 projects over 3 weeks",
      "Compliance module launch aligned with audit season",
      "Quarterly platform reviews with project directors",
    ],
    roiMetrics: [
      { value: "25%", label: "Cost Reduction", description: "Budget overrun reduction" },
      { value: "40%", label: "Faster Operations", description: "Digital vs. manual reporting" },
      { value: "100%", label: "Compliance Rate", description: "Digital inspection records" },
      { value: "99.9%", label: "System Availability", description: "Including offline sync recovery" },
    ],
    results: [
      { metric: "25%", label: "Cost Control", description: "Reduction in budget overruns" },
      { metric: "40%", label: "Reporting Time Saved", description: "Digital vs. manual site reports" },
      { metric: "100%", label: "Digital Records", description: "All inspections documented" },
      { metric: "15%", label: "Resource Efficiency", description: "Better material utilization" },
    ],
    testimonial: {
      quote:
        "Our site managers actually use the app—even in areas with poor connectivity. Management finally has same-day visibility into every project.",
      author: "",
      role: "Project Director",
      company: "",
    },
    lessonsLearned: [
      "Offline-first mobile design is mandatory for construction sites",
      "GPS-tagged photos provide audit evidence better than text reports",
      "Subcontractor adoption requires extremely simple portal UX",
      "Cost tracking modules must match how project directors think about budgets",
    ],
    similarSolutions: [
      { title: "Custom Software Development", href: "/services/custom-software-development", description: "Construction management platforms" },
      { title: "Construction Industry", href: "/industries/construction", description: "Construction software solutions" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Field worker mobile apps" },
    ],
    trust: {
      projectValue: "₹15L–₹30L",
      timeline: "16 weeks",
      industry: "Construction",
      teamSize: "6 engineers",
      technologies: ["React", "Node.js", "AWS"],
      businessOutcome: "Compliance",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Construction",
      service: "Custom Software Development",
      projectValue: "₹15L–₹30L",
      technologies: ["React", "Node.js"],
      businessOutcome: "Compliance",
    },
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Site visits, workflow interviews, compliance audit" },
      { phase: "Design", duration: "3 weeks", description: "Mobile app, inspection forms, portfolio dashboard" },
      { phase: "Development", duration: "9 weeks", description: "Costing, site app, inspections, subcontractor portal" },
      { phase: "Rollout", duration: "2 weeks", description: "8-project deployment" },
    ],
    milestones: [
      { label: "Site App Pilot", period: "Week 12", description: "2 projects with digital daily reports" },
      { label: "Full Deployment", period: "Week 16", description: "All 8 projects on platform" },
      { label: "Compliance Module", period: "Week 14", description: "Digital inspections live" },
      { label: "25% Cost Control", period: "Month 6", description: "Overrun reduction validated" },
    ],
    beforeAfter: {
      before: ["Excel project costing", "WhatsApp progress photos", "Paper safety inspections", "Manual subcontractor payments"],
      after: ["Real-time budget dashboards", "GPS-tagged digital site reports", "100% digital compliance records", "Automated subcontractor invoicing"],
    },
    workflowSteps: [
      { title: "Plan", description: "Project budget and milestone setup" },
      { title: "Report", description: "Daily mobile progress from site" },
      { title: "Inspect", description: "Digital safety and quality checks" },
      { title: "Pay", description: "Subcontractor work order approval and payment" },
    ],
    accent: "#78716C",
    gradient: "from-stone-950 via-zinc-900 to-slate-950",
    cardHighlight: "100% digital compliance",
    publishedAt: "2024-09-22",
  },

  "ai-safety-monitoring": {
    slug: "ai-safety-monitoring",
    title: "SafeGuard AI Vision System",
    subtitle: "Computer vision platform for real-time factory safety compliance monitoring.",
    metaTitle: "AI Safety Monitoring Case Study — 99.2% Detection Accuracy",
    metaDescription:
      "Enterprise case study: SafeGuard AI by Maxwell Electrodeal—99.2% hazard detection, 60% faster inspections, 75% incident reduction for A precision manufacturing group.",
    executiveSummary:
      "A precision manufacturing group faced rising insurance premiums and compliance gaps with manual safety inspections missing 8% of PPE violations. Maxwell deployed a computer vision platform with custom YOLO models, edge inference, and automated compliance reporting—achieving 99.2% detection accuracy and 75% incident reduction in 6 months.",
    clientProfile: {
      name: "Leading manufacturing organization",
      overview: "Precision manufacturing company extending ERP partnership to deploy AI safety monitoring on 2 high-risk production lines.",
      size: "2 production lines · 120 workers",
      location: "Gujarat, India",
      sector: "Industrial Manufacturing",
    },
    initialSituation:
      "Manual safety inspections missed 8% of PPE violations and hazardous conditions. Incident investigations relied on witness accounts with no visual evidence. Compliance audits required weeks of documentation compilation.",
    challenges: [
      "8% PPE violation miss rate with manual inspection rounds",
      "No visual evidence for incident investigations",
      "Weeks of manual work compiling compliance audit documentation",
      "Rising insurance premiums due to incident history",
      "Night shift coverage gaps in safety monitoring",
    ],
    projectGoals: [
      "Achieve 95%+ PPE and hazard detection accuracy",
      "Reduce manual inspection time by 50%+",
      "Automate compliance report generation for audits",
      "Deploy edge inference for sub-second alert latency",
      "Integrate with existing ERP incident module",
    ],
    discoveryPlanning: [
      "Safety audit observation across both production lines",
      "Camera placement optimization with security and safety teams",
      "Training data collection: 50,000+ facility-specific images",
      "Edge hardware evaluation (NVIDIA Jetson vs. cloud inference)",
      "Compliance report template alignment with audit requirements",
    ],
    solutionArchitecture: {
      overview:
        "Custom YOLO computer vision models deployed on NVIDIA Jetson edge devices, Python inference pipeline, React alert dashboard, PostgreSQL for compliance records, and automated report generation integrated with existing ERP.",
      layers: [
        { name: "Vision", items: ["Custom YOLO Model", "Edge Inference (Jetson)", "Camera Feed Processing"] },
        { name: "Alerting", items: ["Real-time Alert Engine", "Supervisor Mobile Notifications", "Incident Video Clips"] },
        { name: "Compliance", items: ["Audit Dashboard", "Automated Reports", "ERP Incident Integration"] },
        { name: "Infrastructure", items: ["On-premise Edge Devices", "AWS for Dashboard", "PostgreSQL"] },
      ],
    },
    designProcess: [
      "Alert UX designed for minimal supervisor disruption during production",
      "Compliance dashboard aligned with audit report templates",
      "Camera placement visualization tool for safety team planning",
      "Mobile alert interface tested with 5 shift supervisors",
    ],
    developmentProcess: [
      "Custom YOLO model trained on 50,000+ facility images",
      "Edge deployment on NVIDIA Jetson for real-time inference",
      "React dashboard for alert management and review",
      "Automated daily/weekly compliance report generation",
      "Integration with existing ERP incident module",
    ],
    technologyStack: ["Python", "React", "PostgreSQL", "AWS", "Node.js"],
    deploymentStrategy: [
      "Pilot on 1 production line for 4-week validation period",
      "Model retraining with production-line-specific edge cases",
      "Full deployment on both lines with 24/7 monitoring",
      "Safety team training on alert review and escalation workflows",
      "Quarterly model accuracy audits and retraining cycles",
    ],
    roiMetrics: [
      { value: "99.2%", label: "Detection Accuracy", description: "PPE and hazard identification" },
      { value: "60%", label: "Faster Operations", description: "Automated vs. manual inspection" },
      { value: "75%", label: "Incident Reduction", description: "In first 6 months post-deploy" },
      { value: "12%", label: "Cost Reduction", description: "Insurance premium savings" },
    ],
    results: [
      { metric: "99.2%", label: "Detection Accuracy", description: "PPE and hazard detection" },
      { metric: "60%", label: "Faster Inspection", description: "Automated vs. manual rounds" },
      { metric: "75%", label: "Incident Reduction", description: "In first 6 months post-deploy" },
      { metric: "12%", label: "Insurance Savings", description: "Premium reduction achieved" },
    ],
    testimonial: {
      quote:
        "The AI system catches violations our human inspectors miss—especially during night shifts. Compliance audits that took weeks now take hours.",
      author: "",
      role: "COO",
      company: "",
    },
    lessonsLearned: [
      "Facility-specific training data is essential—generic models underperform",
      "Edge deployment eliminates latency and cloud dependency concerns",
      "Alert fatigue is real—tuning confidence thresholds requires ongoing calibration",
      "Visual evidence transforms incident investigation from disputes to facts",
    ],
    similarSolutions: [
      { title: "AI Solutions", href: "/services/ai-solutions", description: "Computer vision and AI platforms" },
      { title: "Manufacturing Industry", href: "/industries/manufacturing", description: "Industrial AI solutions" },
      { title: "Manufacturing ERP", href: "/case-studies/manufacturing-erp", description: "Related ERP case study" },
    ],
    trust: {
      projectValue: "₹15L–₹30L",
      timeline: "10 weeks",
      industry: "Manufacturing",
      teamSize: "4 engineers",
      technologies: ["Python", "React", "AWS"],
      businessOutcome: "Compliance",
      supportPeriod: "12 months",
    },
    filters: {
      industry: "Manufacturing",
      service: "AI Solutions",
      projectValue: "₹15L–₹30L",
      technologies: ["Python", "React", "AWS"],
      businessOutcome: "Compliance",
    },
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Safety audit, camera planning, data collection" },
      { phase: "Model Training", duration: "3 weeks", description: "YOLO training on 50K+ images" },
      { phase: "Development", duration: "3 weeks", description: "Edge deployment, dashboard, ERP integration" },
      { phase: "Validation", duration: "2 weeks", description: "Pilot line testing and model tuning" },
    ],
    milestones: [
      { label: "Model Trained", period: "Week 5", description: "95%+ accuracy on validation set" },
      { label: "Pilot Live", period: "Week 8", description: "Line 1 edge deployment operational" },
      { label: "Full Deploy", period: "Week 10", description: "Both production lines monitored" },
      { label: "75% Incident Drop", period: "Month 6", description: "Safety incident reduction validated" },
    ],
    beforeAfter: {
      before: ["Manual safety inspection rounds", "8% PPE violation miss rate", "Weeks to compile audit reports", "Witness-only incident evidence"],
      after: ["24/7 AI vision monitoring", "99.2% detection accuracy", "Automated compliance reports", "Video evidence for every alert"],
    },
    workflowSteps: [
      { title: "Detect", description: "Real-time PPE and hazard identification" },
      { title: "Alert", description: "Instant supervisor notification with video clip" },
      { title: "Review", description: "Supervisor confirms and logs incident" },
      { title: "Report", description: "Automated compliance documentation" },
    ],
    accent: "#6366F1",
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    cardHighlight: "75% incident reduction",
    publishedAt: "2025-04-01",
  },

  "saas-workforce-management": {
    slug: "saas-workforce-management",
    title: "a workforce SaaS company Workforce SaaS",
    subtitle: "Investor-ready multi-tenant SaaS MVP delivered in 7 weeks.",
    metaTitle: "SaaS Workforce Management Case Study — ₹2Cr ARR",
    metaDescription:
      "Case study: a workforce SaaS company SaaS by Maxwell Electrodeal—500+ tenants, ₹2Cr ARR in 18 months, $1.2M seed raised. Multi-tenant workforce platform MVP in 7 weeks.",
    executiveSummary:
      "a workforce SaaS company needed an investor-ready SaaS MVP in 10 weeks targeting Indian SMBs underserved by expensive global workforce tools. Maxwell delivered multi-tenant scheduling, geofenced attendance, and Stripe billing in 7 weeks—enabling 500+ active tenants, ₹2Cr ARR, and a $1.2M seed round closed 2 weeks post-launch.",
    clientProfile: {
      name: "Leading SaaS organization",
      overview: "B2B SaaS startup targeting staffing agencies and mid-size employers with workforce scheduling and attendance tracking.",
      size: "Startup · Pre-seed to Seed",
      location: "Bangalore, India",
      sector: "HR Tech SaaS",
    },
    initialSituation:
      "Founder needed investor-ready MVP before seed funding. Existing tools (When I Work, Deputy) were too expensive for Indian SMBs. Required multi-tenant architecture, subscription billing, and mobile apps—all on a pre-funding budget.",
    challenges: [
      "10-week deadline for investor-ready MVP",
      "Multi-tenant architecture with strict data isolation",
      "Stripe subscription billing from day one",
      "Mobile app for geofenced employee clock-in/out",
      "Competitive pricing for Indian SMB market",
    ],
    projectGoals: [
      "Deliver investor-ready MVP within 8 weeks",
      "Multi-tenant PostgreSQL with row-level security",
      "Stripe billing with 3 pricing tiers",
      "React Native employee app with GPS geofencing",
      "Usage analytics for product-led growth metrics",
    ],
    discoveryPlanning: [
      "Competitive analysis of 5 workforce management tools",
      "HR manager interviews at 10 target companies",
      "Pricing tier design workshop with founder",
      "Multi-tenant architecture design review",
      "Investor demo flow mapping for pitch presentations",
    ],
    solutionArchitecture: {
      overview:
        "Next.js admin dashboard with SSR, Node.js multi-tenant API with row-level security, PostgreSQL with tenant isolation, Stripe billing integration, React Native employee app, and AWS infrastructure designed for horizontal scaling.",
      layers: [
        { name: "Admin", items: ["Next.js Dashboard", "Shift Scheduler", "Usage Analytics"] },
        { name: "Employee", items: ["React Native App", "Geofenced Clock-in", "Leave Requests"] },
        { name: "Billing", items: ["Stripe Subscriptions", "3 Pricing Tiers", "Usage Metering"] },
        { name: "Multi-tenant", items: ["Row-level Security", "Tenant Isolation", "Shared Infrastructure"] },
        { name: "Infrastructure", items: ["AWS ECS", "PostgreSQL", "Redis", "CloudWatch"] },
      ],
    },
    designProcess: [
      "Scheduling UX optimized for mobile-first managers",
      "Employee app designed for one-tap clock-in/out",
      "Investor demo flow designed for pitch presentations",
      "Pricing page A/B tested with 3 tier structures",
    ],
    developmentProcess: [
      "Multi-tenant architecture with PostgreSQL row-level security",
      "Stripe subscription billing with 3 pricing tiers",
      "Next.js admin dashboard with SSR for SEO and performance",
      "React Native employee app with geofenced clock-in",
      "Usage analytics dashboard for product-led growth",
    ],
    technologyStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "React", "Flutter"],
    deploymentStrategy: [
      "Beta launch with 10 design partner companies",
      "Stripe billing live from day one of public launch",
      "Auto-scaling infrastructure for tenant growth",
      "CI/CD pipeline for weekly feature releases post-MVP",
      "Ongoing Maxwell retainer for feature development",
    ],
    roiMetrics: [
      { value: "500+", label: "Active Tenants", description: "Within 18 months of launch" },
      { value: "₹2Cr", label: "Revenue Increase", description: "Annual recurring revenue achieved" },
      { value: "7 weeks", label: "Faster Operations", description: "MVP delivery vs. 10-week target" },
      { value: "99.9%", label: "System Availability", description: "Multi-tenant platform uptime" },
    ],
    results: [
      { metric: "500+", label: "Active Tenants", description: "Within 18 months of launch" },
      { metric: "₹2Cr", label: "ARR Achieved", description: "Annual recurring revenue" },
      { metric: "7 weeks", label: "MVP Delivery", description: "Investor-ready product" },
      { metric: "$1.2M", label: "Seed Raised", description: "Closed 2 weeks post-launch" },
    ],
    testimonial: {
      quote:
        "Maxwell delivered our entire SaaS MVP in 7 weeks—investor-ready, beautifully architected, and built to scale. We closed our seed round two weeks after launch.",
      author: "",
      role: "Founder & CEO",
      company: "",
    },
    lessonsLearned: [
      "Multi-tenant architecture decisions made on day one prevent costly rewrites",
      "Stripe integration should be built alongside core features, not after",
      "Investor demo flows should be designed before development starts",
      "Geofenced attendance requires careful GPS accuracy testing across devices",
    ],
    similarSolutions: [
      { title: "SaaS Development", href: "/services/saas-development", description: "Multi-tenant SaaS platforms" },
      { title: "Cloud Solutions", href: "/services/cloud-solutions", description: "Scalable cloud architecture" },
      { title: "Mobile App Development", href: "/services/mobile-app-development", description: "Employee mobile apps" },
    ],
    trust: {
      projectValue: "₹15L–₹30L",
      timeline: "7 weeks MVP",
      industry: "Retail",
      teamSize: "5 engineers",
      technologies: ["Next.js", "Node.js", "AWS"],
      businessOutcome: "Scalability",
      supportPeriod: "Ongoing retainer",
    },
    filters: {
      industry: "Retail",
      service: "SaaS Development",
      projectValue: "₹15L–₹30L",
      technologies: ["Next.js", "Node.js", "AWS"],
      businessOutcome: "Scalability",
    },
    timeline: [
      { phase: "Discovery", duration: "1 week", description: "Competitive analysis, pricing, architecture" },
      { phase: "Design", duration: "1 week", description: "Scheduling UX, investor demo flow" },
      { phase: "MVP Development", duration: "5 weeks", description: "Multi-tenant core, billing, mobile app" },
      { phase: "Launch", duration: "1 week", description: "Beta partners, public launch, investor demo" },
    ],
    milestones: [
      { label: "Architecture Signed", period: "Week 1", description: "Multi-tenant design approved" },
      { label: "MVP Live", period: "Week 7", description: "Investor-ready product launched" },
      { label: "Seed Closed", period: "Week 9", description: "$1.2M seed round closed" },
      { label: "500 Tenants", period: "Month 18", description: "Active tenant milestone" },
    ],
    beforeAfter: {
      before: ["No product, concept stage only", "10-week funding deadline", "No billing infrastructure", "Competitors priced for US/EU markets"],
      after: ["Investor-ready SaaS MVP in 7 weeks", "$1.2M seed raised in 2 weeks", "Stripe billing with 3 tiers live", "500+ tenants at India-friendly pricing"],
    },
    workflowSteps: [
      { title: "Schedule", description: "Drag-and-drop shift planning" },
      { title: "Clock In", description: "GPS geofenced attendance" },
      { title: "Manage", description: "Leave requests and approvals" },
      { title: "Bill", description: "Automated Stripe subscription billing" },
    ],
    accent: "#06B6D4",
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    cardHighlight: "₹2Cr ARR · $1.2M seed",
    publishedAt: "2024-08-14",
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudiesData[slug as CaseStudySlug];
}

export function getAllCaseStudies(): CaseStudyData[] {
  return caseStudySlugs.map((slug) => caseStudiesData[slug]);
}

export function getRelatedCaseStudies(currentSlug: string, limit = 3): CaseStudyData[] {
  const current = getCaseStudyBySlug(currentSlug);
  if (!current) return getAllCaseStudies().slice(0, limit);

  return getAllCaseStudies()
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => {
      const aScore =
        (a.trust.industry === current.trust.industry ? 2 : 0) +
        (a.filters.service === current.filters.service ? 1 : 0);
      const bScore =
        (b.trust.industry === current.trust.industry ? 2 : 0) +
        (b.filters.service === current.filters.service ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}
