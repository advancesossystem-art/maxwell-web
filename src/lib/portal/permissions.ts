import type { PortalRole } from "./types";

export type PortalPermission =
  | "view_dashboard"
  | "view_proposals"
  | "accept_proposals"
  | "view_projects"
  | "view_documents"
  | "download_documents"
  | "view_meetings"
  | "view_support"
  | "create_support"
  | "view_invoices"
  | "manage_settings"
  | "view_all_clients"
  | "manage_users";

const ROLE_PERMISSIONS: Record<PortalRole, PortalPermission[]> = {
  prospect: [
    "view_dashboard",
    "view_proposals",
    "view_documents",
    "view_meetings",
    "view_support",
    "create_support",
    "manage_settings",
  ],
  client: [
    "view_dashboard",
    "view_proposals",
    "accept_proposals",
    "view_projects",
    "view_documents",
    "download_documents",
    "view_meetings",
    "view_support",
    "create_support",
    "view_invoices",
    "manage_settings",
  ],
  account_manager: [
    "view_dashboard",
    "view_proposals",
    "view_projects",
    "view_documents",
    "download_documents",
    "view_meetings",
    "view_support",
    "create_support",
    "view_invoices",
    "manage_settings",
    "view_all_clients",
  ],
  admin: [
    "view_dashboard",
    "view_proposals",
    "accept_proposals",
    "view_projects",
    "view_documents",
    "download_documents",
    "view_meetings",
    "view_support",
    "create_support",
    "view_invoices",
    "manage_settings",
    "view_all_clients",
    "manage_users",
  ],
};

export function hasPermission(role: PortalRole, permission: PortalPermission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
}

export function canAccessRoute(role: PortalRole, path: string): boolean {
  const routes: Record<string, PortalPermission> = {
    "/portal/dashboard": "view_dashboard",
    "/portal/proposals": "view_proposals",
    "/portal/projects": "view_projects",
    "/portal/documents": "view_documents",
    "/portal/meetings": "view_meetings",
    "/portal/support": "view_support",
    "/portal/invoices": "view_invoices",
    "/portal/settings": "manage_settings",
  };
  const perm = routes[path];
  if (!perm) return true;
  return hasPermission(role, perm);
}

export const roleLabels: Record<PortalRole, string> = {
  prospect: "Prospect",
  client: "Client",
  admin: "Admin",
  account_manager: "Account Manager",
};
