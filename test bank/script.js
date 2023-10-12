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

const users = [
  new Users(
    "Valentin Massonniere",
    [200, 450, -400, 3000, -650, -130, 70, 1300],
    1.2,
    1111
  ),
  new Users("Visitor Visitor", [438, -1000, 727, 500, 93], 0.7, 2222),
];

// Login Function

let currentUser = null;
login__btn.addEventListener("click", (e) => {
  e.preventDefault();
  for (const user of users) {
    if (
      user.initial() === login__input__user.value &&
      user.pin === Number(login__input__pin.value)
    ) {
      currentUser = user;
      break;
    }
  }
  if (currentUser) {
    app.style.opacity = "1";
    welcome.textContent = `Welcome back ${currentUser.owner} !`;
    displayMovements(currentUser.movements);
    displayCurrentBalance();
    InOutInterrestDisplay();
    dateUpdate();
    clearInterval(countdownInterval);
    timerFiveMin();
    login__input__user.value = "";
    login__input__pin.value = "";
  } else {
    alert("You don't have an account please create a new one");
  }
});

// Display movements

const displayMovements = (user) => {
  movements.innerHTML = "";

  user.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    movements.insertAdjacentHTML("afterbegin", html);
  });
  return;
};

// Current balance

const displayCurrentBalance = () => {
  let currentBalance = 0;
  for (let i = 0; i < currentUser.movements.length; i++) {
    currentBalance += currentUser.movements[i];
  }
  currentUser.balance = currentBalance;
  return (balance__value.textContent = `${currentBalance} €`);
};

// Date Update

let dateUpdate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const mounth = currentDate.getMonth() + 1;
  const years = currentDate.getFullYear();
  if (mounth < 10) {
    mounth = "0" + mounth;
  }
  let dateFormat = mounth + "/" + day + "/" + years;
  return (date.textContent = dateFormat);
};

// In/Out/Interrest Display

const InOutInterrestDisplay = () => {
  let inArrayValue = 0;
  let outArrayValue = 0;
  for (let i = 0; i < currentUser.movements.length; i++) {
    if (currentUser.movements[i] > 0) {
      inArrayValue += currentUser.movements[i];
      summary__value__in.textContent = `${inArrayValue} €`;
    } else {
      outArrayValue += currentUser.movements[i];
      summary__value__out.textContent = `${outArrayValue * -1} €`;
    }
  }
  summary__value__interest.textContent = `${(
    (inArrayValue * currentUser.interestRate) /
    100
  ).toFixed(2)} €`;
  return;
};

// Sort Function

btn__sort.addEventListener("click", (e) => {
  if (e.target.innerHTML === "↓ SORT") {
    btn__sort.innerHTML = "↑ SORT";
    const sortMovements = [];
    sortMovements.push(...currentUser.movements);
    sortMovements.sort((a, b) => a - b);
    displayMovements(sortMovements);
  } else if (e.target.innerHTML === "↑ SORT") {
    btn__sort.innerHTML = "↓ SORT";
    displayMovements(currentUser.movements);
  }
});

// Transfert Money

form__btn__transfer.addEventListener("click", (e) => {
  e.preventDefault();
  let transferUser = "";
  for (const user of users) {
    if (user.initial() === form__input__to.value) {
      transferUser = user;
      break;
    }
  }
  if (
    transferUser &&
    transferUser !== currentUser &&
    Number(form__input__amount.value) <= currentUser.balance &&
    Number(form__input__amount.value) > 0
  ) {
    transferUser.movements.push(Number(form__input__amount.value));
    currentUser.movements.push(Number(form__input__amount.value * -1));
    setTimeout(() => {
      displayMovements(currentUser.movements);
      displayCurrentBalance();
      InOutInterrestDisplay();
    }, 3000);
    form__input__to.value = "";
    form__input__amount.value = "";
  } else {
    alert(
      "User of the receiver need to be correct and you need have the necessary money !"
    );
  }
});

// Request Loan

form__btn__loan.addEventListener("click", (e) => {
  e.preventDefault();
  let request = form__input__loa__amount.value;
  if (
    Math.max(...currentUser.movements) >= (request * 10) / 100 &&
    request > 0
  ) {
    form__input__loa__amount.value = "";
    currentUser.balance += Number(request);
    currentUser.movements.push(Number(request));
    setTimeout(() => {
      displayMovements(currentUser.movements);
      displayCurrentBalance();
      InOutInterrestDisplay();
    }, 3000);
  } else {
    alert("Your request need to be > than 10% of your recents deposit");
  }
});

// Close account

form__btn__close.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    form__input__user.value === currentUser.initial() &&
    Number(form__input__pin.value) === currentUser.pin
  ) {
    let userDelete = users.indexOf(currentUser);
    users.splice(userDelete, 1);
    app.style.opacity = "0";
    welcome.textContent = "Log in to get started";
    form__input__user.value = "";
    form__input__pin.value = "";
    currentUser = "";
    console.log(users);
  } else {
    alert("User and Pin need to be correct !");
  }
});

// Timer

let countdownInterval = null;

const timerFiveMin = () => {
  let remainingTime = 5 * 60;

  countdownInterval = setInterval(() => {
    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    timer.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      location.reload();
    }
  }, 1000);
};
