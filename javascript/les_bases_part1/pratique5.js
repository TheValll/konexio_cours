const massMark = 78; // Masse de Mark en kg
const heightMark = 1.69; // Taille de Mark en mètres

const massJohn = 92; // Masse de John en kg
const heightJohn = 1.95; // Taille de John en mètres

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let response;

// if (BMIMark > BMIJohn) {
//   response = "L'IMC de Mark est supérieur à celui de John !";
// } else {
//   response = "L'IMC de John est supérieur à celui de Mark !";
// }
// console.log(response);

if (BMIMark > BMIJohn) {
  response = `L'IMC de Mark (${BMIMark}) est supérieur à celui de John (${BMIJohn}) !`;
} else {
  response = `L'IMC de John (${BMIJohn}) est supérieur à celui de Mark (${BMIMark}) !`;
}
console.log(response);
