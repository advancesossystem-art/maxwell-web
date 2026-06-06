import type {
  PortalUser,
  Proposal,
  Project,
  PortalDocument,
  Meeting,
  SupportTicket,
  Invoice,
  PortalNotification,
} from "./types";

export const demoUsers: Record<string, PortalUser & { password?: string }> = {
  "client@demo.com": {
    id: "user-1",
    email: "client@demo.com",
    password: "demo123",
    name: "Demo Client",
    company: "Demo Organization",
    role: "client",
    avatarInitials: "AP",
    accountManagerId: "am-1",
    onboardingComplete: true,
  },
  "prospect@demo.com": {
    id: "user-2",
    email: "prospect@demo.com",
    password: "demo123",
    name: "Demo Prospect",
    company: "Demo Organization",
    role: "prospect",
    avatarInitials: "SS",
    onboardingComplete: false,
  },
  "admin@maxwell.com": {
    id: "user-3",
    email: "admin@maxwell.com",
    password: "demo123",
    name: "Maxwell Admin",
    company: "Maxwell Electrodeal",
    role: "admin",
    avatarInitials: "RM",
    onboardingComplete: true,
  },
};

const proposalTimeline = (sent: string, valid: string): Proposal["timelineEvents"] => [
  { id: "t1", label: "Discovery completed", date: "2026-01-20", status: "completed" },
  { id: "t2", label: "Proposal drafted", date: sent, status: "completed" },
  { id: "t3", label: "Client review", date: sent, status: "current", note: "Awaiting your feedback" },
  { id: "t4", label: "Contract & kickoff", date: valid, status: "upcoming" },
];

export const mockProposals: Proposal[] = [
  {
    id: "prop-1",
    title: "Manufacturing ERP Platform",
    projectType: "ERP Development",
    status: "review",
    amount: "₹28L – ₹35L",
    amountValue: 3150000,
    sentAt: "2026-02-15",
    validUntil: "2026-03-30",
    summary:
      "Custom ERP for multi-facility manufacturing with Tally integration and shop-floor mobile apps.",
    scope: [
      "Inventory & warehouse",
      "Production planning",
      "Tally bi-sync",
      "Shop-floor mobile",
      "Executive dashboards",
    ],
    timeline: "18–22 weeks",
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "React Native"],
    investmentBreakdown: [
      { phase: "Discovery & architecture", amount: "₹4.5L" },
      { phase: "Core modules (3 milestones)", amount: "₹18L" },
      { phase: "UAT, training & go-live", amount: "₹6.5L" },
    ],
    deliverables: [
      { title: "Requirements & architecture pack", description: "Signed-off BRD and system design" },
      { title: "Production-ready ERP", description: "Deployed on AWS with monitoring" },
      { title: "Training & handover", description: "Admin guides and 2-week hypercare" },
    ],
    timelineEvents: proposalTimeline("2026-02-15", "2026-03-30"),
  },
  {
    id: "prop-2",
    title: "Customer Portal & Mobile App",
    projectType: "Mobile App",
    status: "sent",
    amount: "₹12L – ₹18L",
    amountValue: 1500000,
    sentAt: "2026-03-01",
    validUntil: "2026-04-15",
    summary: "B2B customer ordering portal with offline-capable field sales app.",
    scope: ["Customer portal", "iOS & Android app", "Order sync", "Payment gateway"],
    timeline: "10–14 weeks",
    stack: ["Next.js", "React Native", "Node.js", "Stripe"],
    investmentBreakdown: [
      { phase: "UX & portal MVP", amount: "₹6L" },
      { phase: "Mobile apps & sync", amount: "₹8L" },
      { phase: "Launch support", amount: "₹2L" },
    ],
    deliverables: [
      { title: "Design system & portal", description: "Responsive B2B ordering experience" },
      { title: "Mobile field app", description: "Offline orders with sync" },
    ],
    timelineEvents: proposalTimeline("2026-03-01", "2026-04-15"),
  },
  {
    id: "prop-3",
    title: "AI Quality Inspection POC",
    projectType: "AI Solutions",
    status: "approved",
    amount: "₹8L",
    amountValue: 800000,
    sentAt: "2026-01-10",
    validUntil: "2026-02-28",
    summary: "Computer vision POC for defect detection on production line.",
    scope: ["Vision model training", "Edge deployment", "Dashboard alerts"],
    timeline: "8 weeks",
    stack: ["Python", "FastAPI", "React", "AWS"],
    investmentBreakdown: [{ phase: "POC delivery", amount: "₹8L" }],
    deliverables: [
      { title: "Trained vision model", description: "≥99% accuracy on sample line" },
      { title: "Edge deployment kit", description: "Camera integration + alert dashboard" },
    ],
    timelineEvents: [
      { id: "t1", label: "Proposal sent", date: "2026-01-10", status: "completed" },
      { id: "t2", label: "Approved by client", date: "2026-01-18", status: "completed" },
      { id: "t3", label: "Project kickoff", date: "2026-01-22", status: "completed" },
      { id: "t4", label: "POC delivery", date: "2026-03-30", status: "current" },
    ],
  },
];

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    name: "Manufacturing ERP Platform",
    status: "active",
    healthScore: 87,
    progress: 62,
    startDate: "2025-11-01",
    endDate: "2026-04-30",
    accountManager: "Product Lead",
    summary:
      "Enterprise ERP rollout across 3 facilities — inventory, production, and Tally integration with shop-floor mobility.",
    phase: "Build — Production module (Sprint 4)",
    team: [
      { name: "Product Lead", role: "Account Lead", initials: "PS" },
      { name: "Engineering Lead", role: "Tech Lead", initials: "SR" },
      { name: "Delivery Lead", role: "Delivery Manager", initials: "AP" },
    ],
    milestones: [
      {
        id: "m1",
        title: "Discovery & Architecture",
        dueDate: "2025-11-15",
        status: "completed",
        deliverables: ["Requirements doc", "Architecture sign-off"],
      },
      {
        id: "m2",
        title: "Inventory Module",
        dueDate: "2026-01-20",
        status: "completed",
        deliverables: ["Inventory MVP", "Barcode scanning"],
      },
      {
        id: "m3",
        title: "Production Module",
        dueDate: "2026-03-15",
        status: "in_progress",
        deliverables: ["Shop-floor app", "Production tracking"],
      },
      {
        id: "m4",
        title: "Tally Integration",
        dueDate: "2026-04-10",
        status: "upcoming",
        deliverables: ["Bi-directional sync", "GST reports"],
      },
    ],
    deliverables: [
      { id: "d1", name: "Architecture pack v2", status: "delivered", dueDate: "2025-11-20" },
      { id: "d2", name: "Inventory module UAT build", status: "delivered", dueDate: "2026-01-25" },
      { id: "d3", name: "Shop-floor mobile beta", status: "in_review", dueDate: "2026-03-12" },
      { id: "d4", name: "Tally sync specification", status: "planned", dueDate: "2026-03-25" },
    ],
    risks: [
      {
        id: "r1",
        title: "Plant 2 network latency for barcode sync",
        level: "medium",
        mitigation: "Offline queue with retry — engineering patch in sprint 4",
        owner: "Engineering Lead",
      },
      {
        id: "r2",
        title: "Tally API scope creep",
        level: "low",
        mitigation: "Change request logged; steering review Mar 15",
        owner: "Product Lead",
      },
    ],
    updates: [
      {
        id: "u1",
        title: "Sprint 3 demo completed",
        body: "Client signed off on inventory workflows. Production module demo scheduled Mar 12.",
        author: "Delivery Lead",
        date: "2026-03-08",
      },
      {
        id: "u2",
        title: "UAT cycle 2 closed",
        body: "12 feedback items resolved. 2 items deferred to sprint 4 backlog.",
        author: "Engineering Lead",
        date: "2026-03-05",
      },
    ],
    recentActivity: [
      { id: "a1", text: "Production module sprint 3 demo scheduled", time: "2h ago", type: "meeting" },
      { id: "a2", text: "UAT feedback incorporated — 12 items closed", time: "1d ago", type: "dev" },
      { id: "a3", text: "Milestone 2 signed off by client", time: "3d ago", type: "milestone" },
    ],
  },
  {
    id: "proj-2",
    name: "AI Quality Inspection",
    status: "active",
    healthScore: 94,
    progress: 85,
    startDate: "2026-01-15",
    endDate: "2026-03-30",
    accountManager: "Support Lead",
    summary: "Vision-based defect detection POC with edge deployment on production line 3.",
    phase: "Deploy — Edge rollout",
    team: [
      { name: "Support Lead", role: "AI Lead", initials: "KS" },
      { name: "Ananya Iyer", role: "Backend Engineer", initials: "AI" },
    ],
    milestones: [
      {
        id: "m5",
        title: "Model Training",
        dueDate: "2026-02-01",
        status: "completed",
        deliverables: ["99.1% accuracy baseline"],
      },
      {
        id: "m6",
        title: "Edge Deployment",
        dueDate: "2026-03-01",
        status: "in_progress",
        deliverables: ["Plant floor cameras", "Alert system"],
      },
    ],
    deliverables: [
      { id: "d5", name: "Model accuracy report", status: "delivered", dueDate: "2026-02-05" },
      { id: "d6", name: "Edge deployment package", status: "in_review", dueDate: "2026-03-15" },
    ],
    risks: [
      {
        id: "r3",
        title: "Lighting variance on Line 3",
        level: "medium",
        mitigation: "Additional training samples collected — retrain scheduled",
        owner: "Support Lead",
      },
    ],
    updates: [
      {
        id: "u3",
        title: "Accuracy milestone exceeded",
        body: "Detection accuracy improved to 99.2% on validation set.",
        author: "Support Lead",
        date: "2026-03-10",
      },
    ],
    recentActivity: [
      { id: "a4", text: "Detection accuracy improved to 99.2%", time: "5h ago", type: "dev" },
    ],
  },
];

export const mockDocuments: PortalDocument[] = [
  {
    id: "doc-1",
    name: "MSA — Manufacturing Engagement 2026.pdf",
    type: "contract",
    projectId: "proj-1",
    projectName: "Manufacturing ERP",
    size: "2.4 MB",
    uploadedAt: "2025-11-05",
    downloadable: true,
    previewSnippet: "Master Services Agreement — term, IP, confidentiality, and support SLA.",
  },
  {
    id: "doc-2",
    name: "ERP Proposal v2.pdf",
    type: "proposal",
    size: "1.1 MB",
    uploadedAt: "2026-02-15",
    downloadable: true,
    previewSnippet: "Scope, investment phases, and delivery timeline for ERP platform.",
  },
  {
    id: "doc-3",
    name: "Sprint 3 Demo Notes.pdf",
    type: "meeting_notes",
    projectId: "proj-1",
    projectName: "Manufacturing ERP",
    size: "340 KB",
    uploadedAt: "2026-03-10",
    downloadable: true,
    previewSnippet: "Attendees, demo walkthrough, UAT feedback, and action items.",
  },
  {
    id: "doc-4",
    name: "Architecture Review Report.pdf",
    type: "report",
    projectId: "proj-1",
    projectName: "Manufacturing ERP",
    size: "890 KB",
    uploadedAt: "2025-12-01",
    downloadable: true,
    previewSnippet: "System context, integration map, and security review summary.",
  },
  {
    id: "doc-5",
    name: "Invoice INV-2026-014.pdf",
    type: "invoice",
    size: "156 KB",
    uploadedAt: "2026-02-28",
    downloadable: true,
    previewSnippet: "Milestone payment — Inventory module delivery.",
  },
  {
    id: "doc-6",
    name: "Shop-floor App Wireframes.pdf",
    type: "report",
    projectId: "proj-1",
    projectName: "Manufacturing ERP",
    size: "2.1 MB",
    uploadedAt: "2026-03-01",
    downloadable: true,
    previewSnippet: "Mobile UX flows for operators and supervisors.",
  },
];

export const mockMeetings: Meeting[] = [
  {
    id: "meet-1",
    title: "Production Module Demo",
    date: "2026-03-12",
    time: "11:00 AM IST",
    duration: "45 min",
    type: "upcoming",
    status: "scheduled",
    agenda:
      "Walkthrough of shop-floor app, UAT feedback review, sprint 4 planning, Tally sync timeline",
    attendees: ["Demo Client", "Product Lead", "Engineering Lead"],
    meetingLink: "#demo-meeting-link",
  },
  {
    id: "meet-2",
    title: "Weekly Sync",
    date: "2026-03-05",
    time: "10:00 AM IST",
    duration: "30 min",
    type: "past",
    status: "completed",
    notes:
      "Discussed Tally sync timeline. Client requested additional report for shop supervisors.",
    actionItems: [
      { text: "Share Tally API spec by Mar 8", owner: "Maxwell Engineering", done: true },
      { text: "Add supervisor dashboard to backlog", owner: "Delivery Lead", done: false },
    ],
    attendees: ["Demo Client", "Delivery Lead"],
    recordingUrl: "#demo-recording",
  },
  {
    id: "meet-3",
    title: "Steering Committee",
    date: "2026-03-20",
    time: "3:00 PM IST",
    duration: "60 min",
    type: "upcoming",
    status: "scheduled",
    agenda: "Executive review — budget, risks, go-live readiness",
    attendees: ["Demo Client", "Product Lead", "CFO — Client stakeholder"],
    meetingLink: "#demo-steering",
  },
];

export const mockTickets: SupportTicket[] = [
  {
    id: "tkt-1",
    subject: "Barcode scanner not syncing on Plant 2",
    status: "in_progress",
    priority: "high",
    category: "bug",
    createdAt: "2026-03-08",
    updatedAt: "2026-03-10",
    messages: 4,
    lastReply: "Engineering investigating network timeout",
    responseExpectation: "High priority — response within 4 business hours",
    thread: [
      {
        id: "m1",
        author: "Demo Client",
        role: "client",
        body: "Scans from Plant 2 handheld devices are not appearing in inventory dashboard.",
        createdAt: "2026-03-08 09:15",
      },
      {
        id: "m2",
        author: "Maxwell Support",
        role: "support",
        body: "Thank you. We've escalated to engineering and reproduced on staging.",
        createdAt: "2026-03-08 11:00",
      },
      {
        id: "m3",
        author: "Engineering Lead",
        role: "support",
        body: "Root cause: intermittent timeout on Plant 2 VLAN. Patch deploying tonight.",
        createdAt: "2026-03-10 14:30",
      },
    ],
  },
  {
    id: "tkt-2",
    subject: "Request: Export inventory report to Excel",
    status: "open",
    priority: "medium",
    category: "feature",
    createdAt: "2026-03-09",
    updatedAt: "2026-03-09",
    messages: 1,
    responseExpectation: "Standard — response within 1 business day",
    thread: [
      {
        id: "m4",
        author: "Demo Client",
        role: "client",
        body: "Need Excel export with facility filter for finance team weekly review.",
        createdAt: "2026-03-09 16:00",
      },
    ],
  },
  {
    id: "tkt-3",
    subject: "Login issue on mobile app",
    status: "resolved",
    priority: "high",
    category: "access",
    createdAt: "2026-02-20",
    updatedAt: "2026-02-22",
    messages: 6,
    lastReply: "Fixed in v1.2.1 — please update app",
    responseExpectation: "Resolved",
    thread: [
      {
        id: "m5",
        author: "Demo Client",
        role: "client",
        body: "Users on Android 12 cannot log in after yesterday's update.",
        createdAt: "2026-02-20 08:00",
      },
      {
        id: "m6",
        author: "Maxwell Support",
        role: "support",
        body: "Resolved in v1.2.1. Please ask users to update from Play Store.",
        createdAt: "2026-02-22 10:00",
      },
    ],
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: "inv-1",
    number: "INV-2026-014",
    projectName: "Manufacturing ERP",
    amount: "₹9,45,000",
    amountValue: 945000,
    status: "paid",
    issuedAt: "2026-02-01",
    dueAt: "2026-02-15",
    paidAt: "2026-02-12",
  },
  {
    id: "inv-2",
    number: "INV-2026-022",
    projectName: "Manufacturing ERP",
    amount: "₹12,60,000",
    amountValue: 1260000,
    status: "pending",
    issuedAt: "2026-03-01",
    dueAt: "2026-03-20",
  },
  {
    id: "inv-3",
    number: "INV-2026-008",
    projectName: "AI Quality POC",
    amount: "₹4,00,000",
    amountValue: 400000,
    status: "overdue",
    issuedAt: "2026-01-15",
    dueAt: "2026-02-01",
  },
];

export const mockNotifications: PortalNotification[] = [
  {
    id: "n1",
    type: "proposal",
    title: "Proposal ready for review",
    message: "Manufacturing ERP Platform — please review by Mar 30",
    read: false,
    createdAt: "2026-03-01",
    href: "/portal/proposals/prop-1",
  },
  {
    id: "n2",
    type: "meeting",
    title: "Meeting tomorrow",
    message: "Production Module Demo at 11:00 AM IST",
    read: false,
    createdAt: "2026-03-11",
    href: "/portal/meetings",
  },
  {
    id: "n3",
    type: "support",
    title: "Ticket updated",
    message: "Barcode scanner issue — engineering investigating",
    read: true,
    createdAt: "2026-03-10",
    href: "/portal/support",
  },
  {
    id: "n4",
    type: "invoice",
    title: "Invoice due soon",
    message: "INV-2026-022 due Mar 20",
    read: false,
    createdAt: "2026-03-05",
    href: "/portal/invoices",
  },
];

export function getProposalById(id: string): Proposal | undefined {
  return mockProposals.find((p) => p.id === id);
}

export function getProjectById(id: string): Project | undefined {
  return mockProjects.find((p) => p.id === id);
}

export function getTicketById(id: string): SupportTicket | undefined {
  return mockTickets.find((t) => t.id === id);
}

export function getMeetingById(id: string): Meeting | undefined {
  return mockMeetings.find((m) => m.id === id);
}
