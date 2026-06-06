"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function NewsletterSignup({
  variant = "default",
  magnetId,
  contentSlug,
  source = "newsletter",
}: {
  variant?: "default" | "compact" | "hero";
  magnetId?: string;
  contentSlug?: string;
  source?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (honeypot.trim()) {
        router.push(`/thank-you?source=${source}`);
        return;
      }
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source, magnetId, contentSlug, website_url: honeypot }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Subscription failed");

      const params = new URLSearchParams({ source });
      if (magnetId) params.set("magnet", magnetId);
      if (contentSlug) params.set("content", contentSlug);
      router.push(`/thank-you?${params.toString()}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const isCompact = variant === "compact";
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          : isCompact
            ? "rounded-xl border border-border bg-surface p-5"
            : "rounded-2xl border border-brand-600/15 bg-brand-50/40 p-8"
      }
    >
      <h3 className={`font-display font-bold ${isHero ? "text-white text-xl" : "text-lg"}`}>
        {magnetId ? "Get the download" : "Engineering insights, weekly"}
      </h3>
      <p className={`mt-2 text-sm ${isHero ? "text-white/60" : "text-muted"}`}>
        {magnetId
          ? "Enter your work email to receive the resource instantly."
          : "ERP, AI, and software strategy from Maxwell engineers. No spam."}
      </p>
      <form onSubmit={handleSubmit} className={`mt-5 flex flex-col gap-3 ${!isCompact ? "sm:flex-row sm:flex-wrap" : ""}`}>
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
        {!isCompact && (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20"
          />
        )}
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          className={`flex-1 rounded-lg border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600/20 ${
            isHero ? "border-white/20 bg-white/10 text-white placeholder:text-white/40" : "border-border bg-white focus:border-brand-600"
          }`}
        />
        <Button type="submit" size={isCompact ? "sm" : "md"} disabled={loading} className="shrink-0">
          {loading ? "Sending…" : magnetId ? "Download" : "Subscribe"}
        </Button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
