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

// Logical Assignment Operators
