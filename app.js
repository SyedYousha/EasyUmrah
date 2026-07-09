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
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    resetBtn: document.getElementById("reset-btn"),
    duaView: document.getElementById("dua-view"),
    completeView: document.getElementById("complete-view"),
    langBtns: document.querySelectorAll(".lang-btn"),
    themeToggle: document.getElementById("theme-toggle"),
    themeIcon: document.querySelector(".theme-icon")
  };

  function render() {
    const dua = TAWAAF_DUAS[state.round - 1];
    els.currentRound.textContent = state.round;
    els.duaArabic.textContent = dua.arabic || "";

    const translation = state.language === "urdu" ? dua.urdu : dua.english;
    els.duaTranslation.textContent = translation || "";
    els.duaTranslation.classList.toggle("urdu", state.language === "urdu");
    els.duaTranslation.setAttribute("lang", state.language === "urdu" ? "ur" : "en");
    els.duaTranslation.setAttribute(
      "dir",
      state.language === "urdu" ? "rtl" : "ltr"
    );

    els.prevBtn.disabled = state.round === 1;
    els.nextBtn.textContent = state.round === TOTAL_ROUNDS ? "Complete ✓" : "Next →";
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
