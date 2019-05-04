class Game {
  constructor(players, dice, turnManager) {
    this.players = players;
    this.dice = dice;
    this.turnManager = turnManager;
  }

  getCurrentPlayer() {
    return this.turnManager.getCurrentPlayer();
  }

  rollDice() {
    return this.dice();
  }
}

module.exports = Game;
