// function oui() {
//   //   console.log("bonjour");
// }

// oui();

// function fruits(num1, num2) {
//   //   console.log(oranges, apples);
//   num2 = num1 * 3;
//   const juice = `Juice with ${num1} and ${num2}.`;
//   //   console.log(juice);\
//   return juice;
// }

// // console.log(fruits(2, 3));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitPorcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangesPieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${oranges} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitPorcessor(2, 3));

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);
// const years = new Array(1991, 1974, 2008, 2020);
// console.log(years.length);
// friends[2] = "Jay";
// console.log(friends);

// const newLengh = friends.push("Marie"); // ajoute une valeur a la fin
// friends.unshift("John"); //ajoute une valeur au debut
// friends.pop(); //eneleve une valeur a la fin
// friends.shift(); //eneleve une valeur au debut
// console.log(friends);
// console.log(newLengh);
// console.log(friends.indexOf("Steven")); //// savoir si le tableau contient avec -1 ou 1
// console.log(friends.indexOf("Bob"));
// friends.push(23);
// console.log(friends.includes("Steven")); // savoir si le tableau contient avec true ou false
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));
// if (friends.includes("Steven")) {
//   console.log("You have a friends called Steven.");
// }

const myCountry = {
  country: "France",
  capital: "Paris",
  language: "Francais",
  population: 68,
  neighbours: ["spain", "germany", "belgium"],
};

// // let codePostal = "Language";
// // console.log(codePostal);
// // console.log(myCountry.capitalLanguage);
// // console.log(myCountry["capital" + codePostal]);

// let interesedBy = prompt("Que veux tu savoir");
// if (myCountry[interesedBy]) {
//   console.log(myCountry[interesedBy]);
// } else {
//   console.log("non");
// }
myCountry.location = "Portugal";
myCountry["twitter"] = "@oui";
console.log(myCountry);
