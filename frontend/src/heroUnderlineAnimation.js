const selectors = [
  ".hero .hero__title-highlight",
  ".services .services__title .animated-underline",
  ".how-it-works .how-it-works__title .animated-underline",
  ".delivery-options .delivery-options__title .animated-underline",
  ".stats .stats__title-highlight",
  ".testimonials .testimonials__title span",
  ".app-download .app-download__title-highlight",
  ".faq-grid .faq-grid__highlight",
  ".callback-cta .callback-cta__highlight",
  ".about-page .about-page__highlight",
];
const activeTimers = new WeakMap();
const activeLoops = new WeakMap();
const visibleTargets = new WeakSet();

function replaySequence(target) {
  window.clearInterval(activeTimers.get(target));
  window.clearTimeout(activeLoops.get(target));
  const text = target.dataset.heroText || target.textContent.trim();
  target.dataset.heroText = text;
  target.classList.remove("is-drawing");
  target.textContent = "";

  let index = 0;
  const timer = window.setInterval(() => {
    index += 1;
    target.textContent = text.slice(0, index);
    if (index < text.length) return;
    window.clearInterval(timer);
    activeTimers.delete(target);
    target.classList.add("is-drawing");
    activeLoops.set(target, window.setTimeout(() => {
      if (visibleTargets.has(target)) replaySequence(target);
    }, 3300));
  }, 125);
  activeTimers.set(target, timer);
}

function observeHeroUnderline() {
  const targets = document.querySelectorAll(selectors.map((selector) => `${selector}:not([data-underline-observed])`).join(", "));
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) {
        visibleTargets.delete(target);
        window.clearInterval(activeTimers.get(target));
        window.clearTimeout(activeLoops.get(target));
        return;
      }
      visibleTargets.add(target);
      replaySequence(target);
    });
  }, { threshold: 0.01 });

  targets.forEach((target) => {
    target.dataset.underlineObserved = "true";
    observer.observe(target);
  });
}

requestAnimationFrame(observeHeroUnderline);
new MutationObserver(observeHeroUnderline).observe(document.documentElement, { childList: true, subtree: true });

function setupServicesCarousels() {
  document.querySelectorAll(".services__carousel-wrapper:not([data-carousel-ready])").forEach((wrapper) => {
    const track = wrapper.querySelector(".services__carousel-track");
    if (!track) return;
    const cards = [...track.children];
    if (cards.length < 2) return;
    cards.slice(0, 2).forEach((card) => track.append(card.cloneNode(true)));

    wrapper.dataset.carouselReady = "true";
    let activeIndex = 0;
    const previous = document.createElement("button");
    const next = document.createElement("button");
    const dots = document.createElement("div");
    previous.className = "services__carousel-control services__carousel-control--previous";
    next.className = "services__carousel-control services__carousel-control--next";
    dots.className = "services__carousel-dots";
    previous.type = next.type = "button";
    previous.setAttribute("aria-label", "Previous service");
    next.setAttribute("aria-label", "Next service");
    previous.textContent = "‹";
    next.textContent = "›";

    const dotButtons = cards.map((card, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "services__carousel-dot";
      dot.setAttribute("aria-label", `Show service ${index + 1}`);
      dot.addEventListener("click", () => show(index));
      dots.append(dot);
      return dot;
    });
    const show = (index) => {
      activeIndex = (index + cards.length) % cards.length;
      const gap = Number.parseFloat(getComputedStyle(track).gap) || 0;
      const step = window.matchMedia("(max-width: 600px)").matches ? track.clientWidth : cards[0].getBoundingClientRect().width + gap;
      track.style.transform = `translateX(-${activeIndex * step}px)`;
      dotButtons.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === activeIndex));
    };
    previous.addEventListener("click", () => show(activeIndex - 1));
    next.addEventListener("click", () => show(activeIndex + 1));
    wrapper.append(previous, next, dots);
    show(0);
  });
}

requestAnimationFrame(setupServicesCarousels);
new MutationObserver(setupServicesCarousels).observe(document.documentElement, { childList: true, subtree: true });

const counterFrames = new WeakMap();

function animateCounter(target) {
  window.cancelAnimationFrame(counterFrames.get(target));
  const value = Number.parseFloat(target.dataset.counter);
  const suffix = target.dataset.suffix || "";
  const decimals = (target.dataset.counter.split(".")[1] || "").length;
  const startedAt = performance.now();
  const duration = 1300;
  const draw = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    target.textContent = `${(value * eased).toFixed(decimals)}${suffix}`;
    if (progress < 1) counterFrames.set(target, window.requestAnimationFrame(draw));
  };
  counterFrames.set(target, window.requestAnimationFrame(draw));
}

function observeCounters() {
  const counters = document.querySelectorAll("[data-counter]:not([data-counter-observed])");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) animateCounter(target);
    });
  }, { threshold: 0.35 });
  counters.forEach((counter) => {
    counter.dataset.counterObserved = "true";
    observer.observe(counter);
  });
}

requestAnimationFrame(observeCounters);
new MutationObserver(observeCounters).observe(document.documentElement, { childList: true, subtree: true });
