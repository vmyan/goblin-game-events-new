import goblinImg from '../assets/goblin.png';

export default class Goblin {
  constructor(cells) {
    this.cells = cells;
    this.img = document.createElement('img');
    this.img.src = goblinImg;
    this.img.className = 'goblin';
    this.img.style.position = 'absolute';
    this.img.style.display = 'none';
    this.currentCell = null;
    // Добавляем в body временно — потом будем перемещать в ячейки
    document.body.appendChild(this.img);
  }

  showInRandomCell() {
    const availableCells = this.cells.filter(cell => cell !== this.currentCell);
    const newCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    this.currentCell = newCell;
    newCell.appendChild(this.img);
    this.img.style.display = 'block';
  }

  hide() {
    if (this.img.parentElement) {
      this.img.style.display = 'none';
    }
  }

  isVisible() {
    return this.img.style.display !== 'none';
  }
}
