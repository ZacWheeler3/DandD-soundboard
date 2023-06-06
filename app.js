const sounds = [
  "war drums",
  "village ambience",
  "sword drawn",
  "bugs",
  "vampire",
  "morning ambience",
  
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  const listItem = document.createElement("li");
  listItem.appendChild(btn);

  document.getElementById("audio-list").appendChild(listItem);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    if (song) {
      song.pause();
      song.currentTime = 0;
    }
  });
}
