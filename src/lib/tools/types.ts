export type ToolCategory = "planning" | "sales" | "technical" | "finance" | "strategy";

export interface ToolDefinition {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  category: ToolCategory;
  icon: string;
  accent: string;
  featured?: boolean;
  popular?: boolean;
  recentlyUpdated?: boolean;
  estimatedMinutes: number;
  tags: string[];
}

export interface ToolLeadCapture {
  name: string;
  email: string;
  company?: string;
  phone?: string;
}

export interface ToolExportPayload {
  toolSlug: string;
  toolName: string;
  resultSummary: string;
  resultData: Record<string, unknown>;
}
