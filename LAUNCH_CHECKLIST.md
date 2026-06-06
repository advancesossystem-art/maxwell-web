# Maxwell Electrodeal — Launch Checklist

**Phase 8 — Final production audit**  
Use this list the day before and day of go-live.

---

## Must fix before launch

- [ ] Set production env: `NEXT_PUBLIC_SITE_URL=https://maxwellelectrodeal.com`
- [ ] Configure **at least one** CRM path: `LEAD_WEBHOOK_URL` and/or `HUBSPOT_WEBHOOK_URL` / `ZOHO_WEBHOOK_URL` / `SALESFORCE_WEBHOOK_URL`
- [ ] Replace **email stub**: integrate Resend/SendGrid for `LEAD_NOTIFICATION_EMAIL` (currently `console.log` only in `src/lib/crm.ts`)
- [ ] Set `NEXT_PUBLIC_GTM_ID` or `NEXT_PUBLIC_GA_MEASUREMENT_ID` for conversion tracking
- [ ] Submit test lead on **contact**, **get-estimate**, **newsletter**, and **tool export** — confirm webhook receives payload
- [ ] Verify **legal contact** details: `siteConfig.phone`, `siteConfig.email`, registered address in legal pages
- [ ] Confirm **cookie banner** copy matches Cookie Policy; test Accept/Decline persistence
- [ ] Production deploy smoke test: homepage, `/contact`, one service, one tool, `/portal/login`
- [ ] Run `npm run build` on CI with zero errors (186 routes)
- [ ] DNS + SSL + `Strict-Transport-Security` (middleware already sets HSTS)

---

## Recommended before launch

- [ ] Add **newsletter consent** line (“By subscribing you agree to…”) on `NewsletterSignup` — currently missing explicit consent text
- [ ] Wire `trackNewsletterSignup()` inside `NewsletterSignup` on success (only `MicroConversionCTA` calls it today)
- [ ] Remove `/portal` and `/portal/login` from `sitemap-pages` (pages are `noIndex`)
- [ ] Sync `ServicesJsonLd` item list with `getAllServices()` from `services-data` (schema accuracy)
- [ ] Replace **placeholder client logos** (`ClientLogoCloud mode="placeholder"`) with real logos or “Trusted by” text-only mode
- [ ] Review **certification grid** placeholders (`status: "placeholder"`) — label as “in progress” or remove
- [ ] Set `NEXT_PUBLIC_INTRO_MODE=minimal` or `disabled` for launch week if CWV priority > brand intro
- [ ] Verify CRM webhook endpoints return 2xx (add `response.ok` checks — not enforced in code today)
- [ ] Document **demo portal** credentials on internal wiki only; never in public marketing as production login
- [ ] Post-deploy Lighthouse on production URL (performance, SEO, accessibility)
- [ ] Google Search Console: submit `sitemap.xml`
- [ ] Meta Pixel ID if paid social is live (`NEXT_PUBLIC_META_PIXEL_ID`)

---

## Can wait until after launch

- [ ] Replace portal `sessionStorage` demo auth with real IdP (Auth0, Clerk, custom JWT)
- [ ] Distributed rate limiting (Upstash/Vercel KV) — current limiter is in-memory per instance
- [ ] CRM retry queue for failed webhooks
- [ ] Real client screenshots vs `ProjectMock` CSS illustrations on work/case study pages
- [ ] Photo assets + `next/image` for case study heroes (`/case-studies/*.jpg` paths in legacy constants are unused)
- [ ] Performance push to 85+ lab score (Phase 6.75 baseline ~67–74 local)
- [ ] Remove deprecated `/api/contact` route after clients updated
- [ ] Clean legacy `constants.services` / `constants.caseStudies` arrays
- [ ] `sameAs` social profiles in Organization schema
- [ ] Hindi/regional legal addendum if required

---

## Deployment checklist

### Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Canonical, OG, sitemaps |
| `NEXT_PUBLIC_GTM_ID` or `NEXT_PUBLIC_GA_MEASUREMENT_ID` | **Yes** (launch) | Analytics |
| `LEAD_WEBHOOK_URL` / CRM URLs | **Yes** (launch) | Lead delivery |
| `LEAD_NOTIFICATION_EMAIL` | **Yes** | Ops alerts (needs mail provider) |
| `NEXT_PUBLIC_INTRO_MODE` | Optional | `full` / `minimal` / `disabled` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Optional | Paid social |

### Build & hosting

- [ ] Node 20+ on host (Vercel recommended for Next 16)
- [ ] `npm run build` → `npm run start` or platform default
- [ ] Enable compression (Next `compress: true` ✅)
- [ ] No secrets in client bundle (webhooks server-only ✅)

### Headers (middleware)

Already applied: CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy.

- [ ] After adding new third-party scripts, update CSP `script-src` / `connect-src`

### Caching

- [ ] Static pages: CDN cache default
- [ ] `/api/*`: `Cache-Control: no-store` ✅
- [ ] Purge CDN on deploy

### Monitoring

- [ ] Uptime check on `/` and `/api/leads` (HEAD/GET health if added later)
- [ ] Error logging (Vercel logs / Sentry)
- [ ] Weekly Search Console + GA4 conversion review

---

## Analytics checklist (pre-launch)

| Event | Source | dataLayer `event` | Status |
|-------|--------|-------------------|--------|
| CTA click | `trackCTAClick` | `cta_click` | ✅ Wired |
| Consultation | auto from CTA URL | `consultation_request` | ✅ |
| Estimate | auto from CTA URL | `estimate_request` | ✅ |
| Discovery | auto from CTA URL | `discovery_request` | ✅ |
| Form start/complete | lead forms | `form_start`, `form_complete`, `lead_score` | ✅ |
| Newsletter | `MicroConversionCTA` only | `newsletter_signup` | ⚠️ Not on standalone `NewsletterSignup` |
| Resource/guide download | conversion helpers | `resource_download`, `guide_download` | ✅ |
| Exit intent | `ExitIntentModal` | `exit_intent_shown`, `exit_intent_convert` | ✅ |
| Tool view/start/complete | `lib/tools/analytics.ts` | `tool_tool_view` etc. | ✅ Naming: `tool_{event}` |
| Portal actions | `lib/portal/analytics.ts` | Custom portal events | ✅ Dev console only |
| Page views | GTM/gtag | Automatic when IDs set | ⏳ Pending env |

**GTM mapping:** Map dataLayer events to GA4 conversions in container before launch.

---

## Sign-off

| Role | Name | Date | OK |
|------|------|------|-----|
| Engineering | | | |
| Marketing | | | |
| Legal | | | |
