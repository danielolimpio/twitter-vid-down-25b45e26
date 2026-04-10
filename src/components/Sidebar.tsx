import { useNavigate, useLocation } from "react-router-dom";
import { Download, Home, HelpCircle, Info, FileText, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-foreground" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navItems = [
  { id: "/", label: "Início", icon: Home },
  { id: "/downloads", label: "Downloads", icon: Download },
  { id: "/sobre", label: "Sobre", icon: Info },
  { id: "/como-usar", label: "Como Usar", icon: FileText },
  { id: "/faq", label: "FAQ", icon: HelpCircle },
  { id: "/contato", label: "Contato", icon: Mail },
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
          <XLogo />
          <div>
            <h1 className="font-bold text-foreground text-lg leading-tight">TwitterDown</h1>
            <p className="text-xs text-muted-foreground">Baixar Vídeos</p>
          </div>
        </button>

        <nav className="flex-1 mt-2 space-y-1">
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
