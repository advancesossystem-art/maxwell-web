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
| `LEAD_NOTIFICATION_EMAIL` | Inbox for form alerts |
| `EMAIL_PROVIDER` | `gmail` (default) or `resend` |
| `SMTP_USER` / `SMTP_PASS` | Gmail + [Google App Password](https://myaccount.google.com/apppasswords) |
| `RESEND_API_KEY` | Optional — only if using Resend |
| `ADMIN_AUDIT_TOKEN` | Protects `/admin` in production |
| `ENABLE_PORTAL_DEMO` | `false` in production (blocks demo portal) |

See `.env.example` for full list.

## Forms → email

All lead forms POST to `/api/leads`. On submit, an email is sent to `LEAD_NOTIFICATION_EMAIL` via **Gmail SMTP** (or Resend if configured).

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
