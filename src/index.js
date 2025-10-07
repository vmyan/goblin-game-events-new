import "./style.css";
import Game from "./js/Game.js";
import hammerImg from "./assets/hammer.png";

// Применяем кастомный курсор
document.body.style.cursor = `url(${hammerImg}) 16 16, auto`;

// Создаём контейнер игрового поля
const GRID_SIZE = 16;
const gameBoard = document.createElement("div");
gameBoard.className = "game-board";
document.body.append(gameBoard);

// Создаём ячейки
for (let i = 0; i < GRID_SIZE; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  gameBoard.append(cell);
}

// Счётчик и сообщение об окончании игры
const scoreboard = document.createElement("div");
scoreboard.className = "scoreboard";
scoreboard.innerHTML = `
  <div>Попадания: <span id="hits">0</span></div>
  <div>Промахи: <span id="misses">0</span></div>
  <div id="game-over-message" class="game-over-message">Игра окончена!</div>
  <button id="restart-btn">Играть снова</button>
`;
document.body.append(scoreboard);

// Перезапуск игры
document.getElementById("restart-btn").addEventListener("click", () => {
  window.location.reload();
});

// Создаём и запускаем игру
new Game(gameBoard, {
  onGameOver: () => {
    document.getElementById("game-over-message").classList.add("show");
  },
  onScoreUpdate: ({ hits, misses }) => {
    document.getElementById("hits").textContent = hits;
    document.getElementById("misses").textContent = misses;
  }
});
