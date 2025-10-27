const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// 生成星星
for (let i = 0; i < 200; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    alpha: Math.random(),
    speed: Math.random() * 0.02 + 0.005
  });
}

// 绘制动画
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(star => {
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();

    star.y -= star.speed;
    if (star.y < 0) star.y = canvas.height;
    star.alpha = Math.random() * 0.8 + 0.2;
  });
  requestAnimationFrame(drawStars);
}

drawStars();

// 确保画布层在背景
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = '-3';
canvas.style.background = 'radial-gradient(ellipse at bottom, #0a0a1a 0%, #000000 100%)';

