export const LEAD_CONTEXT_COOKIE = "mw_lead_ctx";

export const LEAD_CONTEXT_KEYS = [
  "service",
  "industry",
  "project",
  "source",
  "intent",
  "ref",
  "location",
] as const;

export type LeadContextKey = (typeof LEAD_CONTEXT_KEYS)[number];

export type LeadContext = Partial<Record<LeadContextKey, string>>;

const LEAD_CONTEXT_PATHS = new Set(["/book-consultation", "/contact", "/get-estimate"]);

function normalizeValue(value: string | null | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

export function isLeadContextPath(pathname: string): boolean {
  return LEAD_CONTEXT_PATHS.has(pathname);
}

export function readLeadContextFromUrlSearchParams(
  searchParams: Pick<URLSearchParams, "get">,
): LeadContext {
  return LEAD_CONTEXT_KEYS.reduce<LeadContext>((acc, key) => {
    const value = normalizeValue(searchParams.get(key));
    if (value) acc[key] = value;
    return acc;
  }, {});
}

export function hasLeadContext(context: LeadContext): boolean {
  return LEAD_CONTEXT_KEYS.some((key) => Boolean(normalizeValue(context[key])));
}

export function serializeLeadContext(context: LeadContext): string {
  const params = new URLSearchParams();
  for (const key of LEAD_CONTEXT_KEYS) {
    const value = normalizeValue(context[key]);
    if (value) params.set(key, value);
  }
  return params.toString();
}

export function parseLeadContext(raw: string | null | undefined): LeadContext {
  if (!raw) return {};
  const params = new URLSearchParams(raw);
  return readLeadContextFromUrlSearchParams(params);
}

export function readLeadContextFromCookieHeader(cookieHeader: string | null | undefined): LeadContext {
  if (!cookieHeader) return {};
  const entry = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LEAD_CONTEXT_COOKIE}=`));
  if (!entry) return {};
  const raw = entry.slice(LEAD_CONTEXT_COOKIE.length + 1);
  return parseLeadContext(raw);
}

export function readLeadContextFromDocumentCookie(): LeadContext {
  if (typeof document === "undefined") return {};
  return readLeadContextFromCookieHeader(document.cookie);
}

export function mergeLeadContexts(...contexts: LeadContext[]): LeadContext {
  return contexts.reduce<LeadContext>((acc, ctx) => {
    for (const key of LEAD_CONTEXT_KEYS) {
      const value = normalizeValue(ctx[key]);
      if (value) acc[key] = value;
    }
    return acc;
  }, {});
}

export function persistLeadContext(context: LeadContext) {
  if (typeof document === "undefined") return;
  const merged = mergeLeadContexts(readLeadContextFromDocumentCookie(), context);
  const serialized = serializeLeadContext(merged);
  if (!serialized) return;
  document.cookie = `${LEAD_CONTEXT_COOKIE}=${serialized}; Path=/; Max-Age=604800; SameSite=Lax`;
}
