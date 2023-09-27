const percentageOfWorld2 = (population) => {
  return (population * 100) / 7900;
};

const populations = [5, 67, 83, 47]; //finland france germany spain
// console.log(populations.length === 4);

const pourcentages = [
  percentageOfWorld2(populations[0]),
  percentageOfWorld2(populations[1]),
  percentageOfWorld2(populations[2]),
  percentageOfWorld2(populations[3]),
];
console.log(pourcentages);
