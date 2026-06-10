export const leadProjectTypes = [
  "Website",
  "Mobile App",
  "ERP",
  "CRM",
  "AI",
  "SaaS",
  "Custom Software",
] as const;

export const leadIndustries = [
  "Manufacturing",
  "Healthcare",
  "Education",
  "Logistics",
  "Retail",
  "Construction",
  "Other",
] as const;

export const leadScopes = ["Small", "Medium", "Large", "Enterprise"] as const;

export const leadTimelines = ["ASAP", "1 Month", "3 Months", "6 Months", "Flexible"] as const;

export const leadBudgets = [
  "₹50K–₹1L",
  "₹1L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
] as const;

export const companySizes = [
  "1–10 employees",
  "11–50 employees",
  "51–200 employees",
  "200+ employees",
] as const;

export const leadUserCounts = [
  "1–10 users",
  "11–30 users",
  "31–75 users",
  "76–150 users",
  "150+ users",
] as const;

export type LeadUserCount = (typeof leadUserCounts)[number];

export type LeadProjectType = (typeof leadProjectTypes)[number];
export type LeadIndustry = (typeof leadIndustries)[number];
export type LeadScope = (typeof leadScopes)[number];
export type LeadTimeline = (typeof leadTimelines)[number];
export type LeadBudget = (typeof leadBudgets)[number];

export const featureOptionsByProjectType: Record<LeadProjectType, string[]> = {
  Website: [
    "Responsive Design",
    "CMS Integration",
    "SEO Optimization",
    "Blog / Content Hub",
    "Contact Forms & Lead Capture",
    "Multi-language Support",
    "E-commerce Integration",
    "Analytics Dashboard",
  ],
  "Mobile App": [
    "iOS & Android",
    "Push Notifications",
    "Offline Mode",
    "GPS / Location Services",
    "Payment Integration",
    "Social Login",
    "In-app Chat",
    "Admin Dashboard",
  ],
  ERP: [
    "Inventory Management",
    "Production Planning",
    "Finance & Accounting",
    "HR & Payroll",
    "Multi-warehouse",
    "Barcode Scanning",
    "Supplier Portal",
    "Reporting & Analytics",
  ],
  CRM: [
    "Lead Pipeline",
    "Email Automation",
    "Customer Portal",
    "Sales Analytics",
    "Task Management",
    "Integration APIs",
    "Mobile Sales App",
    "Custom Dashboards",
  ],
  AI: [
    "LLM Integration",
    "Document Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Chatbot / Agent",
    "Process Automation",
    "Custom Model Training",
    "API Integration",
  ],
  SaaS: [
    "Multi-tenant Architecture",
    "Subscription Billing",
    "User Management",
    "Admin Dashboard",
    "API Access",
    "Usage Analytics",
    "White-label Support",
    "Mobile App",
  ],
  "Custom Software": [
    "Custom Workflows",
    "Third-party Integrations",
    "Role-based Access",
    "Reporting & Analytics",
    "Mobile Access",
    "API Development",
    "Legacy Migration",
    "Cloud Deployment",
  ],
};

export const globalServiceAreas = [
  { region: "India", cities: ["Mumbai", "Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Ahmedabad", "Chennai"] },
  { region: "Middle East", cities: ["Dubai", "Abu Dhabi", "Riyadh"] },
  { region: "Southeast Asia", cities: ["Singapore", "Jakarta"] },
  { region: "Global Remote", cities: ["US", "UK", "Europe", "Australia"] },
] as const;

export const contactFaqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We respond to all qualified inquiries within 24 hours on business days. Hot leads with complete project details often receive a response within 4–6 hours.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes. Discovery calls and strategy consultations are completely free with no obligation. We use this session to understand your goals and assess fit.",
  },
  {
    question: "What information should I prepare before contacting you?",
    answer:
      "Helpful details include project type, rough timeline, budget range, key features, and any existing systems we need to integrate with. Our project estimator can guide you through this.",
  },
  {
    question: "Do you work with startups and SMEs?",
    answer:
      "Absolutely. We partner with startups, SMEs, and enterprises. Our phased delivery approach lets you start with an MVP and scale as your business grows.",
  },
  {
    question: "Can you sign an NDA before discussing my project?",
    answer:
      "Yes. We're happy to sign an NDA before any detailed technical discussion. Mention this in your message and we'll send our standard agreement.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer flexible support retainers including bug fixes, feature updates, hosting management, and dedicated engineering hours.",
  },
] as const;

export const discoveryCallBenefits = [
  {
    title: "Clarity on Scope & Feasibility",
    description: "Understand what's achievable within your timeline and budget before committing.",
  },
  {
    title: "Technology Recommendations",
    description: "Get expert guidance on the right stack for your specific use case and scale.",
  },
  {
    title: "Rough Timeline & Investment",
    description: "Walk away with a ballpark estimate and phased delivery roadmap.",
  },
  {
    title: "Zero Sales Pressure",
    description: "A genuine strategy session—not a hard sell. We only proceed if there's mutual fit.",
  },
] as const;

export const discoveryAgenda = [
  "Your business goals and current challenges (10 min)",
  "Technical requirements and existing systems (15 min)",
  "Recommended approach, stack, and architecture (15 min)",
  "Timeline, investment range, and next steps (10 min)",
] as const;

export const discoveryDeliverables = [
  "Meeting summary with key requirements documented",
  "High-level solution approach recommendation",
  "Rough timeline and investment range",
  "Suggested next steps (proposal, discovery sprint, or MVP scope)",
] as const;

export const consultationReasons = [
  {
    title: "Enterprise-Grade Delivery",
    description: "Documented projects delivered across manufacturing, healthcare, logistics, and more—with measurable ROI.",
  },
  {
    title: "Transparent Process",
    description: "Weekly demos, clear milestones, and no surprise invoices. You always know where your project stands.",
  },
  {
    title: "Full Ownership",
    description: "You own 100% of the code, documentation, and IP. No vendor lock-in.",
  },
  {
    title: "Dedicated Team",
    description: "Senior engineers, designers, and project managers assigned to your account—not rotated freelancers.",
  },
] as const;

export const consultationProcess = [
  { step: "01", title: "Discovery Call", description: "30-minute strategy session to understand goals and constraints." },
  { step: "02", title: "Proposal", description: "Detailed scope, timeline, and transparent pricing within 3–5 days." },
  { step: "03", title: "Kickoff", description: "Sprint planning, team introduction, and development begins." },
  { step: "04", title: "Delivery", description: "Weekly demos, phased rollout, and post-launch support." },
] as const;

export { leadTrustBadges as trustBadges } from "@/lib/company-metrics";

export { whatsappNumberE164 as WHATSAPP_NUMBER } from "@/lib/constants";
