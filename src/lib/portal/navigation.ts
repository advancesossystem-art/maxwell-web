import type { PortalPermission } from "./permissions";

export const portalNavItems: {
  href: string;
  label: string;
  icon: string;
  permission?: PortalPermission;
}[] = [
  { href: "/portal/dashboard", label: "Dashboard", icon: "grid" },
  { href: "/portal/proposals", label: "Proposals", icon: "file", permission: "view_proposals" },
  { href: "/portal/projects", label: "Projects", icon: "folder", permission: "view_projects" },
  { href: "/portal/documents", label: "Documents", icon: "doc", permission: "view_documents" },
  { href: "/portal/meetings", label: "Meetings", icon: "calendar", permission: "view_meetings" },
  { href: "/portal/support", label: "Support", icon: "support", permission: "view_support" },
  { href: "/portal/invoices", label: "Invoices", icon: "invoice", permission: "view_invoices" },
  { href: "/portal/settings", label: "Settings", icon: "settings", permission: "manage_settings" },
];
