/**
 * Movimiento global del sitio, sin dependencias.
 *  · Revelado al hacer scroll: IntersectionObserver añade `.is-visible`;
 *    la animación (opacity + translate) vive en CSS → compositor, sin CLS.
 *  · Contadores: count-up con curva de resorte críticamente amortiguado.
 * Todo respeta `prefers-reduced-motion`.
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ── Revelado ─────────────────────────────────────────────── */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target); // se revela una sola vez
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  items.forEach((el) => io.observe(el));
}

/* ── Contadores ───────────────────────────────────────────── */
// Resorte crítico normalizado: x(t) = 1 − (1 + ωt)·e^(−ωt)
const spring = (t: number) => {
  const w = 9.23;
  return Math.min(1, 1 - (1 + w * t) * Math.exp(-w * t));
};

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count ?? 0);
  const suffix = el.dataset.suffix ?? "";
  if (reduceMotion.matches) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const duration = 1100;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    el.textContent = `${Math.round(spring(p) * target)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!counters.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        animateCount(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    // Mismo umbral que el revelado: cuenta mientras aparece (sin salto 4+ → 0)
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  counters.forEach((el) => io.observe(el));
}

initReveal();
initCounters();
