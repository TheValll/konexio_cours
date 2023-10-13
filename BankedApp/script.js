"use strict";

///////////////////////////////////////////
// Prevent option when user press enter key
///////////////////////////////////////////

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
  }
});

///////
// Data
///////

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
  new Users("Visitor Visitor", [438, -1000, 727, 500, 93], 0.7, 1111),
];

//////////////////
// Login Function
//////////////////

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
    form__signup.style.opacity = "0";
    signup.style.display = "none";
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
    alert("You don't have an account, please create one !");
  }
});

///////////////////
// Sign up function
///////////////////

signup.addEventListener("click", (e) => {
  e.preventDefault();
  form__signup.style.opacity = "1";
});

document.addEventListener("keydown", (e) => {
  if (form__signup.style.opacity === "1" && e.key === "Escape") {
    form__signup.style.opacity = "0";
  }
});

register.addEventListener("click", (e) => {
  e.preventDefault();
  let newUser = null;
  const newUserInitial = nameUser.value.toLowerCase();

  for (const user of users) {
    if (newUserInitial === user.initial()) {
      newUser = user;
      break;
    }
  }

  if (
    nameUser.value.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/) &&
    pin.value.match(
      /^(0{3}[1-9]|0{2}[1-9][0-9]|0[1-9][0-9]{2}|[1-9][0-9]{3}|9999)$/
    ) &&
    !newUser
  ) {
    users.push(new Users(nameUser.value, [200], 1, Number(pin.value)));
    form__signup.style.opacity = "0";
    welcome.textContent = `Welcome ! Your user is your initials, for example, "Sarah Smith" -> "ss"`;
    nameUser.value = "";
    pin.value = "";
    login__input__user.value = "";
    login__input__pin.value = "";
  } else {
    if (nameUser.value.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)) {
      pin.style.border = "2px solid red";
      nameUser.style.border = "1px solid black";
    } else {
      nameUser.style.border = "2px solid red";
      pin.style.border = "1px solid black";
    }
  }
});

////////////////////
// Display movements
////////////////////

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

//////////////////
// Current balance
//////////////////

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

///////////////////////////
// In/Out/Interrest Display
///////////////////////////

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

////////////////
// Sort Function
////////////////

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

//////////////////
// Transfert Money
//////////////////

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
      "You must write the initials of the receiver and have the necessary money in your account !"
    );
  }
});

///////////////
// Request Loan
///////////////

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
    alert(
      "Your credit application must not exceed 10% of your highest deposit !"
    );
  }
});

////////////////
// Close account
////////////////

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
    signup.style.display = "block";
  } else {
    alert("Your credentials must be correct !");
  }
});

////////
// Timer
////////

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
