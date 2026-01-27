const body = document.body;
body.classList.remove("no-js");
body.classList.add("js");

const toggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const translations = {
  en: {
    "meta.title": "Jiacheng Zhang | CS Student, CV & Graphics",
    "meta.description":
      "Personal homepage for a university student focused on computer vision, computer graphics, 3D Gaussian Splatting, and real-time rendering.",
    "meta.ogTitle": "Jiacheng Zhang | CS Student, CV & Graphics",
    "meta.ogDescription":
      "Personal homepage for a university student focused on computer vision, computer graphics, 3D Gaussian Splatting, and real-time rendering.",
    "nav.about": "About",
    "nav.education": "Education",
    "nav.stack": "Tech Stack",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.eyebrow": "Peking University | Class of 2023",
    "hero.title": "Exploring 3D vision and real-time graphics for immersive systems.",
    "hero.lead":
      "Intelligent Science and Technology student focused on computer vision and computer graphics. Research interests include 3D Gaussian Splatting (3DGS) and real-time rendering.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Connect with me",
    "hero.stat.classyear": "Class year",
    "hero.stat.research": "Active research threads",
    "hero.stat.focus": "Vision focus",
    "hero.card.title": "Current focus",
    "hero.card.item1": "Studying Intelligent Science and Technology at Peking University.",
    "hero.card.item2": "Working on 3DGS pipelines and real-time rendering experiments.",
    "hero.card.item3": "Actively seeking lab internships and collaborative projects.",
    "hero.card.available": "Available for research opportunities.",
    "about.eyebrow": "About",
    "about.title": "Student researcher focused on 3D perception.",
    "about.body":
      "I am Jiacheng Zhang (Kashing Zhang), an Intelligent Science and Technology student at Peking University. I focus on reconstructing and rendering 3D scenes efficiently, at the intersection of computer vision and computer graphics, especially 3DGS and real-time rendering.",
    "about.pill.vision": "Computer vision",
    "about.pill.graphics": "Computer graphics",
    "about.pill.3dgs": "3D Gaussian Splatting",
    "about.pill.render": "Real-time rendering",
    "about.card1.title": "Research focus",
    "about.card1.body": "Modeling 3D scenes with efficient representations for fast rendering.",
    "about.card2.title": "Experimentation",
    "about.card2.body": "Prototype pipelines, benchmark performance, and iterate on quality.",
    "about.card3.title": "Implementation",
    "about.card3.body": "Build reproducible demos and real-time rendering proofs of concept.",
    "projects.eyebrow": "Selected work",
    "projects.title": "Project experience",
    "projects.cta": "Request full portfolio",
    "projects.p1.meta1": "Research",
    "projects.p1.meta2": "4DGS",
    "projects.p1.title": "Visual feature uplift for dynamic 3D scenes",
    "projects.p1.desc":
      "Lifted 2D features (e.g., CLIP) into 3D for dynamic scenes based on 4DGS, enabling downstream open-vocabulary editing.",
    "projects.p1.tag1": "4DGS",
    "projects.p1.tag2": "Open-vocab",
    "projects.p1.tag3": "Feature lifting",
    "projects.p2.meta1": "Reproduction",
    "projects.p2.meta2": "NeRF",
    "projects.p2.title": "NeRF / D-NeRF reproduction",
    "projects.p2.desc":
      "Reproduced NeRF and D-NeRF pipelines and evaluated reconstruction quality and temporal consistency.",
    "projects.p2.tag1": "NeRF",
    "projects.p2.tag2": "D-NeRF",
    "projects.p2.tag3": "Evaluation",
    "projects.p3.meta1": "Course project",
    "projects.p3.meta2": "Software",
    "projects.p3.title": "WhatToEat",
    "projects.p3.desc":
      "Peking University cafeteria menu intro and recommendation app with a fun blind box feature.",
    "projects.p3.tag1": "Management",
    "projects.p3.tag2": "Recommendation",
    "projects.p3.tag3": "Blind box",
    "stack.eyebrow": "Tech stack",
    "stack.title": "Tools I use",
    "stack.note": "Comfortable across design, code, and research workflows.",
    "stack.core.title": "Core languages",
    "stack.core.body": "Python, C++, CUDA basics, JavaScript for demos and tooling.",
    "stack.graphics.title": "Graphics & vision",
    "stack.graphics.body": "OpenCV, OpenGL, Vulkan, PyTorch, 3DGS pipelines, real-time rendering.",
    "stack.tools.title": "Research tools",
    "stack.tools.body": "Blender, NVIDIA Nsight Graphics.",
    "education.eyebrow": "Education",
    "education.title": "Academic background",
    "education.note": "Focus on computer vision and computer graphics.",
    "education.item1.year": "2023-Present",
    "education.item1.title": "B.S. in Intelligent Science and Technology, Peking University",
    "education.item1.body": "Focus on computer vision, computer graphics, and real-time rendering.",
    "publications.eyebrow": "Publications",
    "publications.title": "Selected papers",
    "publications.note": "In preparation. Updates will be added here.",
    "publications.cta": "Request full list",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's connect for research and internships.",
    "contact.body":
      "Open to lab internships and collaborative projects. Share your lab, project topic, or timeline. I usually respond within 24 hours with next steps.",
    "contact.card.title": "Quick intro",
    "contact.card.body": "Send a short note with three points:",
    "contact.card.item1": "Opportunity or project type",
    "contact.card.item2": "Expected scope and timeline",
    "contact.card.item3": "How I can help",
    "contact.card.cta": "Email me",
    "footer.tagline": "Designed and built with curiosity and care.",
    "footer.backtotop": "Back to top",
    "footer.email": "Email"
  },
  zh: {
    "meta.title": "Jiacheng Zhang | 计算机视觉与图形学",
    "meta.description":
      "个人主页：关注计算机视觉、计算机图形学、3D Gaussian Splatting（3DGS）与实时渲染的大学生。",
    "meta.ogTitle": "Jiacheng Zhang | 计算机视觉与图形学",
    "meta.ogDescription":
      "个人主页：关注计算机视觉、计算机图形学、3D Gaussian Splatting（3DGS）与实时渲染的大学生。",
    "nav.about": "关于",
    "nav.education": "教育经历",
    "nav.stack": "技术栈",
    "nav.projects": "项目经历",
    "nav.publications": "论文发表",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "hero.eyebrow": "北京大学 | 2023级",
    "hero.title": "探索3D视觉与实时图形，构建沉浸式系统。",
    "hero.lead":
      "智能科学与技术专业学生，研究方向为计算机视觉与计算机图形学，聚焦3D Gaussian Splatting（3DGS）与实时渲染。",
    "hero.cta.projects": "查看项目",
    "hero.cta.contact": "联系我",
    "hero.stat.classyear": "年级",
    "hero.stat.research": "研究方向",
    "hero.stat.focus": "3D视觉",
    "hero.card.title": "当前关注",
    "hero.card.item1": "北京大学智能科学与技术专业在读。",
    "hero.card.item2": "进行3DGS流程与实时渲染实验。",
    "hero.card.item3": "积极寻找实验室实习与合作项目。",
    "hero.card.available": "可参与研究合作。",
    "about.eyebrow": "关于",
    "about.title": "专注3D感知的学生研究者。",
    "about.body":
      "我是张嘉诚（Kashing Zhang），北京大学智能科学与技术专业学生。致力于高效重建与渲染三维场景，兴趣位于计算机视觉与计算机图形学交叉，尤其关注3DGS与实时渲染。",
    "about.pill.vision": "计算机视觉",
    "about.pill.graphics": "计算机图形学",
    "about.pill.3dgs": "3D Gaussian Splatting",
    "about.pill.render": "实时渲染",
    "about.card1.title": "研究方向",
    "about.card1.body": "以高效表示建模3D场景，实现快速渲染。",
    "about.card2.title": "实验与验证",
    "about.card2.body": "搭建实验流程、性能评测，并持续迭代质量。",
    "about.card3.title": "实现与落地",
    "about.card3.body": "构建可复现的演示与实时渲染验证原型。",
    "projects.eyebrow": "项目精选",
    "projects.title": "项目经历",
    "projects.cta": "索取完整作品集",
    "projects.p1.meta1": "研究",
    "projects.p1.meta2": "4DGS",
    "projects.p1.title": "面向动态3D场景的特征增强",
    "projects.p1.desc": "将二维特征（如CLIP）提升到三维，基于4DGS支持动态场景与开放词汇编辑。",
    "projects.p1.tag1": "4DGS",
    "projects.p1.tag2": "开放词汇",
    "projects.p1.tag3": "特征升维",
    "projects.p2.meta1": "复现",
    "projects.p2.meta2": "NeRF",
    "projects.p2.title": "NeRF / D-NeRF 复现",
    "projects.p2.desc": "复现NeRF与D-NeRF流程，并评估重建质量与时间一致性。",
    "projects.p2.tag1": "NeRF",
    "projects.p2.tag2": "D-NeRF",
    "projects.p2.tag3": "评测",
    "projects.p3.meta1": "课程项目",
    "projects.p3.meta2": "软件系统",
    "projects.p3.title": "WhatToEat",
    "projects.p3.desc": "北京大学食堂菜品介绍与推荐系统，包含菜品盲盒推荐。",
    "projects.p3.tag1": "管理",
    "projects.p3.tag2": "推荐",
    "projects.p3.tag3": "盲盒",
    "stack.eyebrow": "技术栈",
    "stack.title": "常用工具",
    "stack.note": "熟悉研究、开发与实验流程。",
    "stack.core.title": "核心语言",
    "stack.core.body": "Python、C++、CUDA基础、JavaScript（用于演示与工具）。",
    "stack.graphics.title": "图形与视觉",
    "stack.graphics.body": "OpenCV、OpenGL、Vulkan、PyTorch、3DGS流程、实时渲染。",
    "stack.tools.title": "研究工具",
    "stack.tools.body": "Blender、NVIDIA Nsight Graphics。",
    "education.eyebrow": "教育经历",
    "education.title": "学术背景",
    "education.note": "聚焦计算机视觉与计算机图形学。",
    "education.item1.year": "2023-至今",
    "education.item1.title": "北京大学 智能科学与技术 本科",
    "education.item1.body": "方向为计算机视觉、计算机图形学与实时渲染。",
    "publications.eyebrow": "论文发表",
    "publications.title": "代表性论文",
    "publications.note": "暂为空，后续更新。",
    "publications.cta": "索取完整列表",
    "contact.eyebrow": "联系",
    "contact.title": "欢迎联系研究合作或实习。",
    "contact.body":
      "开放实验室实习与合作项目。分享你的实验室、项目主题或时间安排，我通常会在24小时内回复。",
    "contact.card.title": "简要介绍",
    "contact.card.body": "请简要说明：",
    "contact.card.item1": "机会或项目类型",
    "contact.card.item2": "预期范围与时间",
    "contact.card.item3": "我可以提供的帮助",
    "contact.card.cta": "发邮件",
    "footer.tagline": "以好奇与专注设计与构建。",
    "footer.backtotop": "返回顶部",
    "footer.email": "邮箱"
  }
};

const setMetaContent = (attribute, value, content) => {
  const meta = document.querySelector(`meta[${attribute}="${value}"]`);
  if (meta && content) {
    meta.setAttribute("content", content);
  }
};

const setLanguage = (lang) => {
  const messages = translations[lang] || translations.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = messages["meta.title"];
  setMetaContent("name", "description", messages["meta.description"]);
  setMetaContent("property", "og:title", messages["meta.ogTitle"]);
  setMetaContent("property", "og:description", messages["meta.ogDescription"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (messages[key]) {
      element.textContent = messages[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const languageButtons = document.querySelectorAll(".lang-btn");
const storedLang = localStorage.getItem("preferredLang");
const browserLang = navigator.language && navigator.language.toLowerCase().startsWith("zh");
const initialLang = storedLang || (browserLang ? "zh" : "en");

setLanguage(initialLang);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLang = button.dataset.lang;
    localStorage.setItem("preferredLang", nextLang);
    setLanguage(nextLang);
  });
});

const themeToggle = document.querySelector("[data-theme-toggle]");
const storedTheme = localStorage.getItem("preferredTheme");
const prefersDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Dark" : "Light";
  }
};

setTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("preferredTheme", nextTheme);
    setTheme(nextTheme);
  });
}
