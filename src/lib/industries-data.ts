import { getExtendedIndustry } from "./industries-extended";
import {
  phase8IndustriesData,
  phase8IndustrySlugs,
  phase8RealEstateOverride,
} from "./phase8/phase8-industries-data";
import { gscIndustriesData, gscIndustrySlugs } from "./gsc-industries-data";

export const industrySlugs = [
  "manufacturing",
  "healthcare",
  "education",
  "logistics",
  "retail",
  "construction",
  "chemical",
  "pharma",
  "textile",
  "automotive",
  "fmcg",
  "metals",
  "plastics",
  "food-processing",
  "oil-gas",
  "energy",
  "agriculture",
  "real-estate",
  "hospitality",
  "banking",
  "insurance",
  "ecommerce",
  "import-export",
  "warehouse",
  "cold-chain",
  "packaging",
  "rubber",
  "ceramics",
  "gems-jewelry",
  "steel",
  "cement",
  "paper",
  "printing",
  "electronics",
  "aerospace",
  "renewable-energy",
  "water-treatment",
  "mining",
  "agro-processing",
  "dairy",
  "paint-coatings",
  ...gscIndustrySlugs,
  ...phase8IndustrySlugs,
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

export interface IndustryPageData {
  slug: IndustrySlug;
  title: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  icon: "factory" | "health" | "education" | "logistics" | "retail" | "construction";
  gradient: string;
  accent: string;
  focusAreas: { title: string; description: string }[];
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string; category: string; serviceSlug?: string }[];
  softwareStack: { name: string; purpose: string }[];
  impactMetrics: { value: string; label: string; description: string }[];
  useCases: { title: string; description: string; outcome: string }[];
  caseStudy: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    tech: string[];
  };
  workflowSteps: { step: string; title: string; description: string }[];
  whyMaxwell: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  /** Shown in schema and geo blocks — e.g. "₹2,50,000" */
  startingPrice?: string;
  leadFormTitle?: string;
  leadFormSubmitLabel?: string;
}

const sharedWhyMaxwell = [
  {
    title: "Industry-Native Engineering",
    description: "We understand your workflows—not just code. Domain expertise built into every sprint.",
  },
  {
    title: "Compliance-Aware Architecture",
    description: "Security, audit trails, and regulatory requirements designed in from day one.",
  },
  {
    title: "Measurable ROI Focus",
    description: "We define success metrics upfront and build toward quantifiable business outcomes.",
  },
  {
    title: "Long-Term Partnership",
    description: "Post-launch support, optimization, and feature expansion as your operations evolve.",
  },
] as const;

export const industriesData: Partial<Record<IndustrySlug, IndustryPageData>> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    headline: "Digitize the Factory Floor. Scale Production.",
    subheadline:
      "Custom ERP, MES, inventory systems, and AI monitoring platforms built for manufacturers who need real-time visibility—not spreadsheet chaos.",
    metaTitle: "Manufacturing Software Development Company India",
    metaDescription:
      "Manufacturing software development company in India — ERP, MES, inventory & factory digitization. Hire a team that understands Indian production workflows.",
    keywords: [
      "manufacturing software development company",
      "manufacturing ERP development India",
      "production management software development",
      "factory digitization India",
    ],
    icon: "factory",
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accent: "#2563EB",
    focusAreas: [
      { title: "Production Management", description: "Work orders, BOM, scheduling, and shop floor tracking in real time." },
      { title: "Inventory Tracking", description: "Multi-warehouse stock visibility with automated reorder and batch tracking." },
      { title: "Quality Control", description: "Inspection workflows, defect logging, and compliance documentation." },
      { title: "Maintenance Management", description: "Preventive maintenance schedules, asset tracking, and downtime alerts." },
      { title: "Factory Digitization", description: "Paperless operations from raw material to finished goods dispatch." },
      { title: "Workflow Automation", description: "Approval chains, notifications, and process automation across departments." },
    ],
    challenges: [
      {
        title: "Production blind spots",
        description: "No real-time view of work-in-progress, machine utilization, or bottlenecks across the factory floor.",
      },
      {
        title: "Inventory inaccuracies",
        description: "Manual stock counts, discrepancies between physical and system inventory, and material shortages halting production.",
      },
      {
        title: "Quality inconsistencies",
        description: "Paper-based QC records, untraceable defects, and no data to drive continuous improvement.",
      },
      {
        title: "Unplanned downtime",
        description: "Reactive maintenance causing costly machine failures and missed delivery deadlines.",
      },
    ],
    solutions: [
      { title: "Custom Manufacturing ERP", description: "Unified platform for inventory, production, finance, and HR tailored to your plant.", category: "ERP", serviceSlug: "erp-development" },
      { title: "Manufacturing Execution System (MES)", description: "Real-time shop floor data collection, OEE tracking, and production scheduling.", category: "MES" },
      { title: "Inventory Management System", description: "Barcode/QR scanning, multi-location stock, and automated replenishment.", category: "Inventory" },
      { title: "Production Dashboards", description: "Live KPIs for output, efficiency, downtime, and order fulfillment status.", category: "Analytics" },
      { title: "AI Production Monitoring", description: "Predictive maintenance, anomaly detection, and quality inspection automation.", category: "AI", serviceSlug: "ai-solutions" },
    ],
    softwareStack: [
      { name: "Custom ERP", purpose: "Core operations platform" },
      { name: "React Dashboards", purpose: "Real-time production visibility" },
      { name: "PostgreSQL", purpose: "Transactional data & reporting" },
      { name: "IoT Integration", purpose: "Machine & sensor data" },
      { name: "Python / AI", purpose: "Predictive maintenance" },
      { name: "Mobile Apps", purpose: "Shop floor data entry" },
    ],
    impactMetrics: [
      { value: "40%", label: "Less Manual Entry", description: "Average reduction in manual data entry across manufacturing clients" },
      { value: "99.2%", label: "Inventory Accuracy", description: "Stock accuracy achieved with barcode-integrated systems" },
      { value: "35%", label: "Downtime Reduction", description: "Unplanned downtime cut with predictive maintenance modules" },
      { value: "₹12L+", label: "Annual Savings", description: "Operational cost savings reported by mid-size manufacturers" },
    ],
    useCases: [
      { title: "Multi-Plant Production Tracking", description: "Unified view of production status across 3+ manufacturing facilities.", outcome: "Real-time order visibility for sales and management teams" },
      { title: "Automated Quality Inspection", description: "Digital QC checklists with photo capture and automatic non-conformance alerts.", outcome: "60% faster inspection cycles with full traceability" },
      { title: "Supplier Portal Integration", description: "Vendors submit PO confirmations, ASN, and invoices through a dedicated portal.", outcome: "50% reduction in procurement follow-up time" },
      { title: "OEE Performance Monitoring", description: "Live Overall Equipment Effectiveness dashboards per machine and line.", outcome: "15% improvement in production efficiency within 6 months" },
    ],
    caseStudy: {
      title: "Manufacturing ERP Platform",
      client: "the manufacturing client Industries",
      challenge: "Manual inventory tracking across 3 facilities with no production scheduling visibility.",
      solution: "Custom ERP with real-time inventory, work order management, supplier portal, and OEE dashboards.",
      results: ["40% reduction in manual data entry", "₹12L annual operational savings", "99.2% inventory accuracy"],
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    workflowSteps: [
      { step: "01", title: "Raw Material", description: "GRN, quality check, stock allocation" },
      { step: "02", title: "Production", description: "Work orders, BOM consumption, WIP tracking" },
      { step: "03", title: "Quality", description: "Inspection, testing, non-conformance" },
      { step: "04", title: "Finished Goods", description: "Packaging, labeling, warehouse entry" },
      { step: "05", title: "Dispatch", description: "Order fulfillment, invoicing, delivery tracking" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Can you integrate with our existing Tally or SAP system?", answer: "Yes. We build bi-directional integrations with Tally, SAP, and other ERPs via APIs—keeping your accounting intact while modernizing operations." },
      { question: "How long does a manufacturing ERP take to implement?", answer: "Core modules (inventory + production): 3–5 months. Full ERP with finance and HR: 6–9 months with phased rollout to minimize disruption." },
      { question: "Do you support shop floor mobile apps?", answer: "Absolutely. We build mobile apps for operators to log production data, scan barcodes, and report issues directly from the factory floor." },
      { question: "What's the typical ROI for manufacturing software?", answer: "Most clients see measurable ROI within 6–12 months through reduced manual work, fewer inventory errors, and improved production efficiency." },
    ],
  },

  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    headline: "Technology That Puts Patients First",
    subheadline:
      "Patient portals, telemedicine platforms, hospital automation, and secure medical records systems—built for healthcare organizations that can't afford downtime or compliance gaps.",
    metaTitle: "Healthcare Software Development Company India",
    metaDescription:
      "Healthcare software development company in India — patient portals, telemedicine, hospital management & secure records. HIPAA-aware delivery for clinics & hospital networks.",
    keywords: [
      "healthcare software development company",
      "hospital management software development",
      "healthcare app development company India",
      "telemedicine platform development",
    ],
    icon: "health",
    gradient: "from-emerald-950 via-teal-900 to-slate-950",
    accent: "#10B981",
    focusAreas: [
      { title: "Patient Management", description: "Unified patient records, history, and communication across locations." },
      { title: "Telemedicine", description: "Video consultations, e-prescriptions, and remote patient monitoring." },
      { title: "Hospital Automation", description: "Bed management, staff scheduling, and departmental workflow automation." },
      { title: "Appointment Systems", description: "Online booking, reminders, waitlist management, and calendar sync." },
      { title: "Medical Records", description: "Secure EMR/EHR with role-based access and audit trails." },
    ],
    challenges: [
      { title: "Fragmented patient experience", description: "Patients navigate different systems across clinic locations with no unified records or communication." },
      { title: "Administrative overload", description: "Staff spend hours on phone bookings, manual records, and repetitive patient inquiries." },
      { title: "Data security concerns", description: "Patient data on unsecured systems creates compliance risks and trust issues." },
      { title: "Operational inefficiency", description: "No real-time visibility into bed occupancy, appointment no-shows, or department performance." },
    ],
    solutions: [
      { title: "Healthcare Patient Portals", description: "Self-service portals for appointments, records access, billing, and messaging.", category: "Portal", serviceSlug: "custom-software-development" },
      { title: "Telemedicine Platforms", description: "HIPAA-aware video consultation with e-prescriptions and follow-up scheduling.", category: "Telehealth" },
      { title: "Appointment & Scheduling Systems", description: "Multi-doctor, multi-location booking with SMS/email reminders.", category: "Scheduling" },
      { title: "Healthcare Mobile Apps", description: "Patient and clinician apps for on-the-go access to records and consultations.", category: "Mobile", serviceSlug: "mobile-app-development" },
      { title: "Analytics & Reporting Platforms", description: "Operational dashboards for patient volume, revenue, and department KPIs.", category: "Analytics" },
    ],
    softwareStack: [
      { name: "Patient Portal", purpose: "Self-service patient access" },
      { name: "React Native Apps", purpose: "Mobile patient & clinician apps" },
      { name: "Node.js Backend", purpose: "Secure API & business logic" },
      { name: "MongoDB / PostgreSQL", purpose: "Medical records storage" },
      { name: "AWS / Azure", purpose: "HIPAA-ready cloud hosting" },
      { name: "Video SDK", purpose: "Telemedicine integration" },
    ],
    impactMetrics: [
      { value: "10K+", label: "Active Patients", description: "Patient portal adoption across multi-clinic networks" },
      { value: "99.9%", label: "System Uptime", description: "Reliability for critical healthcare operations" },
      { value: "60%", label: "Fewer Phone Calls", description: "Reduction in appointment-related phone inquiries" },
      { value: "45%", label: "Admin Time Saved", description: "Staff hours reclaimed from manual scheduling and records" },
    ],
    useCases: [
      { title: "Multi-Clinic Patient Portal", description: "Unified portal across 15+ clinic locations with shared patient records.", outcome: "Single login for patients across entire network" },
      { title: "Telehealth Integration", description: "Video consultations embedded in existing appointment workflow.", outcome: "3x increase in follow-up appointment completion" },
      { title: "Automated Appointment Reminders", description: "SMS and email reminders with confirmation and rescheduling links.", outcome: "40% reduction in no-show rates" },
      { title: "Departmental Analytics Dashboard", description: "Real-time metrics for OPD, IPD, lab, and pharmacy departments.", outcome: "Management visibility into daily operations" },
    ],
    caseStudy: {
      title: "Multi-Clinic Patient Portal",
      client: "Leading healthcare organization",
      challenge: "Fragmented patient experience across 15 clinic locations with paper-based records.",
      solution: "Unified patient portal with appointments, records access, telehealth, and billing integration.",
      results: ["10,000+ active patients", "99.9% uptime since launch", "60% reduction in phone inquiries"],
      tech: ["React Native", "Node.js", "MongoDB", "AWS"],
    },
    workflowSteps: [
      { step: "01", title: "Registration", description: "Patient intake, ID verification, insurance" },
      { step: "02", title: "Appointment", description: "Booking, reminders, check-in" },
      { step: "03", title: "Consultation", description: "In-person or telemedicine visit" },
      { step: "04", title: "Records", description: "Diagnosis, prescriptions, lab orders" },
      { step: "05", title: "Follow-up", description: "Scheduling, billing, patient communication" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Is the software HIPAA compliant?", answer: "We build HIPAA-aware architecture with encryption, access controls, audit logs, and secure cloud hosting. Formal compliance certification depends on your specific requirements and hosting choices." },
      { question: "Can you integrate with existing hospital systems?", answer: "Yes. We integrate with HL7/FHIR standards, lab systems, pharmacy databases, and existing EMR platforms via secure APIs." },
      { question: "How do you handle patient data security?", answer: "End-to-end encryption, role-based access, session management, regular security audits, and OWASP best practices are standard in every healthcare project." },
      { question: "Can patients book appointments online?", answer: "Yes. Our scheduling systems support multi-doctor, multi-location booking with real-time availability, waitlists, and automated reminders." },
    ],
  },

  education: {
    slug: "education",
    title: "Education",
    headline: "EdTech That Students and Staff Actually Use",
    subheadline:
      "Learning management systems, student portals, examination platforms, and campus management software—designed for adoption, not shelfware.",
    metaTitle: "Education Software Development Company India",
    metaDescription:
      "Education software development company in India — LMS, student portals, online exams & campus management for schools, colleges & EdTech startups.",
    keywords: [
      "education software development company",
      "LMS development company India",
      "school management software development",
      "EdTech platform development India",
    ],
    icon: "education",
    gradient: "from-violet-950 via-purple-900 to-slate-950",
    accent: "#8B5CF6",
    focusAreas: [
      { title: "Learning Management (LMS)", description: "Course delivery, content management, assessments, and progress tracking." },
      { title: "Student Portals", description: "Self-service access to grades, schedules, assignments, and communication." },
      { title: "Online Learning", description: "Live classes, recorded lectures, and interactive learning modules." },
      { title: "Examination Systems", description: "Online exams, proctoring integration, grading automation, and result publishing." },
      { title: "Campus Management", description: "Admissions, fee management, attendance, and administrative automation." },
    ],
    challenges: [
      { title: "Low platform adoption", description: "Students and teachers abandon clunky LMS platforms that are harder than WhatsApp and email." },
      { title: "Disconnected systems", description: "Admissions, fees, attendance, and academics run on separate tools with no integration." },
      { title: "Manual examination processes", description: "Paper-based exams, manual grading, and delayed result publication frustrate everyone." },
      { title: "Poor parent communication", description: "No centralized channel for parents to track progress, attendance, and school updates." },
    ],
    solutions: [
      { title: "Custom Learning Platforms", description: "Branded LMS with courses, video, quizzes, and gamification built for your curriculum.", category: "LMS", serviceSlug: "custom-software-development" },
      { title: "Student & Parent Mobile Apps", description: "Mobile-first access to grades, homework, attendance, and school announcements.", category: "Mobile", serviceSlug: "mobile-app-development" },
      { title: "Digital Attendance Systems", description: "Biometric, RFID, or app-based attendance with instant parent notifications.", category: "Attendance" },
      { title: "Examination & Assessment Platform", description: "Online exams with auto-grading, analytics, and secure result management.", category: "Exams" },
      { title: "Campus Administration Suite", description: "Admissions, fee collection, timetable, and staff management in one system.", category: "Admin" },
    ],
    softwareStack: [
      { name: "Next.js LMS", purpose: "Web-based learning platform" },
      { name: "Flutter Mobile App", purpose: "Student & parent apps" },
      { name: "PostgreSQL", purpose: "Academic records & analytics" },
      { name: "Video Streaming", purpose: "Live & recorded classes" },
      { name: "Azure Cloud", purpose: "Scalable hosting" },
      { name: "Payment Gateway", purpose: "Fee collection" },
    ],
    impactMetrics: [
      { value: "3×", label: "Platform Adoption", description: "Increase in active user engagement vs. legacy systems" },
      { value: "50K+", label: "Monthly Sessions", description: "Student learning sessions on deployed LMS platforms" },
      { value: "80%", label: "Grading Automated", description: "Exams and assessments graded without manual intervention" },
      { value: "90%", label: "Parent Engagement", description: "Parents actively using portal for updates and communication" },
    ],
    useCases: [
      { title: "School Chain LMS Rollout", description: "Unified learning platform across 20+ school branches with centralized content.", outcome: "Consistent curriculum delivery and progress tracking" },
      { title: "Online Examination Platform", description: "Secure online exams for 5,000+ students with auto-grading and analytics.", outcome: "Results published within 24 hours vs. 2 weeks manually" },
      { title: "Parent Communication Hub", description: "Real-time notifications for attendance, grades, events, and fee reminders.", outcome: "90% parent app adoption within first semester" },
      { title: "College Admission Portal", description: "End-to-end digital admissions from application to enrollment.", outcome: "70% reduction in admission processing time" },
    ],
    caseStudy: {
      title: "Learning Management Platform",
      client: "the education group Academy",
      challenge: "Legacy LMS with 15% student adoption and no mobile access.",
      solution: "Modern LMS with mobile apps, video classes, gamification, and parent portal.",
      results: ["3× platform adoption", "50,000+ monthly sessions", "90% parent engagement rate"],
      tech: ["Next.js", "Flutter", "PostgreSQL", "Azure"],
    },
    workflowSteps: [
      { step: "01", title: "Enrollment", description: "Admission, registration, fee payment" },
      { step: "02", title: "Learning", description: "Classes, content, assignments" },
      { step: "03", title: "Assessment", description: "Quizzes, exams, projects" },
      { step: "04", title: "Grading", description: "Auto/manual grading, feedback" },
      { step: "05", title: "Reporting", description: "Progress reports, analytics, certificates" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Can you build a custom LMS instead of using Moodle or Canvas?", answer: "Yes. Custom LMS gives you full control over UX, branding, features, and integrations—without per-seat licensing or plugin limitations." },
      { question: "Do you support live online classes?", answer: "We integrate Zoom, Google Meet, or custom WebRTC solutions for live classes with attendance tracking and recording." },
      { question: "How do you handle online exam security?", answer: "Timed exams, question randomization, IP restrictions, proctoring integration options, and secure browser modes." },
      { question: "Can parents access the platform?", answer: "Yes. Dedicated parent portals and apps provide visibility into attendance, grades, homework, and school announcements." },
    ],
  },

  logistics: {
    slug: "logistics",
    title: "Logistics",
    headline: "Real-Time Visibility. Faster Deliveries. Lower Costs.",
    subheadline:
      "Fleet tracking, route optimization, warehouse management, and logistics ERP platforms—built for companies that need every shipment tracked and every route optimized.",
    metaTitle: "Logistics Software Development Company India",
    metaDescription:
      "Logistics software development company in India — fleet tracking, route optimization, WMS & driver apps for supply chain operators.",
    keywords: [
      "logistics software development company",
      "fleet management software development",
      "supply chain software development India",
      "warehouse management software development",
    ],
    icon: "logistics",
    gradient: "from-orange-950 via-amber-900 to-slate-950",
    accent: "#F59E0B",
    focusAreas: [
      { title: "Fleet Tracking", description: "GPS-based real-time vehicle location, speed, and route history." },
      { title: "Route Optimization", description: "AI-powered route planning for minimum fuel cost and fastest delivery." },
      { title: "Shipment Monitoring", description: "End-to-end shipment visibility with status updates and client notifications." },
      { title: "Warehouse Management", description: "Inbound, storage, picking, packing, and outbound operations digitized." },
    ],
    challenges: [
      { title: "Zero shipment visibility", description: "Clients call constantly for updates because there's no real-time tracking or automated notifications." },
      { title: "Inefficient routing", description: "Manual route planning wastes fuel, time, and driver capacity every day." },
      { title: "Warehouse chaos", description: "Paper-based picking, misplaced inventory, and slow dispatch operations." },
      { title: "Driver management gaps", description: "No accountability for delivery times, vehicle condition, or proof of delivery." },
    ],
    solutions: [
      { title: "Logistics ERP Platform", description: "End-to-end operations from order to delivery with finance integration.", category: "ERP", serviceSlug: "erp-development" },
      { title: "GPS Fleet Tracking System", description: "Live vehicle tracking, geofencing, and driver behavior monitoring.", category: "Tracking" },
      { title: "Driver Mobile Apps", description: "Dispatch, navigation, POD capture, and status updates from the field.", category: "Mobile", serviceSlug: "mobile-app-development" },
      { title: "Client Tracking Portal", description: "Self-service shipment tracking for B2B and B2C customers.", category: "Portal" },
      { title: "Analytics Dashboards", description: "KPIs for delivery performance, fuel efficiency, and warehouse throughput.", category: "Analytics" },
    ],
    softwareStack: [
      { name: "Fleet GPS Platform", purpose: "Real-time vehicle tracking" },
      { name: "Driver Mobile App", purpose: "Field operations" },
      { name: "Python Backend", purpose: "Route optimization engine" },
      { name: "Google Maps API", purpose: "Navigation & geocoding" },
      { name: "PostgreSQL", purpose: "Shipment & fleet data" },
      { name: "React Dashboard", purpose: "Operations command center" },
    ],
    impactMetrics: [
      { value: "25%", label: "Faster Deliveries", description: "Average delivery time improvement with route optimization" },
      { value: "30%", label: "Fuel Savings", description: "Fuel cost reduction through optimized routing" },
      { value: "95%", label: "On-Time Rate", description: "Delivery SLA compliance with real-time tracking" },
      { value: "50%", label: "Support Calls Down", description: "Reduction in 'where is my shipment' inquiries" },
    ],
    useCases: [
      { title: "Fleet GPS Dashboard", description: "200+ vehicle fleet with live tracking, geofencing, and maintenance alerts.", outcome: "Real-time fleet visibility for dispatch team" },
      { title: "Last-Mile Delivery App", description: "Driver app with optimized routes, POD photo capture, and cash collection.", outcome: "30% more deliveries per driver per day" },
      { title: "Warehouse Pick & Pack System", description: "Barcode-driven picking, packing verification, and dispatch scheduling.", outcome: "40% faster warehouse throughput" },
      { title: "Client Self-Service Portal", description: "B2B clients track shipments, download PODs, and raise queries online.", outcome: "50% reduction in support calls" },
    ],
    caseStudy: {
      title: "Fleet Management Platform",
      client: "Leading logistics organization",
      challenge: "200+ vehicles with no real-time tracking and manual dispatch via phone calls.",
      solution: "GPS fleet dashboard, driver mobile app, route optimization, and client tracking portal.",
      results: ["25% faster deliveries", "30% fuel cost reduction", "95% on-time delivery rate"],
      tech: ["React", "Python", "PostgreSQL", "Google Maps"],
    },
    workflowSteps: [
      { step: "01", title: "Order", description: "Booking, allocation, scheduling" },
      { step: "02", title: "Dispatch", description: "Route planning, driver assignment" },
      { step: "03", title: "Transit", description: "GPS tracking, status updates" },
      { step: "04", title: "Delivery", description: "POD capture, confirmation" },
      { step: "05", title: "Billing", description: "Invoicing, reporting, analytics" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Can you integrate with GPS hardware providers?", answer: "Yes. We integrate with major GPS tracker APIs (Teltonika, Concox, etc.) and also support smartphone-based tracking for driver apps." },
      { question: "Do you build route optimization algorithms?", answer: "We implement route optimization using Google OR-Tools and custom algorithms considering distance, traffic, delivery windows, and vehicle capacity." },
      { question: "Can clients track shipments in real time?", answer: "Yes. We build branded client portals with live tracking maps, ETA updates, and automated SMS/email notifications." },
      { question: "How long does a logistics platform take to build?", answer: "Fleet tracking MVP: 8–12 weeks. Full logistics ERP with warehouse: 4–6 months depending on scope." },
    ],
  },

  retail: {
    slug: "retail",
    title: "Retail",
    headline: "Omnichannel Commerce. Unified Inventory. Loyal Customers.",
    subheadline:
      "E-commerce platforms, retail ERP, POS integrations, and customer loyalty systems—built for retailers competing on experience, not just price.",
    metaTitle: "Retail ERP India — From ₹2,50,000",
    metaDescription:
      "Custom retail ERP for Indian stores: POS sync, inventory tracking, loyalty and omnichannel commerce. 50+ projects. From ₹2,50,000. Free quote in 24 hours.",
    keywords: [
      "retail software development company",
      "ecommerce software development India",
      "retail ERP development",
      "omnichannel commerce platform development",
    ],
    icon: "retail",
    gradient: "from-rose-950 via-pink-900 to-slate-950",
    accent: "#F43F5E",
    focusAreas: [
      { title: "Omnichannel Commerce", description: "Unified online and offline sales with synchronized inventory and pricing." },
      { title: "POS Integration", description: "Connect point-of-sale systems with inventory, CRM, and accounting in real time." },
      { title: "Inventory Management", description: "Multi-store stock visibility, transfers, and automated replenishment." },
      { title: "Customer Loyalty", description: "Points, rewards, tiered memberships, and personalized offers." },
    ],
    challenges: [
      { title: "Online-offline disconnect", description: "Website inventory doesn't match stores. Customers order online, items are unavailable." },
      { title: "Inventory blind spots", description: "No unified view of stock across stores, warehouse, and e-commerce channel." },
      { title: "Customer retention struggles", description: "No loyalty program, no purchase history, no personalized marketing capability." },
      { title: "Manual reporting", description: "Sales data compiled manually from multiple POS systems and spreadsheets." },
    ],
    solutions: [
      { title: "E-commerce Platform", description: "Custom online store with payment gateways, catalog, and order management.", category: "E-commerce", serviceSlug: "website-development" },
      { title: "Retail CRM & Loyalty", description: "Customer profiles, purchase history, loyalty points, and targeted campaigns.", category: "CRM", serviceSlug: "crm-development" },
      { title: "Retail ERP System", description: "Inventory, purchasing, sales, and finance unified for multi-store operations.", category: "ERP", serviceSlug: "erp-development" },
      { title: "Retail Analytics Dashboard", description: "Sales trends, inventory turnover, customer segments, and store performance.", category: "Analytics" },
    ],
    softwareStack: [
      { name: "E-commerce Platform", purpose: "Online sales channel" },
      { name: "Retail ERP", purpose: "Inventory & operations" },
      { name: "CRM & Loyalty", purpose: "Customer retention" },
      { name: "POS Integration", purpose: "In-store sales sync" },
      { name: "Payment Gateway", purpose: "Razorpay / Stripe" },
      { name: "Analytics Engine", purpose: "Sales & inventory insights" },
    ],
    impactMetrics: [
      { value: "35%", label: "Online Revenue Growth", description: "E-commerce revenue increase within first year of launch" },
      { value: "98%", label: "Inventory Sync", description: "Accuracy between online and in-store stock levels" },
      { value: "2.5×", label: "Repeat Purchases", description: "Increase in repeat customer rate with loyalty programs" },
      { value: "20%", label: "Stockout Reduction", description: "Fewer lost sales from inventory mismatches" },
    ],
    useCases: [
      { title: "Omnichannel Retail Platform", description: "Online store synced with 10 physical locations for unified inventory.", outcome: "Buy online, pick up in store (BOPIS) capability" },
      { title: "Loyalty & Rewards Program", description: "Points-based loyalty with tiered benefits and personalized offers.", outcome: "2.5× increase in repeat purchase frequency" },
      { title: "Multi-Store Inventory Dashboard", description: "Real-time stock levels across all stores with inter-store transfer requests.", outcome: "20% reduction in stockouts" },
      { title: "POS-Integrated Sales Reporting", description: "Automated daily sales reports from all POS terminals consolidated.", outcome: "Real-time revenue visibility for management" },
    ],
    caseStudy: {
      title: "Omnichannel Retail Platform",
      client: "Leading retail organization",
      challenge: "12 stores with separate inventory systems and no online presence.",
      solution: "Unified retail ERP, e-commerce platform, loyalty program, and POS integration.",
      results: ["35% online revenue growth", "98% inventory sync accuracy", "2.5× repeat purchase rate"],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay"],
    },
    workflowSteps: [
      { step: "01", title: "Browse", description: "Online/in-store product discovery" },
      { step: "02", title: "Purchase", description: "Checkout, payment, order creation" },
      { step: "03", title: "Fulfill", description: "Pick, pack, ship or in-store pickup" },
      { step: "04", title: "Deliver", description: "Tracking, confirmation, feedback" },
      { step: "05", title: "Retain", description: "Loyalty points, offers, re-engagement" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Can you integrate with our existing POS system?", answer: "Yes. We integrate with major POS systems (Gofrugal, Vend, Square, etc.) via APIs for real-time sales and inventory sync." },
      { question: "Do you build custom e-commerce or use Shopify?", answer: "We build custom e-commerce for retailers needing deep ERP/loyalty integration. Shopify works for simpler catalogs—we recommend during discovery." },
      { question: "How do loyalty programs work technically?", answer: "Points accrual on purchase, tier management, reward redemption, and integration with CRM for personalized marketing campaigns." },
      { question: "Can you handle multi-store inventory?", answer: "Yes. Multi-location inventory with inter-store transfers, centralized purchasing, and channel-specific stock allocation." },
    ],
  },

  construction: {
    slug: "construction",
    title: "Construction",
    headline: "Build Smarter. Track Everything. Deliver On Time.",
    subheadline:
      "Construction ERP, project tracking, site monitoring, and workforce management platforms—built for contractors and developers who need every rupee and hour accounted for.",
    metaTitle: "Construction Software Development Company India",
    metaDescription:
      "Construction software development company in India — project tracking, site monitoring, workforce management & construction ERP for builders.",
    keywords: [
      "construction software development company",
      "construction ERP development",
      "project management software construction",
      "construction mobile app development",
    ],
    icon: "construction",
    gradient: "from-stone-950 via-zinc-900 to-slate-950",
    accent: "#78716C",
    focusAreas: [
      { title: "Project Tracking", description: "Milestone tracking, budget vs. actual, and timeline management per project." },
      { title: "Resource Management", description: "Material, equipment, and labor allocation across active sites." },
      { title: "Site Monitoring", description: "Daily progress reports, photo documentation, and issue tracking from site." },
      { title: "Workforce Management", description: "Attendance, skill tracking, subcontractor management, and payroll integration." },
    ],
    challenges: [
      { title: "Project cost overruns", description: "No real-time visibility into material costs, labor hours, and budget burn rate per project." },
      { title: "Site communication gaps", description: "Site managers report via WhatsApp and phone—data lost, delays discovered too late." },
      { title: "Resource wastage", description: "Materials ordered excess, equipment idle, and labor deployed inefficiently across sites." },
      { title: "Compliance documentation", description: "Safety inspections, quality checks, and regulatory paperwork managed manually." },
    ],
    solutions: [
      { title: "Construction ERP", description: "Project costing, procurement, billing, and resource management in one platform.", category: "ERP", serviceSlug: "erp-development" },
      { title: "Site Manager Mobile Apps", description: "Daily reports, photo uploads, material requests, and issue logging from site.", category: "Mobile", serviceSlug: "mobile-app-development" },
      { title: "Project Reporting Dashboards", description: "Executive dashboards for project health, budget status, and resource utilization.", category: "Analytics" },
      { title: "Site Inspection Systems", description: "Digital checklists, safety audits, quality inspections with photo evidence.", category: "Inspection" },
    ],
    softwareStack: [
      { name: "Construction ERP", purpose: "Project & financial management" },
      { name: "Mobile Site App", purpose: "Field reporting & requests" },
      { name: "Document Management", purpose: "Drawings, contracts, permits" },
      { name: "GPS & Photo Capture", purpose: "Site verification" },
      { name: "PostgreSQL", purpose: "Project data & costing" },
      { name: "Reporting Engine", purpose: "Budget vs. actual analytics" },
    ],
    impactMetrics: [
      { value: "25%", label: "Cost Overrun Reduction", description: "Better budget control with real-time project costing" },
      { value: "40%", label: "Reporting Time Saved", description: "Site managers spend less time on manual daily reports" },
      { value: "15%", label: "Resource Efficiency", description: "Improvement in material and labor utilization" },
      { value: "100%", label: "Site Documentation", description: "Digital records for every inspection and progress update" },
    ],
    useCases: [
      { title: "Multi-Project Cost Tracking", description: "Real-time budget vs. actual for 10+ simultaneous construction projects.", outcome: "Early warning on projects exceeding budget" },
      { title: "Digital Site Daily Reports", description: "Site managers submit progress, photos, and material usage via mobile app.", outcome: "Office team has same-day visibility into all sites" },
      { title: "Subcontractor Management Portal", description: "Vendors submit bids, track work orders, and submit invoices digitally.", outcome: "50% faster subcontractor payment processing" },
      { title: "Safety Inspection Checklists", description: "Digital safety audits with mandatory photo evidence and sign-off workflows.", outcome: "100% compliance documentation for audits" },
    ],
    caseStudy: {
      title: "Construction Project Management System",
      client: "Leading construction organization",
      challenge: "8 active projects tracked in Excel with no real-time cost visibility or site documentation.",
      solution: "Construction ERP with mobile site app, project dashboards, and digital inspection system.",
      results: ["25% reduction in cost overruns", "40% less time on reporting", "100% digital site records"],
      tech: ["React", "React Native", "Node.js", "PostgreSQL"],
    },
    workflowSteps: [
      { step: "01", title: "Planning", description: "Estimation, scheduling, resource allocation" },
      { step: "02", title: "Procurement", description: "Material orders, vendor management" },
      { step: "03", title: "Execution", description: "Site work, daily reporting, QC" },
      { step: "04", title: "Monitoring", description: "Progress tracking, budget control" },
      { step: "05", title: "Handover", description: "Final inspection, documentation, billing" },
    ],
    whyMaxwell: [...sharedWhyMaxwell],
    faqs: [
      { question: "Can site managers use the app offline?", answer: "Yes. Our mobile apps support offline data entry with automatic sync when connectivity returns—critical for remote construction sites." },
      { question: "Do you handle multi-project management?", answer: "Yes. Dashboard views across all active projects with individual project costing, resource allocation, and timeline tracking." },
      { question: "Can you integrate with accounting software?", answer: "We integrate with Tally, QuickBooks, and other accounting systems for automated billing, expense tracking, and financial reporting." },
      { question: "How do digital site inspections work?", answer: "Configurable checklists, mandatory photo capture, GPS tagging, digital signatures, and automatic report generation for compliance." },
    ],
  },
  ...phase8IndustriesData,
  "real-estate": phase8RealEstateOverride,
  ...gscIndustriesData,
};

export function getIndustryBySlug(slug: string): IndustryPageData | undefined {
  const core = industriesData[slug as keyof typeof industriesData];
  if (core) return core;
  return getExtendedIndustry(slug);
}

export function getAllIndustries(): IndustryPageData[] {
  return industrySlugs.map((slug) => getIndustryBySlug(slug)).filter(Boolean) as IndustryPageData[];
}
