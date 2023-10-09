const number = (numbers) => {
  return numbers % 2 === 0 ? "nombre pair" : "nombre impair";
};

console.log(number(2), number(3));

function initialGenrattor(nom) {
  const mots = nom.split(" ");

  let initiales = "";

  for (const mot of mots) {
    if (mot.length > 0) {
      initiales += mot[0].toUpperCase() + ".";
    }
  }
  return initiales;
}

console.log(initialGenrattor("Valentin Massonniere"));
