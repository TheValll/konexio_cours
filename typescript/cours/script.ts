const seum = (a: number, b: number) => {
  return a + b;
};

console.log(seum(7, 5));

const greet = (name?: string) => {
  if (name) {
    return `Hello ${name}`;
  }
  return "Hello";
};

console.log(greet());

///// PART 1

/** Ecrivez une fonction nommée "twoFer" qui prendra
 * un paramètre 'person'.
 * Elle devra retourner une string au format "one for <name>, one for me"
 * Si aucun nom n'est entré en argument, spécifiez une valeur par défaut : 'you'
 *
 * twoFer() // "One for you, one for me"
 * twoFer('Mike') // "One for Mike, one for me'"
 */

const twoFer = (name?: string): string => {
  return name ? `One for ${name}, one for me` : "One for you, one for me";
};

console.log(twoFer());
console.log(twoFer("Mike"));

///// PART 2

/** Ecrivez une fonction 'isLeapYear' qui prendra en argument une année et qui renverra true/false selon que l'année soit bissextile ou pas.
 * isLeapYear(2012) // true
 * isLeapYear(2013) // false
 *
 * Pour déternminer si une année est bissextile, utilisez la formule suivante :
 *
 * Une année est bissextile SI :
 *
 *  year est un mutliple de 4 ET s'il n'est pas un mutliple de 100
 *
 *  OU...
 *
 *  year est un mutliple de 400
 *
 * Astuce : utilisez modulo
 */

const isLeapYear = (year: number): boolean => {
  return year % 4 === 0;
};

console.log(isLeapYear(2012)); // true
console.log(isLeapYear(2013)); // false
console.log(isLeapYear(2024)); // false

const mySong = {
  title: "Can't C Me",
  artiste: "2Pac",
  numStreams: 43628183,
  credits: {
    producer: "Dr. Dre",
    writer: "Tupac Shakur",
  },
};

const calPayout = (song: {
  title: string;
  artiste: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
}): string => {
  return `${(song.numStreams * 0.0033).toLocaleString("fr-FR")} €`;
};

console.log(calPayout(mySong));
