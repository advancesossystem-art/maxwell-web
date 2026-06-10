"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { CompanyPageHero } from "@/components/company/CompanyPageHero";
import { PageSection } from "@/components/design/PageSection";
import { Card } from "@/components/design/Card";
import { AccentGradient, H3 } from "@/components/design/typography";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import {
  careersBenefits,
  workCulture,
  openPositions,
  growthPaths,
} from "@/lib/company-data";
import { trackFormComplete } from "@/components/leads/LeadAnalytics";

export function CareersPageContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "careers",
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: "Careers Application",
          projectType: "Careers",
          budget: "N/A",
          message: `Career application for: ${data.role || role}\nLinkedIn/Portfolio: ${data.portfolio || "N/A"}\n\n${data.coverLetter || ""}`,
          website_url: data.website_url ?? "",
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error);
      trackFormComplete("careers", body.leadTier, body.leadScore);
      const appliedRole = String(data.role || role || "");
      const thankYouUrl = appliedRole
        ? `/thank-you?source=careers&position=${encodeURIComponent(appliedRole)}`
        : "/thank-you?source=careers";
      router.push(thankYouUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <CompanyPageHero
        breadcrumb={[{ label: "Careers" }]}
        eyebrow="Careers"
        title={
          <>
            Build software that <AccentGradient>matters</AccentGradient>
          </>
        }
        description="Join engineers, designers, and leaders shipping enterprise software across India and globally."
      />

      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn><h2 className="font-display text-2xl font-bold">Life at Maxwell</h2></FadeIn>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workCulture.map((c) => (
              <div key={c.title} className="rounded-xl border border-border p-5">
                <h3 className="font-display font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <FadeIn><h2 className="font-display text-2xl font-bold">Benefits & perks</h2></FadeIn>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {careersBenefits.map((b) => (
              <li key={b} className="flex items-start gap-2 rounded-lg border border-border bg-surface-elevated p-4 text-sm">
                <span className="text-brand-600">✓</span>{b}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <FadeIn><h2 className="font-display text-2xl font-bold">Growth paths</h2></FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {growthPaths.map((g) => (
              <div key={g.track} className="rounded-xl border border-border p-5">
                <h3 className="font-display font-semibold text-brand-700">{g.track}</h3>
                <p className="mt-2 text-sm text-muted">{g.path}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <Container>
          <FadeIn><h2 className="font-display text-2xl font-bold">Open positions</h2></FadeIn>
          <div className="mt-8 space-y-4">
            {openPositions.map((pos) => (
              <div key={pos.title} className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-surface-elevated p-6 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display font-semibold">{pos.title}</h3>
                  <p className="mt-1 text-sm text-muted">{pos.department} · {pos.location} · {pos.type}</p>
                </div>
                <Button size="sm" onClick={() => { setRole(pos.title); document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Apply
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted">Remote opportunities available across India. Hybrid options in major cities.</p>
        </Container>
      </section>

      <section id="apply" className="py-20 lg:py-28">
        <Container className="max-w-2xl">
          <FadeIn><h2 className="font-display text-2xl font-bold text-center">Apply now</h2></FadeIn>
          <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-border bg-surface-elevated p-8">
            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
              <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <FormField label="Full Name" htmlFor="name" required>
              <input id="name" name="name" required className={inputClass} />
            </FormField>
            <FormField label="Email" htmlFor="email" required>
              <input id="email" name="email" type="email" required className={inputClass} />
            </FormField>
            <FormField label="Phone" htmlFor="phone">
              <input id="phone" name="phone" type="tel" className={inputClass} />
            </FormField>
            <FormField label="Position" htmlFor="role" required>
              <select id="role" name="role" required className={inputClass} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select position</option>
                {openPositions.map((p) => (
                  <option key={p.title} value={p.title}>{p.title}</option>
                ))}
              </select>
            </FormField>
            <FormField label="LinkedIn / Portfolio URL" htmlFor="portfolio">
              <input id="portfolio" name="portfolio" type="url" className={inputClass} placeholder="https://" />
            </FormField>
            <FormField label="Cover Letter" htmlFor="coverLetter">
              <textarea id="coverLetter" name="coverLetter" rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about yourself and why you'd like to join..." />
            </FormField>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </Container>
      </section>
    </>
  );
}
