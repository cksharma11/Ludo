const Game = require("../model/game");
const TurnManager = require("../model/turn_manager");
const dice = require("../model/dice");
const Player = require("../model/player");

const toInt = text => +text;
const createGameId = () => 1;
const getGameId = req => req.cookies.gameId;
const getActiveGame = req => req.app.activeGames[getGameId(req)].game;

const colors = ["green", "yellow", "blue", "red"];

const setCookie = function(res, gameId, player) {
  const cookie = Date.now();
  res.cookie("playerId", cookie);
  res.cookie("gameId", gameId);
  res.cookie("playerName", player);
  res.app.cookies[cookie] = player;
};

const createGame = (req, res) => {
  const hostname = req.body.hostname;
  const numberOfPlayers = toInt(req.body.numberOfPlayers);
  const gameId = createGameId();
  req.app.activeGames[gameId] = {};
  req.app.activeGames[gameId].players = [];
  req.app.activeGames[gameId].players.push(new Player(hostname, colors.pop()));

  setCookie(res, gameId, hostname);
  res.redirect("/waiting_page.html");
};

const joinGame = (req, res) => {
  console.log(req.body);
  const playerName = req.body.name;
  const gameId = req.body.gameId;
  req.app.activeGames[gameId].players.push(new Player(playerName, colors.pop()));

  setCookie(res, gameId, playerName);
  res.redirect("/waiting_page.html");
};

const startGame = (req, res) => {
  const gameId = req.cookies.gameId;
  const players = req.app.activeGames[gameId].players;
  const turnManager = new TurnManager(players);
  const bindedDice = dice.bind(null, Math.random);
  req.app.activeGames[gameId].game = new Game(players, bindedDice, turnManager);
  res.redirect("/home");
};

const getGame = async (req, res) => {
  res.send(JSON.stringify(getActiveGame(req)));
};

const rollDice = (req, res) => {
  const game = getActiveGame(req);
  game.rollDice();
  getGame(req, res);
};

module.exports = {
  getGame,
  createGame,
  startGame,
  joinGame,
  rollDice
};
