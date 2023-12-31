// SET VARIABLES AT THE ELEMENTS HTML

const cardInput = document.querySelectorAll(".card");
const reloadInput = document.querySelector("#reload");
let movesCount = document.querySelector("#moves").textContent;
const highscore = document.querySelector("#highscore").textContent;

// RANDOM CARD FUNCT
const test = [];
const test2 = [];
let devoiled = [];
const random = () => {
  for (let i = 0; i < cardInput.length; i++) {
    cardInput[i].addEventListener("click", () => {
      if (devoiled[i]) {
        alert("Vous avez déjà retourné cette carte");
      } else {
        const numbers = [];
        while (numbers.length < 1) {
          const randomNumber = Math.floor(Math.random() * 8) + 1;
          if (!test.includes(randomNumber)) {
            test.push(randomNumber);
            numbers.push(randomNumber);
          } else if (!test2.includes(randomNumber)) {
            test2.push(randomNumber);
            numbers.push(randomNumber);
          }
        }
        cardInput[
          i
        ].style.background = `url(./assets/img/${numbers[0]}.jpg) center/cover`;
        devoiled[i] = true;
      }
    });
  }
};
