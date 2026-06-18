"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/BrandLogo";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  consultationHref,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { runNavbarEntrance } from "@/lib/animations";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

const resourceLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Compare", href: "/compare" },
  { label: "Cost Guides", href: "/cost" },
  { label: "Blog", href: "/blog" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tools", href: "/tools" },
  { label: "Engagement Models", href: "/engagement-models" },
  { label: "Client Portal", href: "/portal" },
] as const;

function Chevron() {
  return (
    <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const [resourcesMenuStyle, setResourcesMenuStyle] = useState<React.CSSProperties>({});
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const headerRef = useRef<HTMLElement>(null);

  useEscapeKey(() => {
    setResourcesOpen(false);
    closeMobile();
  }, resourcesOpen || mobileOpen);

  useFocusTrap(drawerRef, mobileOpen);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    return runNavbarEntrance(header);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!resourcesOpen) return;
    const close = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [resourcesOpen]);

  useEffect(() => {
    if (!resourcesOpen || !resourcesBtnRef.current) return;

    const updatePosition = () => {
      const btn = resourcesBtnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const menuWidth = 224;
      const left = Math.min(
        Math.max(12, rect.right - menuWidth),
        window.innerWidth - menuWidth - 12,
      );
      setResourcesMenuStyle({
        position: "fixed",
        top: rect.bottom + 8,
        left,
        width: menuWidth,
        zIndex: 200,
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [resourcesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className={cn("v6-nav", scrolled && "v6-nav--scrolled")}
      id="site-header"
    >
      <div className="v6-container v6-nav-inner">
        <span data-nav="logo" className="mx-nav-pending inline-flex shrink-0">
          <BrandLogo size="header" priority href="/" />
        </span>

        <nav
          className="hidden shrink-0 items-center gap-0.5 lg:flex"
          aria-label="Main navigation"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "v6-nav-link mx-nav-pending",
                isActive(link.href) && "v6-nav-link--active",
              )}
              data-nav="link"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={resourcesRef}>
            <button
              ref={resourcesBtnRef}
              type="button"
              id="resources-menu-button"
              className={cn(
                "v6-nav-link mx-nav-pending inline-flex items-center gap-1",
                resourceLinks.some((l) => isActive(l.href)) && "v6-nav-link--active",
              )}
              data-nav="link"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              aria-controls="resources-menu"
              onClick={() => setResourcesOpen((o) => !o)}
            >
              Resources
              <Chevron />
            </button>
            {resourcesOpen ? (
              <ul
                id="resources-menu"
                className="max-h-[min(70vh,22rem)] overflow-y-auto overscroll-contain rounded-2xl border border-[var(--v6-border)] bg-white py-2 shadow-xl"
                style={resourcesMenuStyle}
                role="menu"
                aria-labelledby="resources-menu-button"
              >
                {resourceLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm font-medium text-[var(--v6-text)] transition-colors hover:bg-[#f1f5f9] hover:text-[#4f46e5]"
                      onClick={() => setResourcesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={consultationHref({ source: "header" })}
            className="v6-btn v6-btn-primary mx-nav-pending hidden sm:inline-flex"
            data-nav="cta"
            onClick={() =>
              trackCTAClick(CTA_LABELS.primary, CONVERSION_ROUTES.consultation, "header")
            }
          >
            {CTA_LABELS.primary}
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--v6-border)] text-[var(--v6-text)] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={cn("block h-0.5 w-full bg-[#0f172a] transition-all", mobileOpen && "translate-y-2 rotate-45")}
              />
              <span className={cn("block h-0.5 w-full bg-[#0f172a] transition-all", mobileOpen && "opacity-0")} />
              <span
                className={cn("block h-0.5 w-full bg-[#0f172a] transition-all", mobileOpen && "-translate-y-2 -rotate-45")}
              />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={closeMobile} aria-hidden />
      ) : null}
      <div
        ref={drawerRef}
        id="mobile-nav-drawer"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-[var(--v6-border)] bg-white lg:hidden",
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
          "transition-transform duration-300 ease-out",
        )}
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Mobile navigation"
        {...(!mobileOpen ? { inert: true as const } : {})}
      >
        <div className="flex items-center justify-between border-b border-[var(--v6-border)] px-5 py-4">
          <BrandLogo size="sm" href="/" />
          <button type="button" onClick={closeMobile} className="text-sm text-[var(--v6-text-muted)]">
            Close
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className={cn(
                "rounded-xl px-4 py-3 font-medium transition-colors",
                isActive(link.href)
                  ? "bg-[#4f46e5]/10 text-[#4f46e5]"
                  : "text-[var(--v6-text-secondary)] hover:bg-[#f1f5f9]",
              )}
            >
              {link.label}
            </Link>
          ))}
          <p className="mx-4 mt-4 mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
            Resources
          </p>
          {resourceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="rounded-xl px-4 py-3 text-[var(--v6-text-secondary)] hover:bg-[#f1f5f9]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-[var(--v6-border)] p-5">
          <Link
            href={consultationHref({ source: "header-mobile" })}
            className="v6-btn v6-btn-primary v6-btn-lg w-full"
            onClick={() => {
              trackCTAClick(CTA_LABELS.primary, CONVERSION_ROUTES.consultation, "header_mobile");
              closeMobile();
            }}
          >
            {CTA_LABELS.primary}
          </Link>
        </div>
      </div>
    </header>
  );
}
