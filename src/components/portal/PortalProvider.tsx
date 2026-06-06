"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { PortalUser, PortalNotification } from "@/lib/portal/types";
import type { PortalSession } from "@/lib/portal/auth";
import { getSession, logout as authLogout } from "@/lib/portal/auth";
import { mockNotifications } from "@/lib/portal/mock-data";
import { trackPortalEvent } from "@/lib/portal/analytics";

type PortalContextValue = {
  session: PortalSession | null;
  user: PortalUser | null;
  notifications: PortalNotification[];
  darkMode: boolean;
  loading: boolean;
  logout: () => void;
  refreshSession: () => void;
  markNotificationRead: (id: string) => void;
  toggleDarkMode: () => void;
};

const PortalContext = createContext<PortalContextValue | null>(null);

export function PortalProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<PortalSession | null>(null);
  const [notifications, setNotifications] = useState<PortalNotification[]>(mockNotifications);
  const [darkMode, setDarkMode] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("portal-dark-mode") === "1",
  );
  const [loading, setLoading] = useState(true);

  const refreshSession = useCallback(() => {
    setSession(getSession());
    setLoading(false);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => refreshSession());
    return () => cancelAnimationFrame(id);
  }, [refreshSession]);

  useEffect(() => {
    if (loading) return;
    const publicPaths = ["/portal", "/portal/login"];
    const isPublic = publicPaths.includes(pathname ?? "");
    if (!session && !isPublic) {
      router.replace("/portal/login");
    }
    if (session && !session.user.onboardingComplete && pathname !== "/portal/onboarding") {
      const allowed = ["/portal/login", "/portal/onboarding", "/portal/settings"];
      if (!allowed.some((p) => pathname?.startsWith(p))) {
        router.replace("/portal/onboarding");
      }
    }
  }, [session, loading, pathname, router]);

  const logout = () => {
    trackPortalEvent("portal_logout");
    authLogout();
    setSession(null);
    router.push("/portal/login");
  };

  const markNotificationRead = (id: string) => {
    setNotifications((n) => n.map((item) => (item.id === id ? { ...item, read: true } : item)));
  };

  const toggleDarkMode = () => {
    setDarkMode((d) => {
      const next = !d;
      localStorage.setItem("portal-dark-mode", next ? "1" : "0");
      return next;
    });
  };

  return (
    <PortalContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        notifications,
        darkMode,
        loading,
        logout,
        refreshSession,
        markNotificationRead,
        toggleDarkMode,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error("usePortal must be used within PortalProvider");
  return ctx;
}
