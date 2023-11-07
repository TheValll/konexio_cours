function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));
// Expected: 3

const COOKING_TIME = 11;

function pastaCooking(timeSpent) {
  return COOKING_TIME - timeSpent;
}

console.log(pastaCooking(5));

function square(a) {
  return Math.pow(a, 2);
}

console.log(square(3));

function calculateSquareRoot(number) {
  return Math.sqrt(number);
}

console.log(calculateSquareRoot(16));
// Expected: 4

function filterPerfectCities(cities) {
  let perfectCities = cities
    .filter((city) => city.includes("a") || city.includes("A"))
    .sort();

  return perfectCities;
}

console.log(
  filterPerfectCities([
    "Paris",
    "Lyon",
    "Marseille",
    "Bruxelles",
    "Monaco",
    "Nice",
  ])
);

function countWithMe(numbers) {
  return numbers
    .flat()
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

const numbersExample = [
  [6, 3, 1, 0, 2],
  [1, 1, 9, 8, 7],
  [0, 7, 3, 4, 1],
  [8, 4, 5, 2, 1],
  [1, 9, 3, 3, 5],
];
console.log(countWithMe(numbersExample));
// Expected: 94

function findMissingScores(games) {
  const result = [];
  games.forEach((el) => {
    if (!el.score) {
      result.push(el.name);
    }
  });
  return result.sort().join("");
}

console.log(
  findMissingScores([
    { name: "Street Fighter V" },
    { name: "WWE 2K22", score: 77 },
    { name: "Animal Crossing: New Horizons" },
    { name: "The Legend of Zelda: Breath of the Wild", score: 97 },
  ])
);

function getMultiplicationTable(number) {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = [];

  arr.forEach((el) => {
    result.push(`${el} x${number} = ${el * number}`);
  });

  return result;
}

console.log(JSON.stringify(getMultiplicationTable(5)));

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(2)); // Expected: true
console.log(isPrimeNumber(23)); // Expected: true
console.log(isPrimeNumber(99)); // Expected: false

function getSecretCode(message) {
  let secret = message.replace(/[a-z]/g, "");
  return secret;
}

console.log(
  getSecretCode(
    "wzrmkVkxjdhigcfwsxufbchwsyyfIhwvvjcnuacVmxewaqkEempu-vgbzvsjmxLrskwydpnhEc-itbtPghwhawRdtaschxqOfarjFtxaixznaiu-aiu❤️t"
  )
);

function leetGenerator(message) {
  let messageFZUGF = "";
  const oui = {
    A: 4,
    E: 3,
    F: "ph",
    H: "#",
    I: "!",
    L: 1,
    O: 0,
    S: 5,
    " ": "_",
  };
  for (let letter of message.toUpperCase()) {
    messageFZUGF += oui[letter] || letter;
  }
  return messageFZUGF;
}

console.log(leetGenerator("This language is so funny"));
