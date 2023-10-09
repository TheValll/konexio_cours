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

//// CREATE LOGOUT FUNCTION

const checkLogout = () => {
  for (let i = 0; i < data.length; i++) {
    if (userConfirm === data[i].user && Number(pinConfirm) === data[i].pin) {
      afterLogin.style.opacity = "0";
      welcomeText.textContent = "Log in to get started";
      document.querySelector(".form__input--user").value = "";
      document.querySelector(".form__input--pin").value = "";
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

//// CALCUL GLOBAL CURRENT BALANCE AND POS AND NEG VALUES SET UP

let history = [];
let posValue = [];
let negValue = [];
let currentBalance = document.querySelector(".balance__value");
const value = document.querySelectorAll(".movements__value");
value.forEach((e) => {
  history.push(e.innerHTML);
});
let newTable = [];
for (let i = 0; i < history.length; i++) {
  newTable += history[i].replace(/\s/g, "").slice(0, -1);
  if (history[i].replace(/\s/g, "").slice(0, -1) > 0) {
    posValue.push(history[i].replace(/\s/g, "").slice(0, -1));
  } else {
    negValue.push(history[i].replace(/\s/g, "").slice(0, -1));
  }
}

currentBalance.textContent = `${eval(newTable)} €`;
currentBalance = eval(newTable);

// ADD VALUE FOR POS AND NEG CONTENT

document.querySelector(".summary__value--in").textContent = `${eval(
  posValue.join()
)} €`;

document.querySelector(".summary__value--out").textContent = `${eval(
  negValue.join()
)} €`;

//// CHANGE DATE LOG

const currentDate = new Date();
const day = currentDate.getDate();
const mounth = currentDate.getMonth() + 1;
const years = currentDate.getFullYear();
if (mounth < 10) {
  mounth = "0" + mounth;
}
let dateFormat = mounth + "/" + day + "/" + years;
document.querySelector(".date").textContent = dateFormat;

// CLOSE ACCOUNT

let userConfirm = "";
document.querySelector(".form__input--user").addEventListener("input", (e) => {
  userConfirm = e.target.value;
});
let pinConfirm = "";
document.querySelector(".form__input--pin").addEventListener("input", (e) => {
  pinConfirm = e.target.value;
});

document.querySelector(".form__btn--close").addEventListener("click", (e) => {
  e.preventDefault();
  checkLogout();
});

// ADD MONEY

let addMoney = 0;
document
  .querySelector(".form__input--loan-amount")
  .addEventListener("input", (e) => {
    addMoney = e.target.value;
  });

document.querySelector(".form__btn--loan").addEventListener("click", (e) => {
  e.preventDefault();
  if (addMoney > 0 && addMoney <= currentBalance) {
    //// AJOUTER UN INNER HTML
    console.log("add money");
  } else {
    alert(
      "Please add number betwwen 0 and less or equal at your current balance"
    );
  }
});
