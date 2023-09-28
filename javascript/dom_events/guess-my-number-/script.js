"use strict";

let messageInput = document.querySelector(".message");
let numberInput = document.querySelector(".number");
let scoreInput = document.querySelector(".score");
let checkInput = document.querySelector(".check");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let body = document.querySelector("body");
let againInput = document.querySelector(".again");
let highscore = 0;
let highscoreInput = document.querySelector(".highscore");
const message = (messages) => {
  return (document.querySelector(".message").textContent = messages);
};
// console.log(typeof numberInput);
// console.log(typeof guess);
console.log(secretNumber);

// Checking if the input is valid

checkInput.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    messageInput.textContent = "Not a number !";
    numberInput.value = secretNumber;
    // If Player win
  } else if (guess === secretNumber) {
    messageInput.textContent = "You won the game";
    body.style.backgroundColor = "green";
    numberInput.style.width = "30rem";
    numberInput.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreInput.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? "Too High !" : "Too Low !");
      score--;
      scoreInput.textContent = score;
    } else {
      message("Game Over !");
      scoreInput.textContent = 0;
      body.style.backgroundColor = "orange";
    }
  }
});

againInput.addEventListener("click", () => {
  score = 20;
  scoreInput.textContent = score;
  messageInput.textContent = "Start guessing ...";
  body.style.backgroundColor = "#222";
  numberInput.style.width = "15rem";
  numberInput.textContent = "?";
  let guess = Number((document.querySelector(".guess").value = ""));
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
