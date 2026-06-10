"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/lib/company-data";
import { Card } from "@/components/design/Card";
import { H3, Caption } from "@/components/design/typography";

export function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card interactive={false} padding="lg">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white">
            {member.initials}
          </div>
          <div className="min-w-0 flex-1">
            <H3>{member.role}</H3>
            <Caption className="text-brand-500">{member.department}</Caption>
            <span className="mt-2 inline-block rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-0.5 text-xs font-medium text-brand-400">
              {member.experience}
            </span>
          </div>
        </div>
        <Caption className="mt-4 line-clamp-3 leading-relaxed">{member.bio}</Caption>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <span key={skill} className="v6-chip">
              {skill}
            </span>
          ))}
        </div>
        <a
          href={member.linkedin}
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-500 hover:text-brand-400"
          aria-label={`${member.role} on LinkedIn`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </Card>
    </motion.article>
  );
}

export function HiringBanner() {
  return (
    <Card interactive={false} padding="lg" className="text-center border-brand-500/20">
      <H3>We&apos;re hiring talented engineers & designers</H3>
      <Caption className="mt-2">Join a team building software that delivers real business impact.</Caption>
      <a
        href="/careers"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-display text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
      >
        View Open Positions
      </a>
    </Card>
  );
}
