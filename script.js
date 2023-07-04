const tiles = document.querySelectorAll(".tile");
console.log(tiles);
let currentPlayer = "X";
let gameEnded = false;
let finale = document.getElementById("text");
const startButton = document.getElementById("startgame");
console.log(startButton);
startButton.addEventListener("click", startNewGame);
const winningCombinations = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
];

function handletileClick() {
    if (gameEnded) return;
    if (this.textContent !== "") return;

    this.textContent = currentPlayer;

    if (checkWinCondition()) {
        gameEnded = true;
        finale.textContent = currentPlayer + " has won the game!";
    } else if (checkDrawCondition()) {
        gameEnded = true;
        finale.textContent = "It's a Draw.";
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    if (xStyles.style.backgroundColor === "white") {
        xStyles.style.backgroundColor = "buttonface";
        oStyles.style.backgroundColor = "white";
    } else {
        oStyles.style.backgroundColor = "buttonface";
        xStyles.style.backgroundColor = "white";
    }
}

function checkWinCondition() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            tiles[a].textContent === currentPlayer &&
            tiles[b].textContent === currentPlayer &&
            tiles[c].textContent === currentPlayer
        ) {
            return true; // Win condition met
        }
    }
    return false; // No win condition met
}

function checkDrawCondition() {
    for (const tile of tiles) {
        if (tile.textContent === '') {
            return false; // At least one tile is empty, game is not a draw
        }
    }
    return true; // All tiles are filled, game is a draw
}

function startNewGame() {
    gameEnded = false;
    finale.textContent = "";
    currentPlayer = "X";
    xStyles.style.backgroundColor = "white";
    for (i = 0; i < 9; i++) {
        tiles[i].textContent = "";
    }
}

tiles.forEach(tile => tile.addEventListener("click", handletileClick));

// under for styles

let xStyles = document.getElementById("x");
let oStyles = document.getElementById("o");