import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────
// HERO — timeline secuencial con stagger
// ─────────────────────────────────────────────────────────
function initHero() {
  const heroItems = [
    "[data-anim='hero-badge']",
    "[data-anim='hero-title']",
    "[data-anim='hero-role']",
    "[data-anim='hero-desc']",
    "[data-anim='hero-cta']",
    "[data-anim='hero-social']",
  ];

  // Estado inicial invisible para evitar flash
  gsap.set(heroItems, { opacity: 0, y: 24 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to("[data-anim='hero-badge']", { opacity: 1, y: 0, duration: 0.55 })
    .to("[data-anim='hero-title']",  { opacity: 1, y: 0, duration: 0.75 }, "-=0.25")
    .to("[data-anim='hero-role']",   { opacity: 1, y: 0, duration: 0.6  }, "-=0.45")
    .to("[data-anim='hero-desc']",   { opacity: 1, y: 0, duration: 0.6  }, "-=0.4")
    .to("[data-anim='hero-cta']",    { opacity: 1, y: 0, duration: 0.5  }, "-=0.35")
    .to("[data-anim='hero-social']", { opacity: 1, y: 0, duration: 0.45 }, "-=0.3");
}

// ─────────────────────────────────────────────────────────
// HELPER — animación scroll genérica (fade + slide up)
// ─────────────────────────────────────────────────────────
function scrollFade(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.set(elements, { opacity: 0, y: options.y ?? 30 });

  gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration: options.duration ?? 0.7,
    stagger: options.stagger ?? 0,
    ease: options.ease ?? "power2.out",
    scrollTrigger: {
      trigger: options.trigger ?? elements[0],
      start: options.start ?? "top 82%",
      once: true,
    },
  });
}

// ─────────────────────────────────────────────────────────
// ABOUT — foto desde la izquierda, texto desde abajo
// ─────────────────────────────────────────────────────────
function initAbout() {
  const section = document.querySelector("#about");
  if (!section) return;

  gsap.set("#about img", { opacity: 0, x: -30 });
  gsap.to("#about img", {
    opacity: 1,
    x: 0,
    duration: 0.85,
    ease: "power2.out",
    scrollTrigger: { trigger: section, start: "top 80%", once: true },
  });

  scrollFade("#about h2, #about p, #about .grid > div", {
    trigger: section,
    stagger: 0.08,
    duration: 0.65,
    y: 20,
  });
}

// ─────────────────────────────────────────────────────────
// EXPERIENCE — card desde abajo
// ─────────────────────────────────────────────────────────
function initExperience() {
  scrollFade("[data-anim='exp-card']", {
    trigger: "#experience",
    y: 40,
    duration: 0.8,
  });
}

// ─────────────────────────────────────────────────────────
// EDUCATION — cards con stagger desde abajo
// ─────────────────────────────────────────────────────────
function initEducation() {
  scrollFade("[data-anim='edu-card']", {
    trigger: "#education",
    y: 30,
    duration: 0.65,
    stagger: 0.1,
  });
}

// ─────────────────────────────────────────────────────────
// STACK — scale + fade con stagger rápido
// ─────────────────────────────────────────────────────────
function initStack() {
  const items = document.querySelectorAll("[data-anim='stack-item']");
  if (!items.length) return;

  gsap.set(items, { opacity: 0, scale: 0.88, y: 10 });

  gsap.to(items, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.45,
    stagger: 0.025,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#stack",
      start: "top 80%",
      once: true,
    },
  });
}

// ─────────────────────────────────────────────────────────
// PROJECTS — cada card individualmente con ScrollTrigger
// ─────────────────────────────────────────────────────────
function initProjects() {
  const cards = document.querySelectorAll("[data-anim='project-card']");
  if (!cards.length) return;

  cards.forEach((card) => {
    gsap.set(card, { opacity: 0, y: 40 });

    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        once: true,
      },
    });
  });
}

// ─────────────────────────────────────────────────────────
// SERVICES — stagger entre las 3 cards
// ─────────────────────────────────────────────────────────
function initServices() {
  const cards = document.querySelectorAll("[data-anim='service-card']");
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 30, scale: 0.97 });

  gsap.to(cards, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.12,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#services",
      start: "top 82%",
      once: true,
    },
  });
}

// ─────────────────────────────────────────────────────────
// CONTACT — card suave desde abajo
// ─────────────────────────────────────────────────────────
function initContact() {
  scrollFade("[data-anim='contact-card']", {
    trigger: "#contact",
    y: 35,
    duration: 0.75,
  });
}

// ─────────────────────────────────────────────────────────
// TÍTULOS DE SECCIÓN — fade sutil en cada sección
// ─────────────────────────────────────────────────────────
function initSectionTitles() {
  const sections = ["#about", "#experience", "#education", "#stack", "#projects", "#services", "#contact"];

  sections.forEach((id) => {
    const el = document.querySelector(id);
    if (!el) return;

    const label = el.querySelector(".tracking-widest");
    const title = el.querySelector("h2");

    if (label) {
      gsap.set(label, { opacity: 0, y: 12 });
      gsap.to(label, {
        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }
    if (title) {
      gsap.set(title, { opacity: 0, y: 16 });
      gsap.to(title, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.08,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }
  });
}

// ─────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────
initHero();
initAbout();
initExperience();
initEducation();
initStack();
initProjects();
initServices();
initContact();
initSectionTitles();
