"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { loginWithEmail, loginWithGoogle, loginWithInviteToken } from "@/lib/portal/auth";
import { usePortal } from "@/components/portal/PortalProvider";
import { trackPortalEvent } from "@/lib/portal/analytics";
import { siteConfig } from "@/lib/constants";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { DemoEnvironmentBadge, DemoDataNotice } from "@/components/portal/PortalDemo";

export function PortalLogin() {
  const router = useRouter();
  const { refreshSession } = usePortal();
  const [tab, setTab] = useState<"email" | "invite">("email");
  const [error, setError] = useState("");

  function handleEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const session = loginWithEmail(String(fd.get("email")), String(fd.get("password")));
    if (!session) {
      setError("Invalid email or password. Try client@demo.com / demo123");
      return;
    }
    trackPortalEvent("portal_login", { provider: "email" });
    refreshSession();
    router.push(session.user.onboardingComplete ? "/portal/dashboard" : "/portal/onboarding");
  }

  function handleGoogle() {
    const session = loginWithGoogle("client@demo.com", "Demo Client");
    trackPortalEvent("portal_login", { provider: "google" });
    refreshSession();
    router.push(session.user.onboardingComplete ? "/portal/dashboard" : "/portal/onboarding");
  }

  function handleInvite(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const token = String(new FormData(e.currentTarget).get("token"));
    const session = loginWithInviteToken(token);
    if (!session) {
      setError("Invalid invitation token");
      return;
    }
    trackPortalEvent("portal_login", { provider: "invite" });
    refreshSession();
    router.push("/portal/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-gradient-to-br from-brand-900 via-brand-800 to-slate-900 lg:flex lg:flex-col lg:justify-center lg:p-16">
        <BrandLogo size="lg" href="/portal" className="mb-10 rounded-lg bg-white px-2 py-1" />
        <p className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Enterprise portal</p>
        <h1 className="mt-4 font-display text-4xl font-bold text-white">Built for clarity</h1>
        <p className="mt-4 text-lg text-white/60">Proposals, projects, documents, and support — in one secure workspace.</p>
      </div>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16">
        <BrandLogo size="sm" href="/portal" className="mb-6 lg:hidden" />
        <Link
          href="/portal"
          className="mb-8 inline-flex min-h-11 items-center text-sm text-[#94A3B8] underline decoration-white/20 underline-offset-4 hover:text-brand-500"
        >
          ← Back
        </Link>
        <DemoEnvironmentBadge className="mb-4" />
        <h2 className="font-display text-2xl font-bold">Sign in</h2>
        <p className="mt-2 text-muted">Access your {siteConfig.name} client workspace</p>
        <div className="mt-4">
          <DemoDataNotice compact />
        </div>
        <div className="mt-6 flex gap-2 border-b border-border">
          {(["email", "invite"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`min-h-11 px-4 py-2 text-sm font-medium capitalize ${tab === t ? "border-b-2 border-brand-500 text-brand-500" : "text-[#94A3B8]"}`}
            >
              {t === "email" ? "Email" : "Invitation"}
            </button>
          ))}
        </div>
        {tab === "email" ? (
          <form onSubmit={handleEmail} className="mt-6 space-y-4">
            <FormField label="Email" htmlFor="email" required>
              <input id="email" name="email" type="email" placeholder="client@demo.com" className={inputClass} />
            </FormField>
            <FormField label="Password" htmlFor="password" required>
              <input id="password" name="password" type="password" placeholder="••••••••" className={inputClass} />
            </FormField>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full">Sign in</Button>
            <Button type="button" variant="secondary" className="w-full" onClick={handleGoogle}>
              Continue with Google (demo)
            </Button>
          </form>
        ) : (
          <form onSubmit={handleInvite} className="mt-6 space-y-4">
            <FormField label="Invitation token" htmlFor="token" required>
              <input id="token" name="token" placeholder="maxwell-invite-demo" className={inputClass} />
            </FormField>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full">Accept invitation</Button>
          </form>
        )}
      </div>
    </div>
  );
}
