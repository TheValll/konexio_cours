const populations = [5, 67, 83, 47];
const percentageOfWorld = (population) => {
  return (population * 100) / 7900;
};
const percentageOfWorld2 = [];
for (let i = 0; i < populations.length; i++) {
  percentageOfWorld2.push((populations[i] * 100) / 7900);
}
console.log(percentageOfWorld2);

console.log(percentageOfWorld(populations[0]));
console.log(percentageOfWorld(populations[1]));
console.log(percentageOfWorld(populations[2]));
console.log(percentageOfWorld(populations[3]));
