import { Download, Link, ClipboardPaste } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { error?: string; success?: boolean }>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      // clipboard access denied
    }
  };

  const handleDownload = () => {
    if (!url.trim()) return;
    if (!url.includes("twitter.com") && !url.includes("x.com")) {
      setResult({ error: "Por favor, insira um link válido do Twitter/X." });
      return;
    }
    setLoading(true);
    setResult(null);
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      setResult({ success: true });
    }, 2000);
  };

  return (
    <section id="home" className="py-12 md:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Baixar Vídeos do Twitter{" "}
          <span className="text-gradient-twitter">Grátis e Rápido</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto">
          A melhor ferramenta para baixar vídeos do Twitter (X) em alta qualidade. MP4, Full HD, sem marca d'água. 100% grátis!
        </p>

        <div className="bg-card border border-border rounded-2xl p-1.5 mb-4">
          <div className="flex items-center gap-2 bg-background rounded-xl px-4 py-3">
            <Link className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <input
              type="url"
              value={url}
              onChange={(e) => { setUrl(e.target.value); setResult(null); }}
              placeholder="Cole o link do Twitter/X aqui..."
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground text-sm md:text-base"
              onKeyDown={(e) => e.key === "Enter" && handleDownload()}
            />
            <button
              onClick={handlePaste}
              className="flex items-center gap-1.5 text-primary hover:text-twitter-blue-hover text-sm font-medium transition-colors flex-shrink-0"
            >
              <ClipboardPaste className="w-4 h-4" />
              Colar
            </button>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={loading}
          className="w-full bg-primary hover:bg-twitter-blue-hover text-primary-foreground font-semibold py-3.5 px-6 rounded-xl text-base transition-all disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          {loading ? "Processando..." : "Baixar Agora"}
        </button>

        {result?.error && (
          <p className="text-destructive text-sm mt-3">{result.error}</p>
        )}
        {result?.success && (
          <div className="mt-4 p-4 bg-card border border-border rounded-xl">
            <p className="text-success font-medium mb-2">✓ Vídeo encontrado!</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <button className="bg-primary hover:bg-twitter-blue-hover text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Download HD (720p)
              </button>
              <button className="bg-secondary hover:bg-accent text-secondary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Download SD (480p)
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          Certifique-se de não violar os direitos de terceiros com os vídeos que baixar do Twitter.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
