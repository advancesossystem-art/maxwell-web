/** Transparent portal capability roadmap — demo vs planned */

export type RoadmapStatus = "live" | "demo" | "planned";

export interface PortalRoadmapItem {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  eta?: string;
}

export const portalRoadmap: PortalRoadmapItem[] = [
  { id: "dashboard", title: "Command center dashboard", description: "Health, activity, and quick actions", status: "live" },
  { id: "projects", title: "Project workspace", description: "Milestones, risks, deliverables, activity", status: "demo" },
  { id: "proposals", title: "Proposal workflow", description: "Approve, revise, status timeline", status: "demo" },
  { id: "documents", title: "Document center", description: "Search, filters, previews", status: "demo" },
  { id: "support", title: "Support tickets", description: "SLA tracking and message threads", status: "demo" },
  { id: "meetings", title: "Meetings hub", description: "Agenda, notes, recordings", status: "demo" },
  { id: "invoices", title: "Billing & payments", description: "Online payment and PDF invoices", status: "planned", eta: "Q3 2026" },
  { id: "integrations", title: "Slack & email sync", description: "Notifications in your tools", status: "planned", eta: "Q4 2026" },
  { id: "sso", title: "Enterprise SSO", description: "SAML / OIDC for your organization", status: "planned", eta: "Q4 2026" },
];
