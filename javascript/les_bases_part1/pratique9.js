let scoreDolphins = (96 + 108 + 89) / 3;
// console.log(scoreDolphins);
let scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreKoalas);
let winner;
if (scoreDolphins > scoreKoalas) {
  winner = `Dolphins win the competition with ${scoreDolphins} pts vs ${scoreKoalas} pts for Koalas team`;
} else if ((scoreDolphins = scoreKoalas)) {
  winner = "Both teams has the same score";
} else {
  winner = `Koalas win the competition with ${scoreKoalas} pts vs ${scoreDolphins} pts for Koalas team`;
}
console.log(winner);
