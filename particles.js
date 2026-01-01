const canvas = document.getElementById("gold-particles");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = canvas.offsetWidth;
  h = canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = [];
const COUNT = 120;

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * -h;
    this.size = Math.random() * 1.6 + 0.4;
    this.speed = Math.random() * 0.6 + 0.2;
    this.alpha = Math.random() * 0.6 + 0.3;
    this.depth = Math.random();
  }

  update() {
    this.y += this.speed * (0.6 + this.depth);
    this.alpha -= 0.0008;

    if (this.y > h || this.alpha <= 0) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 215, 120, ${this.alpha})`;
    ctx.arc(this.x, this.y, this.size * (0.6 + this.depth), 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < COUNT; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();
