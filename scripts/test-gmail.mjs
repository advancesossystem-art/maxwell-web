/**
 * Verify Gmail App Password works before testing the contact form.
 * Run: npm run test:email
 */
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

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

const user = process.env.GMAIL_USER?.trim() || process.env.SMTP_USER?.trim();
const passRaw = process.env.GMAIL_APP_PASSWORD?.trim() || process.env.SMTP_PASS?.trim();
const pass = passRaw?.replace(/^["']|["']$/g, "").replace(/\s+/g, "");
const inbox = process.env.LEAD_NOTIFICATION_EMAIL?.trim() || user;

if (!user || !pass) {
  console.error("\nMissing Gmail credentials in .env.local:\n");
  console.error("  GMAIL_USER=maxwellelectrodealsystems@gmail.com");
  console.error("  GMAIL_APP_PASSWORD=your-16-char-app-password\n");
  console.error("Create App Password: https://myaccount.google.com/apppasswords\n");
  process.exit(1);
}

console.log(`Testing Gmail login for ${user}...`);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

try {
  await transporter.verify();
  console.log("✓ Gmail SMTP login OK\n");

  const info = await transporter.sendMail({
    from: user,
    to: inbox,
    subject: "[Maxwell] Gmail test — form email is working",
    text: "If you received this, your contact form can send emails.",
  });

  console.log(`✓ Test email sent to ${inbox}`);
  console.log(`  Message ID: ${info.messageId}\n`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error("\n✗ Gmail failed:", message, "\n");
  console.error("Fix steps:");
  console.error("  1. Enable 2-Step Verification on the Gmail account");
  console.error("  2. Create a new App Password → Mail → Other (Maxwell website)");
  console.error("  3. Paste it in .env.local as GMAIL_APP_PASSWORD=...");
  console.error("  4. Restart dev server and run npm run test:email again\n");
  process.exit(1);
}
