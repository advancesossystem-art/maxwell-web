import { teamMembers } from "@/lib/company-data";
import { socialProfiles } from "@/lib/seo/config";
import { buildSearchIndex } from "./search";
import { resolveContentAuthorId } from "./resolve-author";
import type { ContentCategorySlug } from "./schema";

export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  position: string;
  experience: string;
  specialization: string;
  bio: string;
  expertise: string[];
  initials: string;
  linkedin?: string;
  twitter?: string;
  isFounder?: boolean;
}

function slugifyName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const authorOverrides: Record<
  string,
  Partial<Pick<Author, "role" | "position" | "specialization" | "isFounder">>
> = {
  "rajesh-mehta": {
    specialization: "ERP strategy, manufacturing operations, digital transformation",
    isFounder: true,
  },
  "priya-sharma": {
    role: "CTO",
    position: "Chief Technology Officer",
    specialization: "SaaS architecture, cloud-native systems, scalable platforms",
  },
  "amit-patel": {
    role: "VP Engineering",
    position: "Vice President of Engineering",
    specialization: "Full-stack delivery, Agile engineering, software development",
  },
  "sneha-reddy": {
    role: "ERP Solutions Lead",
    position: "Senior ERP Solutions Lead",
    specialization: "Custom ERP, Tally integration, manufacturing workflows",
  },
  "vikram-desai": {
    role: "Mobile Engineering Lead",
    position: "Lead Mobile Engineer",
    specialization: "React Native, Flutter, field-force and shop-floor apps",
  },
  "ananya-iyer": {
    role: "CRM Consultant",
    position: "Backend Architect & CRM Specialist",
    specialization: "CRM architecture, B2B pipelines, API integrations",
  },
  "rahul-verma": {
    role: "AI Solutions Architect",
    position: "AI/ML Engineer",
    specialization: "Computer vision, LLM integration, industrial AI",
  },
  "sarah-chen": {
    role: "AI Solutions Architect",
    position: "AI Solutions Architect",
    specialization: "MLOps, production AI pipelines, edge deployment",
  },
  "mohit-agarwal": {
    role: "Cloud Architect",
    position: "Principal Cloud Architect",
    specialization: "AWS, Azure, infrastructure, DevOps",
  },
  "arun-kulkarni": {
    role: "Digital Transformation Lead",
    position: "Senior Project Manager",
    specialization: "ERP rollouts, change management, enterprise delivery",
  },
};

const editorialAuthorIds = new Set([
  "rajesh-mehta",
  "priya-sharma",
  "amit-patel",
  "sneha-reddy",
  "vikram-desai",
  "ananya-iyer",
  "rahul-verma",
  "sarah-chen",
  "mohit-agarwal",
  "arun-kulkarni",
]);

const companyLinkedIn = socialProfiles.find((u) => u.includes("linkedin.com")) ?? undefined;

export const authors: Author[] = teamMembers
  .filter((m) => editorialAuthorIds.has(slugifyName(m.name)))
  .map((member) => {
    const id = slugifyName(member.name);
    const override = authorOverrides[id] ?? {};
    return {
      id,
      slug: id,
      name: member.name,
      role: override.role ?? member.role,
      position: override.position ?? member.role,
      experience: member.experience,
      specialization:
        override.specialization ?? `${member.department} — ${member.skills.slice(0, 3).join(", ")}`,
      bio: member.bio,
      expertise: member.skills,
      initials: member.initials,
      linkedin: member.linkedin ?? (override.isFounder ? companyLinkedIn : undefined),
      isFounder: override.isFounder,
    };
  });

export function getAuthorById(id: string): Author | undefined {
  if (id === "maxwell-team") return undefined;
  return authors.find((a) => a.id === id);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  if (slug === "maxwell-team") return undefined;
  return authors.find((a) => a.slug === slug);
}

export function getFounderAuthor(): Author {
  return authors.find((a) => a.isFounder) ?? authors[0];
}

export function countAuthorPublications(authorId: string): number {
  return buildSearchIndex().filter(
    (doc) => resolveContentAuthorId(doc.authorId, doc.category as ContentCategorySlug) === authorId,
  ).length;
}
