/**
 * Post-build prerender: serves dist/ locally, renders each URL in Chromium,
 * and writes the fully-rendered HTML back to dist/{route}/index.html.
 *
 * Result: static, indexable HTML with SEOHead-injected <title>, meta, canonical,
 * hreflang and JSON-LD already present in the initial response.
 *
 * Runs after `vite build`. Zero changes to any React component.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { chromium } from "playwright";
import { parseStringPromise } from "xml2js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITEMAP = join(DIST, "sitemap.xml");
const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CANONICAL_HOST = "https://baixarvideostwitter.com";

if (!existsSync(SITEMAP)) {
  console.error("[prerender] dist/sitemap.xml not found — run `vite build` first.");
  process.exit(1);
}

const sitemapXml = readFileSync(SITEMAP, "utf-8");
const parsed = await parseStringPromise(sitemapXml);
const urls = (parsed.urlset?.url ?? [])
  .map((u) => u.loc?.[0])
  .filter(Boolean)
  .map((loc) => new URL(loc).pathname);

console.log(`[prerender] ${urls.length} routes to prerender`);

// Boot static server against dist/ with SPA fallback
const server = spawn("npx", ["serve", "-s", DIST, "-l", String(PORT), "--no-clipboard"], {
  cwd: ROOT,
  stdio: ["ignore", "pipe", "pipe"],
});
server.stderr.on("data", () => {});
server.stdout.on("data", () => {});

// Wait for server ready
await new Promise((r) => setTimeout(r, 1500));
for (let i = 0; i < 20; i++) {
  try {
    const res = await fetch(ORIGIN + "/");
    if (res.ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 500));
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

let ok = 0;
let fail = 0;

const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY ?? 8);

async function renderOne(path) {
  const url = ORIGIN + path;
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    // Wait for React commit + SEOHead useEffect side effects
    await page.waitForTimeout(400);

    let html = await page.content();
    html = html.replaceAll(ORIGIN, CANONICAL_HOST);

    const cleanPath = path === "/" ? "/" : path.replace(/\/$/, "");
    const outFile = cleanPath === "/"
      ? join(DIST, "index.html")
      : join(DIST, cleanPath, "index.html");
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, html, "utf-8");
    ok++;
    console.log(`[prerender] ✓ ${path}`);
  } catch (err) {
    fail++;
    console.error(`[prerender] ✗ ${path} — ${err.message}`);
  } finally {
    await page.close();
  }
}

// Simple worker pool for parallel rendering
const queue = [...urls];
async function worker() {
  while (queue.length > 0) {
    const path = queue.shift();
    if (!path) return;
    await renderOne(path);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

await browser.close();
server.kill("SIGTERM");

console.log(`[prerender] done: ${ok} ok, ${fail} failed (concurrency=${CONCURRENCY})`);
if (fail > 0) process.exit(1);

