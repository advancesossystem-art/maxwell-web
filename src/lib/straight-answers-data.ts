export type StraightAnswer = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

export const straightAnswers: StraightAnswer[] = [
  {
    question: "Why ₹45,000 when someone quoted me ₹15,000?",
    answer:
      "At ₹15,000 nobody can build properly. They'll use a pirated theme, skip SEO, and your site breaks in 6 months. We've rebuilt three of those. Here's what the real cost looks like over 2 years — hosting, fixes, lost Google traffic.",
    link: { label: "See our published pricing", href: "/pricing" },
  },
  {
    question: "Who owns the domain and hosting?",
    answer:
      "You. Always. Registered in your name, your email, from day one. We've seen too many businesses held hostage by their developer.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "Full refund before development starts. You pay 40% only after you approve the design direction.",
  },
  {
    question: "Can I meet you in person?",
    answer:
      "Yes. 419 Lalita Tower, Jetalpur Road, Vadodara. Come see us — no appointment needed during business hours.",
  },
  {
    question: "Will I get GST invoice?",
    answer:
      "Yes. Maxwell Electrodeal Pvt Ltd is GST registered. Claim your input credit on every invoice.",
  },
  {
    question: "How long, really?",
    answer:
      "21 days for a Starter site. 30 days for Professional. We'll put it in writing. If we miss it, we tell you why before the deadline — not after.",
  },
];

export const whoWeAreNotFor = {
  title: "We're Not Right For Everyone",
  notFor: [
    "We don't compete with ₹15,000 quotes — we can't build properly at that price",
    "We don't do 3-day rush jobs — good work takes 21 days minimum",
    "We don't take more than 4 website projects a month",
    "We don't do logo design, printing, or social media management",
  ],
  weDo: [
    "We build sites that load in under 2 seconds and rank on Google",
    "We specialize in manufacturers, exporters, and industrial companies",
    "We hand over everything — code, domain, design files — on day one",
  ],
} as const;
