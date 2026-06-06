const BLOCKED_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "[::1]",
]);

function isPrivateIpv4(host: string): boolean {
  const parts = host.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) {
    return false;
  }
  const [a, b] = parts;
  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return false;
}

/** Reject webhook URLs that could reach internal networks (SSRF). */
export function assertSafeOutboundUrl(rawUrl: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    throw new Error("Invalid webhook URL");
  }

  if (parsed.protocol !== "https:") {
    throw new Error("Webhook URL must use HTTPS");
  }

  const host = parsed.hostname.toLowerCase();
  if (BLOCKED_HOSTS.has(host) || host.endsWith(".local") || host.endsWith(".internal")) {
    throw new Error("Webhook URL host is not allowed");
  }

  if (isPrivateIpv4(host)) {
    throw new Error("Webhook URL must not target private IP addresses");
  }

  return parsed;
}

export async function safeOutboundFetch(
  rawUrl: string,
  init: RequestInit,
): Promise<Response> {
  assertSafeOutboundUrl(rawUrl);
  return fetch(rawUrl, { ...init, redirect: "manual" });
}
