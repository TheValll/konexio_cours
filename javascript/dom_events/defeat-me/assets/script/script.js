// Variables balises HTML

let againInput = document.querySelector(".again");
let discussionInput = document.querySelector(".discussion");
let resultInput = document.querySelector("#result");
let pendingInput = document.querySelector("#pendingBot-logo");
let stoneBotInput = document.querySelector("#stoneBot-logo");
let paperBotInput = document.querySelector("#paperBot-logo");
let scissorsBotInput = document.querySelector("#scissorsBot-logo");
let scoreInput = document.querySelector(".score");
let highscoreInput = document.querySelector(".highscore");
let stoneInput = document.querySelector("#stone-logo");
let paperInput = document.querySelector("#paper-logo");
let scissorsInput = document.querySelector("#scissors-logo");
let playInput = document.querySelector(".play");

// Systeme nouvelle partie sur le bouton again
let restartCount = 0;
againInput.addEventListener("click", () => {
  restartCount = 1;
});

// Logique du jeu
playInput.addEventListener("click", () => {
  // Add des regles lorsque play est appuye
  let score = 0;
  let secretSolution;
  discussionInput.textContent = "I chose, you turn ...";
});

//   // Choix d'un chiffre aléatoire entre 1 et 3
//   let randomSolution = () => {
//     let random = Math.floor(Math.random() * 3 + 1);
//     return random;
//   };
//   let random = randomSolution();

//   // Definition entre pierre feuille et ciseaux
//   if (random === 1) {
//     secretSolution = stoneBotInput;
//     console.log("pierre");
//   } else if (random === 2) {
//     secretSolution = paperBotInput;
//     console.log("feuille");
//   } else if (random) {
//     secretSolution = scissorsBotInput;
//     console.log("ciseux");
//   }

let randomSolution = () => {
  return Math.floor(Math.random() * 3 + 1);
};

let choiseAttacx = () => {
  if (random === 1) {
    secretSolution = stoneBotInput;
    console.log("pierre");
  } else if (random === 2) {
    secretSolution = paperBotInput;
    console.log("feuille");
  } else if (random) {
    secretSolution = scissorsBotInput;
    console.log("ciseux");
  }
};
