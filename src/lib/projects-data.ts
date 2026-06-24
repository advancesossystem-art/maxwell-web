export const projectTypes = [
  "Website",
  "Software",
  "Mobile App",
  "ERP",
  "CRM",
  "AI",
  "SaaS",
  "Cloud",
] as const;

export const projectIndustries = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Logistics",
  "Retail",
  "Construction",
  "HR Tech",
] as const;

export const projectTechnologies = [
  "React",
  "Next.js",
  "Flutter",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "TypeScript",
  "MongoDB",
  "Azure",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type ProjectIndustry = (typeof projectIndustries)[number];
export type MockType =
  | "dashboard"
  | "mobile"
  | "map"
  | "lms"
  | "analytics"
  | "erp"
  | "safety"
  | "saas"
  | "construction";

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  noIndex?: boolean;
  client: string;
  clientOverview: string;
  projectType: ProjectType;
  industry: ProjectIndustry;
  technologies: string[];
  accent: string;
  gradient: string;
  mockType: MockType;
  heroResult: string;
  cardResult: string;
  businessChallenge: string;
  solutionStrategy: string;
  designProcess: string[];
  developmentProcess: string[];
  features: string[];
  results: { metric: string; label: string; description?: string }[];
  testimonial: { quote: string; author: string; role: string; company: string };
  gallery: { mockType: MockType; label: string }[];
  /** Real screenshot paths under /public — add when client-approved assets exist. */
  screenshots?: { label: string; src: string }[];
  duration: string;
  teamSize: string;
  publishedAt?: string;
  date?: string;
}

export const projectSlugs = [
  "manufacturing-erp-platform",
  "healthcare-management-system",
  "logistics-tracking-platform",
  "educational-learning-portal",
  "retail-analytics-dashboard",
  "construction-project-management",
  "ai-safety-monitoring-system",
  "saas-workforce-management",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

/** Portfolio pages safe for sitemap (excludes noIndex projects). */
export function getIndexableProjectSlugs(): ProjectSlug[] {
  return projectSlugs.filter((slug) => !projectsData[slug]?.noIndex);
}

export { portfolioStats } from "@/lib/company-metrics";

export const projectsData: Record<ProjectSlug, ProjectData> = {
  "manufacturing-erp-platform": {
    slug: "manufacturing-erp-platform",
    noIndex: true,
    title: "Custom ERP for a Gujarat Manufacturer",
    subtitle: "Unified ERP across 3 production facilities with real-time inventory and supplier integration.",
    metaTitle: "Manufacturing ERP Platform Case Study",
    metaDescription:
      "How Maxwell Electrodeal built a custom manufacturing ERP reducing manual data entry by 40% and saving ₹12L annually for A precision manufacturing group.",
    client: "Leading manufacturing organization",
    clientOverview:
      "A mid-size precision manufacturing company operating 3 production facilities across Gujarat, producing 200+ SKUs for automotive and industrial clients.",
    projectType: "ERP",
    industry: "Manufacturing",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    accent: "#2563EB",
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    mockType: "erp",
    heroResult: "40% reduction in manual data entry",
    cardResult: "₹12L annual savings",
    businessChallenge:
      "Operations ran on Excel spreadsheets and a legacy Tally setup disconnected from the shop floor. Inventory counts across 3 facilities were manual, production scheduling happened via WhatsApp, and month-end reconciliation took 2 weeks. Errors caused material shortages, delayed orders, and ₹15L+ in annual waste.",
    solutionStrategy:
      "We designed a modular ERP around their actual workflow—GRN → production → QC → dispatch—rather than forcing SAP-style processes. Phase 1 delivered inventory and production modules. Phase 2 added finance integration with Tally and a supplier portal.",
    designProcess: [
      "Shop floor observation across all 3 facilities for 2 weeks",
      "Workflow mapping sessions with production, inventory, and finance teams",
      "Role-based dashboard wireframes for management, supervisors, and operators",
      "Interactive prototypes tested with 12 end users before development",
    ],
    developmentProcess: [
      "Agile sprints with weekly demos to plant managers",
      "Barcode integration for inventory scanning on shop floor tablets",
      "Real-time PostgreSQL with read replicas for reporting",
      "Tally bi-directional sync for GST-compliant accounting",
      "Phased rollout: Facility 1 → 2 → 3 over 8 weeks",
    ],
    features: [
      "Multi-warehouse inventory with barcode scanning",
      "Work order management and BOM tracking",
      "Production scheduling with capacity planning",
      "Quality control checklists with photo capture",
      "Supplier portal for PO and ASN management",
      "Real-time OEE dashboards per production line",
    ],
    results: [
      { metric: "40%", label: "Less Manual Entry", description: "Automated data capture from shop floor" },
      { metric: "₹12L", label: "Annual Savings", description: "Reduced waste and overtime costs" },
      { metric: "99.2%", label: "Inventory Accuracy", description: "From 87% with manual counts" },
      { metric: "14 weeks", label: "Delivery Time", description: "From discovery to full rollout" },
    ],
    testimonial: {
      quote:
        "Maxwell understood our factory floor better than the big ERP vendors. The system works the way we work—not the other way around. ROI was visible within the first quarter.",
      author: "",
      role: "COO",
      company: "",
    },
    gallery: [
      { mockType: "erp", label: "Production Dashboard" },
      { mockType: "dashboard", label: "OEE Analytics" },
      { mockType: "mobile", label: "Shop Floor App" },
    ],
    duration: "14 weeks",
    teamSize: "6 engineers",
  },

  "healthcare-management-system": {
    slug: "healthcare-management-system",
    title: "MedSync Healthcare Platform",
    subtitle: "Multi-clinic patient management with telehealth, appointments, and unified medical records.",
    metaTitle: "Healthcare Management System Case Study",
    metaDescription:
      "MedSync healthcare platform serving 10,000+ patients across 15 clinics with 99.9% uptime. Patient portal, telehealth, and appointment automation by Maxwell Electrodeal.",
    client: "Leading healthcare organization",
    clientOverview:
      "the healthcare network operates 15 multi-specialty clinic locations across multiple regions, serving 10,000+ active patients with general practice, pediatrics, and diagnostics services.",
    projectType: "Software",
    industry: "Healthcare",
    technologies: ["React", "React Native", "Node.js", "MongoDB", "AWS"],
    accent: "#10B981",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    mockType: "mobile",
    heroResult: "10,000+ active patients",
    cardResult: "99.9% uptime",
    businessChallenge:
      "Each clinic ran independent appointment books. Patients called individual locations for bookings. Medical records were paper-based with no cross-clinic visibility. Staff spent 4+ hours daily on phone scheduling. Telehealth during COVID was impossible without a unified platform.",
    solutionStrategy:
      "Unified patient portal with single sign-on across all locations. Mobile-first design for patient adoption. HIPAA-aware architecture with encrypted records. Telehealth module integrated into existing appointment workflow.",
    designProcess: [
      "Patient journey mapping from booking to follow-up",
      "Accessibility-first UI following WCAG 2.1 AA standards",
      "Clinician workflow prototypes validated with 8 doctors",
      "Mobile app user testing with 50 patient beta group",
    ],
    developmentProcess: [
      "Microservices architecture for clinic scalability",
      "React Native apps for iOS and Android patients",
      "Web admin portal for clinic staff and management",
      "Video SDK integration for telehealth consultations",
      "AWS deployment with automated backups and monitoring",
    ],
    features: [
      "Online appointment booking across 15 locations",
      "Telehealth video consultations",
      "Digital medical records access",
      "Prescription and lab report downloads",
      "SMS/email appointment reminders",
      "Clinic admin dashboard with analytics",
    ],
    results: [
      { metric: "10K+", label: "Active Patients", description: "Onboarded within 6 months" },
      { metric: "99.9%", label: "Uptime", description: "Zero critical downtime since launch" },
      { metric: "60%", label: "Fewer Phone Calls", description: "Self-service booking adoption" },
      { metric: "4.8★", label: "App Rating", description: "On Google Play and App Store" },
    ],
    testimonial: {
      quote:
        "Our patient portal handles 10,000+ users with zero downtime since launch. The team's healthcare expertise showed in every architectural decision.",
      author: "",
      role: "Medical Director",
      company: "",
    },
    gallery: [
      { mockType: "mobile", label: "Patient Mobile App" },
      { mockType: "dashboard", label: "Clinic Admin Portal" },
      { mockType: "lms", label: "Records Dashboard" },
    ],
    duration: "16 weeks",
    teamSize: "7 engineers",
  },

  "logistics-tracking-platform": {
    slug: "logistics-tracking-platform",
    title: "Fleet Management Platform",
    subtitle: "GPS fleet tracking, route optimization, and client shipment portal for 200+ vehicles.",
    metaTitle: "Logistics Tracking Platform Case Study",
    metaDescription:
      "Fleet management platform: 25% faster deliveries, 30% fuel savings, and real-time fleet visibility for 200+ vehicles. Built by Maxwell Electrodeal.",
    client: "Leading logistics organization",
    clientOverview:
      "A regional logistics operator running 200+ delivery vehicles across multiple regions, serving e-commerce, manufacturing, and retail clients with same-day and next-day delivery.",
    projectType: "Software",
    industry: "Logistics",
    technologies: ["React", "Python", "PostgreSQL", "AWS"],
    accent: "#F59E0B",
    gradient: "from-orange-950 via-amber-900 to-slate-950",
    mockType: "map",
    heroResult: "25% faster deliveries",
    cardResult: "30% fuel cost reduction",
    businessChallenge:
      "Dispatch happened via phone calls and WhatsApp. No GPS tracking meant clients constantly called for updates. Route planning was manual, causing 30% fuel waste. Proof of delivery was paper-based, leading to billing disputes.",
    solutionStrategy:
      "Central command dashboard with live GPS tracking. Driver mobile app for dispatch, navigation, and POD capture. Client self-service portal for shipment tracking. Python-based route optimization engine.",
    designProcess: [
      "Ride-along with drivers to understand field workflows",
      "Dispatch center observation and pain point mapping",
      "Map-based UI prototypes for command center operators",
      "Driver app UX tested with 15 drivers before launch",
    ],
    developmentProcess: [
      "GPS hardware API integration with existing trackers",
      "Google OR-Tools route optimization backend",
      "Real-time WebSocket updates for live tracking",
      "Offline-capable driver app with background sync",
      "Client portal with white-label tracking pages",
    ],
    features: [
      "Live GPS fleet tracking on interactive map",
      "AI-powered route optimization",
      "Driver mobile app with POD photo capture",
      "Client self-service tracking portal",
      "Automated delivery notifications via SMS",
      "Fuel and performance analytics dashboards",
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
    gallery: [
      { mockType: "map", label: "Fleet Command Center" },
      { mockType: "mobile", label: "Driver App" },
      { mockType: "analytics", label: "Performance Analytics" },
    ],
    duration: "12 weeks",
    teamSize: "5 engineers",
  },

  "educational-learning-portal": {
    slug: "educational-learning-portal",
    title: "Learning Management Platform",
    subtitle: "Full-stack LMS with mobile learning, assessments, and parent communication for 20+ schools.",
    metaTitle: "Educational Learning Portal Case Study",
    metaDescription:
      "the education group LMS: 3× platform adoption, 50,000+ monthly sessions, and 90% parent engagement. Educational software by Maxwell Electrodeal.",
    client: "Leading education organization",
    clientOverview:
      "An education institution group operating 20+ CBSE-affiliated schools across multiple regions, serving 8,000+ students from primary through senior secondary.",
    projectType: "SaaS",
    industry: "Education",
    technologies: ["Next.js", "Flutter", "PostgreSQL", "Azure"],
    accent: "#8B5CF6",
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    mockType: "lms",
    heroResult: "3× platform adoption",
    cardResult: "50K+ monthly sessions",
    businessChallenge:
      "Legacy LMS had 15% student adoption. No mobile access. Teachers uploaded PDFs manually. Parents had zero visibility into homework, grades, or attendance. Online exams during lockdown were impossible.",
    solutionStrategy:
      "Mobile-first LMS with gamification for student engagement. Parent app for real-time updates. Integrated online examination module. Centralized content management for 20 schools.",
    designProcess: [
      "Student and teacher interviews across 5 schools",
      "Gamification mechanics designed for ages 6–18",
      "Parent app wireframes focused on 3-tap access to grades",
      "Accessibility testing for diverse literacy levels",
    ],
    developmentProcess: [
      "Next.js web platform with SSR for performance",
      "Flutter cross-platform student and parent apps",
      "Video streaming integration for live classes",
      "Auto-grading engine for MCQ and short-answer exams",
      "Multi-tenant architecture for 20 school branches",
    ],
    features: [
      "Course content management with video support",
      "Online examinations with auto-grading",
      "Student and parent mobile apps",
      "Attendance tracking with parent notifications",
      "Gamification badges and progress tracking",
      "Centralized admin for multi-school management",
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
    gallery: [
      { mockType: "lms", label: "Learning Dashboard" },
      { mockType: "mobile", label: "Student Mobile App" },
      { mockType: "dashboard", label: "Admin Analytics" },
    ],
    duration: "18 weeks",
    teamSize: "8 engineers",
  },

  "retail-analytics-dashboard": {
    slug: "retail-analytics-dashboard",
    title: "Retail Analytics & Intelligence Platform",
    subtitle: "Omnichannel analytics, inventory sync, and loyalty platform for 12 retail locations.",
    metaTitle: "Retail Analytics Dashboard Case Study",
    metaDescription:
      "Omnichannel retail platform: 35% online revenue growth, 98% inventory sync, 2.5× repeat purchases. Retail software by Maxwell Electrodeal.",
    client: "Leading retail organization",
    clientOverview:
      "The client operates 12 fashion retail stores across multiple metro markets, with a growing online presence targeting urban millennials and Gen-Z shoppers.",
    projectType: "Software",
    industry: "Retail",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    accent: "#F43F5E",
    gradient: "from-rose-950 via-pink-900 to-slate-950",
    mockType: "analytics",
    heroResult: "35% online revenue growth",
    cardResult: "2.5× repeat purchases",
    businessChallenge:
      "12 stores ran independent POS systems with no central inventory view. E-commerce launched separately, causing stock mismatches and cancelled orders. No customer data unified across channels. Marketing was generic with no purchase history insights.",
    solutionStrategy:
      "Unified retail ERP with real-time POS sync. E-commerce platform sharing inventory with stores. CRM and loyalty program driving repeat purchases. Executive analytics dashboard for data-driven decisions.",
    designProcess: [
      "Customer journey mapping across online and offline touchpoints",
      "Store manager workflow analysis at 4 locations",
      "Analytics dashboard designed for non-technical executives",
      "Loyalty program UX tested with focus groups",
    ],
    developmentProcess: [
      "POS API integration with Gofrugal across all stores",
      "Next.js e-commerce with real-time inventory checks",
      "Points-based loyalty engine with tier management",
      "ETL pipeline for nightly sales consolidation",
      "Executive dashboard with drill-down analytics",
    ],
    features: [
      "Real-time omnichannel inventory sync",
      "E-commerce with buy-online-pickup-in-store",
      "Customer loyalty and rewards program",
      "Sales analytics by store, category, and period",
      "Automated low-stock alerts and reorder suggestions",
      "Customer segmentation for targeted campaigns",
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
    gallery: [
      { mockType: "analytics", label: "Sales Analytics" },
      { mockType: "dashboard", label: "Inventory Dashboard" },
      { mockType: "mobile", label: "Customer App" },
    ],
    duration: "20 weeks",
    teamSize: "6 engineers",
  },

  "construction-project-management": {
    slug: "construction-project-management",
    title: "Construction Project Platform",
    subtitle: "Construction ERP with mobile site reporting, cost tracking, and digital inspections.",
    metaTitle: "Construction Project Management Case Study",
    metaDescription:
      "Construction project platform: 25% cost overrun reduction, 100% digital site records. Project management software by Maxwell Electrodeal.",
    client: "Leading construction organization",
    clientOverview:
      "a construction firm is a commercial and residential contractor managing 8+ simultaneous projects across multiple regions, with 150+ field workers and 30+ subcontractors.",
    projectType: "Software",
    industry: "Construction",
    technologies: ["React", "React Native", "Node.js", "PostgreSQL"],
    accent: "#78716C",
    gradient: "from-stone-950 via-zinc-900 to-slate-950",
    mockType: "construction",
    heroResult: "25% less cost overrun",
    cardResult: "100% digital records",
    businessChallenge:
      "Project costs tracked in Excel with no real-time budget visibility. Site managers reported progress via WhatsApp photos. Material wastage was untracked. Safety inspections were paper-based with compliance gaps. Subcontractor payments delayed due to manual verification.",
    solutionStrategy:
      "Construction ERP with project-wise costing. Mobile site app for daily reports and material requests. Digital inspection checklists with photo evidence. Subcontractor portal for work orders and invoicing.",
    designProcess: [
      "Site visits to 3 active construction projects",
      "Site manager and foreman workflow interviews",
      "Offline-first mobile app prototypes for field use",
      "Executive dashboard designed for project portfolio view",
    ],
    developmentProcess: [
      "Project costing module with budget vs. actual tracking",
      "React Native site app with offline sync",
      "GPS-tagged photo capture for progress documentation",
      "Digital inspection forms with mandatory checkpoints",
      "Subcontractor portal with approval workflows",
    ],
    features: [
      "Multi-project cost tracking and budgeting",
      "Mobile daily progress reports from site",
      "Material request and approval workflows",
      "Digital safety and quality inspections",
      "Subcontractor management portal",
      "Executive portfolio dashboard",
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
    gallery: [
      { mockType: "construction", label: "Project Dashboard" },
      { mockType: "mobile", label: "Site Manager App" },
      { mockType: "dashboard", label: "Cost Analytics" },
    ],
    duration: "16 weeks",
    teamSize: "6 engineers",
  },

  "ai-safety-monitoring-system": {
    slug: "ai-safety-monitoring-system",
    title: "SafeGuard AI Vision System",
    subtitle: "Computer vision platform for real-time safety compliance monitoring on production lines.",
    metaTitle: "AI Safety Monitoring System Case Study",
    metaDescription:
      "SafeGuard AI: 99.2% hazard detection accuracy, 60% faster inspection cycles. Industrial AI safety monitoring by Maxwell Electrodeal.",
    client: "Leading manufacturing organization",
    clientOverview:
      "A precision manufacturing group extended their partnership with Maxwell to deploy AI-powered safety monitoring across 2 high-risk production lines handling heavy machinery and chemical processes.",
    projectType: "AI",
    industry: "Manufacturing",
    technologies: ["Python", "React", "AWS", "PostgreSQL"],
    accent: "#6366F1",
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    mockType: "safety",
    heroResult: "99.2% detection accuracy",
    cardResult: "60% faster inspection",
    businessChallenge:
      "Manual safety inspections missed 8% of PPE violations and hazardous conditions. Incident investigations relied on witness accounts with no visual evidence. Compliance audits required weeks of documentation compilation. Insurance premiums rising due to incident history.",
    solutionStrategy:
      "Computer vision models trained on facility-specific camera feeds. Real-time alerts to supervisors when violations detected. Automated compliance reporting. Edge deployment for low-latency detection without cloud dependency.",
    designProcess: [
      "Safety audit observation across production lines",
      "Camera placement optimization with security team",
      "Alert UX designed for minimal supervisor disruption",
      "Compliance report templates aligned with audit requirements",
    ],
    developmentProcess: [
      "Custom YOLO model trained on 50,000+ facility images",
      "Edge deployment on NVIDIA Jetson for real-time inference",
      "React dashboard for alert management and review",
      "Automated daily/weekly compliance report generation",
      "Integration with existing ERP incident module",
    ],
    features: [
      "Real-time PPE compliance detection",
      "Hazard zone intrusion alerts",
      "Automated incident video clip capture",
      "Compliance dashboard with audit trails",
      "Supervisor mobile alerts",
      "Weekly automated compliance reports",
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
    gallery: [
      { mockType: "safety", label: "AI Monitoring Dashboard" },
      { mockType: "analytics", label: "Compliance Analytics" },
      { mockType: "dashboard", label: "Alert Management" },
    ],
    duration: "10 weeks",
    teamSize: "4 engineers",
  },

  "saas-workforce-management": {
    slug: "saas-workforce-management",
    title: "Multi-Tenant Workforce Management SaaS",
    subtitle: "Multi-tenant workforce management platform with scheduling, attendance, and payroll integration.",
    metaTitle: "SaaS Workforce Management Case Study",
    metaDescription:
      "Multi-tenant workforce SaaS: 500+ active tenants, ₹2Cr ARR in 18 months. Workforce management platform built by Maxwell Electrodeal.",
    client: "HR Tech Startup",
    clientOverview:
      "A workforce SaaS company targeting staffing agencies and mid-size employers, providing workforce scheduling, attendance tracking, and payroll integration.",
    projectType: "SaaS",
    industry: "HR Tech",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Stripe"],
    accent: "#06B6D4",
    gradient: "from-cyan-950 via-blue-900 to-slate-950",
    mockType: "saas",
    heroResult: "500+ active tenants",
    cardResult: "₹2Cr ARR in 18 months",
    businessChallenge:
      "Founder needed investor-ready MVP in 10 weeks. Existing tools (When I Work, Deputy) were too expensive for Indian SMBs. Required multi-tenant architecture, subscription billing, and mobile apps for field workers—all before seed funding.",
    solutionStrategy:
      "MVP-first approach: core scheduling + attendance in 8 weeks. Stripe billing from day one. Multi-tenant PostgreSQL with row-level security. React Native app for employee clock-in/out.",
    designProcess: [
      "Competitive analysis of 5 workforce management tools",
      "HR manager interviews at 10 target companies",
      "Scheduling UX optimized for mobile-first managers",
      "Investor demo flow designed for pitch presentations",
    ],
    developmentProcess: [
      "Multi-tenant architecture with tenant isolation",
      "Stripe subscription billing with 3 pricing tiers",
      "Next.js admin dashboard with SSR",
      "React Native employee app with geofenced clock-in",
      "Usage analytics for product-led growth metrics",
    ],
    features: [
      "Shift scheduling with drag-and-drop",
      "GPS geofenced attendance tracking",
      "Leave management and approval workflows",
      "Stripe subscription billing (3 tiers)",
      "Multi-tenant admin dashboard",
      "Payroll export integration",
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
    gallery: [
      { mockType: "saas", label: "Admin Dashboard" },
      { mockType: "mobile", label: "Employee App" },
      { mockType: "analytics", label: "Usage Analytics" },
    ],
    duration: "7 weeks MVP + ongoing",
    teamSize: "5 engineers",
  },
};

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData[slug as ProjectSlug];
}

export function getAllProjects(): ProjectData[] {
  return projectSlugs.map((slug) => projectsData[slug]);
}

export function getRelatedProjects(currentSlug: string, limit = 3): ProjectData[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return getAllProjects().slice(0, limit);

  return getAllProjects()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aScore = (a.industry === current.industry ? 2 : 0) + (a.projectType === current.projectType ? 1 : 0);
      const bScore = (b.industry === current.industry ? 2 : 0) + (b.projectType === current.projectType ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}
