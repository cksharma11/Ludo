const Game = require("../model/game");
const TurnManager = require("../model/turn_manager");
const dice = require("../model/dice");
const Player = require("../model/player");

const getGame = async (req, res) => {
  const players = [new Player("Ankit", "red")];
  const turnManager = new TurnManager(players);
  res.send(new Game(players, dice, turnManager));
};

module.exports = {
  getGame
};
