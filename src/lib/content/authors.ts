export interface Author {
  id: string;
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  initials: string;
  linkedin?: string;
  twitter?: string;
}

export const authors: Author[] = [
  {
    id: "maxwell-team",
    slug: "maxwell-team",
    name: "Maxwell Editorial Team",
    role: "Insights & engineering",
    bio: "Practical guides on ERP, SaaS, healthcare platforms, and delivery—from the Maxwell Electrodeal delivery and product team.",
    expertise: ["ERP", "SaaS", "Healthcare", "Cloud", "AI", "Mobile"],
    initials: "ME",
    linkedin: "#",
  },
];

export function getAuthorById(id: string): Author | undefined {
  return authors.find((a) => a.id === id) ?? authors[0];
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug) ?? authors[0];
}
