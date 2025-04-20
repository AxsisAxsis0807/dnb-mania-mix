window.onload = async () => {
  const response = await fetch("config.json");
  const config = await response.json();

  document.body.innerHTML = `<h1>${config.title}</h1><ul id="song-list"></ul>`;

  const list = document.getElementById("song-list");

  for (const week of config.weeks) {
    for (const song of week.songs) {
      const li = document.createElement("li");
      li.textContent = `▶︎ ${song}`;
      li.onclick = async () => {
        const songData = await fetch(`${song}.json`).then(r => r.json());
        document.body.innerHTML = `<h2>${songData.songName} - ${songData.bpm} BPM</h2>`;
      };
      list.appendChild(li);
    }
  }
};
