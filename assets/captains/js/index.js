    const translations = {
      en: {
        "brand": "Captains Film",
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.aiStudio": "AI Studio",
        "nav.about": "About us",
        "cta.start": "Start a project",
        "common.close": "Close",
        "common.client": "Client",
        "common.category": "Category",
        "common.year": "Year",
        "contact.copy": "Captains Film crafts cinematic stories, commercials, and branded films with a sharp visual voice. نحوّل الأفكار إلى أفلام مؤثرة وواضحة.",
        "contact.email": "Email:",
        "contact.addressLabel": "Address:",
        "contact.address": "7272 Al Thumamah St., Al Sahafah District, Riyadh, Kingdom of Saudi Arabia",
        "contact.phone": "Phone:",
        "contact.talentTitle": "Join the talent network",
        "contact.talentCta": "Open form",
        "contact.whatsapp": "WhatsApp",
        "social.vimeo": "Vimeo",
        "social.linkedin": "LinkedIn",
        "social.instagram": "Instagram",
        "hero.scroll": "Scroll",
        "hero.project": "Project",
        "hero.showProject": "Show project"
      },
      ar: {
        "brand": "كابتينز",
        "nav.home": "الرئيسية",
        "nav.projects": "أعمالنا",
        "nav.aiStudio": "استديو ذكالي",
        "nav.about": "من نحن",
        "cta.start": "ابدأ مشروعًا",
        "common.close": "إغلاق",
        "common.client": "العميل",
        "common.category": "التصنيف",
        "common.year": "السنة",
        "contact.copy": "تقدم كابتينز أفلامًا سينمائية وإعلانات وأفلامًا للعلامات التجارية بصوت بصري واضح ومؤثر.",
        "contact.email": "البريد الإلكتروني:",
        "contact.addressLabel": "العنوان:",
        "contact.address": "7272 شارع الثمامة، حي الصحافة، الرياض، المملكة العربية السعودية",
        "contact.phone": "الهاتف:",
        "contact.talentTitle": "انضم لشبكة المواهب",
        "contact.talentCta": "افتح النموذج",
        "contact.whatsapp": "واتساب",
        "social.vimeo": "فيميو",
        "social.linkedin": "لينكدإن",
        "social.instagram": "إنستغرام",
        "hero.scroll": "مرّر",
        "hero.project": "مشروع",
        "hero.showProject": "عرض المشروع"
      }
    };

    const projects = [
      {
        title: "Captains Film Showreel",
        titleAr: "شوريل كابتينز",
        client: "Captains Film",
        year: "2025",
        category: "Showreel",
        categoryAr: "شوريل",
        videoId: "1192999749",
        videoUrl: "https://vimeo.com/1192999749",
        image: "assets/captains/slides/sl1.jpg",
        description: "A cinematic brand piece built around atmosphere, motion, and a clear narrative arc. Captains Film shapes every frame to feel intentional, bold, and memorable.",
        descriptionAr: "قطعة سينمائية للعلامة مبنية على الإحساس والحركة ومسار سردي واضح. تصنع كابتينز كل إطار ليكون مقصودًا وجريئًا ولا يُنسى."
      },
      {
        title: "Sound Storm 2026",
        titleAr: "ساوند ستورم 2026",
        client: "Captains Film",
        year: "2026",
        category: "Event Film",
        categoryAr: "فيلم فعالية",
        videoId: "1186729154",
        videoUrl: "https://vimeo.com/1186729154",
        image: "assets/captains/slides/sl2.jpg",
        description: "A human-led film language for interviews, stories, and campaigns that need emotional clarity without losing visual punch.",
        descriptionAr: "لغة فيلم إنسانية للمقابلات والقصص والحملات التي تحتاج وضوحًا عاطفيًا من دون فقدان القوة البصرية."
      },
      {
        title: "YO PRO 2025",
        titleAr: "يو برو 2025",
        client: "Captains Film",
        year: "2025",
        category: "Commercial",
        categoryAr: "إعلان",
        videoId: "1186731172",
        videoUrl: "https://vimeo.com/1186731172",
        image: "assets/captains/slides/sl3.jpg",
        description: "Designed for launches and campaign assets, this format combines sharp detail, controlled lighting, and a pace that makes products feel premium.",
        descriptionAr: "مصمم للإطلاقات ومواد الحملات، يجمع بين التفاصيل الحادة والإضاءة المتحكم بها وإيقاع يجعل المنتج يبدو أكثر تميزًا."
      },
      {
        title: "Digital Receipt",
        titleAr: "الإيصال الرقمي",
        client: "Captains Film",
        year: "2025",
        category: "Brand Film",
        categoryAr: "فيلم علامة تجارية",
        videoId: "1186866209",
        videoUrl: "https://vimeo.com/1186866209",
        image: "assets/captains/slides/sl4.jpg",
        description: "Fast, polished campaign films made to travel across Instagram, LinkedIn, Vimeo, and paid media while staying true to the brand.",
        descriptionAr: "أفلام حملات سريعة ومصقولة صُممت للانتشار عبر إنستغرام ولينكدإن وفيميو والإعلانات المدفوعة مع الحفاظ على روح العلامة."
      }
    ];

    const body = document.body;
    const hero = document.querySelector(".hero");
    const currentLayer = document.querySelector(".project-image.current");
    const nextLayer = document.querySelector(".project-image.next");
    const meta = document.querySelector(".project-meta");
    const counter = document.querySelector(".counter");
    const dots = document.querySelector(".dots");
    const progress = document.querySelector(".progress span");
    const cursor = document.querySelector(".cursor");
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const projectModal = document.querySelector("#projectModal");
    const contactModal = document.querySelector("#contactModal");
    let index = 0;
    let busy = false;
    let startY = 0;
    let progressRaf = 0;
    let startedAt = performance.now();
    const duration = 8500;
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let currentLang = localStorage.getItem("captainsLang") || "ar";

    function t(key) {
      return translations[currentLang][key] || translations.en[key] || key;
    }

    function projectTitle(project) {
      return currentLang === "ar" ? project.titleAr : project.title;
    }

    function projectCategory(project) {
      return currentLang === "ar" ? project.categoryAr : project.category;
    }

    function projectDescription(project) {
      return currentLang === "ar" ? project.descriptionAr : project.description;
    }

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.title = currentLang === "ar" ? "كابتينز" : "Captains Film";
      document.querySelectorAll("[data-logo-en][data-logo-ar]").forEach((logo) => {
        logo.src = currentLang === "ar" ? logo.dataset.logoAr : logo.dataset.logoEn;
        logo.alt = currentLang === "ar" ? "كابتينز" : "Captains Film";
      });
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        node.textContent = t(node.dataset.i18n);
      });
      document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
        button.textContent = currentLang === "ar" ? "EN" : "عربي";
        button.setAttribute("aria-label", currentLang === "ar" ? "Switch to English" : "التبديل إلى العربية");
      });
      paintStatic();
      if (projectModal.classList.contains("open")) {
        const project = projects[index];
        projectModal.querySelector("h2").textContent = projectTitle(project);
        projectModal.querySelector("img").alt = projectTitle(project);
        projectModal.querySelector("p").textContent = projectDescription(project);
        projectModal.querySelector("[data-category]").textContent = projectCategory(project);
      }
      [...dots.children].forEach((dot, dotIndex) => {
        dot.setAttribute("aria-label", `${t("hero.showProject")} ${dotIndex + 1}`);
      });
    }

    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });

    function vimeoEmbedUrl(project) {
      return `https://player.vimeo.com/video/${project.videoId}?background=1&autoplay=1&muted=1&loop=1&autopause=0&controls=0&playsinline=1&dnt=1`;
    }

    function setSlideMedia(layer, project, loading = "lazy") {
      layer.style.backgroundImage = `url("${project.image}")`;
      if (!project.videoId) {
        layer.replaceChildren();
        layer.classList.remove("video-ready");
        delete layer.dataset.videoId;
        return;
      }
      if (layer.dataset.videoId === project.videoId) return;
      layer.classList.remove("video-ready");
      layer.dataset.videoId = project.videoId;
      layer.replaceChildren();
      const frame = document.createElement("iframe");
      frame.src = vimeoEmbedUrl(project);
      frame.title = `${project.title} background video`;
      frame.loading = loading;
      frame.allow = "autoplay; fullscreen; picture-in-picture";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.addEventListener("load", () => {
        window.setTimeout(() => {
          if (layer.dataset.videoId === project.videoId) layer.classList.add("video-ready");
        }, 4500);
      }, { once: true });
      layer.append(frame);
    }

    function projectLabel(project) {
      return `${t("hero.project")}: ${projectTitle(project)} | ${project.client} | ${project.year}`;
    }

    function paintStatic() {
      const project = projects[index];
      setSlideMedia(currentLayer, project, "eager");
      meta.textContent = projectLabel(project);
      counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
      [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
      progress.style.transform = "scaleX(0)";
      startedAt = performance.now();
    }

    function buildDots() {
      projects.forEach((_, dotIndex) => {
        const button = document.createElement("button");
        button.className = "dot";
        button.type = "button";
        button.setAttribute("aria-label", `${t("hero.showProject")} ${dotIndex + 1}`);
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          goTo(dotIndex, dotIndex > index ? 1 : -1);
        });
        dots.append(button);
      });
    }

    function goTo(nextIndex, direction = 1) {
      if (busy || nextIndex === index) return;
      busy = true;
      const target = (nextIndex + projects.length) % projects.length;
      const project = projects[target];
      setSlideMedia(nextLayer, project, "eager");
      nextLayer.classList.remove("revealing");
      currentLayer.classList.add("warping");
      requestAnimationFrame(() => nextLayer.classList.add("revealing"));

      setTimeout(() => {
        index = target;
        setSlideMedia(currentLayer, project, "eager");
        currentLayer.classList.remove("warping");
        nextLayer.classList.remove("revealing");
        nextLayer.replaceChildren();
        nextLayer.classList.remove("video-ready");
        delete nextLayer.dataset.videoId;
        meta.textContent = projectLabel(project);
        counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
        [...dots.children].forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
        progress.style.transform = "scaleX(0)";
        startedAt = performance.now();
        setTimeout(() => { busy = false; }, 450);
      }, reducedMotion ? 40 : 980);
    }

    function advance(direction = 1) {
      goTo(index + direction, direction);
    }

    function tick(now) {
      const ratio = Math.min((now - startedAt) / duration, 1);
      progress.style.transform = `scaleX(${ratio})`;
      if (ratio >= .985 && !busy) advance(1);
      progressRaf = requestAnimationFrame(tick);
    }

    function openProject() {
      const project = projects[index];
      projectModal.querySelector("h2").textContent = projectTitle(project);
      projectModal.querySelector("img").src = project.image;
      projectModal.querySelector("img").alt = projectTitle(project);
      projectModal.querySelector("p").textContent = projectDescription(project);
      projectModal.querySelector("[data-client]").textContent = project.client;
      projectModal.querySelector("[data-category]").textContent = projectCategory(project);
      projectModal.querySelector("[data-year]").textContent = project.year;
      openModal(projectModal);
    }

    function openModal(modal) {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      body.classList.add("modal-open");
    }

    function closeModals() {
      document.querySelectorAll(".modal.open").forEach((modal) => {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
      });
      body.classList.remove("modal-open");
    }

    buildDots();
    applyLanguage();
    paintStatic();
    setTimeout(() => body.classList.add("ready"), 80);
    setTimeout(() => {
      body.classList.add("settled");
      document.querySelector(".nav").style.cssText += ";opacity:1;transform:translateY(0);";
      document.querySelector(".content").style.cssText += ";opacity:1;transform:translateY(0);";
      document.querySelector(".intro").style.cssText += ";visibility:hidden;transform:translateY(-100%);";
    }, 2350);
    progressRaf = requestAnimationFrame(tick);

    window.addEventListener("wheel", (event) => {
      if (body.classList.contains("modal-open")) return;
      event.preventDefault();
      if (Math.abs(event.deltaY) < 10) return;
      advance(event.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    hero.addEventListener("touchstart", (event) => {
      startY = event.touches[0].clientY;
    }, { passive: true });

    hero.addEventListener("touchend", (event) => {
      const delta = startY - event.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) advance(delta > 0 ? 1 : -1);
    });

    hero.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openProject();
      if (event.key === "ArrowDown" || event.key === "ArrowRight") advance(1);
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") advance(-1);
    });

    hero.addEventListener("click", (event) => {
      if (event.target.closest(".controls")) return;
      openProject();
    });

    hero.addEventListener("mousemove", (event) => {
      if (matchMedia("(pointer: coarse)").matches) return;
      const rect = hero.getBoundingClientRect();
      cursor.style.opacity = "1";
      cursor.style.transform = `translate3d(${event.clientX - rect.left - 6}px, ${event.clientY - rect.top - 6}px, 0)`;
    });

    hero.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
    });

    hamburger.addEventListener("click", () => {
      const isOpen = body.classList.toggle("menu-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    });

    document.querySelectorAll("[data-contact]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        body.classList.remove("menu-open");
        openModal(contactModal);
      });
    });

    document.querySelectorAll("[data-go]").forEach((link) => {
      link.addEventListener("click", (event) => {
        body.classList.remove("menu-open");
        if (link.dataset.go === "home" || link.dataset.go === "projects") return;
        event.preventDefault();
        if (link.dataset.go === "studio") {
          const studio = projects.findIndex((project) => project.client === "Captains Film");
          if (studio > -1) goTo(studio, 1);
          openModal(contactModal);
        }
      });
    });

    document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", closeModals));
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModals();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModals();
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        currentLang = currentLang === "ar" ? "en" : "ar";
        localStorage.setItem("captainsLang", currentLang);
        applyLanguage();
      });
    });

    window.addEventListener("beforeunload", () => cancelAnimationFrame(progressRaf));
