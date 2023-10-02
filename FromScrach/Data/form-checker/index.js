const inputs = document.querySelectorAll(
  "input[type=text],input[type=password]"
);
const form = document.querySelector("form");
let pseudo, email, password, confirmPass;
const progressBar = document.querySelector("#progress-bar");

const eroorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    eroorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caracteres");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    eroorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caracteres speciaux"
    );
    pseudo = null;
  } else {
    eroorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
    eroorDisplay("email", "Veuillez entrer un mail valide");
    email = null;
  } else {
    eroorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    eroorDisplay(
      "password",
      "8 caractere, miniscule, majuscule, chiffre et caractere special"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    eroorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    eroorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) {
    confirmChecker(confirmPass);
  }
};

const confirmChecker = (value) => {
  if (value !== password) {
    eroorDisplay("confirm", "Le mot de passe de ne coreespond pas");
    confirmPass = true;
  } else {
    eroorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass === true) {
    const data = {
      pseudo,
      email,
      password,
    };
    inputs.forEach((input) => {
      input.value = "";
    });
    progressBar.classList = "";
    console.log(data);
    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
  } else {
    alert("Veuillez remplir correctement le formulaire");
  }
});
