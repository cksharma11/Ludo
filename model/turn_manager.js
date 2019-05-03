class TurnManager {
  constructor(players) {
    this.players = players;
    this.currentPlayerIndex = 0;
  }

  updateTurn() {
    if (this.currentPlayerIndex < 3) {
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
