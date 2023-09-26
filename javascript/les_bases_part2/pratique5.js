const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);
let winner;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    winner = `Team Dolphins win with ${avgDolphins} pts vs team Koalas with ${avgKoalas}.`;
  } else if (avgKoalas >= avgDolphins * 2) {
    winner = `Team Koalas win with ${avgKoalas} pts vs team Dolphins with ${avgDolphins}.`;
  } else {
    winner = `Nobody win.`;
  }
};

checkWinner(scoreDolphins, scoreKoalas);
console.log(winner);
