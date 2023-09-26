function describeCountry(country, population, capitalCity) {
  const response = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return response;
}

let descFrance = describeCountry("France", 68, "Paris");
let descFinland = describeCountry("Finland", 83, "Helsinki");
let descGermany = describeCountry("Germany", 6, "Berlin");

console.group("descCountry");
console.log(descFrance);
console.log(descFinland);
console.log(descGermany);
console.groupEnd();
