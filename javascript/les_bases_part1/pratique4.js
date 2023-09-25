const massMark = 78; // Masse de Mark en kg
const heightMark = 1.69; // Taille de Mark en mètres

const massJohn = 92; // Masse de John en kg
const heightJohn = 1.95; // Taille de John en mètres

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log("Mark a-t-il un IMC plus élevé que John ? " + markHigherBMI);
