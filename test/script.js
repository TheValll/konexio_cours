let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let firstY = () => {
  first.style.backgroundColor = "yellow";
};
let firstG = () => {
  first.style.backgroundColor = "green";
};

let secondY = () => {
  second.style.backgroundColor = "yellow";
};
let secondG = () => {
  second.style.backgroundColor = "green";
};

let thirdY = () => {
  third.style.backgroundColor = "yellow";
};
let thirdG = () => {
  third.style.backgroundColor = "green";
};

const loop = () => {
  setTimeout(() => {
    firstY();
    setTimeout(() => {
      firstG();
      secondY();
      setTimeout(() => {
        secondG();
        thirdY();
        setTimeout(() => {
          thirdG();
        }, 200);
      }, 200);
    }, 200);
    loop();
  }, 600);
};

// // loop();
