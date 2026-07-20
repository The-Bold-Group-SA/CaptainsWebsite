/* =========================================================
   CAPTAINS FILM — v2 Work / Projects
   ========================================================= */
(function () {
  "use strict";
  const CV = window.CaptainsV2;

  CV.mergeDict({
    en: {
      "work.eyebrow": "Selected work",
      "work.title": "Work",
      "work.lead": "A selection of films across TVCs, documentaries, post-production, AI and live events — for brands that want work with impact.",
      "filter.all": "All",
      "tag.TVC": "TVC",
      "tag.Documentary": "Documentary",
      "tag.post-production": "Post-production",
      "tag.AI/Animation": "AI / Animation",
      "filter.Events & Coverage": "Events & Coverage",
      "projects.empty": "No work found for this filter.",
      "projects.tagWork": "work for"
    },
    ar: {
      "work.eyebrow": "أعمال مختارة",
      "work.title": "أعمالنا",
      "work.lead": "مجموعة مختارة من الأفلام بين الإعلانات والوثائقيات وما بعد الإنتاج والذكاء الاصطناعي والفعاليات — لعلامات تريد عملاً يترك أثرًا.",
      "filter.all": "الكل",
      "tag.TVC": "الإعلانات",
      "tag.Documentary": "الوثائقيات",
      "tag.post-production": "ما بعد الإنتاج",
      "tag.AI/Animation": "ذكاء اصطناعي / أنميشن",
      "filter.Events & Coverage": "الفعاليات والتغطيات",
      "projects.empty": "لا توجد أعمال ضمن هذا التصنيف.",
      "projects.tagWork": "لصالح"
    }
  });

  const projects = [
    { title: "Bakery oven", tags: ["Documentary"], client: "DGDA x BOLD", year: "2026", duration: "01:13", videoId: "1200439319", image: "../assets/captains/projects/p44.jpg", description: "Documentary work for DGDA x BOLD." },
    { title: "F1 Case Study", tags: ["post-production"], client: "STC x DREAM BOX", year: "2026", duration: "02:09", videoId: "1200452146", image: "../assets/captains/projects/p19.jpg", description: "post-production work for STC x DREAM BOX." },
    { title: "SoundStorm FlyThrough", tags: ["TVC", "post-production", "AI/Animation"], client: "MDLBEAST x BOLD", year: "2025", duration: "00:58", videoId: "1200401658", image: "../assets/captains/projects/p43.jpg", description: "TVC / post-production / AI/Animation work for MDLBEAST x BOLD." },
    { title: "Your Way | TVC 3", tags: ["TVC", "post-production"], client: "HYUNDAI x TheMob x Totales", year: "2025", duration: "00:46", videoId: "1200171419", image: "../assets/captains/projects/p01.jpg", description: "TVC / post-production work for HYUNDAI x TheMob x Totales." },
    { title: "Your Way | TVC 2", tags: ["TVC", "post-production"], client: "HYUNDAI x TheMob x Totales", year: "2025", duration: "00:49", videoId: "1200171420", image: "../assets/captains/projects/p02.jpg", description: "TVC / post-production work for HYUNDAI x TheMob x Totales." },
    { title: "Your Way | TVC 1", tags: ["TVC", "post-production"], client: "HYUNDAI x TheMob x Totales", year: "2025", duration: "00:45", videoId: "1200171418", image: "../assets/captains/projects/p03.jpg", description: "TVC / post-production work for HYUNDAI x TheMob x Totales." },
    { title: "Founding Day", tags: ["post-production", "AI/Animation"], client: "WEBEDIA x DAN", year: "2025", duration: "00:58", videoId: "1190139775", image: "../assets/captains/projects/p04.jpg", description: "post-production / AI/Animation work for WEBEDIA x DAN." },
    { title: "Naqwa Barramundi", tags: ["AI/Animation", "post-production"], client: "WEBEDIA x NAQWA", year: "2025", duration: "03:00", videoId: "1186869691", image: "../assets/captains/projects/p05.jpg", description: "AI/Animation / post-production work for WEBEDIA x NAQWA." },
    { title: "Ripple Event", tags: ["post-production", "AI/Animation"], client: "ZID x MILLIMETER", year: "2025", duration: "43:45", videoId: "1186855541", image: "../assets/captains/projects/p06.jpg", description: "post-production / AI/Animation work for ZID x MILLIMETER." },
    { title: "The Promised Land", tags: ["post-production", "AI/Animation"], client: "BOLD Creative", year: "2025", duration: "02:05", videoId: "1190876263", image: "../assets/captains/projects/p07.jpg", description: "post-production / AI/Animation work for BOLD Creative." },
    { title: "Hold What Matters", tags: ["post-production", "AI/Animation"], client: "TEEB x BOLD Creative", year: "2025", duration: "00:49", videoId: "1200146976", image: "../assets/captains/projects/p08.jpg", description: "post-production / AI/Animation work for TEEB x BOLD Creative." },
    { title: "National Day", tags: ["TVC", "post-production"], client: "King Salman Park X WEBEDIA", year: "2025", duration: "01:15", videoId: "1200146975", image: "../assets/captains/projects/p09.jpg", description: "TVC / post-production work for King Salman Park X WEBEDIA." },
    { title: "Choco Cup", tags: ["TVC", "AI/Animation", "post-production"], client: "YOUPRO X BOLD Creative", year: "2025", duration: "00:06", videoId: "1200155171", image: "../assets/captains/projects/p10.jpg", description: "TVC / AI/Animation / post-production work for YOUPRO X BOLD Creative." },
    { title: "ACHIEVMENT VIDEO", tags: ["post-production"], client: "RCU x CRAFT", year: "2025", duration: "03:49", videoId: "1200155172", image: "../assets/captains/projects/p11.jpg", description: "post-production work for RCU x CRAFT." },
    { title: "SS Tickets", tags: ["post-production"], client: "MDLBEAST x BOLD", year: "2025", duration: "00:26", videoId: "1200157923", image: "../assets/captains/projects/p12.jpg", description: "post-production work for MDLBEAST x BOLD." },
    { title: "SS TICKET | TVC 4", tags: ["post-production"], client: "MDLBEAST x BOLD", year: "2025", duration: "00:15", videoId: "1200157920", image: "../assets/captains/projects/p13.jpg", description: "post-production work for MDLBEAST x BOLD." },
    { title: "Saudi Taste | PROMO", tags: ["post-production"], client: "ALMARAI x Shahid", year: "2025", duration: "00:15", videoId: "1200157922", image: "../assets/captains/projects/p14.jpg", description: "post-production work for ALMARAI x Shahid." },
    { title: "Annual Report | AI Film", tags: ["AI/Animation", "post-production"], client: "LEAN", year: "2026", duration: "01:51", videoId: "1200157189", image: "../assets/captains/projects/p15.jpg", description: "AI/Animation / post-production work for LEAN." },
    { title: "SS Teaer | TVC", tags: ["TVC", "post-production"], client: "MDLBEAST", year: "2025", duration: "00:16", videoId: "1200157921", image: "../assets/captains/projects/p16.jpg", description: "TVC / post-production work for MDLBEAST." },
    { title: "Plain Cup", tags: ["post-production", "AI/Animation"], client: "YOUPRO X BOLD Creative", year: "2025", duration: "00:06", videoId: "1200158022", image: "../assets/captains/projects/p17.jpg", description: "post-production / AI/Animation work for YOUPRO X BOLD Creative." },
    { title: "TVC", tags: ["TVC", "post-production"], client: "SOLAN x MADE IN SAUDI", year: "2025", duration: "02:18", videoId: "1200165759", image: "../assets/captains/projects/p18.jpg", description: "TVC / post-production work for SOLAN x MADE IN SAUDI." },
    { title: "Case Study", tags: ["post-production"], client: "Almarai x FULL STOP", year: "2025", duration: "01:36", videoId: "1200165758", image: "../assets/captains/projects/p19.jpg", description: "post-production work for Almarai x FULL STOP." },
    { title: "Life Style", tags: ["TVC"], client: "AZURE x TASWEER", year: "2025", duration: "01:33", videoId: "1200143601", image: "../assets/captains/projects/p20.jpg", description: "TVC work for AZURE x TASWEER." },
    { title: "Digital Receipt", tags: ["TVC"], client: "Saudi Payments", year: "2025", duration: "01:26", videoId: "1186866209", image: "../assets/captains/projects/p22.jpg", description: "TVC work for Saudi Payments." },
    { title: "Philosophy Conference", tags: ["TVC"], client: "Film Critics Conf x NEXT LEVEL", year: "2025", duration: "01:32", videoId: "1190880102", image: "../assets/captains/projects/p23.jpg", description: "TVC work for Film Critics Conf x NEXT LEVEL." },
    { title: "ALMARAI x SHAHID", tags: ["Documentary"], client: "ALMARAI x SHAHID", year: "2025", duration: "23:43", videoId: "1190882282", image: "../assets/captains/projects/p24.jpg", description: "Documentary work for ALMARAI x SHAHID." },
    { title: "Ramad Campaign 4", tags: ["TVC"], client: "RENAULT X QA Arabia", year: "2025", duration: "00:20", videoId: "1190872463", image: "../assets/captains/projects/p25.jpg", description: "TVC work for RENAULT X QA Arabia." },
    { title: "Ramad Campaign 3", tags: ["TVC"], client: "RENAULT X QA Arabia", year: "2025", duration: "00:16", videoId: "1190872424", image: "../assets/captains/projects/p26.jpg", description: "TVC work for RENAULT X QA Arabia." },
    { title: "Ramad Campaign 6", tags: ["TVC"], client: "RENAULT X QA Arabia", year: "2025", duration: "00:16", videoId: "1190872544", image: "../assets/captains/projects/p27.jpg", description: "TVC work for RENAULT X QA Arabia." },
    { title: "Ramad Campaign 5", tags: ["TVC"], client: "RENAULT X QA Arabia", year: "2025", duration: "00:16", videoId: "1190872500", image: "../assets/captains/projects/p28.jpg", description: "TVC work for RENAULT X QA Arabia." },
    { title: "Hyundai", tags: ["Documentary"], client: "Hyundai", year: "2025", duration: "06:44", videoId: "1190873988", image: "../assets/captains/projects/p29.jpg", description: "Documentary work for Hyundai." },
    { title: "OSUS HILTON", tags: ["Documentary"], client: "OSUS", year: "2025", duration: "03:32", videoId: "1190874535", image: "../assets/captains/projects/p30.jpg", description: "Documentary work for OSUS." },
    { title: "Tea Film 1", tags: ["TVC"], client: "PUBG x Rabea", year: "2025", duration: "00:30", videoId: "1190880384", image: "../assets/captains/projects/p31.jpg", description: "TVC work for PUBG x Rabea." },
    { title: "Tea Film 2", tags: ["TVC"], client: "PUBG x Rabea", year: "2025", duration: "00:30", videoId: "1190880423", image: "../assets/captains/projects/p32.jpg", description: "TVC work for PUBG x Rabea." },
    { title: "Tea Film 3", tags: ["TVC"], client: "PUBG x Rabea", year: "2025", duration: "00:25", videoId: "1190880454", image: "../assets/captains/projects/p33.jpg", description: "TVC work for PUBG x Rabea." },
    { title: "EAT WHAT YOU WANT", tags: ["TVC"], client: "Diet Centre x WEBEDIA", year: "2025", duration: "00:35", videoId: "1190140057", image: "../assets/captains/projects/p34.jpg", description: "TVC work for Diet Centre x WEBEDIA." },
    { title: "000 1", tags: ["TVC"], client: "YOPRO x BOLD Creative", year: "2025", duration: "00:30", videoId: "1186731172", image: "../assets/captains/projects/p35.jpg", description: "TVC work for YOPRO x BOLD Creative." },
    { title: "ND", tags: ["TVC"], client: "Ceer", year: "2025", duration: "00:50", videoId: "1186728445", image: "../assets/captains/projects/p36.jpg", description: "TVC work for Ceer." },
    { title: "A city of BEATS", tags: ["TVC"], client: "MDLBEAST x BOLD Creative", year: "2025", duration: "01:16", videoId: "1186729154", image: "../assets/captains/projects/p37.jpg", description: "TVC work for MDLBEAST x BOLD Creative." },
    { title: "RIYADH ART", tags: ["post-production"], client: "Riyadh Art x Black Rhino", year: "2025", duration: "00:59", videoId: "1190875988", image: "../assets/captains/projects/p38.jpg", description: "post-production work for Riyadh Art x Black Rhino." },
    { title: "BSF NATIONAL DAY 24", tags: ["TVC"], client: "BSF x WEBEDIA", year: "2025", duration: "00:51", videoId: "1186733466", image: "../assets/captains/projects/p39.jpg", description: "TVC work for BSF x WEBEDIA." },
    { title: "Osus Eye", tags: ["Documentary"], client: "OSUS", year: "2025", duration: "09:52", videoId: "1186730138", image: "../assets/captains/projects/p40.jpg", description: "Documentary work for OSUS." },
    { title: "000 2", tags: ["TVC"], client: "YOPRO x BOLD Creative", year: "2025", duration: "00:30", videoId: "1190872926", image: "../assets/captains/projects/p41.jpg", description: "TVC work for YOPRO x BOLD Creative." },
    { title: "Ramad Campaign 2", tags: ["TVC"], client: "RENAULT X QA Arabia", year: "2025", duration: "00:15", videoId: "1190872388", image: "../assets/captains/projects/p42.jpg", description: "TVC work for RENAULT X QA Arabia." },
    { title: "NEOM | Ambassadors", tags: ["event"], category: "Events & Coverage", client: "NEOM", year: "2026", duration: "Event", videoId: "1201419417", image: "https://i.vimeocdn.com/video/2168756595-a7a9dc59d28f0e54a74564a4bc76ad3e0961e30b5c93afe7b06362b0b42451cf-d_1280x720?region=us", description: "Events & Coverage work for NEOM.", excludeFromAll: true },
    { title: "TONOLEAP", tags: ["event"], category: "Events & Coverage", client: "NEOM / LEAP", year: "2026", duration: "Event", videoId: "1201412414", videoHash: "b4074fda31", image: "https://i.vimeocdn.com/video/2168747899-c01ded021dc4ee93452b828c77477189a814271e9d7a1024a890d80589499866-d_1280x720?region=us", description: "Events & Coverage work for NEOM / LEAP.", excludeFromAll: true },
    { title: "NEOM | Ent Riyadh", tags: ["event"], category: "Events & Coverage", client: "NEOM", year: "2026", duration: "Event", videoId: "1201410742", videoHash: "6912777fcb", image: "https://i.vimeocdn.com/video/2168747434-a8d932ce57af64482a3c79100f714dba8feee748b2aac745a237e19d5d3fcff0-d_1280x720?region=us", description: "Events & Coverage work for NEOM.", excludeFromAll: true },
    { title: "Osus | Osus Eye Launch Event", tags: ["event"], category: "Events & Coverage", client: "Osus", year: "2026", duration: "Event", videoId: "1201412109", videoHash: "a37c4f6f77", image: "https://i.vimeocdn.com/video/2168756402-8304ba4a5e41944a512ada6b160b808cc29a284633b35e0500e1dbdb92371b7d-d_1280x720?region=us", description: "Events & Coverage work for Osus.", excludeFromAll: true },
    { title: "NEOM | Ent KHOBAR", tags: ["event"], category: "Events & Coverage", client: "NEOM", year: "2026", duration: "Event", videoId: "1201410741", videoHash: "044627245f", image: "https://i.vimeocdn.com/video/2168747001-de0cc8a838945f332024a9b95a709758103347495765229e85ff38c031f5180f-d_1280x720?region=us", description: "Events & Coverage work for NEOM.", excludeFromAll: true },
    { title: "Neom x Mclaren | Formula E team", tags: ["event"], category: "Events & Coverage", client: "NEOM / McLaren", year: "2026", duration: "Event", videoId: "1201410743", videoHash: "0c4380fbe7", description: "Events & Coverage work for NEOM / McLaren.", excludeFromAll: true },
    { title: "Takamol @Gitex | Day 1", tags: ["event"], category: "Events & Coverage", client: "Takamol", year: "2026", duration: "Event", videoId: "1201412488", videoHash: "7b48187961", image: "https://i.vimeocdn.com/video/2168756410-30839e8d58f386e9aa6843e0166e348ac6e4f5b47b72355def9757bbf72b5a64-d_1280x720?region=us", description: "Events & Coverage work for Takamol.", excludeFromAll: true },
    { title: "Binan Expo Coverage", tags: ["event"], category: "Events & Coverage", client: "Binan", year: "2026", duration: "Event", videoId: "1201412819", videoHash: "9f6c153d30", image: "https://i.vimeocdn.com/video/2168748091-1048168c9dcf91d78a442195323569d8ffb2debd8efe7c1bb6af28788c676d25-d_1280x720?region=us", description: "Events & Coverage work for Binan.", excludeFromAll: true },
    { title: "Takamol @Gitex | Day 2,3", tags: ["event"], category: "Events & Coverage", client: "Takamol", year: "2026", duration: "Event", videoId: "1201412862", videoHash: "6ae444d91d", image: "https://i.vimeocdn.com/video/2168755761-12dc85fac1e569d7e4c734b36e9262661283596f41fc994238badc490fe902ef-d_1280x720?region=us", description: "Events & Coverage work for Takamol.", excludeFromAll: true },
    { title: "Takamol @Gitex | Day 4", tags: ["event"], category: "Events & Coverage", client: "Takamol", year: "2026", duration: "Event", videoId: "1201413028", videoHash: "a1369c2b77", image: "https://i.vimeocdn.com/video/2168754980-3bc03db08d2253ff4133bced1c2016d0afea8ae1bc26dc7391c7681af540b5ac-d_1280x720?region=us", description: "Events & Coverage work for Takamol.", excludeFromAll: true },
    { title: "Qidiya | Throne & Liberty Drone Show", tags: ["event"], category: "Events & Coverage", client: "Qidiya", year: "2026", duration: "Event", videoId: "1201419642", image: "https://i.vimeocdn.com/video/2168756570-a1f9a88df2dfa34f744ffb01e2377bb5e8c651563ed1486070b88f6f23a87f93-d_1280x720?region=us", description: "Events & Coverage work for Qidiya.", excludeFromAll: true },
    { title: "LEAP | 3 Things We Learned", tags: ["event"], category: "Events & Coverage", client: "LEAP", year: "2026", duration: "Event", videoId: "1201411004", videoHash: "192194deda", image: "https://i.vimeocdn.com/video/2168747068-c05d4695209fba19cc8bae6ceb79b2fb3e4300d2171500e9f8433a0bccc34f7c-d_1280x720?region=us", description: "Events & Coverage work for LEAP.", excludeFromAll: true },
    { title: "Takamol @Gitex | Recap", tags: ["event"], category: "Events & Coverage", client: "Takamol", year: "2026", duration: "Event", videoId: "1201410745", videoHash: "532a8234c4", image: "https://i.vimeocdn.com/video/2168747366-9fa230772a40850ffa14bbd29ad88731136941819341df2405da76a79afc4189-d_1280x720?region=us", description: "Events & Coverage work for Takamol.", excludeFromAll: true }
  ];

  const tagOrder = ["TVC", "Documentary", "post-production", "AI/Animation", "Events & Coverage"];
  let filter = "All";
  let active = null;

  const grid = document.getElementById("grid");
  const filters = document.querySelector(".filters");
  const projectModal = document.getElementById("projectModal");

  function tagLabel(tag) {
    if (tag === "All") return CV.t("filter.all");
    if (tag === "Events & Coverage") return CV.t("filter.Events & Coverage");
    return CV.t("tag." + tag);
  }
  function filterValues(p) { return p.tags.concat(p.category ? [p.category] : []); }
  function localizedTags(p) { return p.tags.map(tagLabel).join(" / "); }
  function allProjects() { return projects.filter((p) => !p.excludeFromAll); }
  function filtered() { return filter === "All" ? allProjects() : projects.filter((p) => filterValues(p).includes(filter)); }
  function projectDesc(p) {
    if (CV.lang !== "ar") return p.description;
    const tags = localizedTags(p);
    return "عمل " + tags + " " + CV.t("projects.tagWork") + " " + p.client + ".";
  }

  function counts() {
    const base = { All: allProjects().length };
    tagOrder.forEach((tag) => { base[tag] = projects.filter((p) => filterValues(p).includes(tag)).length; });
    return base;
  }

  function renderFilters() {
    filters.replaceChildren();
    Object.entries(counts()).forEach(([name, count]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = name === filter ? "active" : "";
      b.append(document.createTextNode(tagLabel(name) + " "));
      const c = document.createElement("span");
      c.className = "count";
      c.textContent = "(" + count + ")";
      b.append(c);
      b.addEventListener("click", () => { filter = name; render(); });
      filters.append(b);
    });
  }

  function card(p, i) {
    const el = document.createElement("article");
    el.className = "card";
    el.style.animationDelay = (i % 12) * 55 + "ms";
    const thumb = document.createElement("div");
    thumb.className = "card-thumb";
    if (p.image) {
      const img = document.createElement("img");
      img.src = p.image; img.alt = p.title; img.loading = "lazy"; img.decoding = "async";
      thumb.append(img);
    }
    const play = document.createElement("div");
    play.className = "card-play";
    play.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    thumb.append(play);

    const meta = document.createElement("div");
    meta.className = "card-meta";
    const tg = document.createElement("span"); tg.textContent = localizedTags(p);
    const du = document.createElement("span"); du.textContent = p.duration;
    meta.append(tg, du);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = p.title;
    const client = document.createElement("div");
    client.className = "card-client";
    client.textContent = p.client;

    el.append(thumb, meta, title, client);
    el.addEventListener("click", () => openProject(p));
    return el;
  }

  function renderGrid() {
    const items = filtered();
    grid.replaceChildren();
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = CV.t("projects.empty");
      grid.append(empty);
      return;
    }
    items.forEach((p, i) => grid.append(card(p, i)));
  }

  function render() { renderFilters(); renderGrid(); }

  function openProject(p) {
    active = p;
    projectModal.querySelector("[data-pm-title]").textContent = p.title;
    projectModal.querySelector("[data-pm-desc]").textContent = projectDesc(p);
    projectModal.querySelector("[data-pm-client]").textContent = p.client;
    projectModal.querySelector("[data-pm-tags]").textContent = localizedTags(p);
    projectModal.querySelector("[data-pm-year]").textContent = p.year;
    const player = projectModal.querySelector("[data-pm-player]");
    const hash = p.videoHash ? "h=" + p.videoHash + "&" : "";
    const frame = document.createElement("iframe");
    frame.src = "https://player.vimeo.com/video/" + p.videoId + "?" + hash + "title=0&byline=0&portrait=0&dnt=1";
    frame.title = p.title;
    frame.allow = "autoplay; fullscreen; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    player.replaceChildren(frame);
    CV.openModal(projectModal);
  }

  CV.onLanguageChange(() => {
    render();
    if (active && projectModal.classList.contains("open")) {
      projectModal.querySelector("[data-pm-desc]").textContent = projectDesc(active);
      projectModal.querySelector("[data-pm-tags]").textContent = localizedTags(active);
    }
  });

  CV.ready(render);
})();
