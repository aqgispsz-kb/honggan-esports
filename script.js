/* === 金粉粒子生成 === */
const particles = document.getElementById("particles");

function createParticle() {
  const p = document.createElement("span");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (8 + Math.random() * 6) + "s"; // 慢速更高級
  p.style.opacity = 0.4 + Math.random() * 0.4;
  particles.appendChild(p);
  setTimeout(() => p.remove(), 15000);
}
setInterval(() => createParticle(), 250);

/* === Scroll Reveal === */
const reveals = document.querySelectorAll(".reveal");
function onScroll() {
  const winH = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < winH - 80) el.classList.add("active");
  });
}
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
