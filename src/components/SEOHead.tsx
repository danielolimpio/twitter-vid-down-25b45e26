import { useEffect } from "react";
import { LOCALES, Locale, LOCALE_HTML_LANG, LOCALE_OG, SITE_URL, localizedPath, DEFAULT_LOCALE } from "@/i18n/config";

interface FAQItem { question: string; answer: string; }
interface HowToStep { name: string; text: string; }
interface Breadcrumb { name: string; path: string; }

interface SEOHeadProps {
  title: string;
  description: string;
  /** Path without locale prefix, starting with "/". */
  path: string;
  locale: Locale;
  keywords?: string;
  faqItems?: FAQItem[];
  howToSteps?: HowToStep[];
  breadcrumbs?: Breadcrumb[];
  noindex?: boolean;
  webApp?: boolean;
  image?: string;
}

const DEFAULT_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ea8799f-241c-4ee9-933c-fd1990452197/id-preview-9d112ed8--46e28d82-1c24-4171-a224-b46d2746c035.lovable.app-1775843788600.png";

const SEOHead = ({
  title, description, path, locale, keywords, faqItems, howToSteps, breadcrumbs, noindex, webApp, image,
}: SEOHeadProps) => {
  useEffect(() => {
    const canonical = `${SITE_URL}${localizedPath(locale, path)}`;
    const ogImage = image || DEFAULT_IMAGE;

    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    if (keywords) setMeta("name", "keywords", keywords);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "TwitterDown");
    setMeta("property", "og:locale", LOCALE_OG[locale]);
    setMeta("property", "og:image", ogImage);
    LOCALES.filter((l) => l !== locale).forEach((l) => {
      // ensure alternate locales
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:locale:alternate");
      meta.setAttribute("content", LOCALE_OG[l]);
      meta.setAttribute("data-seo-head", "og-alt");
      document.head.appendChild(meta);
    });

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical
    document.querySelectorAll('link[rel="canonical"]').forEach(el => el.remove());
    const c = document.createElement("link");
    c.setAttribute("rel", "canonical");
    c.setAttribute("href", canonical);
    document.head.appendChild(c);

    // Clean previous head injections
    document.querySelectorAll('link[data-seo-head]').forEach(el => el.remove());
    document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());

    // hreflang for all locales + x-default
    LOCALES.forEach((l) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", LOCALE_HTML_LANG[l]);
      link.setAttribute("href", `${SITE_URL}${localizedPath(l, path)}`);
      link.setAttribute("data-seo-head", "hreflang");
      document.head.appendChild(link);
    });
    const xDefault = document.createElement("link");
    xDefault.setAttribute("rel", "alternate");
    xDefault.setAttribute("hreflang", "x-default");
    xDefault.setAttribute("href", `${SITE_URL}${localizedPath(DEFAULT_LOCALE, path)}`);
    xDefault.setAttribute("data-seo-head", "hreflang");
    document.head.appendChild(xDefault);

    // JSON-LD injectors
    const addLd = (label: string, payload: unknown) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-seo-head", label);
      s.textContent = JSON.stringify(payload);
      document.head.appendChild(s);
    };

    if (breadcrumbs && breadcrumbs.length > 0) {
      addLd("breadcrumb", {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${localizedPath(locale, b.path)}`,
        })),
      });
    }

    if (faqItems && faqItems.length > 0) {
      addLd("faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(f => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }

    if (howToSteps && howToSteps.length > 0) {
      addLd("howto", {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: title,
        description,
        step: howToSteps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
      });
    }

    if (webApp) {
      addLd("webapp", {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "TwitterDown - Twitter Video Downloader",
        url: SITE_URL,
        description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12450", bestRating: "5" },
      });
      addLd("softwareapp", {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "TwitterDown",
        url: SITE_URL,
        description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      });
    }

    return () => {
      document.querySelectorAll('link[data-seo-head]').forEach(el => el.remove());
      document.querySelectorAll('meta[data-seo-head]').forEach(el => el.remove());
      document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());
    };
  }, [title, description, path, locale, keywords, faqItems, howToSteps, breadcrumbs, noindex, webApp, image]);

  return null;
};

export default SEOHead;
