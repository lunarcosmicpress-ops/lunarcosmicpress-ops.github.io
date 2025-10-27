// js/music.js
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const toggle = document.getElementById("musicToggle");

  if (!music || !toggle) return;

  // 确保音乐音量适中
  music.volume = 0.4;

  // 点击按钮后播放或暂停音乐
  toggle.addEventListener("click", () => {
    if (music.paused) {
      music.play()
        .then(() => toggle.classList.add("playing"))
        .catch(err => console.log("Playback blocked:", err));
    } else {
      music.pause();
      toggle.classList.remove("playing");
    }
  });
});
