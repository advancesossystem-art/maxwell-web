# Security

## What is protected

| Layer | Measure |
|-------|---------|
| **HTTP headers** | CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, COOP/CORP |
| **Path blocking** | `.env`, `.git`, `wp-admin`, `.sql`, path traversal → 404 |
| **API methods** | `/api/*` accepts **POST only** (GET/PUT/DELETE → 405) |
| **Rate limits** | Edge: 15 req/min/IP on all APIs; leads 8/min; newsletter 5/min |
| **Cross-site abuse** | Production APIs require matching `Origin` or `Referer` |
| **Bots** | Honeypot field (`website_url`); blocks known scanner user-agents |
| **Input** | Zod validation, max field lengths, 64KB body cap, JSON-only |
| **Secrets** | `.env.local` gitignored — SMTP/API keys **server-only**, never in client bundle |
| **Errors** | Production email errors do not leak API response bodies |
| **Admin** | `/admin` requires httpOnly cookie (via `/admin/login`) or `x-admin-token` in production |
| **Webhook SSRF** | Outbound webhooks must be HTTPS; localhost/private IPs blocked |
| **Email headers** | Subject/reply-to sanitized against header injection |
| **Demo portal** | `/portal` disabled in production unless `ENABLE_PORTAL_DEMO=true` |
| **Webhooks** | Optional `LEAD_WEBHOOK_SECRET` sent as `Authorization: Bearer` |
| **Crawlers** | `robots.txt` disallows `/api/`, `/admin/`, `/portal/` |

## Credentials — what is NOT exposed on the web

These exist **only** in server environment variables (`.env.local` / hosting dashboard):

- `GMAIL_APP_PASSWORD` — Google App Password (never your normal Gmail password)
- `SMTP_PASS` — legacy alias for app password
- `RESEND_API_KEY`
- `ADMIN_AUDIT_TOKEN`
- `LEAD_WEBHOOK_SECRET`
- CRM webhook URLs

**Never** prefix secrets with `NEXT_PUBLIC_` — that exposes them in the browser.

## Before GitHub push

1. Confirm `.env.local` is **not** staged (`git status` must not list it).
2. Rotate any API key or app password that was ever pasted in chat or screenshots.
3. Set production env vars only in Vercel/hosting — not in the repo.

## Production environment variables

```env
# Email (server-only — create App Password at myaccount.google.com/apppasswords)
GMAIL_USER=maxwellelectrodealsystems@gmail.com
GMAIL_APP_PASSWORD=<16-char-app-password>
LEAD_NOTIFICATION_EMAIL=maxwellelectrodealsystems@gmail.com

# Security
ADMIN_AUDIT_TOKEN=<random-string-min-16-chars>
ENABLE_PORTAL_DEMO=false
LEAD_WEBHOOK_SECRET=<optional-webhook-bearer-token>

NEXT_PUBLIC_SITE_URL=https://maxwellelectrodeal.com
```

Generate admin token (PowerShell):

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }) -as [byte[]])
```

## Access admin audit (production)

1. Set `ADMIN_AUDIT_TOKEN` (min 16 characters) in hosting env vars.
2. Visit `/admin/login` and enter the token — it is stored in an **httpOnly cookie**, not the URL.
3. Do **not** use `?token=` in production URLs (tokens leak via browser history and server logs).

Dev-only: `?token=` query param still works locally for convenience.

## Reporting issues

Email **maxwellelectrodealsystems@gmail.com** for security concerns.
