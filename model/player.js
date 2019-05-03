const Coins = require("./coins");

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.coins = new Coins(color);
  }

  makeCoinActive(coinNumber) {
    this.coins.makeCoinActive(coinNumber);
  }

  moveCoin(coinNumber, move) {
    this.coins.moveCoin(coinNumber, move);
  }

  resetCoinPosition(coinNumber) {
    this.coins.resetPosition(coinNumber);
  }

  clearCoin(coinNumber) {
    this.coins.clear(coinNumber);
  }
}

module.exports = Player;
