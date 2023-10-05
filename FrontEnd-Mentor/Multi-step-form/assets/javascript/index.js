////////////// STEP 1 //////////////

const inputs = document.querySelectorAll("input[type=text]");
let activeStep1 = document.getElementById("1");
let activeStep2 = document.getElementById("2").classList.remove("activeBg");
let activeStep3 = document.getElementById("3").classList.remove("activeBg");
let activeStep4 = document.getElementById("4").classList.remove("activeBg");
const form = document.querySelector("form");
let surname;
let email;
let phone;
let currentStep = 1;

// Create the errorDisplay function
const errorDisplay = (tag, message, valid) => {
  const span = document.querySelector("." + tag + "--container > span");
  if (!valid) {
    span.classList.add("error");
    span.textContent = message;
  } else {
    span.classList.remove("error");
    span.textContent = message;
  }
};

// Create function for each inputs
const surnameChecked = (value) => {
  if (!value.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
    errorDisplay("surname", "Your name must match the format");
    surname = null;
  } else {
    errorDisplay("surname", "", true);
    surname = value;
  }
};

const emailChecked = (value) => {
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)) {
    errorDisplay("email", "Your email must match the format");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const phoneChecked = (value) => {
  if (!value.match(/^((\+)33|0)[1-9](\d{2}){4}$/)) {
    errorDisplay(
      "phone",
      "Your phone number must match the french phone number format"
    );
    phone = null;
  } else {
    errorDisplay("phone", "", true);
    phone = value;
  }
};

// Create an event for each inputs

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "surname":
        surnameChecked(e.target.value);
        break;
      case "email":
        emailChecked(e.target.value);
        break;
      case "phone":
        phoneChecked(e.target.value);
        break;
      default:
        null;
    }
  });
});

// Add event for the step 2
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (surname && email && phone) {
    currentStep++;
    const data = [surname, email, phone];
    console.log(data);
    document.querySelector(".step1").style.display = "none";
    document.querySelector(".step2").style.display = "block";
    activeStep2 = document.getElementById("2").classList.add("activeBg");
    activeStep1 = document.getElementById("1").classList.remove("activeBg");
  } else {
    alert("Please fill in the form correctly");
  }
});

////////////// STEP 2 //////////////

const plan1 = document.querySelector(".plan1");
const plan2 = document.querySelector(".plan2");
const plan3 = document.querySelector(".plan3");
let planSelect;

// Border animation function

plan1.addEventListener("click", () => {
  plan1.classList.add("current");
  plan2.classList.remove("current");
  plan3.classList.remove("current");
  planSelect = 1;
});
plan2.addEventListener("click", () => {
  plan2.classList.add("current");
  plan1.classList.remove("current");
  plan3.classList.remove("current");
  planSelect = 2;
});
plan3.addEventListener("click", () => {
  plan3.classList.add("current");
  plan1.classList.remove("current");
  plan2.classList.remove("current");
  planSelect = 3;
});

gobackS2.addEventListener("click", () => {
  document.querySelector(".step1").style.display = "block";
  document.querySelector(".step2").style.display = "none";
});

nextS2.addEventListener("click", () => {
  if (nextS2) {
    document.querySelector(".step2").style.display = "none";
  } else {
    alert("Please select a form");
  }
});
