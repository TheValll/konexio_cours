const inputValeurA = document.querySelector("#a");

const inputValeurB = document.querySelector("#b");
const form = document.querySelector("form");
let a;
let b;

inputValeurA.addEventListener("input", (e) => {
  a = parseInt(e.target.value);
});
vc;

inputValeurB.addEventListener("input", (e) => {
  b = parseInt(e.target.value);
});

const pythagore = (num1, num2) => {
  response = Math.sqrt(num1 * num1 + num2 * num2);
  return response;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (typeof a === "number" && typeof b === "number") {
    pythagore(a, b);
    document.querySelector("form > div").innerHTML = `
    <p>L'hypothenus est egal a ${response} (dans votre unite de mesure).</p>
    `;
    console.log(typeof a);
    console.log(typeof b);
  } else {
    alert("Veuillez saisir des valeurs correcte ( des nombres )");
    console.log(typeof a);
    console.log(typeof b);
  }
});
