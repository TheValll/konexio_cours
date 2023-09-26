let isIsland = false;
let language = "french";
let country = "France";
let population = 68;
let continent = "Europe";
let populationFineland = 6;
let averagePopuation = 33;
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof continent);

// On peux changer la valeur d'une variable const

// continent = "oui";
// console.log(continent);

// population /= 2;
// population++;
// console.log(population > populationFineland);
// console.log(population < averagePopuation);

let oldDescription =
  country +
  " is in " +
  continent +
  ", and it's " +
  population +
  " million people speak " +
  language;
// console.log(oldDescription);

let description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
// console.log(description);

let reponse;
if (population >= averagePopuation) {
  reponse = `${country}'s population is above the average.`;
} else {
  reponse = `La population de la ${country} is ${
    averagePopuation - population
  } millions below the average.`;
}
console.log(reponse);
