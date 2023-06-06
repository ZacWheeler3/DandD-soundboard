const sounds = [
  "chappelle-show",
  "jeopardy",
  "john-cena",
  "beacon",
  "bonk",
  "commercial-break",
  "enemy-spotted",
  "god dayum",
  "goofy-yell",
  "got-you-homie",
  "Milk",
  "RIZZ",
  "Let's Go!",
  "Spongebob, OH BROTHER!",
  "Seinfeld Theme",
  "THAT'S RACIST",
  "Valley girl fine",
  "We'll be right back!",
  "Whatdogdoin",
  "YEET!",
  "Cartoon run #1",
  "Cartoon run #2",
  "Cartoon chase",
  "Cartoon pain #1",
  "Cartoon pain #2",
  "Cartoon pain #3",
  "Palpatine DEW IT",
  "2 hours later..",
  "Halo announcer-betrayal",
  "DND game ready",
  "ITYSL-dont do the voice",
  "ITYSL-he admit it",
  "ITYSL-come here",
  "ITYSL-stinky",
  "ITYSL-didnt do S***"
  
  
];

document.addEventListener("DOMContentLoaded", () => {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    btn.addEventListener("click", () => {
      stopSongs();
      audio.play();
    });

    document.getElementById("buttons").appendChild(btn);
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}