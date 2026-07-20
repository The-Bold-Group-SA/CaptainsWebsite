/* =========================================================
   CAPTAINS FILM — v2 homepage
   ========================================================= */
(function () {
  "use strict";
  const CV = window.CaptainsV2;

  CV.mergeDict({
    en: {
      "home.eyebrow": "Cinematic production house — Riyadh",
      "home.heroLine1": "Captains",
      "home.heroLine2": "Film",
      "home.heroTag": "We turn ideas into films that move people — from the first frame to the final cut. Bold, cinematic, and led with intent.",
      "home.scroll": "Scroll",
      "home.aboutEyebrow": "Who we are",
      "home.statementLead": "A full-service <em>cinematic</em> production house.",
      "home.statement1": "Captains Film is a production house in Riyadh crafting TVCs, documentaries, post-production and AI-driven films for leading brands. Every frame is shaped to feel intentional, bold, and memorable.",
      "home.statement2": "We believe real value lies in leadership — behind every exceptional piece of work is a captain who knows the ship and the route, leading the journey with clarity from the first idea to the final product.",
      "home.stat1Num": "50+", "home.stat1Label": "Films delivered",
      "home.stat2Num": "40+", "home.stat2Label": "Brands & partners",
      "home.stat3Num": "5", "home.stat3Label": "Disciplines",
      "home.workTitle": "Featured work",
      "home.capsTitle": "What we do",
      "home.cap1Title": "TVC & Commercials", "home.cap1Copy": "Launch films and campaign assets with sharp detail, controlled lighting, and a premium pace.",
      "home.cap2Title": "Documentary", "home.cap2Copy": "Human-led film language for interviews, stories, and campaigns that need emotional clarity.",
      "home.cap3Title": "Post-production", "home.cap3Copy": "Editing, sound, color, motion, and VFX finishing that gives every film its final polish.",
      "home.cap4Title": "AI / Animation", "home.cap4Copy": "Generative films and AI post-production shaped with real production judgment.",
      "home.cap5Title": "Events & Coverage", "home.cap5Copy": "Live event films and coverage for launches, conferences, and brand experiences.",
      "home.clientsTitle": "Trusted by"
    },
    ar: {
      "home.eyebrow": "دار إنتاج سينمائي — الرياض",
      "home.heroLine1": "كابتينز",
      "home.heroLine2": "فيلم",
      "home.heroTag": "نحوّل الأفكار إلى أفلام تُحرّك المشاعر — من أول فريم إلى آخر لقطة. جريئة، سينمائية، وبقيادة واضحة.",
      "home.scroll": "مرّر",
      "home.aboutEyebrow": "من نحن",
      "home.statementLead": "دار إنتاج <em>سينمائي</em> متكاملة الخدمات.",
      "home.statement1": "كابتينز دار إنتاج في الرياض تصنع الإعلانات والأفلام الوثائقية وأعمال ما بعد الإنتاج وأفلام الذكاء الاصطناعي لأبرز العلامات. كل فريم مصنوع ليكون مقصودًا وجريئًا ولا يُنسى.",
      "home.statement2": "نؤمن أن القيمة الحقيقية تكمن في القيادة — وراء كل عمل استثنائي كابتن يعرف السفينة والوجهة، يقود الرحلة بوضوح من أول فكرة إلى المنتج النهائي.",
      "home.stat1Num": "+50", "home.stat1Label": "فيلم مُنتَج",
      "home.stat2Num": "+40", "home.stat2Label": "علامة وشريك",
      "home.stat3Num": "5", "home.stat3Label": "تخصصات",
      "home.workTitle": "أعمال مختارة",
      "home.capsTitle": "ماذا نقدّم",
      "home.cap1Title": "الإعلانات", "home.cap1Copy": "أفلام إطلاق ومواد حملات بتفاصيل حادة وإضاءة متحكم بها وإيقاع مميز.",
      "home.cap2Title": "الأفلام الوثائقية", "home.cap2Copy": "لغة فيلم إنسانية للمقابلات والقصص والحملات التي تحتاج وضوحًا عاطفيًا.",
      "home.cap3Title": "ما بعد الإنتاج", "home.cap3Copy": "مونتاج وصوت وتلوين وموشن ومؤثرات بصرية تمنح كل فيلم لمسته الأخيرة.",
      "home.cap4Title": "الذكاء الاصطناعي / الأنميشن", "home.cap4Copy": "أفلام توليدية وما بعد إنتاج بالذكاء الاصطناعي بعقلية إنتاجية حقيقية.",
      "home.cap5Title": "الفعاليات والتغطيات", "home.cap5Copy": "أفلام فعاليات وتغطيات للإطلاقات والمؤتمرات وتجارب العلامات.",
      "home.clientsTitle": "نفخر بثقة"
    }
  });

  // Featured projects (the showreel set from the current site)
  const featured = [
    { title: "Captains Film Showreel", titleAr: "شوريل كابتينز", client: "Captains Film", year: "2025",
      category: "Showreel", categoryAr: "شوريل", videoId: "1192999749", image: "../assets/captains/slides/sl1.jpg",
      desc: "A cinematic brand piece built around atmosphere, motion, and a clear narrative arc.",
      descAr: "قطعة سينمائية للعلامة مبنية على الإحساس والحركة ومسار سردي واضح." },
    { title: "Sound Storm", titleAr: "ساوند ستورم", client: "MDLBEAST x BOLD", year: "2026",
      category: "Event Film", categoryAr: "فيلم فعالية", videoId: "1186729154", image: "../assets/captains/slides/sl2.jpg",
      desc: "A human-led film language for stories and campaigns that need emotional clarity without losing visual punch.",
      descAr: "لغة فيلم إنسانية للقصص والحملات التي تحتاج وضوحًا عاطفيًا من دون فقدان القوة البصرية." },
    { title: "YO PRO", titleAr: "يو برو", client: "YOUPRO x BOLD", year: "2025",
      category: "Commercial", categoryAr: "إعلان", videoId: "1186731172", image: "../assets/captains/slides/sl3.jpg",
      desc: "Sharp detail, controlled lighting, and a pace that makes products feel premium.",
      descAr: "تفاصيل حادة وإضاءة متحكم بها وإيقاع يجعل المنتج يبدو أكثر تميزًا." },
    { title: "Digital Receipt", titleAr: "الإيصال الرقمي", client: "Saudi Payments", year: "2025",
      category: "Brand Film", categoryAr: "فيلم علامة", videoId: "1186866209", image: "../assets/captains/slides/sl4.jpg",
      desc: "Fast, polished campaign films made to travel across social and paid media while staying true to the brand.",
      descAr: "أفلام حملات سريعة ومصقولة صُممت للانتشار عبر السوشال والإعلانات مع الحفاظ على روح العلامة." }
  ];

  const clients = ["MDLBEAST", "HYUNDAI", "STC", "NEOM", "ALMARAI", "RENAULT", "DGDA", "RCU", "LEAN", "OSUS", "QIDDIYA", "WEBEDIA"];

  const workList = document.getElementById("workList");
  const clientTrack = document.getElementById("clientTrack");
  const projectModal = document.getElementById("projectModal");
  const preview = (function () {
    const el = document.createElement("div");
    el.className = "work-preview";
    document.body.appendChild(el);
    return el;
  })();

  function fTitle(p) { return CV.lang === "ar" ? p.titleAr : p.title; }
  function fCategory(p) { return CV.lang === "ar" ? p.categoryAr : p.category; }
  function fDesc(p) { return CV.lang === "ar" ? p.descAr : p.desc; }

  function buildWork() {
    workList.replaceChildren();
    featured.forEach((p, i) => {
      const row = document.createElement("div");
      row.className = "work-row";
      row.setAttribute("role", "button");
      row.tabIndex = 0;
      row.innerHTML =
        '<span class="work-num">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<div class="work-main">' +
          '<div class="work-title"></div>' +
          '<div class="work-meta"><span class="wm-client"></span><span class="dot">/</span><span class="wm-cat"></span><span class="dot">/</span><span class="wm-year"></span></div>' +
        '</div>' +
        '<span class="work-cta"><span data-i18n="cta.viewProject">View project</span> <span class="arrow">→</span></span>';
      row.querySelector(".work-title").textContent = fTitle(p);
      row.querySelector(".wm-client").textContent = p.client;
      row.querySelector(".wm-cat").textContent = fCategory(p);
      row.querySelector(".wm-year").textContent = p.year;
      row.querySelector(".work-cta [data-i18n]").textContent = CV.t("cta.viewProject");

      row.addEventListener("click", () => openProject(p));
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(p); } });
      row.addEventListener("mouseenter", () => { preview.style.backgroundImage = 'url("' + p.image + '")'; preview.classList.add("show"); });
      row.addEventListener("mouseleave", () => preview.classList.remove("show"));
      workList.appendChild(row);
    });
  }

  window.addEventListener("mousemove", (e) => {
    if (!preview.classList.contains("show")) return;
    preview.style.left = e.clientX + "px";
    preview.style.top = e.clientY + "px";
  }, { passive: true });

  function buildClients() {
    clientTrack.replaceChildren();
    const set = clients.concat(clients); // duplicate for seamless loop
    set.forEach((c) => {
      const span = document.createElement("span");
      span.className = "client-item";
      span.textContent = c;
      clientTrack.appendChild(span);
    });
  }

  function openProject(p) {
    projectModal.querySelector("[data-pm-title]").textContent = fTitle(p);
    projectModal.querySelector("[data-pm-desc]").textContent = fDesc(p);
    projectModal.querySelector("[data-pm-client]").textContent = p.client;
    projectModal.querySelector("[data-pm-category]").textContent = fCategory(p);
    projectModal.querySelector("[data-pm-year]").textContent = p.year;
    const player = projectModal.querySelector("[data-pm-player]");
    const frame = document.createElement("iframe");
    frame.src = "https://player.vimeo.com/video/" + p.videoId + "?title=0&byline=0&portrait=0&dnt=1";
    frame.title = p.title;
    frame.allow = "autoplay; fullscreen; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    player.replaceChildren(frame);
    CV.openModal(projectModal);
  }

  // Hero background showreel (respect reduced motion)
  function initHeroVideo() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const media = document.getElementById("heroMedia");
    const frame = document.createElement("iframe");
    frame.src = "https://player.vimeo.com/video/1192999749?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0&playsinline=1&dnt=1";
    frame.title = "Captains Film showreel";
    frame.allow = "autoplay; fullscreen; picture-in-picture";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.addEventListener("load", () => setTimeout(() => media.classList.add("ready"), 800), { once: true });
    media.appendChild(frame);
  }

  CV.onLanguageChange(() => { buildWork(); });

  CV.ready(function () {
    buildWork();
    buildClients();
    initHeroVideo();
  });
})();
