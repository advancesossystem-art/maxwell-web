"use client";

import Link from "next/link";
import { teamMembers, companyStory } from "@/lib/company-data";
import { FadeIn } from "@/components/motion/FadeIn";
import { HomeSection, HomeSectionIntro } from "@/components/home/HomeSection";
import { PrimaryCTA } from "@/components/conversion/PrimaryCTA";

const founder = teamMembers[0];

/** Phase G — team trust teaser linking to /team */
export function HomeTeamPreview() {
  return (
    <HomeSection tone="white" aria-label="Meet the team">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <HomeSectionIntro
            align="left"
            wideTitle
            eyebrow="People behind the delivery"
            title="Meet the team that builds your software"
            description="Visitors trust people. People buy from people. Our engineers, designers, and project leaders work directly with you—not through layers of account managers."
          />
          <p className="mt-6 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{companyStory.mission}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryCTA location="homepage_team" context={{ source: "homepage-team" }} label="Book Strategy Consultation" />
            <Link href="/team" className="v6-btn v6-btn-secondary">
              Meet the full team
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="v6-card p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] font-display text-xl font-bold text-white">
              {founder.initials}
            </div>
            <p className="mt-6 font-display text-xl font-semibold text-[var(--v6-text)]">{founder.name}</p>
            <p className="text-sm font-medium text-[#4f46e5]">{founder.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--v6-text-secondary)]">{founder.bio}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <li key={skill} className="rounded-full bg-[#f8fafc] px-3 py-1 text-xs font-medium text-[var(--v6-text-secondary)]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </HomeSection>
  );
}
