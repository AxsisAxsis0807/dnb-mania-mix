const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const music = document.getElementById("music");

let notes = [];

fetch("data/notes.json")
  .then(res => res.json())
  .then(data => {
    notes = data.notes;
    music.play();
    requestAnimationFrame(update);
  });

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const currentTime = music.currentTime;

  for (let note of notes) {
    const timeDiff = note.time - currentTime;
    const y = 500 - timeDiff * 200; // 落下スピード調整
    if (y > -50 && y < 600) {
      ctx.fillStyle = "lime";
      ctx.fillRect(note.lane * 100 + 100, y, 80, 20);
    }
  }

  requestAnimationFrame(update);
}
