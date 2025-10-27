// js/music.js
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");

  if (!music || !toggle) return;

  // 尝试自动播放（会被浏览器阻止，需手动点击）
  const tryPlay = () => {
    music.play().catch(() => {
      console.log("Autoplay blocked until user interaction");
    });
  };

  // 点击按钮播放 / 暂停
  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      toggle.classList.add("playing");
    } else {
      music.pause();
      toggle.classList.remove("playing");
    }
  });

  tryPlay();
});
