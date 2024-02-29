let timerId;
let letters = [];
let correctCount = 0;
let errorCount = 0;
let limitedAccuracy = 0;
const container = document.querySelector(".container");
const endDisplay = document.querySelector(".endDisplay");

const init = async () => {
  // RANDOM SENTENCE
  let oui = "";
  await fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      oui = data.content;
    });
  oui = oui
    .replace(/\s/g, "\u00A0")
    .toLowerCase()
    .replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/[^\w\sàáâäéèêëíìîïóòôöúùûü]/g, "");
  let story = oui.split("");

  // DISPLAY SENTENCE ON SCREEN
  const storyContainer = document.querySelector(".story");
  story.forEach((el) => {
    let div = document.createElement("div");
    div.innerHTML = el;
    letters.push(div);
    storyContainer.appendChild(div);
  });
  endDisplay.style.display = "none";
  container.style.display = "flex";
  game();
};

let gameStart;

const game = () => {
  const storyContainer = document.querySelector(".story");
  let index = 0;
  let currentLetter = letters[index];
  currentLetter.classList.add("current");
  document.addEventListener("keypress", (e) => {
    gameStart = true;
    if (!currentLetter) {
      return;
    }
    if (
      e.key === currentLetter.innerHTML ||
      (e.key === " " && currentLetter.innerHTML === "&nbsp;")
    ) {
      currentLetter.classList.remove("current");
      currentLetter.classList.add("goodLetter");
      index++;
      currentLetter.classList.add("current");
      correctCount++;
      currentLetter = letters[index];
      accuracy(correctCount, errorCount);
      calcSpeed();
      if (currentLetter) {
        currentLetter.classList.add("current");
      } else {
        stopTimer();
        endGame();
      }
    } else {
      currentLetter.classList.remove("current");
      currentLetter.classList.add("badLetter");
      index++;
      currentLetter.classList.add("current");
      errorCount++;
      currentLetter = letters[index];
      accuracy(correctCount, errorCount);
      calcSpeed();
      if (currentLetter) {
        currentLetter.classList.add("current");
      } else {
        stopTimer();
        endGame();
      }
    }
    if (gameStart && !timerId) {
      startTimer();
    }
  });
};

function startTimer() {
  let count = 60;
  timerId = setInterval(function () {
    document.getElementById("timer").textContent = "Time : " + count + " sec";
    count--;
    if (count < 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

const accuracy = () => {
  const accuracyLabel = document.querySelector(".accuracyLabel");

  if (correctCount + errorCount === 0) {
    accuracyLabel.textContent = "Accuracy : 0 %";
  } else {
    const rawAccuracy =
      ((correctCount - errorCount) / (correctCount + errorCount)) * 100;
    limitedAccuracy = Math.max(0, parseFloat(rawAccuracy.toFixed(0)));
    accuracyLabel.textContent = `Accuracy : ${limitedAccuracy} %`;
    return limitedAccuracy;
  }
};

const endGame = () => {
  endDisplay.style.display = "flex";
  container.style.display = "none";
  const calcTPM = (endDisplay.innerHTML = `
<h1>🤖 Finish !</h1>
<p id="timer">Your speed : ${(correctCount + errorCount).toFixed(2)} LPM</p>
<p class="speedLabel">Your acuracy : ${limitedAccuracy} %</p>
<div class="btn-container">
<button id="againButton" class="again">Again</button>
</div>`);

  const againButton = document.getElementById("againButton");

  againButton.addEventListener("click", () => {
    location.reload();
  });
};

const calcSpeed = () => {
  const speedLabel = document.querySelector(".speedLabel");
  speedLabel.textContent = `Your speed : ${correctCount + errorCount} LPM`;
};

const againButtons = document.querySelectorAll(".again");
againButtons.forEach((button) => {
  button.addEventListener("click", () => {
    location.reload();
  });
});

init();
