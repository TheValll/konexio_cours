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

const afterLogin = document.querySelector(".after--login");
const welcomeText = document.getElementById("welcome--text");

const checkLogin = () => {
  for (let i = 0; i < data.length; i++) {
    if (userInput === data[i].user && Number(pinInput) === data[i].pin) {
      afterLogin.style.display = "block";
      welcomeText.textContent = `Welcome back, ${data[i].firstName} !`;
    }
  }
};

document.getElementById("user--input").addEventListener("input", (e) => {
  userInput = e.target.value;
});

document.getElementById("pin--input").addEventListener("input", (e) => {
  pinInput = e.target.value;
});

document.getElementById("submit--input").addEventListener("click", () => {
  checkLogin();
});
