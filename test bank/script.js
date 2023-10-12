"use strict";

// Data

class Users {
  constructor(owner, movements, interestRate, pin) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.pin = pin;
  }
}
Users.prototype.initial = function () {
  const words = this.owner.split(" ");
  let initials = "";
  for (const word of words) {
    if (word.length > 0) {
      initials += word[0].toLowerCase();
    }
  }
  return initials;
};

const user1 = new Users(
  "Valentin Massonniere",
  [200, 450, -400, 3000, -650, -130, 70, 1300],
  1.2,
  1111
);
const user2 = new Users(
  "Visitor Visitor",
  [438, -1000, 727, 500, 93],
  0.7,
  2222
);

// Elements

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

// Login Function

login__btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputLoginUsername.value === Users.initial(owner) &&
    Number(inputLoginPin) === Users.pin
  ) {
    console.log("oui");
  }
});

// Display movements

const displayMovements = (movement) => {
  movements.innerHTML = "";

  movement.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    movements.insertAdjacentHTML("afterbegin", html);
  });
};
