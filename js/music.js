<script>
  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;

  musicToggle.addEventListener('click', () => {
    if (!isPlaying) {
      bgMusic.play();
      musicToggle.classList.add('playing');
      musicToggle.classList.remove('paused');
    } else {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
      musicToggle.classList.add('paused');
    }
    isPlaying = !isPlaying;
  });
</script>
