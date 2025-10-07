import "./style.css";
import Game from "./js/Game.js";

const GRID_SIZE = 16;
const gameBoard = document.createElement("div");
gameBoard.className = "game-board";
document.body.append(gameBoard);

for (let i = 0; i < GRID_SIZE; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  gameBoard.append(cell);
}

const scoreboard = document.createElement("div");
scoreboard.className = "scoreboard";
scoreboard.innerHTML = `
  <div>Попадания: <span id="hits">0</span></div>
  <div>Промахи: <span id="misses">0</span></div>
  <div id="game-over-message" class="game-over-message">Игра окончена!</div>
  <button id="restart-btn">Играть снова</button>
`;
document.body.append(scoreboard);

document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.reload();
});

new Game(gameBoard, {
  onGameOver: () => {},
  onScoreUpdate: ({ hits, misses }) => {
    document.getElementById("hits").textContent = hits;
    document.getElementById("misses").textContent = misses;
  }
});
