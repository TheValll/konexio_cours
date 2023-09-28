const populations = [5, 67, 83, 47];
const percentageOfWorld = (population) => {
  return (population * 100) / 7900;
};

let i = 0;
const percentageOfWorld3 = [];
while (i < populations.length) {
  percentageOfWorld3.push(percentageOfWorld(populations[i]));
  i++;
}

console.log(percentageOfWorld3);

console.log(percentageOfWorld3[0] === percentageOfWorld(populations[0]));
console.log(percentageOfWorld3[1] === percentageOfWorld(populations[1]));
console.log(percentageOfWorld3[2] === percentageOfWorld(populations[2]));
console.log(percentageOfWorld3[3] === percentageOfWorld(populations[3]));
