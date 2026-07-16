# Trust & Reviews — Business Action Checklist

Complete these **before** launching paid ads. Code is wired to display ratings only when env vars are set.

## 1. Google Business Profile

1. Go to [Google Business Profile](https://business.google.com)
2. Claim **Maxwell Electrodeal Private Limited**
3. Address: 419 Lalita Tower, Jetalpur Road, Vadodara, Gujarat 390007
4. Category: Software company / Website designer
5. Add phone: +91 95868 68538
6. Add website: https://maxwellelectrodeal.com
7. Verify via postcard or phone

## 2. Clutch Profile

1. Create company profile at [clutch.co](https://clutch.co)
2. Add services: Web Development, Custom Software, ERP
3. Send review link to **Rajesh at Drashti Chemicals** (drashtichemical.com)

## 3. Request 3 Named Reviews

Ask each client for:
- Full name + company + city
- Photo (optional but recommended)
- One specific number (e.g. "263 pages live in 6 weeks", "40% less manual entry")

**Priority contacts:**
1. Rajesh — Drashti Chemicals, Vadodara
2. Past ERP/CRM client (with permission)
3. Past website client (with permission)

## 4. Search Console Screenshots

For the "We Rebuilt Our Own Site" case study, export from Google Search Console:
- Performance: Day 0 (2 impressions, 0 clicks)
- Performance: Day 28 (80 clicks, 1,204 impressions)
- Coverage: 296 pages indexed

Save as PNG in `public/case-studies/maxwell-rebuild/` when ready.

## 5. Wire Env Vars (Vercel Production)

Once Google reviews are live, set:

```env
GOOGLE_BUSINESS_RATING=4.9
GOOGLE_BUSINESS_REVIEW_COUNT=12
GOOGLE_BUSINESS_URL=https://g.page/r/YOUR_GOOGLE_REVIEW_LINK
```

Optional when Clutch is live:

```env
CLUTCH_PROFILE_URL=https://clutch.co/profile/maxwell-electrodeal
CLUTCH_RATING=5.0
CLUTCH_REVIEW_COUNT=1
```

Ratings appear sitewide automatically. Do **not** set these until reviews are real and verifiable.
