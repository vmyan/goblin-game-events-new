import Score from "../Score.js";

describe("Score class", () => {
  let score;

  beforeEach(() => {
    score = new Score(5); // maxMisses = 5
  });

  test("initial points and misses are zero", () => {
    expect(score.points).toBe(0);
    expect(score.misses).toBe(0);
  });

  test("hit increments points", () => {
    score.hit();
    expect(score.points).toBe(1);
  });

  test("miss increments misses", () => {
    score.miss();
    expect(score.misses).toBe(1);
  });

  test("isGameOver returns true after max misses", () => {
    for (let i = 0; i < 5; i++) score.miss();
    expect(score.isGameOver()).toBe(true);
  });
});
