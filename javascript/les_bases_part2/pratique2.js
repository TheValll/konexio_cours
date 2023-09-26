function percentageOfWorld1(population, country) {
  population = `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
  return population;
}

let populationFrance = percentageOfWorld1(8, "France");
let populationFinland = percentageOfWorld1(68, "Finland");
let populationGermany = percentageOfWorld1(6, "Germany");

console.group("descCountry");
console.log(populationFrance);
console.log(populationFinland);
console.log(populationGermany);
console.groupEnd();

const france = function percentageOfWorld2(population, country) {
  population = `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
  return population;
};

const finland = function percentageOfWorld2(population, country) {
  population = `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
  return population;
};

const germany = function percentageOfWorld2(population, country) {
  population = `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
  return population;
};

console.group("descCountry2");
console.log(france(8, "France"));
console.log(finland(68, "Finland"));
console.log(germany(6, "Germany"));
console.groupEnd();
