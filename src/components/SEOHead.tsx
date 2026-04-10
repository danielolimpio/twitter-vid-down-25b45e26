import { useEffect } from "react";

const SITE_URL = "https://baixarvideostwitter.com";
const SITE_NAME = "TwitterDown";
const DEFAULT_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ea8799f-241c-4ee9-933c-fd1990452197/id-preview-9d112ed8--46e28d82-1c24-4171-a224-b46d2746c035.lovable.app-1775843788600.png";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
  faqItems?: { question: string; answer: string }[];
  noindex?: boolean;
}

const SEOHead = ({ title, description, path, breadcrumbs, faqItems, noindex }: SEOHeadProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    // Title
    document.title = title;

    // Helper to set/create meta
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // OG
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "pt_BR");
    setMeta("property", "og:image", DEFAULT_IMAGE);

    // Twitter Cards
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Remove old JSON-LD injected by this component
    document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());

    // BreadcrumbList
    if (breadcrumbs && breadcrumbs.length > 0) {
      const bcSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": bc.name,
          "item": `${SITE_URL}${bc.path}`,
        })),
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "breadcrumb");
      script.textContent = JSON.stringify(bcSchema);
      document.head.appendChild(script);
    }

    // FAQPage
    if (faqItems && faqItems.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "faq");
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }

    return () => {
      document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());
    };
  }, [title, description, path, breadcrumbs, faqItems, noindex]);

  return null;
};

export default SEOHead;
