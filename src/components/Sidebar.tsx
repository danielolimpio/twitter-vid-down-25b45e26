import { useNavigate, useLocation } from "react-router-dom";
import { Download, Home, HelpCircle, Info, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

import logoImg from "@/assets/logo.webp";
import instagramImg from "@/assets/baixar-instagram.png";
import facebookImg from "@/assets/baixar-facebook.png";
import youtubeImg from "@/assets/baixar-youtube.png";
import tiktokImg from "@/assets/baixar-tiktok.png";
import kwaiImg from "@/assets/baixar-kwai.png";

const SiteLogo = () => (
  <img src={logoImg} alt="TwitterDown" width={28} height={28} decoding="async" className="w-7 h-7 rounded" />
);

const navItems = [
  { id: "/", label: "Início", icon: Home },
  { id: "/downloads", label: "Downloads", icon: Download },
  { id: "/sobre", label: "Sobre", icon: Info },
  { id: "/como-usar", label: "Como Usar", icon: FileText },
  { id: "/faq", label: "FAQ", icon: HelpCircle },
  { id: "/contato", label: "Contato", icon: Mail },
];

const externalLinks = [
  { label: "Baixar Instagram", url: "https://baixarvideosinstagram.com", img: instagramImg },
  { label: "Baixar Facebook", url: "https://baixarvideosfacebook.com", img: facebookImg },
  { label: "Baixar Youtube", url: "https://baixarvideoyoutube.com", img: youtubeImg },
  { label: "Baixar TikTok", url: "https://baixarvideostiktok.com", img: tiktokImg },
  { label: "Baixar Kwai", url: "https://baixarvideoskwai.com", img: kwaiImg },
];

interface SidebarProps {
  activeSection?: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = activeSection || location.pathname;
  const isActive = (id: string) => {
    if (id === "/") return currentPath === "/" || currentPath === "home";
    return currentPath === id || currentPath === id.slice(1);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-[240px] border-r border-border bg-sidebar p-4 z-50">
        <button onClick={() => navigate("/")} className="flex items-center gap-3 px-3 py-2 mb-2 text-left">
          <SiteLogo />
          <div>
            <h1 className="font-bold text-foreground text-lg leading-tight">TwitterDown</h1>
            <p className="text-xs text-muted-foreground">Baixar Vídeos</p>
          </div>
        </button>

        <nav className="flex-1 mt-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-full text-[15px] font-medium transition-colors ${
                isActive(item.id)
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-accent"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}

          {/* External download links */}
          <div className="pt-4 mt-4 border-t border-border">
            <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Outros Baixadores</p>
            {externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-full text-[14px] font-medium text-sidebar-foreground hover:bg-accent transition-colors"
              >
                <img src={link.img} alt={link.label} className="w-5 h-5 rounded" />
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-center justify-between px-3">
            <span className="text-xs text-muted-foreground">TwitterDown v1.0</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
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
