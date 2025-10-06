import Goblin from './Goblin.js';
import Score from './Score.js';

export default class Game {
  constructor(container) {
    this.container = container;
    this.cells = Array.from(this.container.querySelectorAll('.cell'));
    this.goblin = new Goblin(this.cells);
    this.score = new Score();

    this.createScoreBoard();
    this.createCursor();
    this.setupClick();
    this.start();
  }

  createScoreBoard() {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.classList.add('score');
    document.body.appendChild(this.scoreBoard);
    this.updateScore();
  }

  updateScore() {
    this.scoreBoard.textContent = `Score: ${this.score.points} | Missed: ${this.score.misses}`;
  }

  createCursor() {
    this.cursor = document.createElement('div');
    this.cursor.classList.add('hammer');
    this.cursor.textContent = '🛠️';
    document.body.appendChild(this.cursor);

    document.addEventListener('mousemove', e => {
      this.cursor.style.left = `${e.pageX}px`;
      this.cursor.style.top = `${e.pageY}px`;
    });
  }

  setupClick() {
    this.container.addEventListener('click', e => {
      if (this.goblin.isVisible() && this.goblin.img.parentElement.contains(e.target)) {
        this.score.hit();
        this.goblin.hide();
        this.updateScore();
      }
    });
  }

  start() {
  const appearGoblin = () => {
    if (this.score.isGameOver()) {
      alert(`Game Over! Your score: ${this.score.points}`);
      return;
    }

    this.goblin.showInRandomCell();

    this.hideTimeout = setTimeout(() => {
      if (this.goblin.isVisible()) {
        this.goblin.hide();
        this.score.miss();
        this.updateScore();
      }
      scheduleNext(); // планируем следующее появление
    }, 1000);
  };

  const scheduleNext = () => {
    this.interval = setTimeout(appearGoblin, 1000);
  };

  scheduleNext(); // стартуем игру
}
}
