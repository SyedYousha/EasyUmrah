#!/usr/bin/env node
// Generates easyumrah-tawaaf-duas.pdf from the duas in data/tawaaf-duas.js.
// Requires a Chromium binary; auto-detects the pre-installed one when available.
//
// Run with:
//   node scripts/generate-pdf.js

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const os = require("os");

const { TAWAAF_DUAS, YEMENI_CORNER_DUA } = require("../data/tawaaf-duas.js");

const FONT_PATH = path.resolve(__dirname, "..", "fonts", "UthmanicHafs.woff2");
const FONT_BASE64 = fs.readFileSync(FONT_PATH).toString("base64");

const ORDINALS = [
  "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"
];

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function paragraphsToHtml(text) {
  if (!text) return "";
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("\n");
}

function roundSection(dua) {
  const ordinal = ORDINALS[dua.round - 1] || `Round ${dua.round}`;
  return `
    <section class="round">
      <header class="round-header">
        <div class="round-badge">Round ${dua.round} / 7</div>
        <h2>${ordinal} Round</h2>
      </header>
      <div class="arabic" dir="rtl" lang="ar">
        ${paragraphsToHtml(dua.arabic)}
      </div>
      <div class="translation" lang="en">
        <div class="translation-label">Translation</div>
        ${paragraphsToHtml(dua.english)}
      </div>
    </section>
  `;
}

function cornerSection(dua) {
  return `
    <section class="round corner">
      <header class="round-header">
        <div class="round-badge corner-badge">Recite on every round</div>
        <h2>Between the Yemeni Corner &amp; Hajr-e-Aswad</h2>
      </header>
      <div class="arabic" dir="rtl" lang="ar">
        ${paragraphsToHtml(dua.arabic)}
      </div>
      <div class="translation" lang="en">
        <div class="translation-label">Translation</div>
        ${paragraphsToHtml(dua.english)}
      </div>
    </section>
  `;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>EasyUmrah — Tawaaf Duas</title>
  <style>
    @font-face {
      font-family: "UthmanicHafs";
      src: url(data:font/woff2;base64,${FONT_BASE64}) format("woff2");
      font-display: block;
    }
    @page {
      size: A4;
      margin: 18mm 16mm 20mm;
    }
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      color: #1c1c1c;
      font-family: "Noto Serif", "Liberation Serif", serif;
      font-size: 11pt;
      line-height: 1.55;
    }
    .cover {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 240mm;
      text-align: center;
      page-break-after: always;
    }
    .cover .brand {
      font-size: 14pt;
      color: #0a7a5c;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .cover h1 {
      font-size: 34pt;
      margin: 0 0 1.25rem;
      color: #1c1c1c;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .cover .subtitle {
      font-size: 13pt;
      color: #5c5c5c;
      max-width: 130mm;
    }
    .cover .arabic-cover {
      font-family: "UthmanicHafs", "Noto Naskh Arabic", "Noto Sans Arabic", serif;
      font-size: 26pt;
      color: #0a7a5c;
      margin-top: 3rem;
      direction: rtl;
    }
    .cover .footer-note {
      margin-top: auto;
      padding-top: 2rem;
      font-size: 9.5pt;
      color: #7a7a7a;
    }
    .round {
      page-break-before: always;
      page-break-inside: avoid;
      padding-top: 4mm;
    }
    .round.corner { border-top: none; }
    .round-header {
      border-bottom: 1px solid #d9d3c4;
      padding-bottom: 6mm;
      margin-bottom: 8mm;
      text-align: center;
    }
    .round-badge {
      display: inline-block;
      font-size: 9pt;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #0a7a5c;
      font-weight: 600;
      background: #edf7f2;
      padding: 3px 12px;
      border-radius: 999px;
      margin-bottom: 6mm;
    }
    .corner-badge {
      background: #fdf5e8;
      color: #a26b1a;
    }
    .round-header h2 {
      font-size: 20pt;
      margin: 0;
      color: #1c1c1c;
      font-weight: 700;
    }
    .arabic {
      font-family: "UthmanicHafs", "Noto Naskh Arabic", "Noto Sans Arabic", serif;
      font-size: 17pt;
      line-height: 2.1;
      text-align: center;
      color: #1c1c1c;
      margin-bottom: 8mm;
    }
    .arabic p {
      margin: 0 0 5mm;
    }
    .arabic p:last-child { margin-bottom: 0; }
    .translation {
      background: #faf7ef;
      border-left: 3px solid #0a7a5c;
      border-radius: 4px;
      padding: 6mm 8mm;
      font-size: 10.5pt;
      color: #2a2a2a;
      line-height: 1.65;
    }
    .translation-label {
      font-size: 8.5pt;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0a7a5c;
      font-weight: 600;
      margin-bottom: 3mm;
    }
    .translation p { margin: 0 0 3mm; }
    .translation p:last-child { margin-bottom: 0; }
    .corner .translation {
      border-left-color: #a26b1a;
      background: #fbf3e2;
    }
    .corner .translation-label { color: #a26b1a; }
  </style>
</head>
<body>
  <div class="cover">
    <div class="brand">EasyUmrah</div>
    <h1>Tawaaf Duas</h1>
    <p class="subtitle">
      Duas for each of the seven rounds (shawt) of tawaaf, with the
      Rabbana Atina dua recited between the Yemeni Corner and Hajr-e-Aswad
      on every round.
    </p>
    <div class="arabic-cover">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
    <div class="footer-note">easyumrah — a simple guide for pilgrims</div>
  </div>

  ${TAWAAF_DUAS.map(roundSection).join("\n")}
  ${cornerSection(YEMENI_CORNER_DUA)}
</body>
</html>
`;

const REPO_ROOT = path.resolve(__dirname, "..");
const htmlPath = path.join(os.tmpdir(), `easyumrah-print-${process.pid}.html`);
const pdfPath = path.join(REPO_ROOT, "easyumrah-tawaaf-duas.pdf");

fs.writeFileSync(htmlPath, html, "utf8");
console.log(`Wrote HTML: ${htmlPath}`);

const chromiumCandidates = [
  process.env.CHROMIUM_BIN,
  "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
  "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell",
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
].filter(Boolean);

let chromium = null;
for (const candidate of chromiumCandidates) {
  if (fs.existsSync(candidate)) {
    chromium = candidate;
    break;
  }
}

if (!chromium) {
  console.error(
    "No Chromium binary found. Set CHROMIUM_BIN to a Chromium/Chrome executable."
  );
  process.exit(1);
}

console.log(`Using Chromium: ${chromium}`);

const args = [
  "--headless=new",
  "--no-sandbox",
  "--disable-gpu",
  `--print-to-pdf=${pdfPath}`,
  "--no-pdf-header-footer",
  "--virtual-time-budget=10000",
  `file://${htmlPath}`,
];

execFileSync(chromium, args, { stdio: "inherit" });
console.log(`Wrote PDF: ${pdfPath}`);
