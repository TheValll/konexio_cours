//// Les structures de controle

/// If, else, while, do while, for, switch

let d = 0;
do {
  d++;
  //   console.log(d);
} while (d < 1);

/// e.target.id
// setInterval(createLetter, 200);

//// Les méthodes :
// typeof connaitre le type d'une variable
// isNan verifie si ce n'est pas un nnombre
// indexOf permet de trouver la position d'un nombre dans un tableau, retourne -1 si inconnu
// slice(nunber) coupe une string ou tableau avec le nombre
// slipt() coupe la valeur donne
// toLowerCase() met tout en miniscule
// replace() remplace la valeur  par la valeur 2
// .toFixed() garde le nombre a virgule a la valeur
// Math.floor() arrondi au nombre le plus bas
// Math.ceil() arrondi au nombre le plus haut
// let newArray = [...arraw1,...arraw2] fussionne é tableaux
// .join rajoute la valeur entre les valeurs du tableaux
// .some() true ou false la valeur dans le tableau
// .reduce() addition les valeur ...
// .filter() filtrer le tableaux
// .sort() trier un tableaux
// .map()
// navigator.clipboard.writeText(passwordOutput.value);

//// Les Dates :

// let date = new Date(); // Date classique
// let timestamp = Date.parse(date); // Timestamp
// date.toISOString; // IsoString

// dateParser = (chaine) => {
//   let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//   });
//   return newDate;
// };
// console.log(dateParser(date));

//// Destructuring :
// let moreDta = {
//   destVar: ["elet1", "elet2"],
// };

// const { destVar } = moreDta;

// let table = [70, 80, 90];
// let [x, y, z] = table;
// console.log(x, y, z);

//// Les dataset :
// data-nom=""; dans les balises html

//// Le regex :

// let mail = "valentin78.massonniere@gmail.com";
// // console.log(mail.search(/@/));
// // console.log(mail.replace(/@/, "?"));
// console.log(mail.match(/9/i));
// console.log(mail.match(/[9]/));
