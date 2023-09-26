function percentageOfWorld1(population, country) {
  return `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
}

let populationFrance = percentageOfWorld1(8, "France");
let populationFinland = percentageOfWorld1(68, "Finland");
let populationGermany = percentageOfWorld1(6, "Germany");

console.group("descCountry");
console.log(populationFrance);
console.log(populationFinland);
console.log(populationGermany);
console.groupEnd();

const percentageOfWorld2 = function (population, country) {
  return `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
};

console.group("descCountry2");
console.log(percentageOfWorld2(8, "France"));
console.log(percentageOfWorld2(68, "Finland"));
console.log(percentageOfWorld2(6, "Germany"));
console.groupEnd();
