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
  constructor(owner, movements, interestRate, pin, dates) {
    this.owner = owner;
    this.movements = movements.map((mov, i) => ({ mov, date: dates[i] }));
    this.interestRate = interestRate;
    this.pin = pin;
  }
}

Users.prototype.initial = function () {
  let words = "";
  this.owner.split(" ").map((word) => {
    if (word.length > 0) words += word[0].toLowerCase();
  });
  return words;
};

const users = [
  new Users("Visitor Visitor", [438, -1000, 727], 0.7, 1111, [
    "2023-09-09T17:01:17.194Z",
    "2023-09-18T23:36:17.929Z",
    "2023-09-21T10:51:36.790Z",
  ]),
];

//////////////
// Reload page
//////////////

const reloadStat = () => {
  displayMovements(currentUser.movements);
  displayCurrentBalance();
  InOutInterrestDisplay();
};

//////////////////
// Login Function
//////////////////

let currentUser = null;
login__btn.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser = users.find(
    (user) =>
      user.initial() === login__input__user.value &&
      user.pin === Number(login__input__pin.value)
  );
  if (currentUser) {
    form__signup.style.opacity = "0";
    signup.style.display = "none";
    app.style.opacity = "1";
    welcome.textContent = `Welcome back ${currentUser.owner} !`;
    reloadStat();
    date.textContent = new Intl.DateTimeFormat("fr-FR").format(new Date());
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
  const existingUser = users.find((user) => user.owner === nameUser.value);

  if (existingUser) {
    alert(
      "A user with the same name already exists. Please choose a different name."
    );
    return;
  }

  if (!nameUser.value.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)) {
    nameUser.style.border = "2px solid red";
    pin.style.border = "1px solid black";
    return;
  }

  if (!pin.value.match(/^\d{4}$/)) {
    pin.style.border = "2px solid red";
    nameUser.style.border = "1px solid black";
    return;
  }

  users.push(
    new Users(nameUser.value, [200], 1, Number(pin.value), [new Date()])
  );
  form__signup.style.opacity = "0";
  welcome.textContent = `Welcome ! Your user is your initials, for example, "Sarah Smith" -> "ss"`;
  nameUser.value = "";
  pin.value = "";
  login__input__user.value = "";
  login__input__pin.value = "";
});

////////////////////
// Display movements
////////////////////

const displayMovements = (user) => {
  movements.innerHTML = "";

  user.forEach((movObj, i) => {
    const type = movObj.mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">${dateCalc(
      movObj.date
    )}</div> <!-- Change here -->
    <div class="movements__value">${movObj.mov.toFixed(2)}€</div>
  </div>`;
    movements.insertAdjacentHTML("afterbegin", html);
  });
};

//////////////////
// Current balance
//////////////////

const displayCurrentBalance = () => {
  let currentBalance = 0;
  currentUser.movements.forEach((movObj) => {
    currentBalance += movObj.mov;
  });
  currentUser.balance = currentBalance;
  return (balance__value.textContent = `${currentUser.balance.toFixed(2)} €`);
};

//////////////
// Dates Calc
//////////////

let dateCalc = (date) => {
  let result = Math.floor(
    (new Date() - new Date(date)) / (1000 * 60 * 60 * 24)
  );

  return result < 1
    ? "Today"
    : result === 1
    ? "Yesterday"
    : result + " days ago";
};

///////////////////////////
// In/Out/Interrest Display
///////////////////////////

const InOutInterrestDisplay = () => {
  let inArrayValue = 0;
  let outArrayValue = 0;
  currentUser.movements.map((obj) => {
    obj.mov > 0
      ? (summary__value__in.textContent = `${(inArrayValue += obj.mov).toFixed(
          2
        )} €`)
      : (summary__value__out.textContent = `${(outArrayValue +=
          obj.mov * -1).toFixed(2)} €`);
  });

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
  e.target.innerHTML === "↓ SORT"
    ? (() => {
        btn__sort.innerHTML = "↑ SORT";
        const sortMovements = [...currentUser.movements];
        sortMovements.sort((a, b) => a.mov - b.mov);
        displayMovements(sortMovements);
      })()
    : (() => {
        btn__sort.innerHTML = "↓ SORT";
        displayMovements(currentUser.movements);
      })();
});

//////////////////
// Transfert Money
//////////////////

form__btn__transfer.addEventListener("click", (e) => {
  e.preventDefault();
  let transferUser = "";
  transferUser = users.find((user) => user.initial() === form__input__to.value);
  if (
    transferUser &&
    transferUser !== currentUser &&
    Number(form__input__amount.value) <= currentUser.balance &&
    Number(form__input__amount.value) > 0
  ) {
    transferUser.movements.push({
      mov: Number(form__input__amount.value),
      date: new Date(),
    });
    currentUser.movements.push({
      mov: Number(form__input__amount.value * -1),
      date: new Date(),
    });
    setTimeout(() => {
      reloadStat();
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
    Math.max(...currentUser.movements.map((movObj) => movObj.mov)) >=
      (request * 10) / 100 &&
    request > 0
  ) {
    form__input__loa__amount.value = "";
    currentUser.balance += Number(request);
    currentUser.movements.push({ mov: Number(request), date: new Date() });
    setTimeout(() => {
      reloadStat();
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
  const initials = currentUser.owner
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .toLowerCase();
  if (
    form__input__user.value === initials &&
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
