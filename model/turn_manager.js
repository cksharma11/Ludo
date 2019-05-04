class TurnManager {
  constructor(players) {
    this.players = players;
    this.currentPlayerIndex = 0;
  }

  updateTurn() {
    if (this.currentPlayerIndex < this.players.length - 1) {
      this.currentPlayerIndex++;
      return;
    }
    this.currentPlayerIndex = 0;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }
}

module.exports = TurnManager;
