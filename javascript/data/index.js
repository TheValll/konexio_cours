// Destructuring permet de desctructer un tabelau ou un object dans des variables

const tab1 = [1, 2, 3, 4];
// console.log(tab1); // [1, 2, 3, 4];
const b = [tab1[1], tab1[3]];
// console.log(b); //[2,4];
b.push("6");
// console.log(b); //[2,4,6];
// console.log(tab1);// [1, 2, 3, 4];

// The Spread Operator (…) permet de faire des copies d'une variable dans un tableau sans alterer la variable initial

const name = "John";
const nameS = [...name, "", "S"];
// console.log(name); //John
// console.log(nameS);// ['J','o','h','n','','S']
// console.log(...name); // J o h n
// console.log(nameS.join(""));// JohnS

// Rest Pattern and Parameters permet de prendre en compte tous les arguments dans un tableau lorsqu'on appelle une fonction

const calc = (...numbers) => {
  let response = 0;
  for (const number of numbers) {
    response += number;
  }
  return response;
};

// console.log(calc(1, 2, 3, 4, 5)); //15

// Short circuiting (&& and | | operators) permet de faire un choix lorsqu'une condition est vrai ou fausse

let price = 21;
let price2 = 21;
// console.log(price > 20 && "bonjour"); // Si price>20 est true on dis bonjour ou on dit false // log :bonjour
// console.log(price2 > 20 || "bonjour"); // Si price>20 est false on dis bonjour ou on dit true // log : bonjour

// The Nullish Coalescing Operator (??) permet de verifier si une variable est null ou undefined et permet l'acces la valeur 0;

let guess = 0;
// console.log(guess || 10);
// console.log(guess ?? 10);

// Logical Assignment Operators permet d'asigner la valeur 0 a des variables

// Looping Arrays : The for of Loop

const oui = ["bonjour", 2, 3, 4, 5, 6, 7, 8, 9];
for (item of oui) {
  // console.log(item);
}
for ([i, el] of oui.entries()) {
  // console.log(`${i + 1}:${el}`);
}

// Optional Chaining (?.)

// Looping Objects : Objects Keys, Values and Entries

// Object.keys();
// Object.values();
// Object.entries();

// Sets

// new Set permet de retirer les doublons dans un tableau

const orderSet = new Set(["Pasta", "Pizza", "Risotto", "Pasta", "Risotto"]);
// console.log(orderSet);
const string = "bonjour";
// console.log(new Set(string));
// console.log(orderSet.size);

// .has permet de vérifier si un tableau contient la valeur donnée
// console.log(orderSet.has("Pizza"));

// .add permet de rajouter une valeur dans un tableau
// console.log(orderSet.add("Grillad"));

// .delete permet de delete la valeur donnée
orderSet.delete("Pizza");
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// Maps : Fundamentals

const rest = new Map();
rest.set("name", "Classico");
rest.set(1, "Firenze", "Italy");
rest.set(2, "Lisbon", "Portugal");

// console.log(rest.set(3, "SF, USA"));
// console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
  .set("open", 11)
  .set("closed", 22)
  .set(true, "We're open")
  .set(false, "We're closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("closed")));
