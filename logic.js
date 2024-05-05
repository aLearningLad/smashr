const gameBoard = document.querySelector(".game");
const scoreContainer = document.querySelector(".scoreContainer");
let randomIndex;
const currentScore = document.querySelector(".currentScore");
let liveScore = 0;
let timer;
const clock = document.querySelector(".clock");
let playing = true;
let time = 25;

const squareCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (value of squareCount) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.setAttribute("id", value);
  gameBoard.appendChild(square);
}

const allSquares = document.querySelectorAll(".square");

function moleMovement() {
  allSquares.forEach((square) => {
    square.classList.remove("mole");
  });

  randomIndex = Math.floor(Math.random() * 10);
  let randomSquare = allSquares[randomIndex];

  randomSquare.classList.add("mole");
}

function smash(id) {
  if (id === allSquares[randomIndex].id) {
    liveScore += 1;
    currentScore.innerHTML = `Your current score is ${liveScore}`;
  } else {
    if (liveScore > 0) {
      liveScore -= 1;
      currentScore.innerHTML = `Your current score is ${liveScore}`;

      return;
    }
    liveScore = 0;
    currentScore.innerHTML = `Your current score is ${liveScore}`;
    alert(`Pick your game up! You're already at zero!`);
  }
}

allSquares.forEach((square) =>
  square.addEventListener("mousedown", () => {
    smash(square.id);
  })
);

const intervalId = setInterval(moleMovement, 1500);

const masterIntervalId = setInterval(() => {
  if (time > 0) {
    time -= 1;
    clock.innerHTML = `Time remaining: ${time}`;
  } else if (time === 0) {
    alert(`Game's up! You scored ${liveScore}`);
    clearInterval(masterIntervalId);
    clearInterval(intervalId);
    clock.innerHTML = "Time's up! Reload page to play again";
  }
}, 1000);

// ADD LEVELS ====>>> LEVEL INCREASES REDUCE AMOUNT OF TIME, AND MOLE FLASHES QUICKER AND QUICKER
