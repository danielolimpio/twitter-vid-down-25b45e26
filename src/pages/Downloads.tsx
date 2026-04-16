import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Trash2, Clock, User, ExternalLink } from "lucide-react";
import { getHistory, clearHistory, removeFromHistory, DownloadHistoryItem } from "@/lib/downloadHistory";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Downloads = () => {
  const [history, setHistory] = useState<DownloadHistoryItem[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleClear = () => {
    clearHistory();
    setHistory([]);
  };

  const handleRemove = (id: string) => {
    removeFromHistory(id);
    setHistory(getHistory());
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Histórico de Downloads - TwitterDown"
        description="Veja seus downloads recentes de vídeos do Twitter. Histórico salvo localmente no seu navegador."
        path="/downloads"
        breadcrumbs={[{ name: "Início", path: "/" }, { name: "Downloads", path: "/downloads" }]}
        noindex
      />
      <Sidebar activeSection="downloads" />

      <Header title="Downloads" showBack />

      <main className="lg:ml-[240px] pb-20 lg:pb-0">
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Histórico de Downloads</h1>
                <p className="text-muted-foreground text-sm mt-1">Seus vídeos baixados recentemente. Armazenado localmente no navegador.</p>
              </div>
              {history.length > 0 && (
                <button onClick={handleClear} className="flex items-center gap-2 text-sm text-destructive hover:text-destructive/80 transition-colors">
                  <Trash2 className="w-4 h-4" /> Limpar
                </button>
              )}
            </div>

            {history.length === 0 ? (
              <div className="bg-card border border-border rounded-2xl p-12 text-center">
                <Download className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-foreground mb-2">Nenhum download ainda</h2>
                <p className="text-sm text-muted-foreground mb-6">Quando você baixar vídeos do Twitter, eles aparecerão aqui.</p>
                <Link to="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-6 rounded-xl text-sm transition-colors">
                  <Download className="w-4 h-4" /> Baixar Vídeo
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((item) => (
                  <div key={item.id} className="bg-card border border-border rounded-xl p-4 flex gap-4">
                    {item.thumbnail && (
                      <img src={item.thumbnail} alt="Thumbnail do vídeo baixado" loading="lazy" className="w-24 h-16 object-cover rounded-lg flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <User className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground truncate">{item.author}</span>
                        <span className="text-xs text-muted-foreground">@{item.authorHandle}</span>
                      </div>
                      {item.text && <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{item.text}</p>}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{formatDate(item.downloadedAt)}</span>
                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{item.quality}</span>
                        <span className="uppercase">{item.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-shrink-0">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors" aria-label="Abrir vídeo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button onClick={() => handleRemove(item.id)} className="text-muted-foreground hover:text-destructive transition-colors" aria-label="Remover do histórico">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Downloads;
