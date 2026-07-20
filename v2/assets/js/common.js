/* =========================================================
   CAPTAINS FILM — v2 shared runtime
   Language (EN/AR + RTL/LTR), nav, footer, modals, reveals.
   Exposes window.CaptainsV2 for page scripts.
   ========================================================= */
(function () {
  "use strict";

  const SHARED = {
    en: {
      "nav.home": "Home",
      "nav.projects": "Work",
      "nav.aiStudio": "AI Studio",
      "nav.about": "Studio",
      "cta.start": "Start a project",
      "cta.viewWork": "View work",
      "cta.viewProject": "View project",
      "common.close": "Close",
      "common.client": "Client",
      "common.category": "Category",
      "common.tags": "Tags",
      "common.year": "Year",
      "contact.title": "Start a project",
      "contact.copy": "Bring the idea, the deadline, or the challenge. Captains Film shapes cinematic stories with a sharp visual voice and leads them to delivery.",
      "contact.email": "Email",
      "contact.addressLabel": "Studio",
      "contact.address": "7272 Al Thumamah St., Al Sahafah District, Riyadh, Saudi Arabia",
      "contact.phone": "Phone",
      "contact.talentTitle": "Join the talent network",
      "contact.talentCta": "Open form",
      "contact.whatsapp": "WhatsApp",
      "social.vimeo": "Vimeo",
      "social.linkedin": "LinkedIn",
      "social.instagram": "Instagram",
      "footer.cta": "Let's make something",
      "footer.ctaAccent": "cinematic.",
      "footer.tag": "A cinematic production house in Riyadh crafting TVCs, documentaries, post-production and AI-driven films for leading brands.",
      "footer.explore": "Explore",
      "footer.connect": "Connect",
      "footer.rights": "© 2026 Captains Film. All rights reserved.",
      "footer.based": "Riyadh, Saudi Arabia"
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.projects": "أعمالنا",
      "nav.aiStudio": "استديو ذكالي",
      "nav.about": "من نحن",
      "cta.start": "تواصل معنا",
      "cta.viewWork": "شاهد أعمالنا",
      "cta.viewProject": "عرض العمل",
      "common.close": "إغلاق",
      "common.client": "العميل",
      "common.category": "التصنيف",
      "common.tags": "الوسوم",
      "common.year": "السنة",
      "contact.title": "تواصل معنا",
      "contact.copy": "شاركنا الفكرة أو الموعد أو التحدي. تصنع كابتينز قصصًا سينمائية بصوت بصري واضح وتقودها حتى التسليم.",
      "contact.email": "البريد",
      "contact.addressLabel": "الاستديو",
      "contact.address": "7272 شارع الثمامة، حي الصحافة، الرياض، المملكة العربية السعودية",
      "contact.phone": "الهاتف",
      "contact.talentTitle": "انضم لشبكة المواهب",
      "contact.talentCta": "افتح النموذج",
      "contact.whatsapp": "واتساب",
      "social.vimeo": "فيميو",
      "social.linkedin": "لينكدإن",
      "social.instagram": "إنستغرام",
      "footer.cta": "نصنع شيئًا",
      "footer.ctaAccent": "سينمائيًا.",
      "footer.tag": "دار إنتاج سينمائي في الرياض تصنع الإعلانات والأفلام الوثائقية وأعمال ما بعد الإنتاج وأفلام الذكاء الاصطناعي لأبرز العلامات.",
      "footer.explore": "استكشف",
      "footer.connect": "تواصل",
      "footer.rights": "© 2026 كابتينز. جميع الحقوق محفوظة.",
      "footer.based": "الرياض، المملكة العربية السعودية"
    }
  };

  const state = {
    lang: localStorage.getItem("captainsLang") || "ar",
    dict: {},
    listeners: []
  };

  function mergeDict(pageDict) {
    ["en", "ar"].forEach((l) => {
      state.dict[l] = Object.assign({}, SHARED[l], (pageDict && pageDict[l]) || {});
    });
  }
  mergeDict(null);

  function t(key) {
    const d = state.dict[state.lang] || {};
    if (Object.prototype.hasOwnProperty.call(d, key)) return d[key];
    return (state.dict.en && state.dict.en[key]) || key;
  }

  function applyLanguage() {
    const lang = state.lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-logo-en][data-logo-ar]").forEach((logo) => {
      logo.src = lang === "ar" ? logo.dataset.logoAr : logo.dataset.logoEn;
      logo.alt = lang === "ar" ? "كابتينز" : "Captains Film";
    });
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((node) => {
      node.innerHTML = t(node.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = lang === "ar" ? "EN" : "عربي";
      btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    });
    state.listeners.forEach((cb) => { try { cb(lang); } catch (e) {} });
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem("captainsLang", lang);
    applyLanguage();
  }

  function toggleLang() { setLang(state.lang === "ar" ? "en" : "ar"); }

  /* ---------- modals ---------- */
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }
  function closeModals() {
    document.querySelectorAll(".modal.open").forEach((modal) => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      const player = modal.querySelector(".modal-player");
      if (player) player.replaceChildren();
    });
    document.body.classList.remove("modal-open");
  }

  /* ---------- reveal on scroll ---------- */
  function initReveals() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- wiring ---------- */
  function wire() {
    const body = document.body;
    const header = document.querySelector(".site-header");

    // scrolled header
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // hamburger / mobile menu
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        const open = body.classList.toggle("menu-open");
        hamburger.setAttribute("aria-expanded", String(open));
      });
    }
    document.querySelectorAll(".mobile-menu a").forEach((a) => {
      a.addEventListener("click", () => body.classList.remove("menu-open"));
    });

    // contact triggers
    const contactModal = document.querySelector("#contactModal");
    document.querySelectorAll("[data-contact]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.remove("menu-open");
        openModal(contactModal);
      });
    });

    // close handlers
    document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", closeModals));
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => { if (e.target === modal) closeModals(); });
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModals(); });

    // language toggles
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", (e) => { e.preventDefault(); toggleLang(); });
    });

    applyLanguage();
    initReveals();
    setTimeout(() => body.classList.add("ready"), 60);
  }

  window.CaptainsV2 = {
    get lang() { return state.lang; },
    t: t,
    mergeDict: function (d) { mergeDict(d); },
    onLanguageChange: function (cb) { if (typeof cb === "function") state.listeners.push(cb); },
    applyLanguage: applyLanguage,
    openModal: openModal,
    closeModals: closeModals,
    ready: function (cb) {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", cb);
      else cb();
    }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
})();
