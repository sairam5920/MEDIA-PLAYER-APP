let audio = document.getElementById("audio");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let fileInput = document.getElementById("fileInput");
let nowPlaying = document.getElementById("nowPlaying");

let playlist = [];
let currentTrack = 0;

fileInput.addEventListener("change", (e) => {
  playlist = Array.from(e.target.files);
  currentTrack = 0;
  if (playlist.length > 0) {
    loadTrack(currentTrack);
  }
});

function loadTrack(index) {
  let file = playlist[index];
  audio.src = URL.createObjectURL(file);
  audio.load();
  nowPlaying.textContent = `Now Playing: ${file.name}`;
  audio.play();
}

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

prevBtn.addEventListener("click", () => {
  if (playlist.length === 0) return;
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
});

nextBtn.addEventListener("click", () => {
  if (playlist.length === 0) return;
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
});
