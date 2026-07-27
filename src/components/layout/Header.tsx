"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { siteConfig, WHATSAPP_HREF_ENGINEER } from "@/lib/constants";
import {
  CTA_LABELS,
  CONVERSION_ROUTES,
  consultationHref,
} from "@/lib/conversion-copy";
import { trackCTAClick } from "@/lib/conversion-events";
import { mobileServiceShortcuts, servicesNavGroups } from "@/lib/navigation-services";
import { ServicesNavMenu } from "@/components/layout/ServicesNavMenu";
import { QuickEstimateModal } from "@/components/leads/QuickEstimateModal";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
] as const;

const resourceLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Solutions", href: "/solutions" },
  { label: "Compare", href: "/compare" },
  { label: "Cost Guides", href: "/cost" },
  { label: "Blog", href: "/blog" },
  { label: "Work", href: "/work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tools", href: "/tools" },
  { label: "Engagement Models", href: "/engagement-models" },
] as const;

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

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
  const [openServiceGroup, setOpenServiceGroup] = useState<string | null>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesBtnRef = useRef<HTMLButtonElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);
  const [resourcesMenuStyle, setResourcesMenuStyle] = useState<React.CSSProperties>({});
  const [servicesMenuStyle, setServicesMenuStyle] = useState<React.CSSProperties>({});
  /** Avoid SSR/client nav copy drift during Turbopack HMR — drawer links render after mount. */
  const [mobileNavReady, setMobileNavReady] = useState(false);
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const headerRef = useRef<HTMLElement>(null);

  useEscapeKey(() => {
    setResourcesOpen(false);
    setServicesOpen(false);
    closeMobile();
  }, resourcesOpen || servicesOpen || mobileOpen);

  useFocusTrap(drawerRef, mobileOpen);

  useEffect(() => {
    setMobileNavReady(true);
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
    setServicesOpen(false);
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
    if (!servicesOpen) return;
    const close = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [servicesOpen]);

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

  useEffect(() => {
    if (!servicesOpen || !servicesBtnRef.current) return;

    const updatePosition = () => {
      const btn = servicesBtnRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const menuWidth = Math.min(720, window.innerWidth - 24);
      const left = Math.min(Math.max(12, rect.left), window.innerWidth - menuWidth - 12);
      setServicesMenuStyle({
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
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      ref={headerRef}
      className={cn("v6-nav", scrolled && "v6-nav--scrolled")}
      id="site-header"
    >
      {/* Mobile header — logo + hamburger only (no CTA) */}
      <div className="flex h-16 w-full items-center justify-between px-4 lg:hidden">
        <span data-nav="logo" className="mx-nav-pending inline-flex shrink-0">
          <BrandLogo size="sm" href="/" className="!h-8 w-auto max-w-[140px]" />
        </span>
        <button
          type="button"
          className="flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-[var(--v6-text)] hover:bg-gray-100"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Desktop header — full nav + CTA (no hamburger) */}
      <div className="hidden w-full lg:block">
        <div className="v6-container v6-nav-inner">
          <span data-nav="logo" className="mx-nav-pending inline-flex shrink-0">
            <BrandLogo size="header" href="/" />
          </span>

          <nav className="flex shrink-0 items-center gap-0.5" aria-label="Main navigation">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn("v6-nav-link mx-nav-pending", pathname === "/" && "v6-nav-link--active")}
            data-nav="link"
          >
            Home
          </Link>

          <div className="relative" ref={servicesRef}>
            <button
              ref={servicesBtnRef}
              type="button"
              id="services-menu-button"
              className={cn(
                "v6-nav-link mx-nav-pending inline-flex items-center gap-1",
                (isActive("/services") ||
                  servicesNavGroups.some((g) => g.links.some((l) => isActive(l.href)))) &&
                  "v6-nav-link--active",
              )}
              data-nav="link"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => {
                setServicesOpen((o) => !o);
                setResourcesOpen(false);
              }}
            >
              Services
              <Chevron />
            </button>
            {servicesOpen ? (
              <div id="services-menu" style={servicesMenuStyle}>
                <ServicesNavMenu
                  style={{}}
                  onNavigate={() => setServicesOpen(false)}
                />
              </div>
            ) : null}
          </div>

          {primaryNav
            .filter((link) => link.href !== "/")
            .map((link) => (
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
              onClick={() => {
                setResourcesOpen((o) => !o);
                setServicesOpen(false);
              }}
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
            <a
              href={WHATSAPP_HREF_ENGINEER}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-nav-pending inline-flex items-center gap-1.5 rounded-full border-2 border-[#25D366] px-4 py-2 text-sm font-semibold text-[#128C7E] transition hover:bg-[#25D366]/10"
              data-nav="cta"
              onClick={() => trackCTAClick("WhatsApp Engineer", WHATSAPP_HREF_ENGINEER, "header")}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.845L.057 23.886l6.202-1.424A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
              WhatsApp
            </a>
            <button
              type="button"
              className="mx-nav-pending inline-flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700"
              data-nav="cta"
              onClick={() => {
                trackCTAClick("Get Free Project Estimate", CONVERSION_ROUTES.estimate, "header-modal");
                setEstimateModalOpen(true);
              }}
            >
              Get Free Project Estimate
              <span aria-hidden>→</span>
            </button>
          </div>
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
          <button
            type="button"
            onClick={closeMobile}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100"
            aria-label="Close navigation menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          {mobileNavReady ? (
            <>
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
          {mobileServiceShortcuts.map((shortcut) => (
            <Link
              key={shortcut.href}
              href={shortcut.href}
              onClick={closeMobile}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-[#4f46e5] hover:bg-[#4f46e5]/5"
            >
              {shortcut.label}
            </Link>
          ))}
          <p className="mx-4 mt-4 mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--v6-text-muted)]">
            Services
          </p>
          {servicesNavGroups.map((group) => (
            <div key={group.title}>
              <button
                type="button"
                className="flex min-h-[44px] w-full items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-600"
                onClick={() =>
                  setOpenServiceGroup((current) => (current === group.title ? null : group.title))
                }
                aria-expanded={openServiceGroup === group.title}
              >
                <span>{group.title}</span>
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openServiceGroup === group.title && "rotate-180",
                  )}
                />
              </button>
              {openServiceGroup === group.title ? (
                <div className="pb-2 pl-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="flex min-h-[44px] items-center gap-2 px-2 py-3 text-sm text-gray-700 hover:text-purple-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={closeMobile}
                    className="block px-2 py-2 text-xs font-medium text-purple-600"
                  >
                    All {group.title} →
                  </Link>
                </div>
              ) : null}
            </div>
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
            </>
          ) : null}
        </nav>
        <div className="space-y-3 border-t border-gray-100 p-4">
          <button
            type="button"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-base font-semibold text-white"
            onClick={() => {
              trackCTAClick("Get Free Project Estimate", CONVERSION_ROUTES.estimate, "header_mobile_modal");
              closeMobile();
              setEstimateModalOpen(true);
            }}
          >
            Get Free Project Estimate →
          </button>
          <a
            href={WHATSAPP_HREF_ENGINEER}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-[#25D366]/5 py-3.5 text-base font-semibold text-[#128C7E]"
            onClick={() => {
              trackCTAClick("WhatsApp Engineer", WHATSAPP_HREF_ENGINEER, "header_mobile");
              closeMobile();
            }}
          >
            WhatsApp an Engineer
          </a>
          <Link
            href={consultationHref({ source: "mobile-nav" })}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700"
            onClick={() => {
              trackCTAClick(CTA_LABELS.primary, CONVERSION_ROUTES.consultation, "header_mobile");
              closeMobile();
            }}
          >
            Book Strategy Call
          </Link>
          <a
            href={telHref}
            className="flex min-h-[44px] w-full items-center justify-center gap-2 py-2 text-sm text-gray-600"
          >
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>

      <QuickEstimateModal
        open={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        source="header-modal"
      />
    </header>
  );
}
