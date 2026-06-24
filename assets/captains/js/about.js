    const translations = {
      en: {
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.aiStudio": "AI Studio",
        "nav.about": "About us",
        "cta.start": "Start a project",
        "cta.viewProjects": "View projects",
        "common.close": "Close",
        "contact.phone": "Phone:",
        "contact.talentTitle": "Join the talent network",
        "contact.talentCta": "Open form",
        "contact.whatsapp": "WhatsApp",
        "social.vimeo": "Vimeo",
        "social.linkedin": "LinkedIn",
        "social.instagram": "Instagram",
        "about.eyebrow": "Who we are",
        "about.heroTitle": "The one who leads the work defines its impact",
        "about.manifestoCopy": "We believe, as a production company, that real value lies in leadership. Behind every exceptional piece of work is a CAPTAIN who knows the ship and the route - leading the journey with clarity and confidence from the first idea to the final product.",
        "about.manifestoNote": "We're made for it - and we know it best.",
        "about.bioTitle": "The captain sets the route",
        "about.bioIntro": "Leadership is the difference between a finished film and a film that arrives with purpose.",
        "about.quoteOne": "Great work comes from a",
        "about.quoteMark": "great captain.",
        "about.bioCopyOne": "We believe, as a production company, that real value lies in leadership. Behind every exceptional piece of work is a CAPTAIN who knows the ship and the route.",
        "about.bioCopyTwo": "That captain leads the journey with clarity and confidence from the first idea to the final product. We're made for it - and we know it best.",
        "about.year": "2025",
        "about.clientsTitle": "Featured clients",
        "about.clientsCopy": "Selected partners and organizations from our portfolio, shown with the actual marks from the Captains client wall.",
        "about.ctaTitle": "Lets discuss your next project",
        "about.ctaCopy": "Bring the idea, the deadline, or the challenge. We will help shape the film and lead it to delivery."
      },
      ar: {
        "nav.home": "الرئيسية",
        "nav.projects": "أعمالنا",
        "nav.aiStudio": "استديو ذكالي",
        "nav.about": "من نحن",
        "cta.start": "تواصل معنا",
        "cta.viewProjects": "عرض أعمالنا",
        "common.close": "إغلاق",
        "contact.phone": "الهاتف:",
        "contact.talentTitle": "انضم لشبكة المواهب",
        "contact.talentCta": "افتح النموذج",
        "contact.whatsapp": "واتساب",
        "social.vimeo": "فيميو",
        "social.linkedin": "لينكدإن",
        "social.instagram": "إنستغرام",
        "about.eyebrow": "قصتنا",
        "about.heroTitle": "حنا لها.. وأدرى بها.",
        "about.manifestoCopy": "يقولون الخيل من خيالها، وحنا في كابتينز نقول: الإبداع من قبطانه.\nنؤمن كشركة إنتاج أن القيمة الحقيقية تكمن في القيادة؛ وأن كل عمل استثنائي وراه كابتن دِبره، وعينه على الدرب وتفاصيل السفينة، يقود الرحلة بوضوح وثقة من أول فكرة إلى المنتج النهائي.",
        "about.manifestoNote": "وراء كل فيلم يترك أثر... فيه كابتن يقوده",
        "about.bioTitle": "الكابتن يحدد الوجهة",
        "about.bioIntro": "الفكرة مهمة، لكن اللي يقودها أهم.",
        "about.quoteOne": "من أول فكرة",
        "about.quoteMark": "إلى آخر فريم.",
        "about.bioCopyOne": "الشغل الكبير يبدأ بقيادة واضحة. نؤمن أن النجاح يبدأ من الكابتن اللي يعرف وجهته.",
        "about.bioCopyTwo": "ووراء كل فيلم يترك أثر... فيه كابتن يقوده. من أول فكرة... إلى آخر فريم. هذا اللي نعرف نسويه.",
        "about.year": "2025",
        "about.clientsTitle": "شركاء الرحلة",
        "about.clientsCopy": "نفخر بالعمل مع جهات وعلامات تركت أثرها في السوق.",
        "about.ctaTitle": "عندك فكرة؟",
        "about.ctaCopy": "شاركنا فكرتك، والباقي علينا."
      }
    };

    let currentLang = localStorage.getItem("captainsLang") || "ar";

    function t(key) {
      if (Object.prototype.hasOwnProperty.call(translations[currentLang], key)) return translations[currentLang][key];
      return translations.en[key] || key;
    }

    function applyLanguage() {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      
      const titleText = currentLang === "ar" ? "من نحن | كابتينز" : "About us | Captains Film";
      document.title = titleText;
      
      document.querySelectorAll("[data-logo-en][data-logo-ar]").forEach((logo) => {
        logo.src = currentLang === "ar" ? logo.dataset.logoAr : logo.dataset.logoEn;
        logo.alt = currentLang === "ar" ? "كابتينز" : "Captains Film";
      });
      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const value = t(node.dataset.i18n);
        node.textContent = value;
        node.hidden = value === "";
      });
      document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
        button.textContent = currentLang === "ar" ? "EN" : "عربي";
        button.setAttribute("aria-label", currentLang === "ar" ? "Switch to English" : "التبديل إلى العربية");
      });
    }

    const body = document.body;
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const contactModal = document.querySelector("#contactModal");

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

    hamburger.addEventListener("click", () => {
      const isOpen = body.classList.toggle("menu-open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
    });

    document.querySelectorAll("[data-contact]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        body.classList.remove("menu-open");
        openModal(contactModal);
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

    // INTERACTIVE SPOTLIGHT LIGHT TRACKER
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    });

    // SCROLL REVEAL INTERSECTION OBSERVER
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".scroll-reveal").forEach(el => revealObserver.observe(el));

    // LANGUAGE TOGGLE EVENT
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        localStorage.setItem("captainsLang", currentLang);
        applyLanguage();
      });
    });

    // INITIALIZATION
    applyLanguage();
    setTimeout(() => body.classList.add("ready"), 100);
