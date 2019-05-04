const Game = require("../model/game");
const TurnManager = require("../model/turn_manager");
const dice = require("../model/dice");
const Player = require("../model/player");

const getGame = async (req, res) => {
  const players = [
    new Player("Ankit", "red"),
    new Player("Chandan", "green"),
    new Player("Dheeraj", "yellow"),
    new Player("Gaurav", "blue")
  ];
  const turnManager = new TurnManager(players);
  res.send(new Game(players, dice, turnManager));
};

module.exports = {
  getGame
};
