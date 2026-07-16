# Programmatic SEO Content Freeze — July 2026

**Status: ACTIVE.** Do not expand thin programmatic matrices until conversion metrics improve.

## Current indexable programmatic URLs (~530)

| Type | Count | Index policy |
|------|------:|--------------|
| `/compare/*` | 64 | Index (includes 44 `best-erp-for-*`) |
| `/cost/*` | 464 | Index |
| `/locations/india/{city}/{service}` | 2 | Index (Surat custom software, Halol AI only) |
| `/industries/{industry}/{service}` | 352 | **noindex** (on-demand) |
| Other city×service | 398 | **noindex** |

Total generated at build time: **1,280** pages (`getProgrammaticPageCount()`).

## Frozen — do NOT add

- New `/compare/best-erp-for-{industry}` slugs
- New programmatic city×service indexable overrides beyond the 2 existing
- New `/cost/*` market variants without a documented commercial reason
- AI-generated page batches via Cursor without passing the copy-paste test:

> *"Could GlaMark paste this onto their site and have it still be true?"*

If yes → do not publish.

## Allowed content work

- Hand-written case studies with named clients and verifiable URLs
- Service page conversion rewrites (Pain → Proof → Action)
- `/pricing`, objection blocks, and trust infrastructure
- Intent redirect blocks on existing compare pages (convert traffic, don't delete)

## Audit reference

See `src/lib/seo/indexing-audit.ts` for indexing rationale. Industry×service and city×service matrices remain noindex by design.
