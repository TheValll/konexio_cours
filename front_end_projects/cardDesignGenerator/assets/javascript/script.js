let surnameVal, cardNumberVal, mounthVal, yearsVal, cvcVal;
const form = document.querySelector("form");
const thanks = document.querySelector(".thanks");
form.classList.remove("formHidden");
thanks.classList.add("thanksHidden");
const continueBtn = document.getElementById("continue");

const numbersFormat = document.getElementById("numbers");
numbersFormat.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\s/g, ""); // Supprime les espaces existants
  let formattedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " "; // Ajoute un espace après chaque groupe de 4 caractères
    }
    formattedValue += value[i];
  }

  numbersFormat.value = formattedValue;
  return numbersFormat.value;
});
const errorDisplay = (tag, message, valid, change, message2) => {
  const span = document.querySelector("." + tag + "-container > span");
  const changeValue = document.querySelector("#" + change + "-change");
  if (!valid) {
    span.classList.add("error");
    span.textContent = message;
  } else {
    span.classList.remove("error");
    span.textContent = message;
    changeValue.textContent = message2;
  }
};

const nameChecked = (value) => {
  if (!value.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
    errorDisplay("surname", "Le nom doit correspondre au format");
    surnameVal = null;
  } else {
    errorDisplay("surname", "", true, "name", value);
    surnameVal = value;
  }
};

const numbersChecked = (value) => {
  if (!value.match(/\b(?:\d[ ]*?){16}\b/)) {
    errorDisplay(
      "numbers",
      "Le numéro de la carte doit correspondre au format"
    );
    cardNumberVal = null;
  } else {
    errorDisplay("numbers", "", true, "card", value);
    cardNumberVal = value;
  }
};

const mounthChecked = (value) => {
  if (!value.match(/^(0[1-9]|1[1]\d|1[1-2])$/)) {
    errorDisplay("date", "Le mois doit correspondre au format");
    mounthVal = null;
  } else {
    errorDisplay("date", "", true, "mounth", value);
    mounthVal = value;
  }
};

const yearsChecked = (value) => {
  if (!value.match(/^(202[3-9]|20[3-9]\d|202[3-9])$/)) {
    errorDisplay("date", "L'année doit correspondre au format");
    yearsVal = null;
  } else {
    errorDisplay("date", "", true, "years", value);
    yearsVal = value;
  }
};

const cvcChecked = (value) => {
  if (!value.match(/^\d{1,3}$/)) {
    errorDisplay("cvc", "Le CVC doit correspondre au format");
    cvcVal = null;
  } else {
    errorDisplay("cvc", "", true, "cvc", value);
    cvcVal = value;
  }
};

const inputs = document.querySelectorAll("input[type=text]");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "surname":
        nameChecked(e.target.value);
        break;
      case "numbers":
        numbersChecked(numbersFormat.value);
        break;
      case "mounth":
        mounthChecked(e.target.value);
        break;
      case "years":
        yearsChecked(e.target.value);
        break;
      case "cvco":
        cvcChecked(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (surnameVal && cardNumberVal && mounthVal && yearsVal && cvcVal) {
    const data = {
      surnameVal,
      cardNumberVal,
      mounthVal,
      yearsVal,
      cvcVal,
    };
    inputs.forEach((input) => {
      input.value = "";
    });
    surnameVal = null;
    cardNumberVal = null;
    mounthVal = null;
    yearsVal = null;
    cvcVal = null;
    console.log(data);
    form.classList.add("formHidden");
    thanks.classList.remove("thanksHidden");
  } else {
    alert("Veuillez remplir correctement le formulaire");
  }
});

continueBtn.addEventListener("click", () => {
  form.classList.remove("formHidden");
  thanks.classList.add("thanksHidden");
  document.getElementById("card-change").textContent = "0000 0000 0000 0000";
  document.getElementById("name-change").textContent = "jane appleseed";
  document.getElementById("date-change").textContent = "00/20";
  document.getElementById("cvc-change").textContent = "000";
});
