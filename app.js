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
    themeIcon: document.querySelector(".theme-icon")
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

    els.prevBtn.disabled = state.round === 1;
    els.nextBtn.textContent = state.round === TOTAL_ROUNDS ? "Complete ✓" : "Next →";
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  function setLanguage(lang) {
    state.language = lang;
    els.langBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    render();
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
})();
