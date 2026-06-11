"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Icons";

export function ProgrammaticHeroMotion({
  pageType,
  siteName,
  headline,
  subheadline,
}: {
  pageType: string;
  siteName: string;
  headline: string;
  subheadline: string;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
        {pageType.replace("-", " ")} · {siteName}
      </p>
      <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/55">{subheadline}</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/get-estimate" size="lg">
          Get Free Estimate <ArrowRight />
        </Button>
        <Button href="/book-consultation" size="lg" variant="outline">
          Book Consultation
        </Button>
      </div>
    </motion.div>
  );
}
