const team1Players = [
  "player1",
  "player2",
  "player3",
  "player4",
  "player5",
  "player6",
  "player7",
  "player8",
  "player9",
  "player10",
  "player11",
];
const team2Players = [
  "player1",
  "player2",
  "player3",
  "player4",
  "player5",
  "player6",
  "player7",
  "player8",
  "player9",
  "player10",
  "player11",
];
const gk = team1Players[0];
// console.log(gk);
const fieldPlayers = [...team1Players].slice(1);
//console.log(fieldPlayers);
const allPLayers = team1Players.concat(team2Players);
const players1Final = [...team1Players, "Thiago", "Coutinho", "Perisic"];

const team1 = 60;
const draw = 30;
const team2 = 500;

const printGoals = ([...playersName]) => {
  console.log(
    playersName.toString(),
    `Il y a eu ${playersName.length} buts de marqués`
  );
};
printGoals(team1Players);

const displayWinner = () => {
  team1 > (team2 || draw) &&
    console.log("La team 1 a plus de chance de gagner");
  team2 > (team1 || draw) &&
    console.log("La team 2 a plus de chance de gagner");
  draw > (team1 || team2) &&
    console.log("La team 2 et la team 1 ont la meme chance de gagner");
};

displayWinner();
