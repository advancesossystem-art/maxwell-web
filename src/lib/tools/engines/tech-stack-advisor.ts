export interface TechStackInput {
  projectType: string;
  scale: string;
  users: string;
  budget: string;
}

export interface TechStackResult {
  frontend: { name: string; reason: string };
  backend: { name: string; reason: string };
  database: { name: string; reason: string };
  cloud: { name: string; reason: string };
  security: string[];
  alternatives: string[];
  score: number;
}

export function adviseTechStack(input: TechStackInput): TechStackResult {
  const isHighScale = input.scale === "Enterprise" || input.users === "10,000+";
  const isStartup = input.budget === "₹50K–₹1L" || input.budget === "₹1L–₹5L";
  const isAI = input.projectType === "AI";
  const isMobile = input.projectType === "Mobile App";

  let frontend = { name: "Next.js + React + TypeScript", reason: "SEO, performance, and enterprise component ecosystem" };
  let backend = { name: "Node.js + NestJS", reason: "JavaScript full-stack velocity with structured architecture" };
  let database = { name: "PostgreSQL", reason: "Relational integrity, JSON support, and proven scale" };
  let cloud = { name: "AWS (ap-south-1)", reason: "India latency, broad services, and Maxwell delivery expertise" };

  if (isMobile) {
    frontend = { name: "React Native", reason: "Single codebase for iOS/Android with native module escape hatches" };
  }
  if (isAI) {
    backend = { name: "Python + FastAPI", reason: "ML ecosystem, model serving, and async API performance" };
    database = { name: "PostgreSQL + Redis + Vector DB (Pinecone/pgvector)", reason: "Structured data plus embeddings for RAG" };
  }
  if (isHighScale) {
    cloud = { name: "AWS EKS + CloudFront", reason: "Container orchestration and global CDN for high traffic" };
    database = { name: "PostgreSQL (RDS) + Redis Cluster", reason: "Read replicas and caching for 10K+ users" };
  }
  if (isStartup) {
    cloud = { name: "Vercel + Supabase or AWS Lightsail", reason: "Lower ops overhead for MVP budgets" };
  }
  if (input.projectType === "ERP") {
    backend = { name: "Node.js + modular monolith", reason: "Rapid ERP module delivery with clear domain boundaries" };
  }

  const security = [
    "OAuth 2.0 / JWT with refresh token rotation",
    "Encryption at rest (AES-256) and TLS 1.3 in transit",
    isHighScale ? "WAF + DDoS protection (AWS Shield)" : "HTTPS everywhere + security headers",
    input.projectType === "Healthcare" ? "HIPAA-aware logging and PHI access controls" : "OWASP Top 10 mitigation in SDLC",
    "Annual penetration test before major releases",
  ];

  return {
    frontend,
    backend,
    database,
    cloud,
    security,
    alternatives: isMobile
      ? ["Flutter — if pixel-perfect custom UI is priority"]
      : ["Vue/Nuxt — if team has existing Vue expertise"],
    score: isHighScale ? 92 : isStartup ? 78 : 85,
  };
}
