class Coins {
  constructor(color) {
    this.color = color;
    this.coins = {
      1: { position: 0, isCleared: false },
      2: { position: 0, isCleared: false },
      3: { position: 0, isCleared: false },
      4: { position: 0, isCleared: false }
    };
  }

  moveCoin(coinNumber, newPosition) {
    this.coins[coinNumber].position = newPosition;
  }

  getPositionOfCoin(coinNumber) {
    return this.coins[coinNumber].position;
  }

  resetPosition(coinNumber) {
    this.coins[coinNumber].position = 0;
  }

  clear(coinNumber) {
    this.coins[coinNumber].isCleared = true;
  }

  isClearedCoin(coinNumber) {
    return this.coins[coinNumber].isCleared;
  }
}

module.exports = Coins;
