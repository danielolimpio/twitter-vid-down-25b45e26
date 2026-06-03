import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy-loaded routes (PT support pages + landing pages)
const Downloads = lazy(() => import("./pages/Downloads.tsx"));
const Sobre = lazy(() => import("./pages/Sobre.tsx"));
const ComoUsar = lazy(() => import("./pages/ComoUsar.tsx"));
const FAQ = lazy(() => import("./pages/FAQ.tsx"));
const Contato = lazy(() => import("./pages/Contato.tsx"));
const Privacidade = lazy(() => import("./pages/Privacidade.tsx"));
const Termos = lazy(() => import("./pages/Termos.tsx"));
const DMCA = lazy(() => import("./pages/DMCA.tsx"));
const UsoResponsavel = lazy(() => import("./pages/UsoResponsavel.tsx"));

const LandingDownloadTwitterVideo = lazy(() => import("./pages/landing/DownloadTwitterVideo.tsx"));
const LandingTwitterVideoDownloader = lazy(() => import("./pages/landing/TwitterVideoDownloader.tsx"));
const LandingTwitterToMp4 = lazy(() => import("./pages/landing/TwitterToMp4.tsx"));
const LandingDownloadTwitterGif = lazy(() => import("./pages/landing/DownloadTwitterGif.tsx"));
const LandingDownloadTwitterVideoHd = lazy(() => import("./pages/landing/DownloadTwitterVideoHd.tsx"));
const LandingDownloadTwitterVideoIphone = lazy(() => import("./pages/landing/DownloadTwitterVideoIphone.tsx"));
const LandingDownloadTwitterVideoAndroid = lazy(() => import("./pages/landing/DownloadTwitterVideoAndroid.tsx"));

const queryClient = new QueryClient();

const LOCALIZED_LOCALES = ["pt", "es", "id", "tr", "hi"] as const;

const localizedRoutes: { path: string; element: JSX.Element }[] = [
  { path: "", element: <Index /> },
  { path: "download-twitter-video", element: <LandingDownloadTwitterVideo /> },
  { path: "twitter-video-downloader", element: <LandingTwitterVideoDownloader /> },
  { path: "twitter-to-mp4", element: <LandingTwitterToMp4 /> },
  { path: "download-twitter-gif", element: <LandingDownloadTwitterGif /> },
  { path: "download-twitter-video-hd", element: <LandingDownloadTwitterVideoHd /> },
  { path: "download-twitter-video-iphone", element: <LandingDownloadTwitterVideoIphone /> },
  { path: "download-twitter-video-android", element: <LandingDownloadTwitterVideoAndroid /> },
  { path: "downloads", element: <Downloads /> },
  { path: "sobre", element: <Sobre /> },
  { path: "como-usar", element: <ComoUsar /> },
  { path: "faq", element: <FAQ /> },
  { path: "contato", element: <Contato /> },
  { path: "privacidade", element: <Privacidade /> },
  { path: "termos", element: <Termos /> },
  { path: "dmca", element: <DMCA /> },
  { path: "uso-responsavel", element: <UsoResponsavel /> },
];

const RouteSet = () => (
  <Routes>
    {/* English (default, no prefix) */}
    {localizedRoutes.map((r) => (
      <Route key={`en-${r.path}`} path={r.path === "" ? "/" : `/${r.path}`} element={r.element} />
    ))}

    {/* Localized variants */}
    {LOCALIZED_LOCALES.flatMap((loc) =>
      localizedRoutes.map((r) => (
        <Route
          key={`${loc}-${r.path}`}
          path={r.path === "" ? `/${loc}` : `/${loc}/${r.path}`}
          element={r.element}
        />
      ))
    )}

    <Route path="*" element={<NotFound />} />
  </Routes>
);


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocaleProvider>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <RouteSet />
          </Suspense>
        </LocaleProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
