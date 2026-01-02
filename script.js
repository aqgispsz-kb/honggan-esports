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

/* === 右側導覽 Smooth Scroll + Active 高亮 === */
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".header nav a"); // 右側導覽
  const sections = [];

  navLinks.forEach(link => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) sections.push(target);

    // Smooth scroll 點擊
    link.addEventListener("click", e => {
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 滾動自動高亮
  function updateActive() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(l => l.classList.remove("active"));
        navLinks[i].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive(); // 初始化一次
});
