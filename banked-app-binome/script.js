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
  {
    owner: "Aurelie De Maintenant Isabelle Non",
    movements: [438, -1000, 727, 500, 93],
    interestRate: 1,
    pin: 6666,
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

window.addEventListener("unload", (e) => {
  e.preventDefault();
  return false;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
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

let currentAccount = "";

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
      currentAccount = accounts[i];
      displayBalance(currentAccount);
      displayInOut(currentAccount);
      displayInterest(currentAccount);
      request = 0;
      receiver = "";
      transferCount = 0;
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
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
if (mounth < 10) {
  mounth = "0" + mounth;
}
let dateFormat = mounth + "/" + day + "/" + years;
labelDate.textContent = dateFormat;
let dateMovFormat =
  mounth + "/" + day + "/" + years + " AT " + hours + " h " + minutes;

// CHANGE CURRENT BALANCE

let balanceValue = 0;
const displayBalance = (acc) => {
  for (let i = 0; i < acc.movements.length; i++) {
    balanceValue += acc.movements[i];
  }
  labelBalance.textContent = `${balanceValue} €`;
};

// CHANGE IN AND OUT LABEL

let inValue = 0;
let outValue = 0;
const displayInOut = (value) => {
  for (let i = 0; i < value.movements.length; i++) {
    if (value.movements[i] > 0) {
      inValue += value.movements[i];
    } else if (value.movements[i] < 0) {
      outValue += value.movements[i];
    }
    labelSumIn.textContent = `${inValue}€`;
    labelSumOut.textContent = `${outValue}€`;
  }
};

const displayInterest = (account) => {
  let interestValue = 0;
  interestValue = (inValue * account.interestRate) / 100;
  labelSumInterest.textContent = `${interestValue}€`;
};

// TRANSFERT MONEY

let receiver = "";
inputTransferTo.addEventListener("input", (e) => {
  receiver = e.target.value;
});

let transferCount = 0;
inputTransferAmount.addEventListener("input", (e) => {
  transferCount = e.target.value;
});

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const transferInitials = receiver.toLowerCase();

  let receiverAccount = null;
  for (let i = 0; i < accounts.length; i++) {
    if (transferInitials === initialesGenerator(accounts[i].owner)) {
      receiverAccount = accounts[i];
      break;
    }
  }

  if (receiverAccount && Number(transferCount) <= balanceValue) {
    receiverAccount.movements.push(Number(transferCount));
    balanceValue -= Number(transferCount);
    labelBalance.textContent = `${balanceValue}€`;
    setTimeout(() => {
      displayMovementsLine("withdrawal", transferCount);
    }, "3000");
    inputTransferTo.value = "";
    inputTransferAmount.value = "";
  } else {
    alert("erreur");
  }
});

// REQUEST LOAN

let request = 0;
inputLoanAmount.addEventListener("input", (e) => {
  request = e.target.value;
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  if (Math.max(...currentAccount.movements) >= (request * 10) / 100) {
    setTimeout(() => {
      displayMovementsLine("deposit", request);
    }, "3000");
  } else {
    alert("Your request need to be > than 10% of your recents deposit");
  }
  return false;
});

const displayMovementsLine = (type, request) => {
  const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
    containerMovements.childElementCount + 1
  }${type}</div>
      <div class="movements__date">${dateMovFormat}</div>
      <div class="movements__value">${request}€</div>
    </div>
  `;

  containerMovements.insertAdjacentHTML("afterbegin", html);
};
