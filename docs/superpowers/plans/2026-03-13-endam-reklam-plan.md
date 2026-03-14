# Endam Reklam Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a high-performance marketing site for Endam Reklam using Next.js, focused on selling web design packages with integrated tracking and legal compliance.

**Architecture:** Next.js 14 App Router (Static Site Generation), Tailwind CSS for styling, and Google Tag Manager for unified tracking.

**Tech Stack:** Next.js, Tailwind CSS, Lucide React (icons), Vercel/Cloudflare (hosting).

---

## Chunk 1: Project Setup & Global Layout

### Task 1: Initialize Next.js Project
**Files:**
- Create: `package.json`, `tailwind.config.ts`, `tsconfig.json`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `src/lib/constants.ts`

- [ ] **Step 1: Create Next.js app with Tailwind and TS**
Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`
Expected: Project scaffolded in current directory.

- [ ] **Step 2: Install icons**
Run: `npm install lucide-react`
Expected: lucide-react added to dependencies.

- [ ] **Step 3: Setup basic Layout and metadata**
Modify: `src/app/layout.tsx` to include Google Fonts (Inter/Geist) and basic metadata for "Endam Reklam".
- [ ] **Step 4: Define Constants**
Create: `src/lib/constants.ts` with `GOOGLE_FORM_URL`, `WHATSAPP_NUMBER`, and package details.

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: initial next.js setup and constants"
```

### Task 2: Create Navigation & Footer
**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Implement Navbar with links (Home, Paketler, Portfolyo)**
- [ ] **Step 2: Implement Footer with legal links and contact info**
- [ ] **Step 3: Add Navbar and Footer to RootLayout**
- [ ] **Step 4: Commit**
```bash
git add src/components src/app/layout.tsx
git commit -m "feat: add navbar and footer"
```

### Task 3: Floating WhatsApp Button & Cookie Banner
**Files:**
- Create: `src/components/WhatsAppButton.tsx`
- Create: `src/components/CookieBanner.tsx`

- [ ] **Step 1: Create WhatsApp button (fixed bottom-right)**
- [ ] **Step 2: Add GTM Event trigger for WhatsApp click**
- [ ] **Step 3: Create Cookie Banner (bottom-fixed with accept button)**
- [ ] **Step 4: Add both to RootLayout**
- [ ] **Step 5: Commit**
```bash
git add src/components
git commit -m "feat: add whatsapp and cookie components"
```

---

## Chunk 2: Home Page & Portfolio

### Task 4: Hero & "Why Cheap?" Sections
**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/WhyCheap.tsx`

- [ ] **Step 1: Build Hero with "48 Saatte Web Sitesi" and "Hemen Başla" CTA linking to `GOOGLE_FORM_URL`**
- [ ] **Step 2: Build "Neden Bu Kadar Ucuz?" section explaining Vibe Coding efficiency**
- [ ] **Step 3: Add to Home Page**
- [ ] **Step 4: Commit**
```bash
git add src/app/page.tsx src/components/sections
git commit -m "feat: home page hero and why-cheap sections"
```

### Task 5: Portfolio Grid
**Files:**
- Create: `src/app/portfolyo/page.tsx`
- Create: `src/components/sections/PortfolioGrid.tsx`

- [ ] **Step 1: Define portfolyo items in `src/lib/constants.ts` (with placeholder image paths)**
- [ ] **Step 2: Create a grid component for screenshots with Lightbox (simple modal)**
- [ ] **Step 3: Implement the portfolyo page**
- [ ] **Step 4: Commit**
```bash
git add src/app/portfolyo src/components/sections src/lib/constants.ts
git commit -m "feat: portfolio page with showcase grid"
```

---

## Chunk 3: Pricing, Payment & Legal

### Task 6: Packages & FAQ Integration
**Files:**
- Create: `src/app/paketler/page.tsx`
- Create: `src/components/sections/PricingTable.tsx`
- Create: `src/components/sections/ContextualFAQ.tsx`

- [ ] **Step 1: Build Pricing Table with 2 main packages + 2 add-ons (links to Google Form)**
- [ ] **Step 2: Build FAQ section with questions specified in design doc**
- [ ] **Step 3: Integrate FAQ into the Paketler page**
- [ ] **Step 4: Commit**
```bash
git add src/app/paketler src/components/sections
git commit -m "feat: packages page with pricing and faq"
```

### Task 7: Payment & Success Page
**Files:**
- Create: `src/app/odeme-ve-tesekkur/page.tsx`

- [ ] **Step 1: Implement the page with payment buttons (Iyzico/PayTR links)**
- [ ] **Step 2: Add "Mesafeli Satış Sözleşmesi" checkbox (mandatory for payment buttons visibility or enabled state)**
- [ ] **Step 3: Add instructions on what happens next**
- [ ] **Step 4: Ensure this page is reachable via `/odeme-ve-tesekkur`**
- [ ] **Step 5: Commit**
```bash
git add src/app/odeme-ve-tesekkur
git commit -m "feat: payment and success page with compliance"
```

### Task 8: Legal Pages Content
**Files:**
- Create: `src/app/kvkk/page.tsx`
- Create: `src/app/cerez-politikasi/page.tsx`
- Create: `src/app/mesafeli-satis-sozlesmesi/page.tsx`

- [ ] **Step 1: Add boilerplate text for each legal page**
- [ ] **Step 2: Commit**
```bash
git add src/app/kvkk src/app/cerez-politikasi src/app/mesafeli-satis-sozlesmesi
git commit -m "feat: add legal pages"
```

---

## Chunk 4: Tracking & SEO

### Task 9: GTM & Metadata Setup
**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add GTM Script (Head and Body parts)**
- [ ] **Step 2: Setup Metadata for SEO (Title, Description, Canonical)**
- [ ] **Step 3: Commit**
```bash
git add src/app/layout.tsx
git commit -m "chore: setup gtm and seo metadata"
```
