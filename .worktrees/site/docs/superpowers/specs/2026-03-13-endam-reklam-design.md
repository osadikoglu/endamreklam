# Design Document: Endam Reklam Vibe Coding Marketing Site

**Date:** 2026-03-13
**Status:** Draft
**Topic:** Marketing & Portfolio Site for Web Design Services

## 1. Executive Summary
A professional, high-performance marketing site built with Next.js to sell "Vibe Coding" services: low-cost (starting at 1990 TL), fast-delivery (48 hours) web sites and digital presence packages. The site focuses on speed, clarity, and trust for small business owners (esnaf).

## 2. Goals & Success Criteria
*   **Conversion:** Drive users to fill out a Google Form and proceed to payment.
*   **Performance:** Achieve 90+ Lighthouse scores to prove the "speed" value proposition.
*   **Tracking:** Full visibility into Google/Meta ad performance.
*   **Zero Maintenance:** Static site architecture with no database requirements.

## 3. Product Offerings (Packages)
1.  **Ekonomik Paket (1990 TL):** Design + Delivery/Installation on client's own hosting. Client provides FTP/hosting credentials via Form. No SSL/Hosting provided by Endam Reklam.
2.  **Kapsamlı Paket (3490 TL):** Design + Hosting + SSL + Installation (All-in-one).
3.  **Dijital Kayıt Paketi (Add-on - 990 TL):** Google Business, Yandex Maps, Apple Maps, and Google Analytics registration.
4.  **Google Reklam Paketi (Add-on - 1490 TL):** Initial Google Search Ads setup and 1-week monitoring.

## 4. User Journey & Data Flow
1.  **Landing:** User lands on Home/Packages page via Google/Meta ads.
2.  **Selection:** User clicks "Hemen Başla" (Get Started).
3.  **Data Collection:** User is redirected to a **Google Form**.
    *   Form collects: Business info, package selection, logo/photo uploads (stored in Google Drive).
4.  **Lead Capture:** User completes form.
5.  **Payment Redirect (Manual):** Form completion message contains a link to `/odeme-ve-tesekkur`.
6.  **Conversion & Payment:** 
    *   The `/odeme-ve-tesekkur` page triggers GTM/Meta conversion events.
    *   User clicks the relevant Iyzico/PayTR payment link for their selected total.
7.  **Fulfillment:** Admin receives Form notification + Payment notification and starts the 48-hour countdown.

## 5. Technical Architecture
*   **Framework:** Next.js 14+ (App Router).
*   **Styling:** Tailwind CSS.
*   **Hosting:** Vercel or Cloudflare Pages (Free Tier).
*   **SEO:** Metadata API for dynamic titles/descriptions.
*   **Analytics:** Google Tag Manager (GTM) script integration.

## 6. Page Sitemap & Content Integration
*   **Home (`/`):** 
    *   Hero (48h promise).
    *   **"Neden Bu Kadar Ucuz?" Section:** Brief explanation of the "Vibe Coding" efficiency model.
    *   Process steps.
    *   Top 3-4 showcases.
    *   Trust badges.
*   **Paketler (`/paketler`):** 
    *   Comparison table of 4 offerings.
    *   **Strategic FAQ (Contextual):** 
        *   "Ekstra Masrafım Olacak mı?" (Clarity on hosting/domain).
        *   "SSL Sertifikası Var mı?" (Security assurance).
        *   "Reklam Verebilir miyim?" (Marketing compatibility).
        *   "Bu Siteyle Neler Yapabilirim?" (Use cases: landing page, portfolio, business card).
*   **Örnek Tasarımlar (`/portfolyo`):** Grid of high-quality screenshots with lightbox view.
*   **Ödeme & Teşekkür (`/odeme-ve-tesekkur`):** Payment buttons + "What happens next?" instructions + Tracking pixels.
*   **Legal Pages (Footer):**
    *   **Mesafeli Satış Sözleşmesi (`/mesafeli-satis-sozlesmesi`)**
    *   **KVKK ve Gizlilik Politikası (`/kvkk`)**
    *   **Çerez Politikası (`/cerez-politikasi`)**

## 7. Legal & Compliance
*   **Cookie Consent:** A non-intrusive banner for cookie acceptance.
*   **Sales Agreement:** Mandatory checkbox or link before the final payment buttons.
*   **KVKK:** Information on how business data and assets are handled.

## 8. Tracking Requirements
*   **Meta Pixel:** PageView, Lead (on /odeme-ve-tesekkur), and Contact (WhatsApp click).
*   **Google Ads:** Conversion tag on /odeme-ve-tesekkur.
*   **WhatsApp:** Fixed button tracking.

## 9. Security & Access
*   The `/odeme-ve-tesekkur` page is technically public (for tracking purposes) but only linked from the Google Form "Thank You" message.
*   Sensitive credentials (FTP/Hosting) collected via Google Form are stored securely in Google Drive/Forms and only accessed by the admin for deployment.

## 10. Out of Scope
*   Client dashboard or login area.
*   On-site e-commerce checkout (using external payment links).
*   Dynamic CMS (all content is static in code).
*   Ongoing 24/7 technical support.
