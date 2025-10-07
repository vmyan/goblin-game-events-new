import goblinImg from "../assets/goblin.png";

export default class Goblin {
  constructor(cells) {
    this.cells = cells;
    this.img = null;
    this.lastIndex = null;
  }

  showInRandomCell() {
    if (!this.cells || this.cells.length === 0) return;

    let index;
    do {
      index = Math.floor(Math.random() * this.cells.length);
    } while (index === this.lastIndex && this.cells.length > 1);

    this.lastIndex = index;
    const cell = this.cells[index];

    this.img = document.createElement("img");
    this.img.src = goblinImg;
    this.img.alt = "Гоблин";
    this.img.classList.add("goblin");

    cell.append(this.img);
  }

  hide() {
    if (this.img && this.img.parentElement) {
      this.img.remove(); 
      this.img = null;
    }
  }

  isVisible() {
    return !!this.img;
  }
}
