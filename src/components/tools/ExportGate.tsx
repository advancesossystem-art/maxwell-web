"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEscapeKey, useFocusTrap } from "@/lib/a11y/dialog";
import { Button } from "@/components/ui/Button";
import { FormField, inputClass } from "@/components/leads/LeadFormFields";
import { unlockExport, saveToolResult } from "@/lib/tools/storage";
import { trackToolExport } from "@/lib/tools/analytics";

export function ExportGate({
  toolSlug,
  toolName,
  resultSummary,
  resultData,
  open,
  onClose,
  onUnlocked,
}: {
  toolSlug: string;
  toolName: string;
  resultSummary: string;
  resultData: Record<string, unknown>;
  open: boolean;
  onClose: () => void;
  onUnlocked: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEscapeKey(onClose, open);
  useFocusTrap(dialogRef, open);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: `tool-${toolSlug}`,
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone") || undefined,
          company: fd.get("company") || undefined,
          message: `[${toolName}] ${resultSummary}`,
          website_url: fd.get("website_url") ?? "",
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Failed to submit");
      unlockExport(toolSlug);
      saveToolResult(toolSlug, resultData);
      trackToolExport(toolSlug, "email");
      onUnlocked();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="export-gate-title"
            className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#030b1f] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="export-gate-title" className="font-display text-xl font-bold">
              Unlock export
            </h3>
            <p className="mt-2 text-sm text-muted">
              Enter your details to print, save, or email your {toolName} results. Maxwell may follow up with relevant insights.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <input name="website_url" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <FormField label="Full Name" htmlFor="gate-name" required>
                <input id="gate-name" name="name" required className={inputClass} />
              </FormField>
              <FormField label="Work Email" htmlFor="gate-email" required>
                <input id="gate-email" name="email" type="email" required className={inputClass} />
              </FormField>
              <FormField label="Company" htmlFor="gate-company">
                <input id="gate-company" name="company" className={inputClass} />
              </FormField>
              <FormField label="Phone" htmlFor="gate-phone">
                <input id="gate-phone" name="phone" type="tel" className={inputClass} />
              </FormField>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex gap-3 pt-2">
                <Button type="button" variant="secondary" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? "Sending…" : "Unlock"}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
