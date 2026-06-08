import type {
  CaseStudyData,
  CaseStudyIndustry,
  CaseStudyOutcome,
  CaseStudyProjectValue,
  CaseStudyService,
} from "./case-studies-data";

type CompactCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  industry: CaseStudyIndustry;
  service: CaseStudyService;
  projectValue: CaseStudyProjectValue;
  timeline: string;
  cardHighlight: string;
  challenge: string;
  solution: string;
  tech: string[];
  roi: { value: string; label: string; description: string }[];
  results: { metric: string; label: string; description: string }[];
  before: string[];
  after: string[];
};

function buildStudy(c: CompactCaseStudy): CaseStudyData {
  return {
    slug: c.slug,
    title: c.title,
    subtitle: c.subtitle,
    metaTitle: `${c.title} — Case Study | Maxwell Electrodeal`,
    metaDescription: `${c.subtitle} Custom ${c.service.toLowerCase()} with measurable ROI.`,
    executiveSummary: c.solution,
    clientProfile: {
      name: "Confidential client",
      overview: c.subtitle,
      size: "Mid-size enterprise",
      location: "India",
      sector: c.industry,
    },
    initialSituation: c.challenge,
    challenges: [c.challenge, "Manual processes causing errors and delays", "No integration with accounting systems"],
    projectGoals: ["Reduce manual work", "Improve data accuracy", "Enable real-time visibility"],
    discoveryPlanning: ["On-site process mapping", "Stakeholder workshops", "Phased rollout plan"],
    solutionArchitecture: {
      overview: c.solution,
      layers: [
        { name: "Application", items: c.tech.slice(0, 3) },
        { name: "Integration", items: ["Tally sync", "GST e-invoice", "Mobile apps"] },
      ],
    },
    designProcess: ["Role-based UX for operators and managers", "Mobile-first field interfaces"],
    developmentProcess: ["Agile sprints with weekly demos", "Phased module delivery"],
    technologyStack: c.tech,
    deploymentStrategy: ["Pilot go-live", "Training program", "30-day hypercare"],
    roiMetrics: c.roi,
    results: c.results,
    testimonial: {
      quote: c.results[0]?.description ?? "Measurable improvement within the first quarter.",
      author: "",
      role: "Operations Head",
      company: "",
    },
    lessonsLearned: ["Shop-floor discovery is non-negotiable", "Phased rollout beats big-bang"],
    similarSolutions: [
      { title: "ERP Development", href: "/services/erp-development", description: "Custom ERP solutions" },
      { title: "Get estimate", href: "/get-estimate", description: "Free project assessment" },
    ],
    trust: {
      projectValue: c.projectValue,
      timeline: c.timeline,
      industry: c.industry,
      teamSize: "5–8 engineers",
      technologies: c.tech.slice(0, 4),
      businessOutcome: "Efficiency" as CaseStudyOutcome,
      supportPeriod: "12 months",
    },
    filters: {
      industry: c.industry,
      service: c.service,
      projectValue: c.projectValue,
      technologies: ["React", "Node.js", "AWS"] as CaseStudyData["filters"]["technologies"],
      businessOutcome: "Efficiency",
    },
    timeline: [
      { phase: "Discovery", duration: "2 weeks", description: "Process mapping and scope" },
      { phase: "Build", duration: "10–14 weeks", description: "Core modules and integrations" },
      { phase: "Go-live", duration: "2 weeks", description: "Training and hypercare" },
    ],
    milestones: [
      { label: "Discovery complete", period: "Week 2", description: "Signed-off scope" },
      { label: "UAT", period: "Week 12", description: "User acceptance on staging" },
      { label: "Go-live", period: "Week 14", description: "Production deployment" },
    ],
    beforeAfter: { before: c.before, after: c.after },
    workflowSteps: [
      { title: "Capture", description: "Data entry at source" },
      { title: "Approve", description: "Role-based workflows" },
      { title: "Report", description: "Live dashboards" },
    ],
    accent: "#4f46e5",
    gradient: "from-indigo-950 via-violet-900 to-slate-950",
    cardHighlight: c.cardHighlight,
    publishedAt: "2026-03-01",
  };
}

export const phase2CaseStudySlugs = [
  "chemical-industry-erp",
  "textile-industry-erp",
  "manufacturing-crm",
  "inventory-automation",
  "business-process-automation",
] as const;

export type Phase2CaseStudySlug = (typeof phase2CaseStudySlugs)[number];

export const phase2CaseStudies: Record<Phase2CaseStudySlug, CaseStudyData> = {
  "chemical-industry-erp": buildStudy({
    slug: "chemical-industry-erp",
    title: "Chemical Industry ERP",
    subtitle: "Batch manufacturing ERP with MSDS traceability and reactor scheduling for a Gujarat chemical unit.",
    industry: "Manufacturing",
    service: "ERP Development",
    projectValue: "₹15L–₹30L",
    timeline: "16 weeks",
    cardHighlight: "99.5% batch accuracy",
    challenge: "Batch records, MSDS documentation, and reactor scheduling lived in disconnected spreadsheets.",
    solution:
      "Custom ERP with batch genealogy, MSDS document vault, reactor scheduling, and GST/Tally integration for a specialty chemicals manufacturer.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    roi: [
      { value: "99.5%", label: "Batch accuracy", description: "Audit-ready batch records" },
      { value: "48hr", label: "Audit prep", description: "Down from 2 weeks manual compilation" },
      { value: "₹9L", label: "Annual savings", description: "Reduced rework and write-offs" },
    ],
    results: [
      { metric: "99.5%", label: "Batch accuracy", description: "Full traceability from raw material to dispatch" },
      { metric: "35%", label: "Less manual entry", description: "Automated batch status updates" },
    ],
    before: ["Spreadsheet batch logs", "Manual MSDS filing", "Phone-based reactor scheduling"],
    after: ["Digital batch genealogy", "Linked MSDS per batch", "Visual reactor calendar"],
  }),
  "textile-industry-erp": buildStudy({
    slug: "textile-industry-erp",
    title: "Textile Industry ERP",
    subtitle: "Fabric inventory, job-work tracking, and seasonal order management for a Surat textile unit.",
    industry: "Manufacturing",
    service: "ERP Development",
    projectValue: "₹15L–₹30L",
    timeline: "14 weeks",
    cardHighlight: "40% faster job-work tracking",
    challenge: "Fabric rolls, shade matching, and job-work contractor reconciliation caused daily stock disputes.",
    solution:
      "Textile ERP with roll-level inventory, job-work ITC-04 workflows, dyeing batch tracking, and export packing list generation.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    roi: [
      { value: "40%", label: "Faster job-work", description: "Contractor reconciliation automated" },
      { value: "96%", label: "Fabric accuracy", description: "Roll-level stock truth" },
    ],
    results: [
      { metric: "96%", label: "Inventory accuracy", description: "Roll and GSM tracking per location" },
      { metric: "30%", label: "Fewer disputes", description: "Job-work ledger auto-reconciliation" },
    ],
    before: ["Excel fabric registers", "WhatsApp job-work updates", "Manual export docs"],
    after: ["Roll barcode scanning", "Job-work portal", "Auto export packing lists"],
  }),
  "manufacturing-crm": buildStudy({
    slug: "manufacturing-crm",
    title: "Manufacturing CRM",
    subtitle: "B2B sales CRM with distributor hierarchy, quotation tracking, and field visit logging.",
    industry: "Manufacturing",
    service: "CRM Development",
    projectValue: "₹5L–₹15L",
    timeline: "12 weeks",
    cardHighlight: "28% pipeline conversion lift",
    challenge: "OEM and distributor leads tracked in personal inboxes with no visibility into follow-up or quote status.",
    solution:
      "Custom CRM with pipeline stages matching approval chains, mobile beat planning, quotation versioning, and ERP order sync.",
    tech: ["React", "React Native", "Node.js", "PostgreSQL"],
    roi: [
      { value: "28%", label: "Conversion lift", description: "Pipeline stage discipline" },
      { value: "40%", label: "Faster quotes", description: "Template-based quotation flow" },
    ],
    results: [
      { metric: "28%", label: "Higher conversion", description: "Structured follow-up cadence" },
      { metric: "40%", label: "Quote speed", description: "Average quote turnaround reduced" },
    ],
    before: ["Email-based pipeline", "No field visit proof", "Lost distributor leads"],
    after: ["Stage-based CRM", "GPS visit logging", "Distributor hierarchy views"],
  }),
  "inventory-automation": buildStudy({
    slug: "inventory-automation",
    title: "Inventory Automation",
    subtitle: "Multi-warehouse inventory automation with barcode scanning and Tally sync for a distributor.",
    industry: "Retail",
    service: "Custom Software Development",
    projectValue: "₹5L–₹15L",
    timeline: "10 weeks",
    cardHighlight: "96% inventory accuracy",
    challenge: "Three warehouses re-keyed stock into Tally manually—month-end reconciliation took 10+ days.",
    solution:
      "Inventory automation platform with GRN scanning, inter-warehouse transfers, reorder alerts, and bi-directional Tally integration.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    roi: [
      { value: "96%", label: "Stock accuracy", description: "Barcode-driven transactions" },
      { value: "₹8L", label: "Waste reduction", description: "Fewer write-offs and expedited freight" },
    ],
    results: [
      { metric: "96%", label: "Accuracy", description: "Real-time stock across 3 warehouses" },
      { metric: "70%", label: "Faster close", description: "Month-end reconciliation in 3 days" },
    ],
    before: ["Manual GRN entry", "No transfer tracking", "10-day month-end close"],
    after: ["Barcode GRN", "Transfer workflows", "3-day month-end close"],
  }),
  "business-process-automation": buildStudy({
    slug: "business-process-automation",
    title: "Business Process Automation",
    subtitle: "Cross-department workflow automation replacing email approvals and spreadsheet trackers.",
    industry: "Manufacturing",
    service: "Custom Software Development",
    projectValue: "₹5L–₹15L",
    timeline: "8 weeks",
    cardHighlight: "50% faster approvals",
    challenge: "Purchase, leave, and capex approvals scattered across email with no audit trail or SLA tracking.",
    solution:
      "Workflow automation engine with maker-checker approvals, SLA alerts, document attachments, and integration hooks to ERP and HR systems.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    roi: [
      { value: "50%", label: "Faster approvals", description: "Average approval cycle time cut in half" },
      { value: "100%", label: "Audit trail", description: "Timestamped approval history" },
    ],
    results: [
      { metric: "50%", label: "Approval speed", description: "Automated routing and reminders" },
      { metric: "15hrs", label: "Weekly time saved", description: "HO admin team capacity recovered" },
    ],
    before: ["Email approval chains", "No SLA tracking", "Lost audit history"],
    after: ["Digital workflows", "SLA dashboards", "Full audit log export"],
  }),
};
