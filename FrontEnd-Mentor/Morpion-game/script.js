const cells = document.querySelectorAll("[data-cells]");
const text = document.getElementById("gameText");
const reload = document.getElementById("reload");
const playerOne = "X";
const playerTwo = "0";
let activePlayer;

const winnerConditions = [0, 1, 2];
console.log(winnerConditions);
const gameLogic = (e) => {
  e.target.innerHTML = activePlayer;
  activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
  text.textContent = `Au tour du joueur ${activePlayer} !`;

  if (checkDraw()) {
    text.textContent = "Match nul !";
  }
};

const init = () => {
  activePlayer = playerOne;
  text.textContent = `Au tour du joueur ${activePlayer} !`;
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  cells.forEach((cell) => {
    cell.removeEventListener("click", gameLogic);
  });
  cells.forEach((cell) => {
    cell.addEventListener("click", gameLogic);
  });
};

init();

const checkDraw = () => {
  return [...cells].every((cell) => {
    return cell.innerHTML === playerOne || cell.innerHTML === playerTwo;
  });
};

const restart = () => {
  init();
};
