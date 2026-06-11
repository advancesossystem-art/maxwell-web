import type { PortalUser, OnboardingData } from "./types";
import { demoUsers } from "./mock-data";

const SESSION_KEY = "maxwell-portal-session";
const ONBOARDING_KEY = "maxwell-portal-onboarding";

export function isPortalDemoEnabled(): boolean {
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_ENABLE_PORTAL_DEMO === "true";
  }
  return (
    process.env.NEXT_PUBLIC_ENABLE_PORTAL_DEMO === "true" ||
    process.env.ENABLE_PORTAL_DEMO === "true" ||
    process.env.NODE_ENV !== "production"
  );
}

export interface PortalSession {
  user: PortalUser;
  loginAt: string;
  provider: "email" | "google" | "invite";
}

export function loginWithEmail(email: string, password: string): PortalSession | null {
  if (!isPortalDemoEnabled()) return null;
  const record = demoUsers[email.toLowerCase()];
  if (!record || record.password !== password) return null;
  const { password: _pw, ...user } = record;
  void _pw;
  const session: PortalSession = {
    user,
    loginAt: new Date().toISOString(),
    provider: "email",
  };
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  return session;
}

export function loginWithGoogle(email: string, name: string): PortalSession | null {
  if (!isPortalDemoEnabled()) return null;
  const existing = demoUsers[email.toLowerCase()];
  const user: PortalUser = existing
    ? (() => {
        const { password: _pw, ...u } = existing;
        void _pw;
        return u;
      })()
    : {
        id: `google-${Date.now()}`,
        email: email.toLowerCase(),
        name,
        company: "New Organization",
        role: "prospect",
        avatarInitials: name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),
        onboardingComplete: false,
      };

  const session: PortalSession = { user, loginAt: new Date().toISOString(), provider: "google" };
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  return session;
}

export function loginWithInviteToken(token: string): PortalSession | null {
  if (!isPortalDemoEnabled()) return null;
  if (token !== "maxwell-invite-demo" && token !== "demo") return null;
  const record = demoUsers["client@demo.com"];
  const { password: _pw, ...user } = record;
  void _pw;
  const session: PortalSession = {
    user: { ...user, role: "client" },
    loginAt: new Date().toISOString(),
    provider: "invite",
  };
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }
  return session;
}

export function getSession(): PortalSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PortalSession;
  } catch {
    return null;
  }
}

export function logout(): void {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

export function completeOnboarding(data: OnboardingData): void {
  const session = getSession();
  if (!session || typeof window === "undefined") return;
  session.user.onboardingComplete = true;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  sessionStorage.setItem(ONBOARDING_KEY, JSON.stringify(data));
}

export function getOnboardingData(): OnboardingData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(ONBOARDING_KEY);
    return raw ? (JSON.parse(raw) as OnboardingData) : null;
  } catch {
    return null;
  }
}

export function updateProposalStatus(proposalId: string, status: import("./types").ProposalStatus): void {
  const proposals = JSON.parse(sessionStorage.getItem("portal-proposals") ?? "null") as Record<string, import("./types").ProposalStatus> | null;
  const map = proposals ?? {};
  map[proposalId] = status;
  sessionStorage.setItem("portal-proposals", JSON.stringify(map));
}

export function getProposalStatusOverride(id: string): import("./types").ProposalStatus | null {
  if (typeof window === "undefined") return null;
  try {
    const map = JSON.parse(sessionStorage.getItem("portal-proposals") ?? "{}") as Record<string, import("./types").ProposalStatus>;
    return map[id] ?? null;
  } catch {
    return null;
  }
}
