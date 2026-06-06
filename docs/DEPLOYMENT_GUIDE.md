# Maxwell Electrodeal — Deployment Guide

## Environment Checklist

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production canonical URL |
| `NEXT_PUBLIC_GTM_ID` | Recommended | Google Tag Manager |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Direct GA4 if no GTM |
| `NEXT_PUBLIC_META_PIXEL_ID` | Optional | Meta ads retargeting |
| `LEAD_WEBHOOK_URL` | Recommended | Generic CRM webhook |
| `HUBSPOT_WEBHOOK_URL` | Optional | HubSpot workflow |
| `ZOHO_WEBHOOK_URL` | Optional | Zoho CRM |
| `SALESFORCE_WEBHOOK_URL` | Optional | Salesforce |
| `LEAD_NOTIFICATION_EMAIL` | Recommended | Ops inbox |

## Vercel Deployment

1. Import Git repository to Vercel
2. Framework preset: **Next.js**
3. Build command: `npm run build`
4. Output: default
5. Add environment variables (Production + Preview separately)
6. Assign domain `maxwellelectrodeal.com`
7. Enable **Deployment Protection** for preview branches

## DNS Checklist

- [ ] Apex `A` or `CNAME` → Vercel
- [ ] `www` CNAME → Vercel (or redirect apex ↔ www)
- [ ] Verify SSL certificate active
- [ ] Optional: `MX` records for Google Workspace / Zoho Mail

## Email Setup

- [ ] `maxwellelectrodealsystems@gmail.com` inbox (site contact + lead notifications via Gmail SMTP)
- [ ] SPF, DKIM, DMARC for domain
- [ ] Integrate Resend/SendGrid API for `sendLeadNotificationEmail`

## Backup Strategy

- **Code:** Git main branch (tag releases `v1.0.0-launch`)
- **Env:** Export Vercel env quarterly (encrypted store)
- **Content:** All content in repo — no CMS DB
- **Leads:** CRM is system of record once webhooks live

## Monitoring Checklist

- [ ] Vercel Analytics or Plausible
- [ ] Uptime monitor (Better Stack / Pingdom) on `/` and `/api/leads`
- [ ] Error tracking (Sentry) — optional
- [ ] GSC coverage + Core Web Vitals report weekly

## Incident Response

1. **Site down:** Check Vercel status, redeploy last green build
2. **Forms failing:** Check API logs, webhook URL, rate limits
3. **SEO drop:** Verify robots.txt, sitemap, no accidental `noIndex`
4. **Security:** Rotate webhook secrets; review middleware CSP reports

## Post-Launch

1. Submit sitemap to Google Search Console
2. Run `/admin/site-audit` and export checklist
3. Lighthouse audit on production URLs
4. Enable GA4 conversions for `form_complete` and `lead_score`
