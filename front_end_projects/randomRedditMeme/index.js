const memeImg = document.getElementById("meme");
const nextInput = document.getElementById("next");
const dateLabel = document.querySelector(".date");

const random = () => {
  fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => (memeImg.src = data.url));
};

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    random();
  }
});

const dateUpdate = () => {
  let today = new Date();
  let annee = today.getFullYear();
  let mois = today.getMonth() + 1;
  mois.length < 10 ? (mois = "0" + mois) : mois;
  let jour = today.getDate();
  let heures = today.getHours();
  let minutes = today.getMinutes();
  let secondes = today.getSeconds();
  secondes < 10 ? (secondes = "0" + secondes) : secondes;
  dateLabel.textContent =
    jour +
    "/" +
    mois +
    "/" +
    annee +
    " " +
    heures +
    " h " +
    minutes +
    " min " +
    secondes;
};

setInterval(() => {
  dateUpdate();
}, 1000);
dateUpdate();
random();
