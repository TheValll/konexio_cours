const inputValeurA = document.querySelector("#a");

const inputValeurB = document.querySelector("#b");
const form = document.querySelector("form");
let a;
let b;

inputValeurA.addEventListener("input", (e) => {
  a = e.target.value;
});

inputValeurB.addEventListener("input", (e) => {
  b = e.target.value;
});

const pythagore = (num1, num2) => {
  response = Math.sqrt(num1 * num1 + num2 * num2);
  return response;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (a == null || b == null) {
    alert("Veuillez saisir des valeurs");
  } else {
    pythagore(a, b);
    document.querySelector("form > div").innerHTML = `
    <p>L'hypothenus est egal a ${response} (dans votre unite de mesure).</p>
    `;
  }
});
