import Score from "../Score.js";

describe("Score", () => {
  let score;

  beforeEach(() => {
    score = new Score(3);
  });

  test("hit увеличивает очки", () => {
    expect(score.points).toBe(0);
    score.hit();
    expect(score.points).toBe(1);
  });

  test("miss увеличивает промахи", () => {
    expect(score.misses).toBe(0);
    score.miss();
    expect(score.misses).toBe(1);
  });

  test("isGameOver возвращает true при превышении maxMisses", () => {
    expect(score.isGameOver()).toBe(false);
    score.miss();
    score.miss();
    score.miss();
    expect(score.isGameOver()).toBe(true);
  });
});
