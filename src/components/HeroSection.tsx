import { Download, Link as LinkIcon, ClipboardPaste, Play, Clock, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.webp";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { addToHistory } from "@/lib/downloadHistory";

interface VideoVariant {
  url: string;
  quality: string;
  bitrate: number;
}

interface VideoResult {
  thumbnail: string;
  type: string;
  variants?: VideoVariant[];
  url?: string;
  duration: number | null;
}

interface TweetInfo {
  text: string;
  author: string;
  authorHandle: string;
}

interface DownloadResult {
  success: boolean;
  error?: string;
  tweet?: TweetInfo;
  videos?: VideoResult[];
}

const HeroSection = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DownloadResult | null>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      // clipboard access denied
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) return;
    if (!url.includes("twitter.com") && !url.includes("x.com")) {
      setResult({ success: false, error: "Por favor, insira um link válido do Twitter/X." });
      return;
    }
    setLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("twitter-download", {
        body: { url: url.trim() },
      });

      if (error) {
        setResult({ success: false, error: "Erro ao processar o vídeo. Tente novamente." });
      } else if (data?.success) {
        setResult(data);
      } else {
        setResult({ success: false, error: data?.error || "Não foi possível encontrar o vídeo." });
      }
    } catch {
      setResult({ success: false, error: "Erro de conexão. Tente novamente." });
    } finally {
      setLoading(false);
    }
  };

  const downloadVideo = (videoUrl: string, quality: string) => {
    // Save to history
    if (result?.tweet && result.videos?.[0]) {
      addToHistory({
        url: videoUrl,
        thumbnail: result.videos[0].thumbnail || "",
        author: result.tweet.author,
        authorHandle: result.tweet.authorHandle,
        text: result.tweet.text || "",
        quality,
        type: result.videos[0].type || "video",
      });
    }
    const a = document.createElement("a");
    a.href = videoUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
            {url && (
              <button
                onClick={() => { setUrl(""); setResult(null); }}
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                aria-label="Limpar"
              >
                <X className="w-4 h-4" />
              </button>
            )}
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

        {result && !result.success && result.error && (
          <p className="text-destructive text-sm mt-3">{result.error}</p>
        )}

        {result?.success && result.videos && (
          <div className="mt-6 space-y-4">
            {/* Tweet info */}
            {result.tweet && (
              <div className="bg-card border border-border rounded-xl p-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground text-sm">{result.tweet.author}</span>
                  <span className="text-muted-foreground text-xs">@{result.tweet.authorHandle}</span>
                </div>
                {result.tweet.text && (
                  <p className="text-sm text-muted-foreground line-clamp-3">{result.tweet.text}</p>
                )}
              </div>
            )}

            {/* Video results */}
            {result.videos.map((video, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                {/* Thumbnail */}
                {video.thumbnail && (
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt="Thumbnail do vídeo"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-2 right-2 bg-foreground/70 text-primary-foreground text-xs px-2 py-0.5 rounded flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatDuration(video.duration)}
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded">
                      {video.type === 'gif' ? 'GIF' : 'Vídeo'}
                    </div>
                  </div>
                )}

                {/* Download buttons */}
                <div className="p-4">
                  {video.variants && video.variants.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground mb-2">Escolha a qualidade:</p>
                      <div className="flex flex-wrap gap-2">
                        {video.variants.map((variant, j) => (
                          <button
                            key={j}
                            onClick={() => downloadVideo(variant.url, variant.quality)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              j === 0
                                ? "bg-primary hover:bg-twitter-blue-hover text-primary-foreground"
                                : "bg-secondary hover:bg-accent text-secondary-foreground"
                            }`}
                          >
                            <Download className="w-4 h-4" />
                            {variant.quality}
                            {j === 0 && " (Melhor)"}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : video.url ? (
                    <button
                      onClick={() => downloadVideo(video.url!, 'HD')}
                      className="w-full bg-primary hover:bg-twitter-blue-hover text-primary-foreground font-semibold py-2.5 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Baixar {video.type === 'gif' ? 'GIF' : 'Vídeo'}
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}

        <img
          src={heroBanner}
          alt="Baixar vídeos do Twitter - Download rápido e gratuito"
          className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mt-8"
          loading="eager"
        />

        <p className="text-xs text-muted-foreground mt-4">
          Certifique-se de não violar os direitos de terceiros com os vídeos que baixar do Twitter (X). Conteúdos protegidos por direitos autorais não podem ser baixados com esta ferramenta.{" "}
          <Link to="/uso-responsavel" className="text-primary hover:underline font-medium">Saiba mais</Link>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
