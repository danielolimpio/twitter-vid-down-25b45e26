import { createContext, useContext, useEffect, useMemo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_LOCALE, LOCALE_HTML_LANG, Locale, parseLocaleFromPath } from "./config";
import { Dict, TRANSLATIONS } from "./translations";

interface LocaleContextValue {
  locale: Locale;
  t: Dict;
  /** Path without the locale prefix, always starting with "/". */
  basePath: string;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  t: TRANSLATIONS[DEFAULT_LOCALE],
  basePath: "/",
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const { locale, rest } = useMemo(() => parseLocaleFromPath(pathname), [pathname]);

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, t: TRANSLATIONS[locale], basePath: rest || "/" }),
    [locale, rest],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
