// 🎵 Music Player Control
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");
let playing = false;

toggle.addEventListener("click", () => {
  if (!playing) {
    music.play();
    toggle.classList.add("playing");
  } else {
    music.pause();
    toggle.classList.remove("playing");
  }
  playing = !playing;
});
