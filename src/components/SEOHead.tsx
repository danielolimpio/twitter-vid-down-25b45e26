import { useEffect } from "react";

const SITE_URL = "https://baixarvideostwitter.com";
const SITE_NAME = "TwitterDown";
const DEFAULT_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8ea8799f-241c-4ee9-933c-fd1990452197/id-preview-9d112ed8--46e28d82-1c24-4171-a224-b46d2746c035.lovable.app-1775843788600.png";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  breadcrumbs?: { name: string; path: string }[];
  faqItems?: { question: string; answer: string }[];
  howToSteps?: HowToStep[];
  noindex?: boolean;
  /** Inject SoftwareApplication schema (use on homepage) */
  softwareApp?: boolean;
}

const SEOHead = ({ title, description, path, keywords, breadcrumbs, faqItems, howToSteps, noindex, softwareApp }: SEOHeadProps) => {
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
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("name", "googlebot", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    if (keywords) setMeta("name", "keywords", keywords);

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

    // Hreflang (pt-BR + x-default)
    document.querySelectorAll('link[rel="alternate"][data-seo-head]').forEach(el => el.remove());
    (["pt-BR", "x-default"] as const).forEach((hl) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hl);
      link.setAttribute("href", canonicalUrl);
      link.setAttribute("data-seo-head", "hreflang");
      document.head.appendChild(link);
    });

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

    // HowTo
    if (howToSteps && howToSteps.length > 0) {
      const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "step": howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          "position": i + 1,
          "name": step.name,
          "text": step.text,
          ...(step.image ? { "image": step.image } : {}),
        })),
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "howto");
      script.textContent = JSON.stringify(howToSchema);
      document.head.appendChild(script);
    }

    // SoftwareApplication (for homepage)
    if (softwareApp) {
      const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Baixar Videos Twitter - TwitterDown",
        "url": SITE_URL,
        "description": "Ferramenta online gratuita para baixar vídeos do Twitter (X) em HD, Full HD 1080p e 4K. Sem marca d'água, sem cadastro.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Any",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "12450",
          "bestRating": "5",
        },
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-head", "softwareapp");
      script.textContent = JSON.stringify(appSchema);
      document.head.appendChild(script);
    }

    return () => {
      document.querySelectorAll('script[data-seo-head]').forEach(el => el.remove());
    };
  }, [title, description, path, breadcrumbs, faqItems, howToSteps, noindex, softwareApp]);

  return null;
};

export default SEOHead;
