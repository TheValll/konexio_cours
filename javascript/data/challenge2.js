const gamescored = ["Lewandowski", "Paulo", "Giroud"];

for ([i, el] of gamescored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const cotes = {
  team1: 60,
  draw: 30,
  team2: 500,
};
const value = Object.values(cotes);
console.log(cotes);
console.log(value);
let average = 0;

for (i of value) {
  average += i;
}
average /= value.length;
console.log(average);
console.log((60 + 30 + 500) / 3);
