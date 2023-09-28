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
// friends.splice(0, 2); // supprime les elements de la place donner et ne prends pas en compte le 2eme chiffre, il faut creer une constante avec slice car il ne modifier le tableau
// friends.filter(function (nom) {
//   return friends.length > 6; // retourne les elements avec plus de 6 caractere
// }); // filtre le tableau, creer une const apart pour copier le nouveau tableau filter

// const myCountry = {
//   country: "France",
//   capital: "Paris",
//   language: "Francais",
//   population: 68,
//   neighbours: ["spain", "germany", "belgium"],
// };

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
// myCountry.location = "Portugal";
// myCountry["twitter"] = "@oui";
// console.log(myCountry);

// const hediDesc = {
//   firstname: "hedi",
//   name: "jspXD",
//   friends: ["Marie", "Paul", "Steven"],
//   bestFriend: "Micheal",
//   birthday: 1991,

//   caclAge() {
//     this.age = 2023 - this.birthday;
//     return this.age;
//   },
// };
// console.log(hediDesc.caclAge());
// console.log(
//   `${hediDesc.firstname} has ${hediDesc.friends.length} friends, and his best friend is called ${hediDesc.bestFriend}.`
// );

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`oui ${rep}`);
// }

// const hediArraw = ["hedi", "rivas", 2037 - 1991, ["steven", "paul"], true];
// const types = [];
// console.log(hediArraw);
// for (let i = 0; i < hediArraw.length; i++) {
//   console.log(typeof hediArraw[i]);
//   types.push(typeof hediArraw[i]);
// }
// console.log(types);
// for (let i = 0; i < hediArraw.length; i++) {
//   if (typeof hediArraw[i] !== "string") continue;
//   console.log(hediArraw[i], typeof hediArraw[i]);
// }

// for (let i = 0; i < hediArraw.length; i++) {
//   if (typeof hediArraw[i] === "number") break;
//   console.log(hediArraw[i], typeof hediArraw[i]);
// }
/////////////////////////////////////////////

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = hediArraw.length - 1; i >= 0; i--) {
//   console.log(i, typeof hediArraw[i]);
// }

// for (let exercice = 1; exercice < 4; exercice++) {
//   console.log(`----Exercice---- ${exercice}`);
//   for (let rep = 5; rep > 0; rep--) {
//     console.log(`Exercie ${exercice} : Lift ${rep}`);
//   }
// }
