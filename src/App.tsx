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

const LOCALE_PREFIX = ":locale(pt|es|id|tr|hi)";

const RouteSet = () => (
  <Routes>
    {/* English (default, no prefix) */}
    <Route path="/" element={<Index />} />
    <Route path="/download-twitter-video" element={<LandingDownloadTwitterVideo />} />
    <Route path="/twitter-video-downloader" element={<LandingTwitterVideoDownloader />} />
    <Route path="/twitter-to-mp4" element={<LandingTwitterToMp4 />} />
    <Route path="/download-twitter-gif" element={<LandingDownloadTwitterGif />} />
    <Route path="/download-twitter-video-hd" element={<LandingDownloadTwitterVideoHd />} />
    <Route path="/download-twitter-video-iphone" element={<LandingDownloadTwitterVideoIphone />} />
    <Route path="/download-twitter-video-android" element={<LandingDownloadTwitterVideoAndroid />} />

    {/* Localized variants */}
    <Route path={`/${LOCALE_PREFIX}`} element={<Index />} />
    <Route path={`/${LOCALE_PREFIX}/download-twitter-video`} element={<LandingDownloadTwitterVideo />} />
    <Route path={`/${LOCALE_PREFIX}/twitter-video-downloader`} element={<LandingTwitterVideoDownloader />} />
    <Route path={`/${LOCALE_PREFIX}/twitter-to-mp4`} element={<LandingTwitterToMp4 />} />
    <Route path={`/${LOCALE_PREFIX}/download-twitter-gif`} element={<LandingDownloadTwitterGif />} />
    <Route path={`/${LOCALE_PREFIX}/download-twitter-video-hd`} element={<LandingDownloadTwitterVideoHd />} />
    <Route path={`/${LOCALE_PREFIX}/download-twitter-video-iphone`} element={<LandingDownloadTwitterVideoIphone />} />
    <Route path={`/${LOCALE_PREFIX}/download-twitter-video-android`} element={<LandingDownloadTwitterVideoAndroid />} />

    {/* Legacy PT support pages (kept at root to preserve existing indexing) */}
    <Route path="/downloads" element={<Downloads />} />
    <Route path="/sobre" element={<Sobre />} />
    <Route path="/como-usar" element={<ComoUsar />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/contato" element={<Contato />} />
    <Route path="/privacidade" element={<Privacidade />} />
    <Route path="/termos" element={<Termos />} />
    <Route path="/dmca" element={<DMCA />} />
    <Route path="/uso-responsavel" element={<UsoResponsavel />} />
    {/* Also reachable under locale prefixes */}
    <Route path={`/${LOCALE_PREFIX}/downloads`} element={<Downloads />} />
    <Route path={`/${LOCALE_PREFIX}/sobre`} element={<Sobre />} />
    <Route path={`/${LOCALE_PREFIX}/como-usar`} element={<ComoUsar />} />
    <Route path={`/${LOCALE_PREFIX}/faq`} element={<FAQ />} />
    <Route path={`/${LOCALE_PREFIX}/contato`} element={<Contato />} />
    <Route path={`/${LOCALE_PREFIX}/privacidade`} element={<Privacidade />} />
    <Route path={`/${LOCALE_PREFIX}/termos`} element={<Termos />} />
    <Route path={`/${LOCALE_PREFIX}/dmca`} element={<DMCA />} />
    <Route path={`/${LOCALE_PREFIX}/uso-responsavel`} element={<UsoResponsavel />} />

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
