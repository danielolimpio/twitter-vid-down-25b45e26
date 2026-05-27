import { Globe, Check } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOCALES, LOCALE_NAMES, localizedPath } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

const LanguageSwitcher = () => {
  const { locale, basePath } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-xs font-semibold uppercase hidden sm:inline">{locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {LOCALES.map((l) => (
            <Link
              key={l}
              to={localizedPath(l, basePath)}
              onClick={() => setOpen(false)}
              hrefLang={l}
              className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-accent transition-colors ${
                l === locale ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              <span>{LOCALE_NAMES[l]}</span>
              {l === locale && <Check className="w-4 h-4" />}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
