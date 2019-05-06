const routes = require("../data/routes.json");

class Coins {
  constructor(color) {
    this.color = color;
    this.coins = {
      1: { position: 0, isCleared: false, isActive: false },
      2: { position: 0, isCleared: false, isActive: false },
      3: { position: 0, isCleared: false, isActive: false },
      4: { position: 0, isCleared: false, isActive: false }
    };
    this.route = routes[color];
  }

  moveCoin(coinNumber, newPosition) {
    this.coins[coinNumber].position = newPosition;
  }

  getCoinPosition(coinNumber) {
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

  makeCoinActive(coinNumber) {
    this.coins[coinNumber].isActive = true;
  }

  isActiveCoin(coinNumber) {
    return this.coins[coinNumber].isActive;
  }
}

module.exports = Coins;
