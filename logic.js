const gameBoard = document.querySelector(".game");
const scoreContainer = document.querySelector(".scoreContainer");

const squareCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (value of squareCount) {
  const square = document.createElement("div");
  square.setAttribute("class", "square");
  square.setAttribute("id", value);
  gameBoard.appendChild(square);
}

function moleMovement() {
  const allSquares = document.querySelectorAll(".square");
  allSquares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomIndex = Math.floor(Math.random() * 10);
  let randomSquare = allSquares[randomIndex];

  randomSquare.classList.add("mole");
}

setInterval(moleMovement, 800);
