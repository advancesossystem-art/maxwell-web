/** Public analytics IDs — set in Vercel Production environment variables. */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID?.trim() || "";
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";

/** GTM takes precedence; GA4 direct gtag loads only when GTM is not configured. */
export const USE_GTM = Boolean(GTM_ID);
export const USE_DIRECT_GA4 = Boolean(GA_MEASUREMENT_ID) && !USE_GTM;

export const hasGoogleAnalytics = USE_GTM || USE_DIRECT_GA4;
