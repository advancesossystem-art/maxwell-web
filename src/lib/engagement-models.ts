/** Engagement & pricing models — single source for /engagement-models */

export const engagementModels = [
  {
    slug: "fixed-price",
    title: "Fixed Price",
    tagline: "Defined scope, predictable investment",
    description:
      "Best when requirements are clear and you need a fixed timeline and budget. We scope milestones upfront, bill per phase, and deliver against agreed acceptance criteria.",
    bestFor: [
      "MVPs with a fixed launch date",
      "Well-defined modules (e.g. CRM phase 1)",
      "Budget approval tied to a single quote",
    ],
    includes: [
      "Discovery & detailed scope document",
      "Milestone-based billing (typically 30/40/30)",
      "Weekly demos and change-control process",
      "UAT, deployment, and handover documentation",
    ],
    investment: "From ₹1L for focused scopes · ₹5L–₹50L+ for enterprise platforms",
  },
  {
    slug: "time-and-materials",
    title: "Time & Materials",
    tagline: "Flexibility when priorities evolve",
    description:
      "Ideal for evolving products, discovery-heavy work, or when you want to start fast and refine scope as you learn. Transparent hourly or daily rates with weekly burn reports.",
    bestFor: [
      "Early-stage discovery and prototyping",
      "Roadmaps that shift based on user feedback",
      "Augmenting your internal team on specific streams",
    ],
    includes: [
      "Transparent rate card and weekly time reports",
      "Sprint planning with adjustable backlog",
      "Direct access to engineers and PM",
      "Option to convert to fixed price once scope stabilizes",
    ],
    investment: "Billed weekly or monthly · typical ₹1,500–₹3,500/hr by seniority",
  },
  {
    slug: "dedicated-team",
    title: "Dedicated Team",
    tagline: "Your extended engineering bench",
    description:
      "A named squad—engineers, designer, and PM—embedded on your roadmap month to month. Same team continuity, India-based value, and timezone overlap for global clients.",
    bestFor: [
      "Ongoing product development after MVP",
      "Multi-quarter ERP or platform rollouts",
      "Teams that need capacity without hiring locally",
    ],
    includes: [
      "Dedicated engineers, designer & project manager",
      "Slack/WhatsApp channel and bi-weekly steering",
      "Jira/Linear boards with full visibility",
      "Scale team size up or down with 2-week notice",
    ],
    investment: "Monthly retainer from ₹3L/mo · team size tailored to roadmap",
  },
] as const;

export const engagementModelFaqs = [
  {
    question: "Which model should I choose?",
    answer:
      "Fixed price when scope is clear. Time & materials when you're still discovering. Dedicated team when you need ongoing capacity on a multi-month roadmap. We'll recommend the best fit in your free estimate.",
  },
  {
    question: "Do you offer milestone billing on all models?",
    answer:
      "Yes on fixed-price engagements. T&M and dedicated teams bill on agreed cycles (weekly or monthly) with transparent reports—no surprise invoices.",
  },
  {
    question: "Can we switch models mid-project?",
    answer:
      "Often yes. Many clients start with T&M discovery, then lock a fixed-price build phase. Dedicated teams can take over after an MVP launch.",
  },
] as const;
