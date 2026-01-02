/* === 金粉粒子生成 === */
const particles = document.getElementById("particles");

if (particles) {
  function createParticle() {
    const p = document.createElement("span");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (8 + Math.random() * 6) + "s";
    p.style.opacity = 0.4 + Math.random() * 0.4;
    particles.appendChild(p);
    setTimeout(() => p.remove(), 15000);
  }
  setInterval(createParticle, 250);
}

/* === Scroll Reveal === */
const reveals = document.querySelectorAll(".reveal");

if (reveals.length) {
  function onScroll() {
    const winH = window.innerHeight;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < winH - 80) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);
}

/* === 右側導覽 Smooth Scroll + Active 高亮 === */
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".header nav a");
  if (!navLinks.length) return;

  const sections = [];

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    sections.push({ link, target });

    link.addEventListener("click", e => {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (!sections.length) return;

  function updateActive() {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(({ link, target }) => {
      const top = target.offsetTop;
      const bottom = top + target.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive();
});
