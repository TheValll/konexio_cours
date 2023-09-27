const myCountry = {
  country: "France",
  capital: "Paris",
  language: "french",
  population: 68,
  neighbours: ["spain", "germany", "belgium"],
};

myCountry.population += 72;
myCountry["population"] -= 89;

console.log(
  `${myCountry.country} has ${myCountry.population} ${myCountry.country} people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`
);
