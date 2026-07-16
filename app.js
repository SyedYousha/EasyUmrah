(function () {
  const TOTAL_ROUNDS = 7;

  const state = {
    round: 1,
    language: "english"
  };

  const els = {
    currentRound: document.getElementById("current-round"),
    duaArabic: document.getElementById("dua-arabic"),
    duaTranslation: document.getElementById("dua-translation"),
    cornerArabic: document.getElementById("corner-arabic"),
    cornerTranslation: document.getElementById("corner-translation"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    resetBtn: document.getElementById("reset-btn"),
    duaView: document.getElementById("dua-view"),
    completeView: document.getElementById("complete-view"),
    langBtns: document.querySelectorAll(".lang-btn"),
    themeToggle: document.getElementById("theme-toggle"),
    themeIcon: document.querySelector(".theme-icon"),
    pdfLink: document.getElementById("pdf-link"),
    postTawaafContainer: document.getElementById("post-tawaaf-container"),
    postTawaafHeading: document.getElementById("post-tawaaf-heading"),
    postTawaafIntro: document.getElementById("post-tawaaf-intro"),
    postTawaafList: document.getElementById("post-tawaaf-list"),
    completeTitle: document.getElementById("complete-title"),
    completeMessage: document.getElementById("complete-message"),
    reminderBadge: document.getElementById("reminder-badge"),
    reminderHeading: document.getElementById("reminder-heading"),
    reminderBody: document.getElementById("reminder-body")
  };

  const POST_LABELS = {
    english: {
      heading: "Additional Duas",
      intro: "Duas that can be recited at these specific places, if the opportunity arises."
    },
    urdu: {
      heading: "اضافی دعائیں",
      intro: "اگر موقع ملے تو یہ دعائیں مخصوص مقامات پر پڑھی جا سکتی ہیں۔"
    }
  };

  const COMPLETE_LABELS = {
    english: {
      title: "Tawaaf Complete",
      message: "May Allah accept your worship.",
      reminderBadge: "Next step",
      reminderHeading: "Pray 2 Rakaat",
      reminderBody: "If possible, pray 2 rakaat behind Maqam-e-Ibrahim to complete your tawaaf. If it's too crowded, pray 2 rakaat anywhere in the Masjid.",
      resetBtn: "Start Again"
    },
    urdu: {
      title: "طواف مکمل",
      message: "اللہ آپ کی عبادت قبول فرمائے۔",
      reminderBadge: "اگلا مرحلہ",
      reminderHeading: "2 رکعت نماز ادا کریں",
      reminderBody: "اگر ممکن ہو تو مقامِ ابراہیم کے پیچھے 2 رکعت نماز ادا کریں۔ اگر رش کی وجہ سے وہاں ممکن نہ ہو تو مسجد میں کہیں بھی 2 رکعت ادا کر کے اپنا طواف مکمل کریں۔",
      resetBtn: "دوبارہ شروع کریں"
    }
  };

  const PDF_BY_LANG = {
    english: "easyumrah-tawaaf-duas-en.pdf",
    urdu: "easyumrah-tawaaf-duas-ur.pdf"
  };

  function renderParagraphs(container, text) {
    container.innerHTML = "";
    if (!text) return;
    const paragraphs = text
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    paragraphs.forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      container.appendChild(p);
    });
  }

  function applyTranslationLang(el) {
    el.classList.toggle("urdu", state.language === "urdu");
    el.setAttribute("lang", state.language === "urdu" ? "ur" : "en");
    el.setAttribute("dir", state.language === "urdu" ? "rtl" : "ltr");
  }

  function render() {
    const dua = TAWAAF_DUAS[state.round - 1];
    els.currentRound.textContent = state.round;
    renderParagraphs(els.duaArabic, dua.arabic);

    const translation = state.language === "urdu" ? dua.urdu : dua.english;
    renderParagraphs(els.duaTranslation, translation);
    applyTranslationLang(els.duaTranslation);

    renderParagraphs(els.cornerArabic, YEMENI_CORNER_DUA.arabic);
    const cornerTranslation =
      state.language === "urdu" ? YEMENI_CORNER_DUA.urdu : YEMENI_CORNER_DUA.english;
    renderParagraphs(els.cornerTranslation, cornerTranslation);
    applyTranslationLang(els.cornerTranslation);

    renderPostTawaaf();

    els.prevBtn.disabled = state.round === 1;
    els.nextBtn.textContent = state.round === TOTAL_ROUNDS ? "Complete ✓" : "Next →";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPostTawaaf() {
    if (!els.postTawaafList || typeof POST_TAWAAF_DUAS === "undefined") return;

    // Only show these on Round 1
    if (state.round !== 1) {
      els.postTawaafContainer.classList.add("hidden");
      return;
    }
    els.postTawaafContainer.classList.remove("hidden");

    const isUrdu = state.language === "urdu";
    const labels = POST_LABELS[state.language] || POST_LABELS.english;
    els.postTawaafHeading.textContent = labels.heading;
    els.postTawaafIntro.textContent = labels.intro;
    els.postTawaafList.innerHTML = "";

    POST_TAWAAF_DUAS.forEach((dua) => {
      const article = document.createElement("article");
      article.className = "post-tawaaf-dua";

      const title = document.createElement("h4");
      title.className = "post-tawaaf-title";
      title.textContent = isUrdu ? dua.title_ur : dua.title_en;
      if (isUrdu) {
        title.setAttribute("dir", "rtl");
        title.setAttribute("lang", "ur");
      }
      article.appendChild(title);

      const location = document.createElement("p");
      location.className = "post-tawaaf-location";
      location.textContent = isUrdu ? dua.location_ur : dua.location_en;
      if (isUrdu) {
        location.setAttribute("dir", "rtl");
        location.setAttribute("lang", "ur");
      }
      article.appendChild(location);

      const arabic = document.createElement("div");
      arabic.className = "dua-arabic post-arabic";
      arabic.setAttribute("dir", "rtl");
      arabic.setAttribute("lang", "ar");
      article.appendChild(arabic);
      renderParagraphs(arabic, dua.arabic);

      const translation = document.createElement("div");
      translation.className = "dua-translation post-translation";
      article.appendChild(translation);
      renderParagraphs(translation, isUrdu ? dua.urdu : dua.english);
      translation.classList.toggle("urdu", isUrdu);
      translation.setAttribute("lang", isUrdu ? "ur" : "en");
      translation.setAttribute("dir", isUrdu ? "rtl" : "ltr");

      els.postTawaafList.appendChild(article);
    });
  }

  function goNext() {
    if (state.round < TOTAL_ROUNDS) {
      state.round += 1;
      render();
    } else {
      showComplete();
    }
  }

  function goPrev() {
    if (state.round > 1) {
      state.round -= 1;
      render();
    }
  }

  function showComplete() {
    els.duaView.classList.add("hidden");
    els.completeView.classList.remove("hidden");
  }

  function reset() {
    state.round = 1;
    els.completeView.classList.add("hidden");
    els.duaView.classList.remove("hidden");
    render();
  }

  function renderCompleteLabels() {
    const labels = COMPLETE_LABELS[state.language] || COMPLETE_LABELS.english;
    const isUrdu = state.language === "urdu";
    els.completeTitle.textContent = labels.title;
    els.completeMessage.textContent = labels.message;
    els.reminderBadge.textContent = labels.reminderBadge;
    els.reminderHeading.textContent = labels.reminderHeading;
    els.reminderBody.textContent = labels.reminderBody;
    els.resetBtn.textContent = labels.resetBtn;
    // RTL for Urdu
    [els.completeTitle, els.completeMessage, els.reminderHeading, els.reminderBody, els.reminderBadge].forEach((el) => {
      if (!el) return;
      el.setAttribute("dir", isUrdu ? "rtl" : "ltr");
      el.setAttribute("lang", isUrdu ? "ur" : "en");
      el.classList.toggle("urdu-text", isUrdu);
    });
  }

  function setLanguage(lang) {
    state.language = lang;
    els.langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    if (els.pdfLink && PDF_BY_LANG[lang]) {
      els.pdfLink.href = PDF_BY_LANG[lang];
    }
    render();
    renderCompleteLabels();
  }

  function initTheme() {
    const stored = localStorage.getItem("easyumrah-theme");
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
    }
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const explicit = document.documentElement.getAttribute("data-theme");
    const isDark =
      explicit === "dark" ||
      (!explicit && window.matchMedia("(prefers-color-scheme: dark)").matches);
    els.themeIcon.textContent = isDark ? "☀️" : "🌙";
  }

  function toggleTheme() {
    const explicit = document.documentElement.getAttribute("data-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentlyDark = explicit === "dark" || (!explicit && systemDark);
    const next = currentlyDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("easyumrah-theme", next);
    updateThemeIcon();
  }

  els.nextBtn.addEventListener("click", goNext);
  els.prevBtn.addEventListener("click", goPrev);
  els.resetBtn.addEventListener("click", reset);
  els.themeToggle.addEventListener("click", toggleTheme);
  els.langBtns.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  initTheme();
  render();
  renderCompleteLabels();
})();
