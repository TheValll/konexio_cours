const data = [
  {
    firstName: "Valentin",
    name: "Massonniere",
    age: 21,
    email: "valentin78.massonniere@gmail.com",
    pin: 1111,
    user: "vm",
  },
  {
    firstName: "Hedi",
    name: "Ravis",
    age: 29,
    email: "hedi.ravis@gmail.com",
    pin: 2323,
    user: "hr",
  },
];

let userInput = "";
let pinInput = "";

const afterLogin = document.querySelector(".app");
const welcomeText = document.querySelector(".welcome");

//// CREATE LOGIN FUNCTION

const checkLogin = () => {
  for (let i = 0; i < data.length; i++) {
    if (userInput === data[i].user && Number(pinInput) === data[i].pin) {
      afterLogin.style.opacity = "1";
      welcomeText.textContent = `Welcome back, ${data[i].firstName} !`;
      document.querySelector(".login__input--pin").value = "";
      document.querySelector(".login__input--user").value = "";
    }
  }
};

//// ADD EVENT FOR INPUT USER AND PIN

document.querySelector(".login__input--user").addEventListener("input", (e) => {
  userInput = e.target.value;
});

document.querySelector(".login__input--pin").addEventListener("input", (e) => {
  pinInput = e.target.value;
});

//// FUNCTION LOGIN

document.querySelector(".login__btn").addEventListener("click", (e) => {
  e.preventDefault();
  checkLogin();
});

//// CALCUL GLOBAL CURRENT BALANCE

const history = [];
let currentBalance = document.querySelector(".balance__value");
const value = document.querySelectorAll(".movements__value");
value.forEach((e) => {
  history.push(e.innerHTML);
});
let newTable = [];
for (let i = 0; i < history.length; i++) {
  newTable += history[i].replace(/\s/g, "").slice(0, -1);
}
currentBalance.textContent = `${eval(newTable)} E`;

//// CHANGE DATE LOG

const currentDate = new Date();
console.log(currentDate);
const day = currentDate.getDate();
console.log(day);
const mounth = currentDate.getMonth() + 1;
const years = currentDate.getFullYear();
if (mounth < 10) {
  mounth = "0" + mounth;
}
let dateFormat = mounth + "/" + day + "/" + years;
document.querySelector(".date").textContent = dateFormat;
