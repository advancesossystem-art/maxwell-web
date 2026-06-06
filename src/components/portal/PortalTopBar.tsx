"use client";

import Link from "next/link";
import { usePortal } from "@/components/portal/PortalProvider";
import { cn } from "@/lib/utils";

export function PortalTopBar({
  title,
  subtitle,
  onMenuOpen,
}: {
  title: string;
  subtitle?: string;
  onMenuOpen?: () => void;
}) {
  const { notifications, markNotificationRead, darkMode, toggleDarkMode } = usePortal();
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="safe-area-top flex h-14 shrink-0 items-center justify-between gap-3 border-b border-[var(--portal-border)] bg-[var(--portal-card)] px-4 sm:h-16 sm:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {onMenuOpen ? (
          <button
            type="button"
            onClick={onMenuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[var(--portal-border)] text-[var(--portal-muted)] hover:bg-[var(--portal-hover)] md:hidden"
            aria-label="Open portal menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        ) : null}
        <div className="min-w-0">
          <h1 className="truncate font-display text-base font-bold text-[var(--portal-text)] sm:text-lg">{title}</h1>
          {subtitle ? <p className="truncate text-xs text-[var(--portal-muted)] sm:text-sm">{subtitle}</p> : null}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={toggleDarkMode}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--portal-border)] text-[var(--portal-muted)] hover:bg-[var(--portal-hover)]"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="sr-only">{darkMode ? "Light mode" : "Dark mode"}</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
            {darkMode ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            )}
          </svg>
        </button>
        <details className="relative">
          <summary
            aria-label={unread > 0 ? `Notifications, ${unread} unread` : "Notifications"}
            className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-lg border border-[var(--portal-border)] px-3 py-2 text-sm hover:bg-[var(--portal-hover)] [&::-webkit-details-marker]:hidden"
          >
            <svg className="h-5 w-5 text-[var(--portal-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.454 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            {unread > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-bold text-white">
                {unread}
              </span>
            )}
            <span className="sr-only">Notifications</span>
          </summary>
          <div className="absolute right-0 z-50 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-[var(--portal-border)] bg-[var(--portal-card)] shadow-xl">
            <p className="border-b border-[var(--portal-border)] px-4 py-3 text-sm font-semibold">Notifications</p>
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className={cn("border-b border-[var(--portal-border)] px-4 py-3 last:border-0", !n.read && "bg-brand-600/5")}
                >
                  {n.href ? (
                    <Link href={n.href} onClick={() => markNotificationRead(n.id)} className="block">
                      <p className="text-sm font-medium text-[var(--portal-text)]">{n.title}</p>
                      <p className="mt-0.5 text-xs text-[var(--portal-muted)]">{n.message}</p>
                    </Link>
                  ) : (
                    <>
                      <p className="text-sm font-medium">{n.title}</p>
                      <p className="text-xs text-[var(--portal-muted)]">{n.message}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
