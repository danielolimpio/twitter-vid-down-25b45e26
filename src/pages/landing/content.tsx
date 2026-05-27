import { ReactNode } from "react";
import type { LandingPageProps } from "@/components/LandingPageTemplate";

const RELATED_ALL = [
  { label: "Download Twitter Video", path: "/download-twitter-video" },
  { label: "Twitter Video Downloader", path: "/twitter-video-downloader" },
  { label: "Twitter to MP4", path: "/twitter-to-mp4" },
  { label: "Download Twitter GIF", path: "/download-twitter-gif" },
  { label: "Download Twitter Video HD", path: "/download-twitter-video-hd" },
  { label: "Twitter Video on iPhone", path: "/download-twitter-video-iphone" },
  { label: "Twitter Video on Android", path: "/download-twitter-video-android" },
];

const relatedExcept = (path: string) => RELATED_ALL.filter(r => r.path !== path);

const p = (text: ReactNode) => <p>{text}</p>;

export const downloadTwitterVideo: LandingPageProps = {
  path: "/download-twitter-video",
  breadcrumbName: "Download Twitter Video",
  title: "Download Twitter Video - Free MP4 Downloader in HD",
  description: "Download Twitter videos online in MP4, HD and Full HD. No watermark, no signup, no app. Free Twitter video downloader for every device.",
  keywords: "download twitter video, download video from twitter, save twitter video, twitter video download online",
  h1: "Download Twitter Video Free in HD",
  intro: "Paste any Twitter or X post URL to download the video as MP4 in seconds. No watermark, no signup, works on every device.",
  sections: [
    {
      h2: "How to download a video from Twitter",
      body: (
        <>
          {p("Twitter (now X) does not give you a download button on videos. The fastest way to save a Twitter video is with a web-based downloader: you paste the tweet URL, the tool reads the public video file behind the post, and you save it directly to your device.")}
          {p("This page is built for exactly that. The downloader above accepts links from both twitter.com and x.com. Within a couple of seconds, you'll see thumbnails plus a list of available qualities ranging from 360p up to Full HD 1080p (and 4K when the original tweet was uploaded in 4K).")}
        </>
      ),
      h3: [
        { h3: "Step 1 — Copy the tweet URL", body: p("On the Twitter or X app, tap the share icon under the post and choose 'Copy link'. In a browser, copy the address bar URL when viewing the tweet.") },
        { h3: "Step 2 — Paste it into the box above", body: p("Click the input field and press paste. The tool validates that the link belongs to twitter.com or x.com before processing.") },
        { h3: "Step 3 — Pick the quality and save", body: p("Choose MP4 quality — HD is recommended for most uses, Full HD for archiving. The file downloads through your browser, never through our servers.") },
      ],
    },
    {
      h2: "What you can download",
      body: (
        <>
          {p("The downloader works with native Twitter video, video replies, video quote tweets, and animated GIFs (which Twitter stores as silent MP4 files). Live broadcasts and Spaces are not supported, and content from private or protected accounts cannot be processed.")}
          {p("Files are delivered straight from Twitter's CDN, so the bitrate and resolution match what was originally uploaded. Nothing is re-encoded, watermarked, or compressed by us.")}
        </>
      ),
    },
    {
      h2: "Privacy and safety",
      body: p("We don't ask you to log in, we don't store any of the videos you download, and download history is kept only inside your own browser. The site is HTTPS-only and works without third-party trackers in your download flow."),
    },
  ],
  faqs: [
    { question: "Is downloading Twitter videos legal?", answer: "Saving public videos for personal use is generally fine. Redistributing copyrighted content without permission is not — always respect the creator." },
    { question: "Does it work with x.com links?", answer: "Yes. Both twitter.com and x.com URLs are accepted." },
    { question: "Why don't I see a 1080p option?", answer: "We only show qualities that exist in the original tweet. If the uploader posted in 720p, that's the highest you'll see." },
    { question: "Can I download Twitter videos in bulk?", answer: "Not from this page — each video is processed individually to keep the experience fast and respectful of Twitter's CDN." },
    { question: "Is there a file size limit?", answer: "No. As long as the tweet plays, the downloader can save it." },
  ],
  related: relatedExcept("/download-twitter-video"),
};

export const twitterVideoDownloader: LandingPageProps = {
  path: "/twitter-video-downloader",
  breadcrumbName: "Twitter Video Downloader",
  title: "Twitter Video Downloader - Save X Videos Online Free",
  description: "Online Twitter video downloader. Save X (Twitter) videos to MP4 in HD and Full HD. Free, browser-based, no extension required.",
  keywords: "twitter video downloader, x video downloader, online twitter video downloader, free twitter video downloader",
  h1: "Twitter Video Downloader",
  intro: "A clean, fast, ad-light Twitter video downloader that runs entirely in your browser. Paste any X or Twitter URL above and save the video as MP4.",
  sections: [
    {
      h2: "Why people pick this Twitter video downloader",
      body: (
        <>
          {p("Most Twitter downloaders are buried in popups, redirect you to sketchy mirror sites, or refuse to work on mobile. We built TwitterDown to fix exactly that: a single page, no popups, no signup, fully responsive, and instant.")}
          {p("Behind the scenes the tool talks to Twitter's public oEmbed and syndication endpoints to extract the original .mp4 file URLs, then hands them to your browser. There is no proxying, transcoding, or watermarking in the middle.")}
        </>
      ),
    },
    {
      h2: "Works with Twitter and X",
      body: p("Twitter rebranded to X in 2023, but the underlying URLs still resolve. Our downloader handles both formats — twitter.com/username/status/123… and x.com/username/status/123… — interchangeably."),
    },
    {
      h2: "Built for Core Web Vitals",
      body: p("The page ships under 50 KB of critical CSS, preloads the hero image, uses WebP everywhere, and lazy-loads non-critical chunks. That's why downloads start within milliseconds of pasting a link on a fast connection."),
      h3: [
        { h3: "Mobile-first", body: p("Tap targets are 44 px or larger, the layout is single-column on phones, and the paste button is one thumb-reach away. Try it on Android Chrome, iOS Safari, or Samsung Internet — it just works.") },
        { h3: "Desktop friendly", body: p("On desktop the same flow is one keyboard shortcut away: Cmd/Ctrl+V to paste, Enter to download.") },
      ],
    },
  ],
  faqs: [
    { question: "Do I need an account?", answer: "No. The downloader is fully anonymous." },
    { question: "Does it work without JavaScript?", answer: "JavaScript is required to call the extraction API, but the page itself renders without it." },
    { question: "Is there a desktop app?", answer: "There is no app — the whole point is that no install is needed." },
    { question: "How long are videos kept on your servers?", answer: "They are never on our servers. Files stream from Twitter's CDN straight to your device." },
  ],
  related: relatedExcept("/twitter-video-downloader"),
};

export const twitterToMp4: LandingPageProps = {
  path: "/twitter-to-mp4",
  breadcrumbName: "Twitter to MP4",
  title: "Twitter to MP4 Converter - Save X Videos as MP4 Free",
  description: "Convert Twitter and X video posts to MP4 instantly. No watermark, no signup, free Twitter to MP4 downloader that works on any device.",
  keywords: "twitter to mp4, twitter mp4 download, twitter video to mp4, convert twitter video to mp4",
  h1: "Twitter to MP4 — Convert and Download",
  intro: "Save any Twitter or X video as a clean MP4 file. The format is universal, so it plays on iPhone, Android, Windows, macOS and every modern player.",
  sections: [
    {
      h2: "About the MP4 format",
      body: (
        <>
          {p("Twitter stores video as H.264 inside an MP4 container. That's the most compatible video format in use today — every browser, phone OS, smart TV, and editing app can open it without extra codecs.")}
          {p("Because we deliver the same file Twitter serves, you never need a 'converter' in the literal sense. The download is the MP4. No transcoding, no quality loss.")}
        </>
      ),
    },
    {
      h2: "When the MP4 is silent",
      body: p("Twitter GIFs are technically silent MP4 clips. If you save one and there's no sound, that's by design — the source has no audio track. For real videos, the original audio is preserved at the same bitrate Twitter uploaded."),
    },
    {
      h2: "Want a different format?",
      body: p("Once you have the MP4 you can convert it to MOV, WebM, MKV or extract MP3 audio using any free converter like HandBrake or FFmpeg. We keep this tool focused on doing one thing — fetching the original MP4 — exceptionally well."),
    },
  ],
  faqs: [
    { question: "Why MP4 specifically?", answer: "Twitter natively delivers MP4. There's nothing to convert — what you download is a ready-to-play MP4." },
    { question: "Will it play on iPhone?", answer: "Yes. MP4 is the iPhone's native format." },
    { question: "Can I get just the audio?", answer: "Not from this page. Save the MP4 first, then extract audio with a tool like HandBrake or FFmpeg." },
    { question: "Are the MP4 files DRM-protected?", answer: "No. Twitter does not apply DRM to public video posts." },
  ],
  related: relatedExcept("/twitter-to-mp4"),
};

export const downloadTwitterGif: LandingPageProps = {
  path: "/download-twitter-gif",
  breadcrumbName: "Download Twitter GIF",
  title: "Download Twitter GIF - Free Twitter GIF Downloader",
  description: "Download GIFs from Twitter (X) as MP4. Free Twitter GIF downloader for iPhone, Android and desktop. No signup, no watermark.",
  keywords: "twitter gif downloader, download twitter gif, save twitter gif, twitter gif to mp4",
  h1: "Download Twitter GIFs in One Click",
  intro: "Paste a tweet that contains a GIF and save it instantly. Twitter stores GIFs as silent MP4 files — you'll get the highest-quality version available.",
  sections: [
    {
      h2: "Why Twitter GIFs are actually MP4",
      body: (
        <>
          {p("A few years ago Twitter quietly stopped storing animated GIFs as .gif files. New uploads are converted to H.264 MP4 video and played back in a loop. The user experience is identical, but the file is much smaller — typically 1/10th the size of an equivalent GIF.")}
          {p("Because of this, our downloader saves Twitter GIFs as MP4 by default. That keeps the quality high and the file size tiny. If you genuinely need a .gif file (for an old chat app or a niche tool), you can convert the MP4 with ezgif.com or FFmpeg in one command.")}
        </>
      ),
    },
    {
      h2: "How to download a Twitter GIF",
      body: p("The flow is the same as for a video. Copy the URL of the tweet that contains the GIF, paste it into the field above, and download. The badge on the preview will say 'GIF' so you know what you're saving."),
    },
    {
      h2: "Where Twitter GIFs come from",
      body: p("Most GIFs on Twitter are added through the built-in GIPHY picker. Those clips are public and free to repost. If a creator made an original GIF, credit them when you share it elsewhere."),
    },
  ],
  faqs: [
    { question: "Will I get a .gif file?", answer: "No — you'll get an MP4. Twitter stores GIFs as MP4 internally, which is much smaller and higher quality. Use ezgif.com to convert to .gif if needed." },
    { question: "Does it work for reaction GIFs?", answer: "Yes, any GIF posted to a public tweet works." },
    { question: "Are Twitter GIFs silent?", answer: "Yes. Twitter strips audio from GIF uploads, so the downloaded MP4 has no sound." },
    { question: "Can I download GIFs on mobile?", answer: "Yes. The page is fully mobile-friendly and downloads go straight to your camera roll / downloads folder." },
  ],
  related: relatedExcept("/download-twitter-gif"),
};

export const downloadTwitterVideoHd: LandingPageProps = {
  path: "/download-twitter-video-hd",
  breadcrumbName: "Download Twitter Video HD",
  title: "Download Twitter Video HD - 1080p Full HD Downloader",
  description: "Download Twitter videos in HD and Full HD 1080p. Free Twitter HD video downloader. Save X videos in highest quality without watermark.",
  keywords: "download twitter video hd, twitter video hd download, twitter 1080p download, twitter video full hd",
  h1: "Download Twitter Videos in HD and Full HD",
  intro: "Save Twitter / X videos at the maximum quality the uploader provided — up to 1080p Full HD, and 4K when the source was uploaded that way.",
  sections: [
    {
      h2: "What 'HD' means on Twitter",
      body: (
        <>
          {p("Twitter encodes each video into several quality 'rungs' so playback adapts to network conditions. Typical rungs are 320×180, 480×270, 720p, and 1080p. Some 4K uploads also keep a 2160p rung.")}
          {p("Our downloader exposes every rung that exists. The first button in the list is always the highest quality available, marked 'Best'. Pick that one for archiving, pick a lower rung if you're on slow data.")}
        </>
      ),
    },
    {
      h2: "Why some videos top out at 720p",
      body: p("If the original tweet was uploaded from a phone in standard mode, or if the creator's account does not have the higher-bitrate tier enabled, Twitter caps the encode at 720p. In that case 720p is the best you can possibly download — no tool can recreate detail that was never uploaded."),
    },
    {
      h2: "Quality tips",
      body: p("For social reposting, 720p is usually enough and saves bandwidth. For editing or projection, pick 1080p (or 4K if available). MP4/H.264 is the native format, so the file is ready to drop into any editor — Premiere, DaVinci, CapCut, iMovie."),
    },
  ],
  faqs: [
    { question: "Can you upscale a 720p video to 1080p?", answer: "No tool can truly upscale beyond the source quality. We always offer the highest rung Twitter actually has." },
    { question: "Do I need a fast connection for HD?", answer: "Only at download time. Once the file is on your device it plays at full quality offline." },
    { question: "What about 4K?", answer: "When the tweet was uploaded in 4K, you'll see a 4K option in the list of qualities." },
    { question: "Does HD download cost more battery?", answer: "Downloading is fast either way — battery cost is the same as loading a regular web page." },
  ],
  related: relatedExcept("/download-twitter-video-hd"),
};

export const downloadTwitterVideoIphone: LandingPageProps = {
  path: "/download-twitter-video-iphone",
  breadcrumbName: "Twitter Video on iPhone",
  title: "Download Twitter Videos on iPhone - Save X Videos to iOS",
  description: "Download Twitter videos on iPhone and iPad. Save X videos to your camera roll without an app. Works on iOS Safari, free and fast.",
  keywords: "download twitter video iphone, twitter video iphone, save twitter video iphone, twitter video ios",
  h1: "Download Twitter Videos on iPhone",
  intro: "Save any Twitter or X video to your iPhone in seconds — no app, no shortcut, no jailbreak. Just Safari and the paste-and-go flow above.",
  sections: [
    {
      h2: "How to save a Twitter video on iPhone",
      body: (
        <>
          {p("Open the Twitter or X app, find the video you want to save, tap the share arrow under the tweet, and choose 'Copy link'. Switch to Safari, paste the link into the box above this article, and tap Download.")}
          {p("Pick the quality you want. Safari will open a preview of the MP4. Tap the share icon in the bottom toolbar and choose 'Save to Files' (or 'Save Video' to send it directly to your camera roll on iOS 17 and later).")}
        </>
      ),
      h3: [
        { h3: "Direct save to camera roll", body: p("On modern iOS versions, long-pressing the video preview gives you a 'Save to Photos' shortcut that puts the clip straight into your Photos library — no Files detour.") },
        { h3: "iPad and iPad Pro", body: p("The same flow works on iPadOS. Side-by-side multitasking is handy: keep X open on one side, Safari on the other, paste-and-save without switching apps.") },
      ],
    },
    {
      h2: "Why iPhone needs a different flow",
      body: p("iOS sandboxes downloads more aggressively than Android. There's no automatic 'Downloads' folder for video files in Safari — they go to Files first. Our tool is built around that constraint so the process feels native."),
    },
    {
      h2: "Common iPhone pitfalls",
      body: p("If the download seems to hang, check that Safari is not blocking pop-ups for our domain (Settings > Safari > Block Pop-ups). If the MP4 opens but Save to Photos is greyed out, you're on a very old iOS — saving to Files still works."),
    },
  ],
  faqs: [
    { question: "Do I need a Shortcuts shortcut?", answer: "No. The browser flow works on every iPhone with Safari." },
    { question: "Will the video go to my camera roll?", answer: "Yes on iOS 17+. On older versions, save to Files first then move to Photos." },
    { question: "Does this work on the X iPhone app directly?", answer: "Not from inside the app — you need to copy the link, then switch to Safari." },
    { question: "Is there an iPhone app for TwitterDown?", answer: "No app needed. Add the website to your home screen for one-tap access." },
  ],
  related: relatedExcept("/download-twitter-video-iphone"),
};

export const downloadTwitterVideoAndroid: LandingPageProps = {
  path: "/download-twitter-video-android",
  breadcrumbName: "Twitter Video on Android",
  title: "Download Twitter Videos on Android - Save X Videos to Phone",
  description: "Download Twitter videos on Android phones and tablets. Save X videos as MP4 directly to your gallery. No app, free and fast.",
  keywords: "download twitter video android, twitter video android, save twitter video android, twitter video downloader android",
  h1: "Download Twitter Videos on Android",
  intro: "Save Twitter / X videos to your Android gallery in seconds. The page works in Chrome, Samsung Internet, Firefox and Brave — no app to install.",
  sections: [
    {
      h2: "How to download a Twitter video on Android",
      body: (
        <>
          {p("In the Twitter or X app, tap the share icon under the tweet and choose 'Copy link'. Open your browser, paste the link into the field above, and tap Download. Pick the quality and the video is saved to your /Downloads folder by default.")}
          {p("From there, the file is visible in your gallery app under 'Movies' or 'Downloads'. Most Android gallery apps generate a thumbnail within seconds.")}
        </>
      ),
      h3: [
        { h3: "Samsung Internet quirks", body: p("Samsung Internet sometimes opens MP4s in its built-in player instead of downloading them. Tap the three-dot menu and choose 'Download' explicitly if that happens.") },
        { h3: "Chrome on Android", body: p("Chrome 100+ saves MP4 downloads silently into /Downloads. You'll see a small notification at the bottom of the screen confirming the save.") },
      ],
    },
    {
      h2: "No APK, no permissions",
      body: p("There is no APK to sideload and no storage permission to grant. Everything happens inside the browser sandbox, which is safer than installing a third-party downloader app."),
    },
    {
      h2: "Battery and data",
      body: p("Pick a lower quality (720p instead of 1080p) when on mobile data to save bandwidth and battery. The downloader shows file size estimates next to each quality option."),
    },
  ],
  faqs: [
    { question: "Do I need to install an APK?", answer: "No. Avoid third-party Twitter downloader APKs — they often request unnecessary permissions." },
    { question: "Where does the video save?", answer: "By default, your phone's /Downloads folder. You'll see it in your gallery within seconds." },
    { question: "Why does Samsung Internet open the MP4 instead of saving?", answer: "Tap the three-dot menu and choose Download explicitly, or long-press the download button." },
    { question: "Does it work on Android tablets?", answer: "Yes. The layout adapts to any screen size." },
  ],
  related: relatedExcept("/download-twitter-video-android"),
};

export const ALL_LANDING_PAGES: LandingPageProps[] = [
  downloadTwitterVideo,
  twitterVideoDownloader,
  twitterToMp4,
  downloadTwitterGif,
  downloadTwitterVideoHd,
  downloadTwitterVideoIphone,
  downloadTwitterVideoAndroid,
];
