/**
 * End-to-end API tests for all lead/newsletter forms.
 * Run: npm run dev (separate terminal) then npm run test:forms
 */
import fs from "node:fs";
import path from "node:path";

function loadEnvLocal() {
  const file = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvLocal();

const BASE = process.env.FORM_TEST_BASE_URL?.trim() || "http://localhost:3000";
const RUN_ID = Date.now().toString(36);
const TEST_EMAIL = `formqa.${RUN_ID}@gmail.com`;
const TEST_PHONE = "+919876543210";

const emailConfigured = Boolean(
  (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) ||
    (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_HOST) ||
    process.env.RESEND_API_KEY ||
    process.env.GMAIL_APPS_SCRIPT_URL,
);

console.log("\n=== Maxwell form API test suite ===");
console.log(`Base URL: ${BASE}`);
console.log(`Test email (submitter): ${TEST_EMAIL}`);
console.log(
  `Email delivery configured: ${emailConfigured ? "yes" : "NO — leads will accept but emailDelivered may be false"}\n`,
);

async function postJson(url, payload) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "MaxwellFormTest/1.0",
    },
    body: JSON.stringify({ website_url: "", ...payload }),
  });
  let body = {};
  try {
    body = await res.json();
  } catch {
    body = { parseError: true };
  }
  return { status: res.status, body };
}

const leadCases = [
  {
    name: "Contact form (/contact)",
    path: "/api/leads",
    payload: {
      source: "contact",
      name: "Form QA Contact",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      company: "QA Test Co",
      message: "Automated contact form test — please ignore this lead.",
      projectType: "Website Development",
    },
  },
  {
    name: "Get estimate — quick form (/get-estimate)",
    path: "/api/leads",
    payload: {
      source: "get-estimate",
      name: "Form QA Estimate",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "Website Development",
      budget: "₹1L–₹3L",
      message: "Automated get-estimate test for manufacturer website in Vadodara.",
      industry: "India",
    },
  },
  {
    name: "Header estimate modal (maps to get-estimate)",
    path: "/api/leads",
    payload: {
      source: "get-estimate",
      name: "Form QA Header Modal",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "Website / Software Inquiry",
      message: "Automated header modal test.\nLanding source: header-modal",
    },
  },
  {
    name: "Book consultation (/book-consultation)",
    path: "/api/leads",
    payload: {
      source: "book-consultation",
      name: "Form QA Consultation",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "Custom Software Development",
      message: "Automated book-consultation test — strategy call request.",
    },
  },
  {
    name: "Discovery call",
    path: "/api/leads",
    payload: {
      source: "discovery-call",
      name: "Form QA Discovery",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "ERP Development",
    },
  },
  {
    name: "Project calculator",
    path: "/api/leads",
    payload: {
      source: "project-calculator",
      name: "Form QA Calculator",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "Custom Software",
      scope: "Medium",
      timeline: "3–6 months",
      message: "Automated project calculator lead test.",
    },
  },
  {
    name: "Careers application",
    path: "/api/leads",
    payload: {
      source: "careers",
      name: "Form QA Careers",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      message: "Career application for: Next.js Developer\nAutomated careers form test.",
    },
  },
  {
    name: "Exit intent popup",
    path: "/api/leads",
    payload: {
      source: "exit-intent",
      name: "Form QA Exit Intent",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
    },
  },
  {
    name: "Homepage assessment",
    path: "/api/leads",
    payload: {
      source: "homepage-assessment",
      name: "Form QA Assessment",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      businessType: "Manufacturing",
      services: ["Website Development", "ERP"],
    },
  },
  {
    name: "Service page lead (service-website-development)",
    path: "/api/leads",
    payload: {
      source: "service-website-development",
      name: "Form QA Service",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "Website Development",
      message: "Automated service page quote request — at least twenty chars here.",
    },
  },
  {
    name: "Industry page lead (industry-manufacturing)",
    path: "/api/leads",
    payload: {
      source: "industry-manufacturing",
      name: "Form QA Industry",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      projectType: "ERP Development",
      message: "Automated industry page inquiry for manufacturing ERP scope.",
    },
  },
  {
    name: "Tool export gate (tool-erp-roi-calculator)",
    path: "/api/leads",
    payload: {
      source: "tool-erp-roi-calculator",
      name: "Form QA Tool Export",
      email: TEST_EMAIL,
      company: "QA Manufacturing",
      message: "[ERP ROI Calculator] Automated tool export gate test summary.",
    },
  },
  {
    name: "Legacy /api/contact (backward compat)",
    path: "/api/contact",
    payload: {
      name: "Form QA Legacy Contact",
      email: TEST_EMAIL,
      phone: TEST_PHONE,
      message: "Automated legacy contact API test.",
      service: "Website Development",
    },
  },
];

const newsletterCase = {
  name: "Newsletter signup",
  path: "/api/newsletter",
  payload: {
    email: TEST_EMAIL,
    name: "Form QA Subscriber",
    source: "newsletter-test",
  },
};

async function waitForServer(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(BASE, { method: "HEAD" });
      if (res.ok || res.status === 404) return true;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return false;
}

const serverUp = await waitForServer();
if (!serverUp) {
  console.error(`✗ Dev server not reachable at ${BASE}`);
  console.error("  Start it with: npm run dev\n");
  process.exit(1);
}

const results = [];

for (const test of leadCases) {
  const url = `${BASE}${test.path}`;
  const { status, body } = await postJson(url, test.payload);
  const ok = status >= 200 && status < 300 && body.success;
  results.push({
    name: test.name,
    ok,
    status,
    emailDelivered: body.emailDelivered,
    error: body.error,
  });
  const icon = ok ? "✓" : "✗";
  const emailFlag =
    body.emailDelivered === true
      ? "email sent"
      : body.emailDelivered === false
        ? "accepted, email NOT sent"
        : "n/a";
  console.log(`${icon} ${test.name}`);
  console.log(`   HTTP ${status} · ${ok ? emailFlag : body.error || "failed"}`);
}

{
  const { status, body } = await postJson(`${BASE}${newsletterCase.path}`, newsletterCase.payload);
  const ok = status >= 200 && status < 300 && body.success;
  results.push({
    name: newsletterCase.name,
    ok,
    status,
    emailDelivered: undefined,
    error: body.error,
  });
  console.log(`${ok ? "✓" : "✗"} ${newsletterCase.name}`);
  console.log(`   HTTP ${status} · ${ok ? "accepted" : body.error || "failed"}`);
}

const passed = results.filter((r) => r.ok).length;
const failed = results.length - passed;
const emailSent = results.filter((r) => r.emailDelivered === true).length;
const emailFailed = results.filter((r) => r.emailDelivered === false).length;

console.log("\n--- Summary ---");
console.log(`Forms accepted: ${passed}/${results.length}`);
console.log(`Forms rejected: ${failed}`);
if (emailConfigured) {
  console.log(`Lead emails reported delivered: ${emailSent}`);
  console.log(`Lead emails NOT delivered (SMTP error): ${emailFailed}`);
} else {
  console.log("Configure GMAIL_APP_PASSWORD in .env.local and restart dev server to test email delivery.");
}
console.log(`\nCheck inbox: ${process.env.LEAD_NOTIFICATION_EMAIL || process.env.GMAIL_USER || "maxwellelectrodealsystems@gmail.com"}`);
console.log(`Look for subjects containing "Form QA" from test run ${RUN_ID}\n`);

process.exit(failed > 0 ? 1 : 0);
