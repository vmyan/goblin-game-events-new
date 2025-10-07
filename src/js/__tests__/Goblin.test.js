import Goblin from "../Goblin.js";

describe("Goblin class", () => {
  let container, cells, goblin;

  beforeEach(() => {
    container = document.createElement("div");
    cells = Array.from({ length: 4 }, () => {
      const cell = document.createElement("div");
      container.append(cell);
      return cell;
    });
    goblin = new Goblin(cells);
  });

  test("initially hidden", () => {
    expect(goblin.isVisible()).toBe(false);
  });

  test("showInRandomCell displays goblin", () => {
    goblin.showInRandomCell();
    expect(goblin.isVisible()).toBe(true);
    expect(cells.some(cell => cell.contains(goblin.img))).toBe(true);
  });

  test("hide hides goblin", () => {
    goblin.showInRandomCell();
    goblin.hide();
    expect(goblin.isVisible()).toBe(false);
  });
});
