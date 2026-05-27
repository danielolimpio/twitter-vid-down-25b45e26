# Global SEO & Multilingual Optimization Plan

Transform the current PT-BR-only site into an internationally indexable, multilingual Twitter/X video downloader optimized for global Google rankings.

## 1. Multilingual architecture (hreflang)

Add 6 locales with URL-prefixed routing:
- `/` → English (default, x-default)
- `/pt/` → Portuguese
- `/es/` → Spanish
- `/id/` → Indonesian
- `/tr/` → Turkish
- `/hi/` → Hindi

Implementation:
- Lightweight i18n via a `src/i18n/` folder (no heavy library — just typed dictionaries per locale to keep JS bundle small).
- `LocaleProvider` reads URL prefix, sets `<html lang>` dynamically, exposes `t()` and `locale`.
- `LanguageSwitcher` component in header.
- All routes nested under `/:locale?` with redirect fallback to `/`.

## 2. New landing pages (per locale)

Each locale gets these pages with localized slugs where natural (English slugs kept as canonical for global consistency):

- Home
- `/download-twitter-video`
- `/twitter-video-downloader`
- `/twitter-to-mp4`
- `/download-twitter-gif`
- `/download-twitter-video-hd`
- `/download-twitter-video-iphone`
- `/download-twitter-video-android`

Plus existing PT pages (`/como-usar`, `/faq`, `/sobre`, etc.) stay intact under `/pt/`.

Each landing page includes:
- Unique H1, H2/H3 hierarchy
- Working downloader (reuses existing `HeroSection` extracted into a shared component)
- 600–900 words of natural, useful content (how-to, benefits, device-specific tips)
- Internal links to sibling landing pages
- FAQ section (4–6 Qs unique to the page)
- FAQPage + WebApplication/SoftwareApplication + BreadcrumbList JSON-LD
- Hreflang tags for all 6 locales + x-default
- Localized title (≤60 chars) and meta description (≤160 chars)

## 3. SEO infrastructure

- Extend `SEOHead` to emit hreflang for all 6 locales automatically.
- Update `index.html`: change default `lang="en"`, English title/description, remove PT-specific og.
- Regenerate `public/sitemap.xml` with all locale × page combinations (~56 URLs) + hreflang annotations.
- Update `public/robots.txt` (already good — verify).
- Clean up keyword meta (remove stuffed PT list, use focused per-page keywords).

## 4. Performance

Already strong (preloads, WebP, critical CSS, skeletons). Additional:
- Lazy-load non-critical route components with `React.lazy` + `Suspense`.
- Confirm only one LCP preload per page.
- Ensure new pages reuse `ImageWithSkeleton` and explicit width/height.

## 5. Design

Keep current Twitter-blue minimal aesthetic. New pages share Header/Sidebar/Footer chrome. Add a compact Language switcher (globe icon + locale code) in Header.

## Files to create/edit

**Create:**
- `src/i18n/index.ts`, `src/i18n/locales/{en,pt,es,id,tr,hi}.ts`
- `src/i18n/LocaleProvider.tsx`, `src/components/LanguageSwitcher.tsx`
- `src/components/DownloaderWidget.tsx` (extracted reusable downloader)
- `src/components/LandingPageTemplate.tsx` (shared layout for the 7 keyword pages)
- `src/pages/landing/{DownloadTwitterVideo,TwitterVideoDownloader,TwitterToMp4,DownloadTwitterGif,DownloadTwitterVideoHd,DownloadTwitterVideoIphone,DownloadTwitterVideoAndroid}.tsx`
- `scripts/generate-sitemap.ts` (replaces static sitemap with generator covering all locales)

**Edit:**
- `index.html` (lang=en, English defaults, cleaned keywords)
- `src/App.tsx` (locale-prefixed routing + new pages, lazy loading)
- `src/components/SEOHead.tsx` (full hreflang support, locale-aware)
- `src/components/Header.tsx`, `Sidebar.tsx`, `Footer.tsx` (use t(), add LanguageSwitcher)
- `src/components/HeroSection.tsx` (use DownloaderWidget + t())
- `src/pages/Index.tsx` (use t())
- `package.json` (add predev/prebuild sitemap script)

## Out of scope / not changing
- Edge function logic (Twitter extraction stays as-is)
- Existing PT legal pages content (stay accessible under `/pt/` slugs)
- Visual theme/colors
