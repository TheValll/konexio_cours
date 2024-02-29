const display = document.getElementById("display");
const cells = document.querySelectorAll(".cell");

cells.forEach((input) => {
  input.addEventListener("click", (e) => {
    display.value += e.target.value;
  });
});

document.getElementById("delete").addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

document.getElementById("reset").addEventListener("click", () => {
  display.value = "";
});

document.getElementById("result").addEventListener("click", () => {
  display.value = eval(display.value);
});
