const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const app = express();

const PORT = process.env.PORT || 8080;
const { getGame, createGame, startGame, joinGame, rollDice } = require("./handler/handler");

app.activeGames = {};
app.cookies = {};

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.set("views", __dirname + "/view");
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/view"));
app.use(logger);

app.post("/createGame", createGame);
app.post("/startGame", startGame);
app.post("/joinGame", joinGame);
app.post("/rollDice", rollDice)

app.get("/game", getGame);
app.get("/home", (req, res) => {
  res.render("game_page.html");
});

app.listen(PORT, () => console.log("listning on ", PORT));
