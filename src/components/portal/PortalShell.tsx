"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { usePathname } from "next/navigation";
import { usePortal } from "@/components/portal/PortalProvider";
import { PortalSidebar } from "@/components/portal/PortalSidebar";
import { PortalTopBar } from "@/components/portal/PortalTopBar";
import { PortalNavContent } from "@/components/portal/PortalNavContent";
import { DemoEnvironmentBadge } from "@/components/portal/PortalDemo";
import { cn } from "@/lib/utils";

export function PortalShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { user, loading, darkMode } = usePortal();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const navDrawerRef = useRef<HTMLElement>(null);
  const closeNav = useCallback(() => setNavOpen(false), []);

  useEscapeKey(closeNav, navOpen);
  useFocusTrap(navDrawerRef, navOpen);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020617]" role="status" aria-live="polite" aria-busy="true">
        <span className="sr-only">Loading portal</span>
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" aria-hidden="true" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div
      className={cn("portal-theme flex min-h-[100dvh] flex-col md:flex-row", darkMode && "portal-dark")}
      style={
        {
          "--portal-bg": darkMode ? "#020617" : "#030b1f",
          "--portal-card": darkMode ? "#040f2b" : "#030b1f",
          "--portal-sidebar": darkMode ? "#020617" : "#030b1f",
          "--portal-border": "rgba(255, 255, 255, 0.08)",
          "--portal-text": "#ffffff",
          "--portal-muted": "#94a3b8",
          "--portal-hover": "rgba(255, 255, 255, 0.05)",
          "--portal-muted-bg": "rgba(255, 255, 255, 0.06)",
        } as React.CSSProperties
      }
    >
      <PortalSidebar />
      {navOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setNavOpen(false)}
          aria-hidden
        />
      ) : null}
      <aside
        ref={navDrawerRef}
        id="portal-nav-drawer"
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[min(100%,18rem)] flex-col border-r border-[var(--portal-border)] bg-[var(--portal-sidebar)] transition-transform duration-300 ease-out md:hidden",
          navOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        )}
        role="dialog"
        aria-modal={navOpen}
        aria-label="Portal menu"
        aria-hidden={!navOpen}
      >
        <PortalNavContent onNavigate={() => setNavOpen(false)} />
      </aside>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-[var(--portal-bg)]">
        <PortalTopBar title={title} subtitle={subtitle} onMenuOpen={() => setNavOpen(true)} />
        <main
          aria-label="Portal workspace"
          className="flex-1 overflow-y-auto px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6 lg:px-8 lg:py-8"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
            <DemoEnvironmentBadge />
            <p className="text-xs text-[var(--portal-muted)]">
              Sample workspace · actions are simulated for demonstration
            </p>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
