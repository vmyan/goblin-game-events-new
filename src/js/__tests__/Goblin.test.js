import Goblin from "../Goblin.js";

describe("Goblin", () => {
  let cells;
  let goblin;

  beforeEach(() => {
    cells = Array.from({ length: 4 }, () => document.createElement("div"));
    goblin = new Goblin(cells);
  });

  test("появляется в одной из ячеек", () => {
    goblin.showInRandomCell();
    const img = goblin.img;
    expect(img).not.toBeNull();
    expect(cells.some(cell => cell.contains(img))).toBe(true);
  });

  test("исчезает после hide()", () => {
    goblin.showInRandomCell();
    goblin.hide();
    expect(goblin.img).toBeNull();
    expect(cells.every(cell => cell.querySelector("img") === null)).toBe(true);
  });

  test("isVisible возвращает корректное значение", () => {
    expect(goblin.isVisible()).toBe(false);
    goblin.showInRandomCell();
    expect(goblin.isVisible()).toBe(true);
    goblin.hide();
    expect(goblin.isVisible()).toBe(false);
  });
});
