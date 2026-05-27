export const LOCALES = ["en", "pt", "es", "id", "tr", "hi"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  hi: "हिन्दी",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
  id: "id",
  tr: "tr",
  hi: "hi",
};

export const LOCALE_OG: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
  es: "es_ES",
  id: "id_ID",
  tr: "tr_TR",
  hi: "hi_IN",
};

export const SITE_URL = "https://baixarvideostwitter.com";

/** Extract locale prefix from a pathname; returns [locale, restPath]. */
export function parseLocaleFromPath(pathname: string): { locale: Locale; rest: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && (LOCALES as readonly string[]).includes(first)) {
    return { locale: first as Locale, rest: "/" + segments.slice(1).join("/") };
  }
  return { locale: DEFAULT_LOCALE, rest: pathname || "/" };
}

/** Build a localized path. English (default) has no prefix. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : "/" + path;
  if (locale === DEFAULT_LOCALE) return clean === "/" ? "/" : clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
