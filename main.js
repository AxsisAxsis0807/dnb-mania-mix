const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const music = document.getElementById("music");

// ゲーム開始処理
music.addEventListener("canplaythrough", () => {
  music.play();
  startGame();
});

function startGame() {
  // 背景を描画
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // テキスト表示
  ctx.fillStyle = "#fff";
  ctx.font = "24px Arial";
  ctx.fillText("D&B Mania Mix", 150, 100);
  ctx.fillText("Opposition Test", 135, 140);
}
