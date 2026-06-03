import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HelpCircle, Bell, ArrowLeft, Clock, User, Trash2, ExternalLink, Download } from "lucide-react";
import { getHistory, removeFromHistory, clearHistory, DownloadHistoryItem } from "@/lib/downloadHistory";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { ImageWithSkeleton } from "@/components/ImageWithSkeleton";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

const Header = ({ title, showBack = false }: HeaderProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<DownloadHistoryItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const toggleOpen = () => {
    if (!open) setHistory(getHistory());
    setOpen(!open);
  };

  const handleRemove = (id: string) => {
    removeFromHistory(id);
    setHistory(getHistory());
  };

  const handleClear = () => {
    clearHistory();
    setHistory([]);
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
  };

  const isFaqActive = location.pathname === "/faq";

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-40 px-4 py-3">
      <div className="lg:ml-[280px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          )}
          {title ? (
            <span className="font-bold text-foreground text-sm">{title}</span>
          ) : (
            <div className="lg:hidden flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-bold text-foreground">TwitterDown</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* FAQ icon */}
          <Link
            to="/faq"
            className={`p-2 rounded-full transition-colors ${
              isFaqActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
            aria-label="FAQ"
          >
            <HelpCircle className="w-5 h-5" />
          </Link>

          {/* Notifications bell */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleOpen}
              className={`p-2 rounded-full transition-colors relative ${
                open ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              aria-label="Histórico de downloads"
            >
              <Bell className="w-5 h-5" />
              {history.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-80 max-h-96 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                  <span className="font-semibold text-foreground text-sm">Downloads Recentes</span>
                  {history.length > 0 && (
                    <button onClick={handleClear} className="text-xs text-destructive hover:text-destructive/80 transition-colors">
                      Limpar tudo
                    </button>
                  )}
                </div>

                <div className="overflow-y-auto max-h-72">
                  {history.length === 0 ? (
                    <div className="p-6 text-center">
                      <Download className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Nenhum download ainda</p>
                    </div>
                  ) : (
                    history.slice(0, 10).map((item) => (
                      <div key={item.id} className="flex items-start gap-3 px-4 py-3 border-b border-border/50 hover:bg-accent/50 transition-colors">
                        {item.thumbnail && (
                          <ImageWithSkeleton
                            src={item.thumbnail}
                            alt=""
                            width={48}
                            height={32}
                            loading="lazy"
                            decoding="async"
                            className="w-12 h-8 object-cover rounded flex-shrink-0"
                            containerClassName="w-12 h-8 flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <User className="w-3 h-3 text-primary flex-shrink-0" />
                            <span className="text-xs font-medium text-foreground truncate">{item.author}</span>
                          </div>
                          {item.text && <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{item.text}</p>}
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground">
                            <Clock className="w-2.5 h-2.5" />
                            {formatDate(item.downloadedAt)}
                            <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-medium">{item.quality}</span>
                          </div>
                        </div>
                        <div className="flex gap-1.5 flex-shrink-0">
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 p-0.5">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button onClick={() => handleRemove(item.id)} className="text-muted-foreground hover:text-destructive p-0.5">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {history.length > 0 && (
                  <Link
                    to="/downloads"
                    onClick={() => setOpen(false)}
                    className="block text-center py-2.5 text-xs font-medium text-primary hover:bg-accent/50 transition-colors border-t border-border"
                  >
                    Ver todos os downloads
                  </Link>
                )}
              </div>
            )}
          </div>

          <LanguageSwitcher />
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
