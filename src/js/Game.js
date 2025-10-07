import Goblin from "./Goblin.js";

export default class Game {
  constructor(board, { onGameOver, onScoreUpdate }) {
    this.board = board;
    this.cells = Array.from(board.children);
    this.goblin = new Goblin(this.cells);
    this.hits = 0;
    this.misses = 0;
    this.maxMisses = 5;
    this.onGameOver = onGameOver;
    this.onScoreUpdate = onScoreUpdate;

    this.timeoutId = null; 

    this.start();
  }

  start() {
    this.nextGoblin();
  }

  nextGoblin() {
    if (this.misses >= this.maxMisses) {
    this.gameOver();
    return;
  }

    clearTimeout(this.timeoutId);

    this.goblin.showInRandomCell();

    const goblinElement = this.goblin.img;

    const goblinClickHandler = () => {
      clearTimeout(this.timeoutId);
      goblinElement.removeEventListener("click", goblinClickHandler);

      this.hits++;
      this.onScoreUpdate?.({ hits: this.hits, misses: this.misses });

      this.goblin.hide();
      this.nextGoblin(); 
    };

    goblinElement.addEventListener("click", goblinClickHandler);

    this.timeoutId = setTimeout(() => {
      goblinElement.removeEventListener("click", goblinClickHandler);
      this.goblin.hide();
      this.misses++;
      this.onScoreUpdate?.({ hits: this.hits, misses: this.misses });
      this.nextGoblin();
    }, 1000);
  }

gameOver() {
    clearTimeout(this.timeoutId);
    this.onGameOver?.(); 

    const message = document.querySelector(".game-over-message");
    if (message) {
      message.classList.add("show");
    }
  }
}