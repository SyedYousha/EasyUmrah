#!/usr/bin/env node
// Generates two PDFs from the duas in data/tawaaf-duas.js:
//   easyumrah-tawaaf-duas-en.pdf  (English translations)
//   easyumrah-tawaaf-duas-ur.pdf  (Urdu translations)
//
// Requires a Chromium binary; auto-detects the pre-installed one when available.
// Run with:  node scripts/generate-pdf.js

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const os = require("os");

const { TAWAAF_DUAS, YEMENI_CORNER_DUA, POST_TAWAAF_DUAS } = require("../data/tawaaf-duas.js");

const FONT_PATH = path.resolve(__dirname, "..", "fonts", "UthmanicHafs.woff2");
const FONT_BASE64 = fs.readFileSync(FONT_PATH).toString("base64");

const ORDINALS = [
  "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"
];

const LABELS = {
  en: {
    cover_brand: "EasyUmrah",
    cover_title: "Tawaaf Duas",
    cover_subtitle:
      "Duas for each of the seven rounds (shawt) of tawaaf, with the dua recited between the Yemeni Corner and Hajr-e-Aswad on every round, and additional duas for after tawaaf.",
    cover_footer: "easyumrah — a simple guide for pilgrims",
    round_of: (n) => `Round ${n} / 7`,
    round_title: (n) => `${ORDINALS[n - 1] || "Round " + n} Round`,
    corner_badge: "Recite on every round",
    corner_title: "Between the Yemeni Corner & Hajr-e-Aswad",
    translation_label: "Translation",
    post_badge: "Additional dua",
    reminder_badge: "Complete Your Tawaaf",
    reminder_title: "Pray 2 Rakaat",
    reminder_body:
      "After completing the seven rounds, pray 2 rakaat behind Maqam-e-Ibrahim if possible. If it's too crowded, pray 2 rakaat anywhere in the Masjid to complete your tawaaf.",
  },
  ur: {
    cover_brand: "EasyUmrah",
    cover_title: "طواف کی دعائیں",
    cover_subtitle:
      "طواف کے سات چکروں میں سے ہر چکر کی دعا، رکنِ یمانی اور حجرِ اسود کے درمیان ہر چکر میں پڑھی جانے والی دعا، اور طواف کے بعد کی دعائیں۔",
    cover_footer: "easyumrah — حجاج کے لیے ایک سادہ رہنما",
    round_of: (n) => `چکر ${n} / 7`,
    round_title: (n) => `${n === 1 ? "پہلا" : n === 2 ? "دوسرا" : n === 3 ? "تیسرا" : n === 4 ? "چوتھا" : n === 5 ? "پانچواں" : n === 6 ? "چھٹا" : "ساتواں"} چکر`,
    corner_badge: "ہر چکر میں پڑھی جائے",
    corner_title: "رکنِ یمانی اور حجرِ اسود کے درمیان",
    translation_label: "ترجمہ",
    post_badge: "اضافی دعا",
    reminder_badge: "طواف مکمل کریں",
    reminder_title: "2 رکعت نماز ادا کریں",
    reminder_body:
      "سات چکر مکمل کرنے کے بعد اگر ممکن ہو تو مقامِ ابراہیم کے پیچھے 2 رکعت نماز ادا کریں۔ اگر رش کی وجہ سے وہاں ممکن نہ ہو تو مسجد میں کہیں بھی 2 رکعت ادا کر کے اپنا طواف مکمل کریں۔",
  },
};

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

function roundSection(dua, lang, labels) {
  const translation = lang === "ur" ? dua.urdu : dua.english;
  const translationClass = lang === "ur" ? "translation urdu" : "translation";
  return `
    <section class="round">
      <header class="round-header">
        <div class="round-badge">${labels.round_of(dua.round)}</div>
        <h2>${labels.round_title(dua.round)}</h2>
      </header>
      <div class="arabic" dir="rtl" lang="ar">
        ${paragraphsToHtml(dua.arabic)}
      </div>
      <div class="${translationClass}" ${lang === "ur" ? 'dir="rtl" lang="ur"' : 'lang="en"'}>
        <div class="translation-label">${labels.translation_label}</div>
        ${paragraphsToHtml(translation)}
      </div>
    </section>
  `;
}

function cornerSection(dua, lang, labels) {
  const translation = lang === "ur" ? dua.urdu : dua.english;
  const translationClass = lang === "ur" ? "translation urdu" : "translation";
  return `
    <section class="round corner">
      <header class="round-header">
        <div class="round-badge corner-badge">${labels.corner_badge}</div>
        <h2>${labels.corner_title}</h2>
      </header>
      <div class="arabic" dir="rtl" lang="ar">
        ${paragraphsToHtml(dua.arabic)}
      </div>
      <div class="${translationClass}" ${lang === "ur" ? 'dir="rtl" lang="ur"' : 'lang="en"'}>
        <div class="translation-label">${labels.translation_label}</div>
        ${paragraphsToHtml(translation)}
      </div>
    </section>
  `;
}

function postSection(dua, lang, labels) {
  const translation = lang === "ur" ? dua.urdu : dua.english;
  const translationClass = lang === "ur" ? "translation urdu" : "translation";
  const title = lang === "ur" ? dua.title_ur : dua.title_en;
  const location = lang === "ur" ? dua.location_ur : dua.location_en;
  return `
    <section class="round post">
      <header class="round-header">
        <div class="round-badge post-badge">${labels.post_badge}</div>
        <h2>${escapeHtml(title)}</h2>
        <p class="post-location">${escapeHtml(location)}</p>
      </header>
      <div class="arabic" dir="rtl" lang="ar">
        ${paragraphsToHtml(dua.arabic)}
      </div>
      <div class="${translationClass}" ${lang === "ur" ? 'dir="rtl" lang="ur"' : 'lang="en"'}>
        <div class="translation-label">${labels.translation_label}</div>
        ${paragraphsToHtml(translation)}
      </div>
    </section>
  `;
}

function reminderSection(lang, labels) {
  const isUrdu = lang === "ur";
  return `
    <section class="round reminder-section" ${isUrdu ? 'dir="rtl" lang="ur"' : 'lang="en"'}>
      <header class="round-header">
        <div class="round-badge reminder-badge-pdf">${labels.reminder_badge}</div>
        <h2>${escapeHtml(labels.reminder_title)}</h2>
      </header>
      <p class="reminder-body-pdf">${escapeHtml(labels.reminder_body)}</p>
    </section>
  `;
}

function buildHtml(lang) {
  const labels = LABELS[lang];
  const isUrdu = lang === "ur";
  const bodyDir = isUrdu ? "rtl" : "ltr";
  const bodyLang = isUrdu ? "ur" : "en";
  const bodyFont = isUrdu
    ? '"Noto Nastaliq Urdu", "Noto Naskh Arabic", serif'
    : '"Noto Serif", "Liberation Serif", serif';

  return `<!DOCTYPE html>
<html lang="${bodyLang}" dir="${bodyDir}">
<head>
  <meta charset="UTF-8" />
  <title>EasyUmrah — Tawaaf Duas (${isUrdu ? "Urdu" : "English"})</title>
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
      font-family: ${bodyFont};
      font-size: ${isUrdu ? "11.5pt" : "11pt"};
      line-height: ${isUrdu ? "2" : "1.55"};
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
      direction: ltr;
    }
    .cover h1 {
      font-size: ${isUrdu ? "32pt" : "34pt"};
      margin: 0 0 1.25rem;
      color: #1c1c1c;
      font-weight: 700;
      letter-spacing: -0.01em;
      line-height: ${isUrdu ? "1.8" : "1.2"};
    }
    .cover .subtitle {
      font-size: 13pt;
      color: #5c5c5c;
      max-width: 130mm;
      line-height: ${isUrdu ? "2" : "1.55"};
    }
    .cover .arabic-cover {
      font-family: "UthmanicHafs", "Noto Naskh Arabic", serif;
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
    .post-badge {
      background: #e9f0fb;
      color: #1e5091;
    }
    .post-location {
      margin: 3mm 0 0;
      font-size: 10pt;
      color: #666;
      font-style: italic;
    }
    .reminder-badge-pdf {
      background: #edf7f2;
      color: #0a7a5c;
    }
    .reminder-section .round-header h2 {
      font-size: ${isUrdu ? "22pt" : "22pt"};
    }
    .reminder-body-pdf {
      font-size: ${isUrdu ? "13pt" : "11.5pt"};
      line-height: ${isUrdu ? "2.2" : "1.7"};
      color: #2a2a2a;
      max-width: 150mm;
      margin: 6mm auto 0;
      background: #faf7ef;
      border-left: 3px solid #0a7a5c;
      padding: 6mm 8mm;
      border-radius: 4px;
      ${isUrdu ? 'font-family: "Noto Nastaliq Urdu", serif; border-left: none; border-right: 3px solid #0a7a5c; text-align: right;' : ''}
    }
    .round-header h2 {
      font-size: ${isUrdu ? "22pt" : "20pt"};
      margin: 0;
      color: #1c1c1c;
      font-weight: 700;
      line-height: ${isUrdu ? "1.6" : "1.2"};
    }
    .arabic {
      font-family: "UthmanicHafs", "Noto Naskh Arabic", serif;
      font-size: 17pt;
      line-height: 2.3;
      text-align: center;
      color: #1c1c1c;
      margin-bottom: 8mm;
    }
    .arabic p { margin: 0 0 5mm; }
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
    .translation.urdu {
      font-family: "Noto Nastaliq Urdu", serif;
      font-size: 13pt;
      line-height: 2.4;
      border-left: none;
      border-right: 3px solid #0a7a5c;
      text-align: right;
    }
    .translation-label {
      font-size: 8.5pt;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #0a7a5c;
      font-weight: 600;
      margin-bottom: 3mm;
    }
    .translation.urdu .translation-label {
      font-family: "Noto Nastaliq Urdu", serif;
      font-size: 10pt;
      letter-spacing: normal;
      text-transform: none;
    }
    .translation p { margin: 0 0 3mm; }
    .translation p:last-child { margin-bottom: 0; }
    .corner .translation {
      border-color: #a26b1a;
      background: #fbf3e2;
    }
    .corner .translation-label { color: #a26b1a; }
  </style>
</head>
<body>
  <div class="cover">
    <div class="brand">${labels.cover_brand}</div>
    <h1>${labels.cover_title}</h1>
    <p class="subtitle">${labels.cover_subtitle}</p>
    <div class="arabic-cover">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
    <div class="footer-note">${labels.cover_footer}</div>
  </div>

  ${roundSection(TAWAAF_DUAS[0], lang, labels)}
  ${POST_TAWAAF_DUAS.map((d) => postSection(d, lang, labels)).join("\n")}
  ${TAWAAF_DUAS.slice(1).map((d) => roundSection(d, lang, labels)).join("\n")}
  ${cornerSection(YEMENI_CORNER_DUA, lang, labels)}
  ${reminderSection(lang, labels)}
</body>
</html>
`;
}

const REPO_ROOT = path.resolve(__dirname, "..");

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

function renderPdf(lang, outFilename) {
  const html = buildHtml(lang);
  const htmlPath = path.join(os.tmpdir(), `easyumrah-print-${lang}-${process.pid}.html`);
  const pdfPath = path.join(REPO_ROOT, outFilename);
  fs.writeFileSync(htmlPath, html, "utf8");
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
}

renderPdf("en", "easyumrah-tawaaf-duas-en.pdf");
renderPdf("ur", "easyumrah-tawaaf-duas-ur.pdf");
