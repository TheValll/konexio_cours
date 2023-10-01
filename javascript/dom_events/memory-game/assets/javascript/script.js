// SET VARIABLES AT THE ELEMENTS HTML

const cardInput = document.querySelectorAll(".card");
const reloadInput = document.querySelector("#reload");
const movesCount = document.querySelector("#moves").textContent;
const highscore = document.querySelector("#highscore").textContent;
const test = [];
const test2 = [];

// GIVE RANDOM NUMBERS AT CARD
for (let i = 0; i < cardInput.length; i++) {
  cardInput[i].addEventListener("click", () => {
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
    console.log(test);
  });
}
