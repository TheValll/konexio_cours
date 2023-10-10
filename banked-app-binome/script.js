"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKER APP

// Data
const accounts = [
  {
    owner: "Hedi Rivas",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  },

  {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },

  {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
  {
    owner: "Valentin Massonniere",
    movements: [438, -1000, 727, 500, 93],
    interestRate: 1,
    pin: 5555,
  },
];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let loginInput = "";
let pinInput = "";

// CREATE A INITIALES FUNCTION

const initialesGenerator = (username) => {
  const mots = username.split(" ");

  let initiales = "";

  for (const mot of mots) {
    if (mot.length > 0) {
      initiales += mot[0].toLowerCase();
    }
  }
  return initiales;
};

// ADD EVENT FOR EACH INPUT FOR LOGIN

inputLoginUsername.addEventListener("input", (e) => {
  loginInput = e.target.value;
});
inputLoginPin.addEventListener("input", (e) => {
  pinInput = e.target.value;
});

// ADD LOGIN CONDITIONS

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < accounts.length; i++) {
    if (
      loginInput === initialesGenerator(accounts[i].owner) &&
      Number(pinInput) === accounts[i].pin
    ) {
      containerApp.style.opacity = "1";
      displayMovements(accounts[i].movements);
      labelWelcome.textContent = `Welome back ${accounts[i].owner} !`;
      inputLoginUsername.value = "";
      inputLoginPin.value = "";
    }
  }
});

// ADD DISPLAY MOVEMENTS

const displayMovements = (movements) => {
  containerMovements.innerHTML = "";

  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// CHANGE DATE CONTENT

const currentDate = new Date();
const day = currentDate.getDate();
const mounth = currentDate.getMonth() + 1;
const years = currentDate.getFullYear();
if (mounth < 10) {
  mounth = "0" + mounth;
}
let dateFormat = mounth + "/" + day + "/" + years;
labelDate.textContent = dateFormat;
