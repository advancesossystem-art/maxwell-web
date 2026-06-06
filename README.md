# Maxwell Electrodeal — Corporate Website

Enterprise marketing website for **Maxwell Electrodeal Private Limited** — Next.js 16, TypeScript, Tailwind CSS v4.

## Quick start

```bash
npm install
cp .env.local.example .env.local   # then add Resend/SMTP keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.local.example` → `.env.local`. **Never commit `.env.local`.**

| Variable | Purpose |
|----------|---------|
| `GMAIL_USER` | Your Gmail address |
| `GMAIL_APP_PASSWORD` | [Google App Password](https://myaccount.google.com/apppasswords) (16 chars) |
| `LEAD_NOTIFICATION_EMAIL` | Inbox for form alerts (usually same as `GMAIL_USER`) |
| `ADMIN_AUDIT_TOKEN` | Protects `/admin` in production |
| `ENABLE_PORTAL_DEMO` | `false` in production (blocks demo portal) |

See `.env.example` for full list.

## Forms → email (Gmail)

All lead forms POST to `/api/leads`. On submit, an email is sent to `LEAD_NOTIFICATION_EMAIL` via **Gmail + Nodemailer** (Google App Password).

### Google setup (5 minutes)

1. Sign in to **maxwellelectrodealsystems@gmail.com**
2. Turn on **2-Step Verification**: [Google Security](https://myaccount.google.com/security)
3. Create an **App Password** (app: Mail): [App Passwords](https://myaccount.google.com/apppasswords)
4. Add to `.env.local`:
   ```
   GMAIL_USER=maxwellelectrodealsystems@gmail.com
   GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   LEAD_NOTIFICATION_EMAIL=maxwellelectrodealsystems@gmail.com
   ```
5. Test: `npm run test:email` — you should receive a test message in your inbox
6. Restart dev server, then submit the contact form

You do **not** need Vercel changes for local testing — only Google App Password + `.env.local`. **For the live site**, add the same three variables in Vercel → Settings → Environment Variables → Redeploy. Or run `powershell -File scripts/print-vercel-env.ps1` to print them from your `.env.local`.

**Production alternative (no App Password on Vercel):** deploy `scripts/gmail-form-relay.gs` in Google Apps Script and set the Web app URL in `src/lib/gmail-script-config.ts`.

## Security

See [SECURITY.md](./SECURITY.md). Highlights:

- Security headers (CSP, HSTS, anti-clickjacking)
- API rate limiting and honeypot spam filter
- Admin and demo portal locked down in production
- Secrets only in environment variables

## Production build

```bash
npm run build
npm start
```

## Push to GitHub

```bash
git init
git add .
git status                    # verify .env.local is NOT listed
git commit -m "Initial commit: Maxwell Electrodeal website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/maxwell.git
git push -u origin main
```

Deploy on [Vercel](https://vercel.com) and add the same env vars from `.env.example` in the project dashboard.

## License

Proprietary — Maxwell Electrodeal Private Limited.
