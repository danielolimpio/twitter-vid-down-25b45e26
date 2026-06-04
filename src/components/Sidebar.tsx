import { useNavigate, useLocation } from "react-router-dom";
import { Download, Home, HelpCircle, Info, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import instagramImg from "@/assets/baixar-instagram.png";
import facebookImg from "@/assets/baixar-facebook.png";
import youtubeImg from "@/assets/baixar-youtube.png";
import tiktokImg from "@/assets/baixar-tiktok.png";
import kwaiImg from "@/assets/baixar-kwai.png";
const batePapoLogo = "/batepapo-logo.png";
const batePapoGif = "/batepapo.gif";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizedPath } from "@/i18n/config";

const SiteLogo = () => (
  <img src="/logo.webp" alt="TwitterDown" width={28} height={28} decoding="async" className="w-7 h-7 rounded" />
);

const externalLinks = [
  { label: "Instagram", url: "https://baixarvideosinstagram.com", img: instagramImg },
  { label: "Facebook", url: "https://baixarvideosfacebook.com", img: facebookImg },
  { label: "YouTube", url: "https://baixarvideoyoutube.com", img: youtubeImg },
  { label: "TikTok", url: "https://baixarvideostiktok.com", img: tiktokImg },
  { label: "Kwai", url: "https://baixarvideoskwai.com", img: kwaiImg },
];

interface SidebarProps {
  activeSection?: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, locale } = useLocale();

  const homePath = localizedPath(locale, "/");
  const navItems = [
    { id: localizedPath(locale, "/"), label: t.nav.home, icon: Home },
    { id: localizedPath(locale, "/twitter-video-downloader"), label: t.nav.downloader, icon: Download },
    { id: localizedPath(locale, "/twitter-to-mp4"), label: t.nav.toMp4, icon: FileText },
    { id: localizedPath(locale, "/download-twitter-gif"), label: t.nav.gif, icon: Info },
    { id: localizedPath(locale, "/faq"), label: t.nav.faq, icon: HelpCircle },
    { id: localizedPath(locale, "/contato"), label: t.footer.contact, icon: Mail },
  ];

  const currentPath = activeSection || location.pathname;
  const isActive = (id: string) => currentPath === id;

  return (
    <>
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[280px] border-r border-border bg-sidebar p-4 z-50">
        <button onClick={() => navigate(homePath)} className="flex items-center gap-3 px-3 py-2 mb-2 text-left">
          <SiteLogo />
          <div>
            <h1 className="font-bold text-foreground text-lg leading-tight">TwitterDown</h1>
            <p className="text-xs text-muted-foreground">{t.tagline}</p>
          </div>
        </button>

        <nav className="flex-1 mt-2 space-y-1 overflow-hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-full text-[15px] font-medium whitespace-nowrap transition-colors ${
                isActive(item.id)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-accent"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}

          <div className="pt-3 mt-3 border-t border-border">
            <p className="px-3 mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">More Downloaders</p>
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-3 py-1.5 rounded-full text-[14px] font-medium whitespace-nowrap text-sidebar-foreground hover:bg-accent transition-colors"
              >
                <img src={link.img} alt={link.label} width={20} height={20} loading="lazy" decoding="async" className="w-5 h-5 rounded" />
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="pt-2 mt-2 border-t border-border flex flex-col items-center">
          <a
            href="https://batepapogratis.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bate Papo Gratis"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img src={batePapoLogo} alt="Bate Papo" width={120} height={120} loading="lazy" decoding="async" className="w-24 h-auto -mb-4" />
            <img src={batePapoGif} alt="Bate Papo Chat" width={88} height={88} loading="lazy" decoding="async" className="w-20 h-auto -mt-4" />
          </a>
        </div>



        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center justify-between px-3">
            <span className="text-xs text-muted-foreground">TwitterDown v2.0</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 flex items-center justify-around px-2 py-2 safe-area-bottom">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-lg text-[10px] transition-colors ${
              isActive(item.id) ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
        <ThemeToggle />
      </nav>
    </>
  );
};

export default Sidebar;
