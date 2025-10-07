export default class Score {
  constructor(maxMisses = 5) {
    this.points = 0;
    this.misses = 0;
    this.maxMisses = maxMisses;
  }

  hit() {
    this.points++;
  }

  miss() {
    this.misses++;
  }

  isGameOver() {
    return this.misses >= this.maxMisses;
  }
}
