const percentageOfWorld2 = (population) => {
  return (population * 100) / 7900;
};

const describePopulation = (country, population) => {
  return `${country} has ${population} million people,so it's about ${percentageOfWorld2(
    population
  )}  of the world population.`;
};

console.log(describePopulation("france", 8));
