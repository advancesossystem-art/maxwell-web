export type PortalRole = "prospect" | "client" | "admin" | "account_manager";

export type ProposalStatus = "draft" | "sent" | "review" | "approved" | "rejected";

export type TicketStatus = "open" | "in_progress" | "waiting" | "resolved" | "closed";

export type TicketCategory = "bug" | "feature" | "billing" | "access" | "general";

export type InvoiceStatus = "paid" | "pending" | "overdue";

export type DocumentType = "contract" | "proposal" | "report" | "meeting_notes" | "invoice";

export type MeetingStatus = "scheduled" | "completed" | "cancelled";

export type RiskLevel = "low" | "medium" | "high";

export interface PortalUser {
  id: string;
  email: string;
  name: string;
  company: string;
  role: PortalRole;
  avatarInitials: string;
  accountManagerId?: string;
  onboardingComplete: boolean;
  invitedAt?: string;
}

export interface PortalNotification {
  id: string;
  type: "proposal" | "project" | "meeting" | "support" | "invoice" | "document";
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  href?: string;
}

export interface ProposalTimelineEvent {
  id: string;
  label: string;
  date: string;
  status: "completed" | "current" | "upcoming";
  note?: string;
}

export interface ProposalDeliverable {
  title: string;
  description: string;
}

export interface Proposal {
  id: string;
  title: string;
  projectType: string;
  status: ProposalStatus;
  amount: string;
  amountValue: number;
  sentAt: string;
  validUntil: string;
  summary: string;
  scope: string[];
  timeline: string;
  stack: string[];
  investmentBreakdown?: { phase: string; amount: string }[];
  deliverables: ProposalDeliverable[];
  timelineEvents: ProposalTimelineEvent[];
}

export interface ProjectMilestone {
  id: string;
  title: string;
  dueDate: string;
  status: "completed" | "in_progress" | "upcoming";
  deliverables: string[];
}

export interface ProjectRisk {
  id: string;
  title: string;
  level: RiskLevel;
  mitigation: string;
  owner: string;
}

export interface ProjectUpdate {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
}

export interface Project {
  id: string;
  name: string;
  status: "active" | "on_hold" | "completed";
  healthScore: number;
  progress: number;
  startDate: string;
  endDate: string;
  accountManager: string;
  summary: string;
  phase: string;
  team: { name: string; role: string; initials: string }[];
  milestones: ProjectMilestone[];
  deliverables: { id: string; name: string; status: "delivered" | "in_review" | "planned"; dueDate: string }[];
  risks: ProjectRisk[];
  updates: ProjectUpdate[];
  recentActivity: { id: string; text: string; time: string; type: string }[];
}

export interface PortalDocument {
  id: string;
  name: string;
  type: DocumentType;
  projectId?: string;
  projectName?: string;
  size: string;
  uploadedAt: string;
  downloadable: boolean;
  previewSnippet?: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  type: "upcoming" | "past";
  status: MeetingStatus;
  agenda?: string;
  notes?: string;
  actionItems?: { text: string; owner: string; done: boolean }[];
  attendees: string[];
  recordingUrl?: string;
  meetingLink?: string;
}

export interface TicketMessage {
  id: string;
  author: string;
  role: "client" | "support";
  body: string;
  createdAt: string;
}

export interface SupportTicket {
  id: string;
  subject: string;
  status: TicketStatus;
  priority: "low" | "medium" | "high";
  category: TicketCategory;
  createdAt: string;
  updatedAt: string;
  messages: number;
  lastReply?: string;
  responseExpectation: string;
  thread: TicketMessage[];
}

export interface Invoice {
  id: string;
  number: string;
  projectName: string;
  amount: string;
  amountValue: number;
  status: InvoiceStatus;
  issuedAt: string;
  dueAt: string;
  paidAt?: string;
}

export interface OnboardingData {
  businessName: string;
  industry: string;
  website: string;
  projectGoals: string;
  stakeholders: string;
  requirements: string;
  communicationPreference: "email" | "whatsapp" | "portal" | "calls";
  timezone: string;
}

export interface OnboardingChecklistItem {
  id: string;
  label: string;
  description: string;
  completed: boolean;
}
