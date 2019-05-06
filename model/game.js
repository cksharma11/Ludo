class Game {
  constructor(players, dice, turnManager) {
    this.players = players;
    this.dice = dice;
    this.turnManager = turnManager;
    this.diceValue = 1;
    this.lastUpdated = Date.now();
  }

  updateLastUpdateTime() {
    this.lastUpdated = Date.now();
  }

  getCurrentPlayer() {
    return this.turnManager.getCurrentPlayer();
  }

  rollDice() {
    this.updateLastUpdateTime();
    this.diceValue = this.dice();
  }
}

module.exports = Game;
