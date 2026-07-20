/* =========================================================
   CAPTAINS FILM — v2 AI Studio
   ========================================================= */
(function () {
  "use strict";
  const CV = window.CaptainsV2;

  CV.mergeDict({
    en: {
      "ai.eyebrow": "Captains AI Studio",
      "ai.heroTitle": "AI Studio",
      "ai.heroCopy": "Cinematic AI video production for brands that need bold concepts, faster campaign assets, and human-led storytelling from the first reference to the final frame.",
      "ai.workflowLink": "See the workflow",
      "ai.servicesEyebrow": "Capabilities",
      "ai.servicesTitle": "AI video production",
      "ai.servicesCopy": "We combine generative tools, real production judgment, editing, sound, VFX, and brand direction so AI output feels intentional, cinematic, and ready for audiences.",
      "ai.svc1Title": "Generative films", "ai.svc1Copy": "Original scenes, campaign visuals, product worlds, launch films, and social-first edits shaped from a clear creative route.",
      "ai.svc2Title": "AI post-production", "ai.svc2Copy": "Style extension, cleanup, motion design, sound, color, VFX, and finishing for footage or AI-generated material.",
      "ai.svc3Title": "Reference-led brand worlds", "ai.svc3Copy": "We translate your brand guidelines, moodboards, and visual references into consistent cinematic content.",
      "ai.workflowEyebrow": "The process",
      "ai.workflowTitle": "From prompt to picture",
      "ai.workflowCopy": "The process stays creative, controlled, and production-minded. AI accelerates the build; Captains keeps the story on course.",
      "ai.step1Title": "Discovery and direction", "ai.step1Copy": "We define the audience, message, visual references, deliverables, and the creative route before generation begins.",
      "ai.step2Title": "Generation and selection", "ai.step2Copy": "We create, compare, and curate AI scenes with brand consistency, composition, realism, and campaign use in mind.",
      "ai.step3Title": "Edit, sound, and VFX", "ai.step3Copy": "Human editors refine pacing, transitions, sound design, motion graphics, color, and final cinematic polish.",
      "ai.step4Title": "Delivery at scale", "ai.step4Copy": "Receive master films, cutdowns, platform ratios, campaign variants, and production files ready for launch.",
      "ai.pipelineTitle": "PIPELINE DATA READOUT",
      "ai.p1l1": "> Brief parsed: 3 deliverables, 2 weeks", "ai.p1l2": "> References mapped to a shot list", "ai.p1l3": "> Route locked: cinematic realism [GO]",
      "ai.p2l1": "> 240 frames generated across 6 runs", "ai.p2l2": "> Faces, hands, logos checked frame by frame", "ai.p2l3": "> 4 hero shots approved for the edit",
      "ai.p3l1": "> Cut locked at 00:58 on the music drop", "ai.p3l2": "> Foley and sub-bass layered in", "ai.p3l3": "> Grade: teal-mint night palette",
      "ai.p4l1": "> QC passed: color, loudness, safe areas", "ai.p4l2": "> Ratios exported: 16:9, 9:16, 1:1, 4:5", "ai.p4l3": "> Handover complete. Campaign live.",
      "ai.proofEyebrow": "Why it works",
      "ai.proofTitle": "Built for brand momentum",
      "ai.proof1Title": "Faster campaign development", "ai.proof1Copy": "Move from idea to testable film language quickly without losing production control.",
      "ai.proof2Title": "Cinematic consistency", "ai.proof2Copy": "Every frame is reviewed for story, mood, brand fit, and final delivery quality.",
      "ai.proof3Title": "More versions, less friction", "ai.proof3Copy": "Create alternate hooks, social edits, aspect ratios, and visual tests from the same creative route.",
      "ai.ctaTitle": "Bring the idea. We will build the world.",
      "ai.ctaCopy": "Send us your goal, references, timeline, and the formats you need. Captains AI Studio will shape the concept and lead it to final delivery."
    },
    ar: {
      "ai.eyebrow": "استديو ذكالي من كابتينز",
      "ai.heroTitle": "استديو ذكالي",
      "ai.heroCopy": "إنتاج فيديو بالذكاء الاصطناعي بروح سينمائية للعلامات التي تحتاج أفكارًا أجرأ، أصول حملات أسرع، وحكاية يقودها الإنسان من أول مرجع حتى آخر فريم.",
      "ai.workflowLink": "شاهد مسار العمل",
      "ai.servicesEyebrow": "قدراتنا",
      "ai.servicesTitle": "إنتاج فيديو بالذكاء الاصطناعي",
      "ai.servicesCopy": "نجمع بين قدرات الذكاء الاصطناعي التوليدي وخبرات الإنتاج والمونتاج وتصميم الصوت والمؤثرات البصرية والتوجيه الإبداعي للعلامة، لنقدم أعمالًا مدروسة تجمع بين الدقة الاستراتيجية والجودة السينمائية.",
      "ai.svc1Title": "توليد الأفلام", "ai.svc1Copy": "مشاهد أصلية وعوالم بصرية للمنتجات والعلامات، وأفلام إطلاق ومحتوى منصات من مسار إبداعي واضح.",
      "ai.svc2Title": "التحرير الذكي", "ai.svc2Copy": "تطوير الأسلوب البصري وتحسين الصورة وتصميم الحركة ومعالجة الصوت والتلوين والمؤثرات البصرية للمواد المصورة أو المولدة.",
      "ai.svc3Title": "عوالم بصرية تنطلق من هويتكم", "ai.svc3Copy": "نحوّل الهوية البصرية والمراجع الإبداعية إلى محتوى سينمائي متسق يعكس شخصية العلامة بدقة.",
      "ai.workflowEyebrow": "المسار",
      "ai.workflowTitle": "من البرومبت إلى الصورة",
      "ai.workflowCopy": "يبقى المسار الإبداعي منضبطًا بعقلية إنتاجية واضحة؛ فالذكاء الاصطناعي يسرّع البناء، بينما تتولى كابتينز توجيه السرد وضمان اتساق الرؤية.",
      "ai.step1Title": "اكتشاف وتحديد الاتجاه", "ai.step1Copy": "نحدد الجمهور والرسالة والمراجع البصرية والمخرجات والمسار الإبداعي قبل بدء التوليد.",
      "ai.step2Title": "توليد واختيار", "ai.step2Copy": "ننشئ ونقارن وننتقي المشاهد مع مراعاة اتساق العلامة والتكوين والواقعية واستخدامات الحملة.",
      "ai.step3Title": "مونتاج وصوت ومؤثرات", "ai.step3Copy": "يصقل فريق التحرير الإيقاع والانتقالات والتصميم الصوتي والموشن واللون واللمسة السينمائية الأخيرة.",
      "ai.step4Title": "تسليم على نطاق واسع", "ai.step4Copy": "تستلم الفيلم الرئيسي والنسخ المختصرة ومقاسات المنصات ونسخ الحملة وملفات الإنتاج الجاهزة للإطلاق.",
      "ai.pipelineTitle": "قراءة بيانات خط الإنتاج",
      "ai.p1l1": "> تحليل الملخص: 3 مخرجات خلال أسبوعين", "ai.p1l2": "> تحويل المراجع إلى قائمة لقطات", "ai.p1l3": "> تثبيت الاتجاه: واقعية سينمائية [تم]",
      "ai.p2l1": "> توليد 240 فريم عبر 6 جولات", "ai.p2l2": "> فحص الوجوه والأيادي والشعارات فريم بفريم", "ai.p2l3": "> اعتماد 4 لقطات رئيسية للمونتاج",
      "ai.p3l1": "> قفل المونتاج عند 00:58 مع ضربة الموسيقى", "ai.p3l2": "> إضافة طبقات الفولي والباص العميق", "ai.p3l3": "> التلوين: باليت ليلي بدرجات النعناع",
      "ai.p4l1": "> اجتياز فحص الجودة: اللون والصوت ومناطق الأمان", "ai.p4l2": "> تصدير المقاسات: 16:9 و9:16 و1:1 و4:5", "ai.p4l3": "> اكتمل التسليم. الحملة انطلقت.",
      "ai.proofEyebrow": "لماذا ينجح",
      "ai.proofTitle": "مصمم لزخم العلامة",
      "ai.proof1Title": "تطوير حملات أسرع", "ai.proof1Copy": "ننتقل من الفكرة إلى لغة فيلم قابلة للاختبار بسرعة دون فقدان التحكم الإنتاجي.",
      "ai.proof2Title": "اتساق سينمائي", "ai.proof2Copy": "نراجع كل فريم من حيث القصة والمزاج ومطابقة العلامة وجودة التسليم النهائية.",
      "ai.proof3Title": "نسخ متنوعة، احتكاك أقل", "ai.proof3Copy": "ننتج افتتاحيات بديلة ونسخ سوشال ومقاسات مختلفة واختبارات بصرية من نفس المسار الإبداعي.",
      "ai.ctaTitle": "هات الفكرة. ونبني لها العالم.",
      "ai.ctaCopy": "أرسل لنا الهدف والمراجع والمدة والمقاسات المطلوبة. استديو ذكالي في كابتينز يصوغ المفهوم ويقوده حتى التسليم النهائي."
    }
  });

  let step = 1;
  const stageTag = document.getElementById("wfStage");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateStage() {
    if (stageTag) stageTag.textContent = CV.lang === "ar" ? "المرحلة 0" + step : "STAGE_0" + step;
  }

  function selectStep(n) {
    step = Number(n);
    document.querySelectorAll(".wf-step").forEach((s) => s.classList.toggle("active", s.dataset.step === String(n)));
    document.querySelectorAll(".wf-pane").forEach((p) => p.classList.toggle("active", p.dataset.pane === String(n)));
    updateStage();
    document.querySelectorAll(".wf-pane video").forEach((v) => {
      const active = v.closest(".wf-pane").classList.contains("active");
      if (active && !reduce) v.play().catch(() => {});
      else v.pause();
    });
  }

  document.querySelectorAll(".wf-step").forEach((s) => {
    s.addEventListener("click", () => selectStep(s.dataset.step));
  });

  if (reduce) document.querySelectorAll(".wf-pane video").forEach((v) => { v.removeAttribute("autoplay"); v.pause(); });

  CV.onLanguageChange(updateStage);
  CV.ready(updateStage);
})();
