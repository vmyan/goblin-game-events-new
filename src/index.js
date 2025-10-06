import './style.css';
import Game from './js/Game.js';

const gameBoard = document.createElement('div');
gameBoard.className = 'game-board';
document.body.appendChild(gameBoard);

// Создаём поле 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gameBoard.appendChild(cell);
}

new Game(gameBoard);
